import * as THREE from 'three'
import { ctx, resetCtx, setCenter, G } from './helpers.js'

/* ─────────────────────────────────────────────────────────────
 * 단층 전용 로컬 헬퍼 — 원본 HTML의 구현·수치 그대로.
 * 복층용 공용 헬퍼(파스텔 윤곽선·팔레트·복층 스케일 디테일)를 쓰지 않아
 * 단층 씬의 모델링 톤이 원본과 동일하게 유지된다.
 * ──────────────────────────────────────────────────────────── */
const CX = 500, CZ = 250

function V(x, y, z) { return new THREE.Vector3(x - CX, z, y - CZ) }
function dkC(hex) { const c = new THREE.Color(hex); c.multiplyScalar(0.9); return c }
function lam(hex, op) {
  const m = new THREE.MeshLambertMaterial({ color: new THREE.Color(hex) })
  if (op !== undefined) { m.transparent = true; m.opacity = op }
  m.userData = { baseOp: op === undefined ? 1 : op }
  return m
}
function addEdges(g, geo, mesh, hex) {
  const ls = new THREE.LineSegments(
    new THREE.EdgesGeometry(geo),
    new THREE.LineBasicMaterial({ color: dkC(hex), transparent: true, opacity: 1 }),
  )
  ls.material.userData = { baseOp: 1 }
  ls.position.copy(mesh.position)
  ls.rotation.copy(mesh.rotation)
  ls.userData.isEdge = true
  g.add(ls)
  return ls
}
function box(g, x, y, z, w, d, h, hex, opt) {
  opt = opt || {}
  const geo = new THREE.BoxGeometry(w, h, d)
  const m = new THREE.Mesh(geo, lam(hex, opt.op))
  m.position.set(x + w / 2 - CX, z + h / 2, y + d / 2 - CZ)
  if (opt.ry) m.rotation.y = opt.ry
  g.add(m)
  ctx.pickables.push(m)
  if (!opt.noedge) addEdges(g, geo, m, opt.edge || hex)
  return m
}
function topSurface(g, x, y, z, w, d, hex, op) {
  const mat = new THREE.MeshBasicMaterial({
    color: new THREE.Color(hex), side: THREE.DoubleSide,
    transparent: op !== undefined, opacity: op === undefined ? 1 : op,
  })
  mat.userData = { baseOp: op === undefined ? 1 : op }
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat)
  m.rotation.x = -Math.PI / 2
  m.position.set(x + w / 2 - CX, z, y + d / 2 - CZ)
  m.userData.floorTop = true
  g.add(m)
  return m
}
function gradientGroundSurface(g, x, y, z, w, d, hex) {
  const mat = new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Color(hex) }, uAspect: { value: w / d } },
    vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
    fragmentShader:
      'uniform vec3 uColor;uniform float uAspect;varying vec2 vUv;void main(){vec2 p=(vUv-0.5)*vec2(uAspect,1.0);float radius=0.045;vec2 q=abs(p)-(vec2(uAspect*0.5,0.5)-vec2(radius));float sd=length(max(q,0.0))+min(max(q.x,q.y),0.0)-radius;float inset=max(0.0,-sd);float edgeFade=smoothstep(0.0,0.10,inset);gl_FragColor=vec4(uColor,edgeFade*0.54);}',
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
  })
  mat.userData = { baseOp: 1 }
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat)
  m.rotation.x = -Math.PI / 2
  m.position.set(x + w / 2 - CX, z, y + d / 2 - CZ)
  m.renderOrder = -10
  m.userData.floorTop = true
  m.userData.groundSurface = true
  g.add(m)
  return m
}
function cylY(g, x, y, z, r, h, hex, opt) {
  opt = opt || {}
  const geo = new THREE.CylinderGeometry(opt.rTop !== undefined ? opt.rTop : r, r, h, opt.seg || 18)
  const m = new THREE.Mesh(geo, lam(hex, opt.op))
  m.position.set(x - CX, z + h / 2, y - CZ)
  g.add(m)
  ctx.pickables.push(m)
  return m
}
function cylDir(g, p1, p2, r, hex, opt) {
  opt = opt || {}
  const a = V(p1[0], p1[1], p1[2])
  const b = V(p2[0], p2[1], p2[2])
  const d = new THREE.Vector3().subVectors(b, a)
  const len = d.length()
  const geo = new THREE.CylinderGeometry(r, r, len, opt.seg || 10)
  const m = new THREE.Mesh(geo, lam(hex, opt.op))
  m.position.copy(a).add(b).multiplyScalar(0.5)
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize())
  g.add(m)
  if (opt.pick !== false) ctx.pickables.push(m)
  return m
}
function flowTypeFor(hex) {
  const c = (hex || '').toUpperCase()
  if (c === '#E2793B' || c === '#EF9D76') return 'heat'
  if (c === '#0FA396' || c === '#57C7BD') return 'tcs'
  if (c === '#EBB410' || c === '#D9A312' || c === '#F0C744') return 'power'
  if (c === '#9CC6E4') return 'condensate'
  if (c === '#3E9CD6' || c === '#42AEE8') return 'chilled'
  return null
}
function flowTemperaturePalette(key) {
  if (key === 'condensate') return ['#4E98C5', '#86BDD8']
  if (key === 'chilled') return ['#197EB8', '#4AACC9']
  if (key === 'tcs') return ['#078A7E', '#D47C3E']
  if (key === 'heat') return ['#D87631', '#B9472C']
  return null
}
function deepenFlowPipeColor(color) {
  const hsl = { h: 0, s: 0, l: 0 }
  color.getHSL(hsl)
  color.setHSL(hsl.h, Math.min(1, hsl.s * 1.06 + 0.015), Math.max(0.12, hsl.l * 0.78))
  return color
}
function applyTubeGradient(mesh, startHex, endHex, u0, u1) {
  const pos = mesh.geometry.attributes.position
  const count = pos.count
  const colors = new Float32Array(count * 3)
  mesh.geometry.computeBoundingBox()
  const minY = mesh.geometry.boundingBox.min.y
  const maxY = mesh.geometry.boundingBox.max.y
  const span = Math.max(0.001, maxY - minY)
  const c0 = new THREE.Color(startHex)
  const c1 = new THREE.Color(endHex)
  const c = new THREE.Color()
  for (let i = 0; i < count; i++) {
    const local = (pos.getY(i) - minY) / span
    const u = u0 + (u1 - u0) * local
    c.copy(c0).lerp(c1, Math.max(0, Math.min(1, u)))
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b
  }
  mesh.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  mesh.material.vertexColors = true
  mesh.material.color.set(0xffffff)
  mesh.material.userData.flowGradient = true
  mesh.material.needsUpdate = true
}
function pipe(g, pts, hex, r, flow) {
  r = r || 2.2
  const vs = []
  const parts = []
  const key = flowTypeFor(hex)
  for (let i = 0; i < pts.length; i++) vs.push(V(pts[i][0], pts[i][1], pts[i][2]))
  const tempPalette = flowTemperaturePalette(key)
  const segmentCount = Math.max(1, pts.length - 1)
  for (let j = 0; j < pts.length - 1; j++) {
    const part = cylDir(g, pts[j], pts[j + 1], r, hex, { seg: 10 })
    if (tempPalette) applyTubeGradient(part, tempPalette[0], tempPalette[1], j / segmentCount, (j + 1) / segmentCount)
    else if (key) deepenFlowPipeColor(part.material.color)
    part.userData.flowPart = true
    parts.push(part)
  }
  for (let k = 1; k < pts.length - 1; k++) {
    const jointColor = tempPalette
      ? new THREE.Color(tempPalette[0]).lerp(new THREE.Color(tempPalette[1]), k / segmentCount)
      : new THREE.Color(hex)
    if (key && !tempPalette) deepenFlowPipeColor(jointColor)
    const s = new THREE.Mesh(new THREE.SphereGeometry(r * 1.12, 10, 10), lam('#ffffff'))
    s.material.color.copy(jointColor)
    s.position.copy(vs[k])
    s.userData.flowPart = true
    g.add(s)
    parts.push(s)
  }
  if (!key) return
  const lens = [0]
  let tot = 0
  for (let q = 1; q < vs.length; q++) { tot += vs[q].distanceTo(vs[q - 1]); lens.push(tot) }
  const dots = []
  if (flow !== false || key === 'tcs') {
    const packetCount = Math.max(4, Math.round(tot / 86))
    const trailOpacity = [1, 0.62, 0.34, 0.14]
    for (let t = 0; t < packetCount; t++) {
      for (let h = 0; h < trailOpacity.length; h++) {
        const dotOp = trailOpacity[h]
        const dotMat = new THREE.MeshLambertMaterial({
          color: new THREE.Color(hex), emissive: new THREE.Color(hex), emissiveIntensity: 0.55,
          transparent: true, opacity: dotOp, depthWrite: false, depthTest: false,
        })
        dotMat.userData = { baseOp: dotOp, flowBaseColor: new THREE.Color(hex) }
        const dotSize = Math.max(1.35, r * (0.92 - h * 0.08))
        const dm = new THREE.Mesh(new THREE.SphereGeometry(dotSize, 10, 10), dotMat)
        dm.renderOrder = 30
        dm.userData.flowPart = true
        dm.userData.flowParticle = true
        dm.userData.flowU = t / packetCount - h * 0.0085
        g.add(dm)
        dots.push(dm)
      }
    }
  }
  ctx.flows.push({ vs, lens, tot, dots, parts, key, off: Math.random(), enabled: true })
}
function fanTop(g, x, y, z, r, hexRing) {
  cylY(g, x, y, z, r + 1.4, 2.4, hexRing || '#8A8577', { seg: 20 })
  cylY(g, x, y, z + 1.2, r * 0.92, 1.2, '#F3F4F6', { seg: 20 })
  const b1 = box(g, x - r * 0.85, y - 1.4, z + 2.2, r * 1.7, 2.8, 1.1, '#6B7280', { noedge: true })
  b1.rotation.y = 0.5
  const b2 = box(g, x - r * 0.85, y - 1.4, z + 2.2, r * 1.7, 2.8, 1.1, '#6B7280', { noedge: true })
  b2.rotation.y = -1.05
  cylY(g, x, y, z + 2.0, 1.6, 2.2, '#4B5563', { seg: 10 })
}
function fanFront(g, x, y, z, r, axis) {
  const parts = [
    new THREE.Mesh(new THREE.CylinderGeometry(r + 1.2, r + 1.2, 2.2, 20), lam('#5B7B95')),
    new THREE.Mesh(new THREE.CylinderGeometry(r * 0.9, r * 0.9, 1.1, 20), lam('#EDF1F5')),
    new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 2.6, 10), lam('#41586C')),
    new THREE.Mesh(new THREE.BoxGeometry(r * 1.65, 1.4, 2.4), lam('#41586C')),
    new THREE.Mesh(new THREE.BoxGeometry(r * 1.65, 1.4, 2.4), lam('#41586C')),
  ]
  for (let i = 0; i < parts.length; i++) {
    const m = parts[i]
    if (axis === 'z') m.rotation.x = Math.PI / 2
    else m.rotation.z = Math.PI / 2
    m.position.copy(V(x, y, z))
    g.add(m)
  }
  if (axis === 'z') { parts[3].rotation.y = 0.6; parts[4].rotation.y = -0.9 }
  else { parts[3].rotation.x = 0.6; parts[4].rotation.x = -0.9 }
}
function ladder(g, x, y, z, h, hex) {
  hex = hex || '#9AA3AD'
  box(g, x - 2.4, y, z, 1.1, 1.1, h, hex, { noedge: true })
  box(g, x + 1.3, y, z, 1.1, 1.1, h, hex, { noedge: true })
  for (let i = 1; i < h / 9; i++) box(g, x - 2.4, y, z + i * 9, 4.8, 1.0, 1.0, hex, { noedge: true })
}
function wall(x, y, z, w, d, h, nx, nz, interior) {
  const g = G(null, null)
  const hex = '#EDEFF2'
  const geo = new THREE.BoxGeometry(w, h, d)
  const m = new THREE.Mesh(geo, lam(hex, interior ? 0.45 : 0.95))
  m.material.depthWrite = !interior
  m.position.set(x + w / 2 - CX, z + h / 2, y + d / 2 - CZ)
  g.add(m)
  const edgeColor = interior ? '#DEE2E5' : '#C5CBD0'
  const e = new THREE.LineSegments(
    new THREE.EdgesGeometry(geo),
    new THREE.LineBasicMaterial({ color: new THREE.Color(edgeColor), transparent: true, opacity: interior ? 0.58 : 0.78, depthTest: true, depthWrite: false }),
  )
  e.material.userData = { baseOp: interior ? 0.58 : 0.78 }
  e.position.copy(m.position)
  e.userData.isEdge = true
  g.add(e)
  if (!interior) ctx.wallsFade.push({ m, e, n: new THREE.Vector3(nx, 0, nz) })
  return m
}

/**
 * 단층(單層) 버전 — 원본(인터랙티브 인프라 용어사전 HTML)의 시설 모델을
 * 좌표·치수·팔레트·색 보정까지 그대로 포팅. 1000×500 대지에 전력실·냉각
 * 플랜트·데이터홀·네트워크실·옥외 야드가 한 층으로 펼쳐진 구성.
 */

/* 원본 팔레트 (단층 전용 — 복층 파스텔 P와 별개) */
const P = {
  ground: '#DDE1E4', slab: '#D3D8DC', roof: '#D9DEE2',
  groundTop: '#EAECED', slabTop: '#E8EAEC', roofTop: '#E9EBED',
  hall: '#DEE4E9', plant: '#ECECE8', office: '#EFEDEA',
  cream: '#F0EBE1', cream2: '#E7E0D2',
  rackBody: '#3F2A34', rackDoor: '#5C3B49', tray: '#93AF7B',
  blue: '#A9BFD3', blueD: '#7E9DB8', cdu: '#7FA7D8', teal: '#8FD0C2',
  yel: '#EDBE4B', yelD: '#D9A32E', purp: '#ACA2DA',
  gray: '#CBD1D7', steel: '#B9C2CA', wood: '#C8A87E', rose: '#D8ACA2',
}

/* 라벨 앵커 (원본 그대로) */
export const LABELS_SINGLE = [
  ['cooling-tower', [130, 20, 226]], ['dry-cooler', [106, 148, 210]], ['crah', [354, 18, 79]],
  ['gpu-rack', [485, 206, 91]], ['busway', [620, 178, 126]], ['network', [937, 36, 73]],
  ['storage', [893, 36, 73]], ['bms', [820, 11, 86]], ['switchgear', [43, 26, 75]],
  ['ups', [212, 26, 75]], ['battery', [52, 132, 57]], ['fws', [60, 150, 188]],
  ['chiller', [80, 252, 39]], ['tes', [258, 300, 97]], ['pumps', [168, 290, 18]],
  ['water-treatment', [221, 352, 36]], ['manifold', [485, 300, 96]], ['containment', [710, 384, 88]],
  ['cold-plate', [665, 346, 52]], ['tcs', [755, 452, 84]], ['cdu', [485, 464, 52]],
  ['pdu', [843, 464, 72]], ['transformer', [1068, 246, 58]], ['generator', [1118, 348, 54]],
]

export function buildFacilitySingle(scene) {
  resetCtx(scene)
  setCenter(500, 250)

  /* ============ 지형 / 건물 ============ */
  ;(function () {
    const g = G(null, null)
    box(g, 0, 0, 0, 1000, 500, 9, P.slab, { edge: '#969EA6' })
    gradientGroundSurface(g, -140, -118, 0.03, 1440, 738, P.groundTop)
    topSurface(g, 0, 0, 9.03, 1000, 500, P.slabTop)
    box(g, 308, 12, 9, 690, 480, 0.8, P.hall, { noedge: true })
    box(g, 12, 238, 9, 286, 144, 0.8, P.plant, { noedge: true })
    box(g, 12, 390, 9, 286, 102, 0.8, P.office, { noedge: true })
  })()
  /* 외벽 4면 (카메라 방향 자동 페이드) */
  wall(0, 0, 9, 1000, 11, 150, 0, -1, false)
  wall(0, 489, 9, 1000, 11, 150, 0, 1, false)
  wall(0, 11, 9, 11, 478, 150, -1, 0, false)
  wall(989, 11, 9, 11, 478, 150, 1, 0, false)
  /* 내부 칸막이 (반투명) */
  wall(12, 230, 9, 288, 7, 100, 0, 0, true)
  wall(12, 384, 9, 288, 7, 100, 0, 0, true)
  wall(300, 12, 9, 7, 480, 100, 0, 0, true)
  wall(720, 12, 9, 7, 140, 100, 0, 0, true)
  wall(720, 146, 9, 275, 7, 100, 0, 0, true)
  /* 지붕 (상부 시점에서 페이드) — 슬래브 페이드 시스템에 등록 */
  ;(function () {
    const g = G(null, null)
    const geo = new THREE.BoxGeometry(306, 12, 236)
    const m = new THREE.Mesh(geo, lam(P.roof, 0.96))
    m.position.set(153 - 500, 176, 118 - 250)
    g.add(m)
    const e = addEdges(g, geo, m, '#969EA6')
    const top = topSurface(g, 0, 0, 182.03, 306, 236, P.roofTop, 0.96)
    ctx.slabs.push({ m, e, top, zTop: 182, floor: 'roof', baseOp: 0.96, roofTerms: ['switchgear', 'ups', 'battery'] })
  })()

  /* ============ 전력실 (수배전반4·UPS2·배터리2·소화설비) ============ */
  ;(function () {
    const g = G('switchgear', 'power')
    for (let i = 0; i < 4; i++) {
      const x = 26 + i * 40
      box(g, x, 22, 9, 34, 22, 66, P.yel)
      box(g, x + 3, 42.5, 15, 28, 2, 50, '#F6E4AE')
      box(g, x + 6, 44, 54, 10, 1.4, 7, '#3A3F45', { noedge: true })
      box(g, x + 20, 44, 54, 8, 1.4, 7, '#C3542F', { noedge: true })
      for (let s = 0; s < 3; s++) box(g, x + 6, 44, 20 + s * 8, 22, 1.2, 2.2, '#C9A94F', { noedge: true })
    }
  })()
  ;(function () {
    const g = G('ups', 'power')
    for (let i = 0; i < 2; i++) {
      const x = 196 + i * 40
      box(g, x, 22, 9, 32, 22, 66, P.yel)
      box(g, x + 4, 42.5, 52, 24, 2, 12, '#2E3238')
      box(g, x + 6, 44, 56, 9, 1.2, 4, '#57D0A8', { noedge: true })
      for (let s = 0; s < 4; s++) box(g, x + 4, 44, 14 + s * 7, 24, 1.2, 2.4, '#C9A94F', { noedge: true })
    }
  })()
  ;(function () {
    const g = G('battery', 'power')
    for (let i = 0; i < 2; i++) {
      const x = 30 + i * 52
      box(g, x, 120, 9, 44, 24, 48, P.yel)
      for (let s = 0; s < 3; s++) box(g, x + 3, 142.5, 15 + s * 13, 38, 2, 8, '#F6E4AE')
      box(g, x, 142.5, 50, 44, 1.6, 4, '#C3542F', { noedge: true })
    }
    /* 소화 가스 실린더(장식) */
    const d = G(null, null)
    cylY(d, 252, 150, 9, 6.5, 34, '#EDBE4B'); cylY(d, 252, 150, 43, 2.6, 5, '#8A8577')
    cylY(d, 270, 158, 9, 6.5, 34, '#EDBE4B'); cylY(d, 270, 158, 43, 2.6, 5, '#8A8577')
    cylY(d, 260, 174, 9, 6.5, 34, '#EDBE4B'); cylY(d, 260, 174, 43, 2.6, 5, '#8A8577')
  })()

  /* ============ 옥상: 냉각탑3 · 드라이쿨러3 · AHU ============ */
  ;(function () {
    const g = G('cooling-tower', 'cooling')
    function tower(x, y) {
      box(g, x, y, 182, 70, 56, 10, '#DCD3C2')
      box(g, x + 2, y + 2, 192, 66, 52, 30, P.cream2)
      for (let s = 0; s < 4; s++) {
        box(g, x + 4, y + 52.5, 195 + s * 6, 62, 1.6, 2.4, '#C6B89E', { noedge: true })
        box(g, x + 66.5, y + 4, 195 + s * 6, 1.6, 48, 2.4, '#BCAE93', { noedge: true })
      }
      box(g, x, y, 222, 70, 56, 5, P.cream)
      fanTop(g, x + 19, y + 17, 227, 10); fanTop(g, x + 51, y + 17, 227, 10)
      fanTop(g, x + 19, y + 41, 227, 10); fanTop(g, x + 51, y + 41, 227, 10)
      ladder(g, x + 72, y + 28, 182, 44)
    }
    tower(16, 16); tower(96, 16); tower(176, 16)
  })()
  ;(function () {
    const g = G('dry-cooler', 'cooling')
    function dryc(x, y) {
      box(g, x, y, 182, 52, 10, 6, P.steel, { noedge: true })
      const v1 = box(g, x + 4, y + 3, 186, 44, 3, 26, '#E4C7A6'); v1.rotation.x = -0.42
      const v2 = box(g, x + 4, y + 34, 186, 44, 3, 26, '#E4C7A6'); v2.rotation.x = 0.42
      box(g, x + 2, y + 2, 206, 48, 34, 3, P.cream2)
      fanTop(g, x + 14, y + 19, 209, 8.4, '#B08A62'); fanTop(g, x + 38, y + 19, 209, 8.4, '#B08A62')
    }
    dryc(16, 110); dryc(80, 110); dryc(144, 110)
    /* AHU (장식) */
    const d = G(null, null)
    box(d, 232, 30, 182, 48, 38, 18, P.cream2)
    fanTop(d, 256, 49, 200, 10)
    box(d, 234, 120, 182, 42, 32, 14, P.cream2)
    for (let s = 0; s < 3; s++) box(d, 236, 151.5, 185 + s * 4, 38, 1.4, 1.6, '#BCAE93', { noedge: true })
  })()

  /* ============ 냉각 플랜트: 칠러2 · 펌프3 · 수처리 · 축열조 ============ */
  ;(function () {
    const g = G('chiller', 'cooling')
    function chiller(x, y) {
      box(g, x, y, 9, 110, 34, 6, P.steel, { noedge: true })
      cylDir(g, [x + 6, y + 11, 24], [x + 104, y + 11, 24], 8.5, P.blue, { seg: 16 })
      cylDir(g, [x + 6, y + 24, 36], [x + 104, y + 24, 36], 8.5, P.blueD, { seg: 16 })
      cylY(g, x + 34, y + 17, 44, 8, 12, '#DCE6EF')
      cylY(g, x + 70, y + 17, 44, 8, 12, '#DCE6EF')
      pipe(g, [[x + 34, y + 17, 52], [x + 70, y + 17, 52]], '#AEC2D4', 2.2, false)
      box(g, x + 94, y + 8, 14, 12, 3, 26, '#2E3238')
      box(g, x + 95.5, y + 7, 30, 9, 1.2, 5, '#57D0A8', { noedge: true })
    }
    chiller(24, 248); chiller(24, 300)
  })()
  ;(function () {
    const g = G('pumps', 'cooling')
    function pump(x, y) {
      box(g, x - 8, y - 8, 9, 16, 16, 3, P.steel, { noedge: true })
      cylY(g, x, y, 12, 6.5, 7, '#8FA9C0')
      cylY(g, x, y, 19, 5, 13, '#DCE6EF')
      cylY(g, x, y, 32, 5.6, 2, '#8FA9C0')
      pipe(g, [[x, y, 15], [x - 14, y, 15]], '#9FB6CC', 2.4, false)
    }
    pump(168, 262); pump(168, 290); pump(168, 318)
  })()
  ;(function () {
    const g = G('water-treatment', 'cooling')
    box(g, 206, 344, 9, 30, 24, 36, P.teal)
    box(g, 209, 367, 30, 12, 2, 9, '#2E3238')
    cylY(g, 244, 352, 9, 5, 18, '#BFE3DC')
    cylY(g, 244, 366, 9, 5, 18, '#BFE3DC')
    pipe(g, [[236, 356, 30], [244, 352, 20]], '#72B6A8', 1.6, false)
  })()
  ;(function () {
    const g = G('tes', 'cooling')
    cylY(g, 258, 300, 9, 24, 88, '#E7EDF2', { seg: 26 })
    const dome = new THREE.Mesh(new THREE.SphereGeometry(24, 26, 12, 0, Math.PI * 2, 0, Math.PI / 2), lam('#DDE5EB'))
    dome.position.copy(V(258, 300, 97)); g.add(dome); ctx.pickables.push(dome)
    cylY(g, 258, 300, 36, 24.8, 2, '#C5D3DE', { seg: 26 })
    cylY(g, 258, 300, 66, 24.8, 2, '#C5D3DE', { seg: 26 })
    ladder(g, 285, 300, 9, 92)
    box(g, 281, 296, 20, 2, 8, 60, '#9FB6CC', { noedge: true })
  })()

  /* ============ 팬월 6기 ============ */
  ;(function () {
    const g = G('crah', 'cooling')
    for (let i = 0; i < 6; i++) {
      const x = 330 + i * 64
      box(g, x, 16, 9, 48, 20, 70, P.blue)
      box(g, x + 2, 17, 74, 44, 18, 4, '#8FA9C0')
      fanFront(g, x + 13, 37.2, 29, 8, 'z'); fanFront(g, x + 35, 37.2, 29, 8, 'z')
      fanFront(g, x + 13, 37.2, 55, 8, 'z'); fanFront(g, x + 35, 37.2, 55, 8, 'z')
    }
  })()

  /* ============ 네트워크실: 스토리지2 · 네트워크2 · NOC ============ */
  ;(function () {
    const g = G('storage', 'it')
    for (let i = 0; i < 2; i++) {
      const y = 24 + i * 36
      box(g, 880, y, 9, 26, 22, 64, P.purp)
      for (let s = 0; s < 4; s++) box(g, 881.5, y + 21, 17 + s * 13, 23, 1.6, 7, '#CFC8EE')
    }
    const n = G('network', 'it')
    for (let j = 0; j < 2; j++) {
      const y2 = 24 + j * 36
      box(n, 924, y2, 9, 26, 22, 64, P.purp)
      for (let r = 0; r < 3; r++) box(n, 925.5, y2 + 21, 15 + r * 10, 23, 1.6, 4.5, '#5F51A8', { noedge: true })
      box(n, 925.5, y2 + 21, 52, 23, 1.6, 8, '#CFC8EE')
    }
  })()
  ;(function () {
    const g = G('bms', 'mgmt')
    for (let i = 0; i < 3; i++) {
      const m = box(g, 760 + i * 40, 12.5, 72, 36, 2.5, 26, '#33383F')
      m.rotation.y = (i - 1) * 0.14
      box(g, 763 + i * 40, 12, 78, 12, 1.2, 10, i === 0 ? '#7FD8C8' : (i === 1 ? '#F2C94C' : '#E8836A'), { noedge: true, ry: (i - 1) * 0.14 })
      box(g, 779 + i * 40, 12, 76, 14, 1.2, 14, '#8FB4D8', { noedge: true, ry: (i - 1) * 0.14 })
    }
    /* NOC 데스크 (장식) */
    const d = G(null, null)
    box(d, 790, 86, 24, 58, 18, 3, P.wood)
    box(d, 796, 90, 9, 6, 10, 15, P.wood, { noedge: true })
    box(d, 836, 90, 9, 6, 10, 15, P.wood, { noedge: true })
    box(d, 804, 92, 29, 12, 1.4, 8, '#5E7A94'); box(d, 822, 92, 29, 12, 1.4, 8, '#5E7A94')
    cylY(d, 818, 116, 9, 4, 7, '#6B7280'); box(d, 814, 112, 16, 8, 8, 2, '#6B7280', { noedge: true })
  })()

  /* ============ 배관 (냉각 계통) ============ */
  ;(function () {
    const g = G('fws', 'cooling')
    pipe(g, [[60, 252, 30], [60, 252, 145], [60, 240, 145], [60, 240, 188], [60, 64, 188]], '#9CC6E4', 2.6)
    pipe(g, [[92, 304, 30], [92, 304, 140], [92, 55, 140], [615, 55, 140]], '#3E9CD6', 2.6)
    pipe(g, [[354, 55, 140], [354, 36, 140], [354, 36, 79]], '#3E9CD6', 1.9, false)
    pipe(g, [[482, 55, 140], [482, 36, 140], [482, 36, 79]], '#3E9CD6', 1.9, false)
    pipe(g, [[610, 55, 140], [610, 36, 140], [610, 36, 79]], '#3E9CD6', 1.9, false)
    const h = G('fws', 'cooling')
    pipe(h, [[108, 152, 188], [108, 240, 188], [108, 240, 112], [770, 240, 112], [770, 470, 112], [390, 470, 112]], '#E2793B', 2.6)
    const xs = [395, 485, 575, 665, 755]
    for (let i = 0; i < xs.length; i++) pipe(h, [[xs[i], 470, 112], [xs[i], 470, 65]], '#E2793B', 1.9, false)
  })()

  /* ============ 버스웨이 (덕트+탭오프) ============ */
  ;(function () {
    const g = G('busway', 'power')
    box(g, 308, 174, 122, 684, 8, 8, P.yel)
    const xs = [395, 485, 575, 665, 755]
    for (let i = 0; i < xs.length; i++) {
      box(g, xs[i] - 5, 173, 116, 10, 10, 7, P.yelD)
      pipe(g, [[xs[i], 182, 120], [xs[i], 192, 120], [xs[i], 192, 91]], '#EBB410', 1.7, false)
    }
    box(g, 838, 174, 116, 10, 10, 7, P.yelD)
    pipe(g, [[843, 182, 120], [843, 452, 120], [843, 452, 72]], '#EBB410', 2, false)
  })()

  /* ============ GPU 랙 5열 × 7 + 트레이 + 컨테인먼트 ============ */
  const ROWX = [380, 470, 560, 650, 740], ROWY0 = 160, RD = 26, GAP = 7, NR = 7
  ;(function () {
    const g = G('gpu-rack', 'it')
    for (let r = 0; r < ROWX.length; r++) {
      const x = ROWX[r]
      for (let i = 0; i < NR; i++) {
        const y = ROWY0 + i * (RD + GAP)
        box(g, x, y, 9, 30, RD, 78, P.rackBody)
        box(g, x + 2.5, y + RD - 1, 14, 25, 2, 66, P.rackDoor)
        for (let s = 0; s < 3; s++) box(g, x + 4.5, y + RD - 0.5, 22 + s * 18, 21, 1.2, 4, '#C99046', { noedge: true })
        box(g, x + 25, y + RD - 0.4, 74, 2.4, 1.0, 2.4, '#5FE3A8', { noedge: true })
      }
      /* 케이블 트레이(사다리형) */
      const ty0 = ROWY0, tl = NR * (RD + GAP) - GAP
      box(g, x + 3, ty0, 88, 2.2, tl, 3, P.tray, { noedge: true })
      box(g, x + 24.8, ty0, 88, 2.2, tl, 3, P.tray, { noedge: true })
      for (let k = 0; k <= NR; k++) box(g, x + 3, ty0 + Math.min(k * (RD + GAP), tl - 2), 89, 24, 2, 1.4, P.tray, { noedge: true })
    }
  })()
  ;(function () {
    const g = G('containment', 'cooling')
    box(g, 684, 160, 92, 52, 224, 2.5, '#BFD2DE', { op: 0.28 })
    box(g, 684, 382, 56, 52, 2.5, 38, '#BFD2DE', { op: 0.24 })
    box(g, 684, 160, 56, 52, 2.5, 38, '#BFD2DE', { op: 0.24 })
  })()
  ;(function () {
    const g = G('cold-plate', 'cooling')
    box(g, 663, 344, 50, 4, 6, 5, '#0FA396')
    const t = G('tcs', 'cooling'), m = G('manifold', 'cooling')
    for (let r = 0; r < ROWX.length; r++) {
      const x = ROWX[r] + 15
      pipe(t, [[x, 455, 60], [x, 455, 96], [x, 440, 96]], '#0FA396', 1.9)
      pipe(m, [[x, 440, 96], [x, 160, 96]], '#0FA396', 1.9, false)
    }
  })()

  /* ============ CDU 5기 · PDU 2기 ============ */
  ;(function () {
    const g = G('cdu', 'cooling')
    for (let r = 0; r < ROWX.length; r++) {
      const x = ROWX[r]
      box(g, x, 452, 9, 30, 24, 56, P.cdu)
      box(g, x + 3, 475, 50, 12, 1.8, 9, '#2E3238')
      cylDir(g, [x + 8, 478, 22], [x + 8, 483, 22], 2.4, '#0FA396', { seg: 10 })
      cylDir(g, [x + 18, 478, 22], [x + 18, 483, 22], 2.4, '#E2793B', { seg: 10 })
      box(g, x + 4, 475, 32, 9, 1.4, 4, '#5FA0D8', { noedge: true })
    }
  })()
  ;(function () {
    const g = G('pdu', 'power')
    for (let i = 0; i < 2; i++) {
      const x = 830 + i * 40
      box(g, x, 452, 9, 28, 24, 60, P.yel)
      cylDir(g, [x + 8, 476.5, 55], [x + 8, 478.6, 55], 4, '#F6E4AE', { seg: 14 })
      for (let s = 0; s < 3; s++) box(g, x + 4, 475, 20 + s * 9, 20, 1.2, 2.6, '#C9A94F', { noedge: true })
    }
  })()

  /* ============ 옥외 야드: 변압기2 · 발전기3 · 연료탱크 · 철탑 ============ */
  ;(function () {
    const g = G(null, null)
    box(g, 1010, 210, 0, 200, 290, 8, '#DDD8CC')
  })()
  ;(function () {
    const g = G('transformer', 'power')
    function tr(x, y) {
      box(g, x, y, 8, 48, 40, 42, P.yel)
      box(g, x + 10, y + 14, 50, 28, 12, 10, '#E4C25C')
      cylDir(g, [x + 12, y + 20, 64], [x + 40, y + 20, 64], 5, '#E4C25C', { seg: 14 })
      for (let f = 0; f < 4; f++) {
        box(g, x - 4, y + 4 + f * 9, 12, 4, 6, 30, '#D9A32E', { noedge: true })
        box(g, x + 48, y + 4 + f * 9, 12, 4, 6, 30, '#D9A32E', { noedge: true })
      }
      const bx = [x + 9, x + 24, x + 39]
      for (let b = 0; b < 3; b++) {
        cylY(g, bx[b], y + 34, 50, 2.6, 7, '#EDE7D8'); cylY(g, bx[b], y + 34, 57, 2.0, 6, '#EDE7D8')
        const cap = new THREE.Mesh(new THREE.SphereGeometry(2.2, 10, 10), lam('#C9971B'))
        cap.position.copy(V(bx[b], y + 34, 64)); g.add(cap)
      }
      box(g, x + 2, y - 2, 0, 10, 44, 8, '#B7A88C', { noedge: true })
      box(g, x + 36, y - 2, 0, 10, 44, 8, '#B7A88C', { noedge: true })
    }
    tr(1030, 232); tr(1092, 232)
    /* 송전 철탑 + 인입 케이블 */
    const legs = [[1140, 232], [1164, 232], [1140, 254], [1164, 254]]
    for (let l = 0; l < 4; l++) cylDir(g, [legs[l][0], legs[l][1], 0], [1152, 243, 100], 1.4, '#8A9AA8', { seg: 8, pick: false })
    box(g, 1140, 241, 58, 24, 4, 3, '#8A9AA8', { noedge: true })
    box(g, 1136, 241, 80, 32, 4, 3, '#8A9AA8', { noedge: true })
    cylY(g, 1140, 243, 74, 1, 6, '#6B7280'); cylY(g, 1164, 243, 74, 1, 6, '#6B7280')
    const curve = new THREE.QuadraticBezierCurve3(V(1140, 243, 74), V(1105, 246, 50), V(1069, 252, 64))
    const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 16, 0.9, 6, false), lam('#C9A94F'))
    g.add(tube)
  })()
  ;(function () {
    const g = G('generator', 'power')
    function gen(x, y) {
      box(g, x, y, 0, 100, 44, 8, '#B7A88C', { noedge: true })
      box(g, x + 2, y + 1, 8, 22, 42, 48, '#E4B640')
      for (let s = 0; s < 4; s++) box(g, x + 1, y + 5 + s * 9, 14, 1.4, 6, 36, '#B58A1C', { noedge: true })
      box(g, x + 26, y + 4, 8, 42, 36, 36, P.yel)
      cylDir(g, [x + 70, y + 22, 26], [x + 94, y + 22, 26], 13, '#EDBE4B', { seg: 16 })
      cylY(g, x + 94, y + 22, 26, 4, 2, '#C9971B')
      cylDir(g, [x + 30, y + 8, 50], [x + 62, y + 8, 50], 4.5, '#AFB6BD', { seg: 12 })
      pipe(g, [[x + 62, y + 8, 50], [x + 68, y + 8, 50], [x + 68, y + 8, 62]], '#8E8B82', 2.2, false)
      box(g, x + 40, y + 40, 44, 16, 2, 10, '#2E3238')
    }
    gen(1026, 326); gen(1026, 392); gen(1026, 458)
    /* 연료탱크 (수평 새들형) */
    cylDir(g, [1168, 414, 16], [1168, 462, 16], 13, '#E3D6BB', { seg: 16 })
    box(g, 1160, 420, 0, 16, 6, 10, '#B7A88C', { noedge: true })
    box(g, 1160, 452, 0, 16, 6, 10, '#B7A88C', { noedge: true })
    cylY(g, 1168, 430, 29, 2.4, 4, '#B7A88C')
  })()
  /* 급전 케이블 */
  ;(function () {
    const g = G('switchgear', 'power')
    pipe(g, [[1030, 258, 32], [1000, 258, 32], [992, 258, 32], [992, 258, 122], [992, 178, 122]], '#EBB410', 2.2)
    pipe(g, [[1026, 348, 26], [1002, 348, 26], [996, 348, 26], [992, 258, 32]], '#EBB410', 1.7, false)
    pipe(g, [[1026, 412, 26], [1002, 412, 26], [996, 412, 26], [996, 348, 26]], '#EBB410', 1.7, false)
    pipe(g, [[1026, 478, 26], [1002, 478, 26], [996, 478, 26], [996, 412, 26]], '#EBB410', 1.7, false)
  })()

  /* ============ 오피스 · 하역(장식) ============ */
  ;(function () {
    const d = G(null, null)
    box(d, 28, 428, 9, 52, 18, 7, P.rose); box(d, 28, 422, 9, 52, 7, 20, P.rose)
    box(d, 30, 426, 16, 6, 20, 6, P.rose, { noedge: true }); box(d, 72, 426, 16, 6, 20, 6, P.rose, { noedge: true })
    box(d, 110, 412, 22, 42, 18, 3, P.wood); box(d, 128, 418, 9, 6, 6, 13, P.wood, { noedge: true })
    box(d, 124, 414, 25, 12, 1.4, 8, '#5E7A94')
    box(d, 180, 412, 22, 42, 18, 3, P.wood); box(d, 198, 418, 9, 6, 6, 13, P.wood, { noedge: true })
    box(d, 194, 414, 25, 12, 1.4, 8, '#5E7A94')
    box(d, 252, 398, 9, 22, 16, 38, '#8CACC9'); box(d, 254, 413, 14, 18, 1.6, 26, '#6E93B4')
    for (let s = 0; s < 3; s++) box(d, 256, 413.8, 18 + s * 8, 14, 1, 3, '#EDF1F5', { noedge: true })
    cylY(d, 240, 470, 9, 4.5, 16, '#E7EDF2'); cylY(d, 240, 470, 25, 3.4, 6, '#8CACC9')
    /* 팔레트 (홀 동측) */
    box(d, 896, 286, 9, 20, 16, 3, P.wood, { noedge: true }); box(d, 896, 286, 12, 20, 16, 11, P.cream2)
    box(d, 922, 282, 9, 18, 14, 18, P.cream2); box(d, 902, 318, 9, 16, 14, 11, P.cream2)
    /* 트럭 + 하역 (좌측 전면) */
    box(d, 168, 514, 0, 24, 18, 13, P.cream2); box(d, 196, 518, 0, 15, 13, 9, P.cream2)
    box(d, 60, 516, 6, 58, 23, 26, '#EDEDEA'); box(d, 122, 516, 6, 17, 23, 17, P.rose)
    box(d, 124, 518, 15, 13, 2, 7, '#5E7A94')
    cylDir(d, [74, 516, 6], [74, 539, 6], 5, '#4A5058', { seg: 12 })
    cylDir(d, [100, 516, 6], [100, 539, 6], 5, '#4A5058', { seg: 12 })
    cylDir(d, [130, 516, 6], [130, 539, 6], 5, '#4A5058', { seg: 12 })
  })()

  /* ============ 색 보정 (원본 enhance 로직 포팅) ============ */
  ;(function enhanceBaseEquipmentColors() {
    const seen = []
    for (const id in ctx.groupReg) ctx.groupReg[id].traverse((o) => {
      if (!o.isMesh || !o.material || !o.material.color || o.userData.flowPart || o.userData.selectionOutline) return
      if (seen.indexOf(o.material) !== -1) return
      seen.push(o.material)
      const hsl = { h: 0, s: 0, l: 0 }
      o.material.color.getHSL(hsl)
      if (hsl.s > 0.04) hsl.s = Math.min(1, hsl.s * 1.20)
      hsl.l = Math.max(0.08, hsl.l - (hsl.l > 0.78 ? 0.095 : 0.065))
      o.material.color.setHSL(hsl.h, hsl.s, hsl.l)
    })
  })()
  ;(function emphasizeFlowEquipment() {
    const flowEquipment = ['cooling-tower', 'dry-cooler', 'chiller', 'pumps', 'water-treatment', 'tes', 'crah', 'fws', 'containment', 'tcs', 'manifold', 'cold-plate', 'cdu', 'switchgear', 'ups', 'battery', 'busway', 'pdu', 'transformer', 'generator', 'gpu-rack']
    const seen = []
    for (let i = 0; i < flowEquipment.length; i++) {
      const g = ctx.groupReg[flowEquipment[i]]
      if (!g) continue
      g.traverse((o) => {
        if (!o.isMesh || !o.material || !o.material.color || o.userData.flowPart || o.userData.selectionOutline || o.userData.floorTop) return
        if (seen.indexOf(o.material) !== -1) return
        seen.push(o.material)
        const hsl = { h: 0, s: 0, l: 0 }
        o.material.color.getHSL(hsl)
        if (hsl.s > 0.025) hsl.s = Math.min(1, hsl.s * 1.18 + 0.018)
        hsl.l = Math.max(0.08, hsl.l - (hsl.l > 0.72 ? 0.085 : (hsl.l > 0.42 ? 0.055 : 0.025)))
        o.material.color.setHSL(hsl.h, hsl.s, hsl.l)
        o.material.userData = o.material.userData || {}
        o.material.userData.flowEquipment = true
      })
    }
  })()

  return ctx
}
