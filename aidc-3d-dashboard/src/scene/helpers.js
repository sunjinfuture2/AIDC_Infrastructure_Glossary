import * as THREE from 'three'

/**
 * 씬 빌더 헬퍼 — 레퍼런스(용어사전 HTML)의 box/cylY/cylDir/pipe/wall/fan 빌더를
 * three r169 기준으로 포팅. 좌표계는 레퍼런스와 동일:
 *   scene(x, y, z높이) → three(x-CX, z, y-CZ)   (도면 북쪽이 -z)
 * 단위는 미터. 모든 mesh는 생성 시점의 currentFloor 로 층 태깅된다.
 */

/* 부지 중심 (도면 좌표 기준) */
export const CX = 72
export const CZ = 56

export function V(x, y, z) {
  return new THREE.Vector3(x - CX, z, y - CZ)
}

/* ── 레지스트리 ─────────────────────────────────────────── */
export const ctx = {
  scene: null,
  groupReg: {},      // term → THREE.Group
  pickables: [],
  wallsFade: [],     // 외벽 자동 페이드 { m, e, n }
  flows: [],         // 유체 패킷 애니메이션
  floorMeshes: { b1: [], f1: [], f2: [], roof: [] }, // 층별 mesh (층 필터용)
  slabs: [],         // { m, e, top, zTop, floor } 상부 슬래브 (선택 시 페이드)
  currentFloor: null,
}

export function resetCtx(scene) {
  ctx.scene = scene
  ctx.groupReg = {}
  ctx.pickables = []
  ctx.wallsFade = []
  ctx.flows = []
  ctx.floorMeshes = { b1: [], f1: [], f2: [], roof: [] }
  ctx.slabs = []
  ctx.currentFloor = null
}

export function setFloor(floor) {
  ctx.currentFloor = floor
}

function registerFloor(obj) {
  if (ctx.currentFloor && ctx.floorMeshes[ctx.currentFloor]) {
    obj.userData.floor = ctx.currentFloor
    ctx.floorMeshes[ctx.currentFloor].push(obj)
  }
}

/** 헬퍼를 거치지 않고 scene에 직접 추가한 mesh(돔·캡·튜브 등)의 층 태깅용 */
export function tagFloor(obj) {
  registerFloor(obj)
}

export function G(term, cat) {
  if (term && ctx.groupReg[term]) return ctx.groupReg[term]
  const g = new THREE.Group()
  g.userData = { term: term || null, cat: cat || null }
  ctx.scene.add(g)
  if (term) ctx.groupReg[term] = g
  return g
}

/* ── 재질/기본 도형 ─────────────────────────────────────── */
function dkC(hex) {
  const c = new THREE.Color(hex)
  c.multiplyScalar(0.86)
  return c
}

export function lam(hex, op) {
  const m = new THREE.MeshLambertMaterial({ color: new THREE.Color(hex) })
  if (op !== undefined) { m.transparent = true; m.opacity = op }
  m.userData = { baseOp: op === undefined ? 1 : op }
  return m
}

export function addEdges(g, geo, mesh, hex) {
  // 파스텔 무드: 윤곽선은 은은하게 (레퍼런스 렌더의 소프트한 느낌)
  const ls = new THREE.LineSegments(
    new THREE.EdgesGeometry(geo),
    new THREE.LineBasicMaterial({ color: dkC(hex), transparent: true, opacity: 0.55 }),
  )
  ls.material.userData = { baseOp: 0.55 }
  ls.position.copy(mesh.position)
  ls.rotation.copy(mesh.rotation)
  ls.userData.isEdge = true
  g.add(ls)
  registerFloor(ls)
  return ls
}

export function box(g, x, y, z, w, d, h, hex, opt) {
  opt = opt || {}
  const geo = new THREE.BoxGeometry(w, h, d)
  const m = new THREE.Mesh(geo, lam(hex, opt.op))
  m.position.set(x + w / 2 - CX, z + h / 2, y + d / 2 - CZ)
  if (opt.ry) m.rotation.y = opt.ry
  g.add(m)
  ctx.pickables.push(m)
  registerFloor(m)
  if (!opt.noedge) addEdges(g, geo, m, opt.edge || hex)
  return m
}

export function topSurface(g, x, y, z, w, d, hex, op) {
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
  registerFloor(m)
  return m
}

/** 대지 라운드-사각 그라디언트 면 (레퍼런스 포팅) */
export function gradientGroundSurface(g, x, y, z, w, d, hex) {
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

export function cylY(g, x, y, z, r, h, hex, opt) {
  opt = opt || {}
  const geo = new THREE.CylinderGeometry(opt.rTop !== undefined ? opt.rTop : r, r, h, opt.seg || 18)
  const m = new THREE.Mesh(geo, lam(hex, opt.op))
  m.position.set(x - CX, z + h / 2, y - CZ)
  g.add(m)
  ctx.pickables.push(m)
  registerFloor(m)
  return m
}

export function cylDir(g, p1, p2, r, hex, opt) {
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
  registerFloor(m)
  return m
}

/* ── 유체 배관 + 그라디언트 패킷 (레퍼런스 포팅) ────────── */
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
  // 파스텔 그라디언트 (공급 → 회수 온도감)
  if (key === 'condensate') return ['#8FC8E8', '#BCE0F2']
  if (key === 'chilled') return ['#5FB1E8', '#93D2F2']
  if (key === 'tcs') return ['#57C7BD', '#F0A876']
  if (key === 'heat') return ['#F5A86B', '#E8875C']
  return null
}
function deepenFlowPipeColor(color) {
  const hsl = { h: 0, s: 0, l: 0 }
  color.getHSL(hsl)
  color.setHSL(hsl.h, Math.min(1, hsl.s * 1.08 + 0.02), Math.max(0.3, hsl.l * 0.96))
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

export function pipe(g, pts, hex, r, flow) {
  r = r || 0.32
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
    registerFloor(s)
    parts.push(s)
  }
  if (!key) return
  const lens = [0]
  let tot = 0
  for (let q = 1; q < vs.length; q++) { tot += vs[q].distanceTo(vs[q - 1]); lens.push(tot) }
  const dots = []
  if (flow !== false || key === 'tcs') {
    const packetCount = Math.max(4, Math.round(tot / 12))
    const trailOpacity = [1, 0.62, 0.34, 0.14]
    for (let t = 0; t < packetCount; t++) {
      for (let h = 0; h < trailOpacity.length; h++) {
        const dotOp = trailOpacity[h]
        const dotMat = new THREE.MeshLambertMaterial({
          color: new THREE.Color(hex), emissive: new THREE.Color(hex), emissiveIntensity: 0.55,
          transparent: true, opacity: dotOp, depthWrite: false, depthTest: true,
        })
        dotMat.userData = { baseOp: dotOp, flowBaseColor: new THREE.Color(hex) }
        const dotSize = Math.max(0.2, r * (0.92 - h * 0.08))
        const dm = new THREE.Mesh(new THREE.SphereGeometry(dotSize, 10, 10), dotMat)
        dm.renderOrder = 30
        dm.userData.flowPart = true
        dm.userData.flowParticle = true
        dm.userData.flowU = t / packetCount - h * 0.0085
        g.add(dm)
        registerFloor(dm)
        dots.push(dm)
      }
    }
  }
  ctx.flows.push({ vs, lens, tot, dots, parts, key, off: Math.random(), enabled: true })
}

/* ── 팬/사다리/벽 (레퍼런스 포팅) ───────────────────────── */
export function fanTop(g, x, y, z, r, hexRing) {
  cylY(g, x, y, z, r + 0.2, 0.34, hexRing || '#A39E90', { seg: 20 })
  cylY(g, x, y, z + 0.17, r * 0.92, 0.17, '#F3F4F6', { seg: 20 })
  const b1 = box(g, x - r * 0.85, y - 0.2, z + 0.31, r * 1.7, 0.4, 0.16, '#8A93A0', { noedge: true })
  b1.rotation.y = 0.5
  const b2 = box(g, x - r * 0.85, y - 0.2, z + 0.31, r * 1.7, 0.4, 0.16, '#8A93A0', { noedge: true })
  b2.rotation.y = -1.05
  cylY(g, x, y, z + 0.28, 0.23, 0.31, '#66788C', { seg: 10 })
}

export function fanFront(g, x, y, z, r, axis) {
  const parts = [
    new THREE.Mesh(new THREE.CylinderGeometry(r + 0.17, r + 0.17, 0.31, 20), lam('#7FA3C4')),
    new THREE.Mesh(new THREE.CylinderGeometry(r * 0.9, r * 0.9, 0.16, 20), lam('#F2F6FA')),
    new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.21, 0.37, 10), lam('#5C7C9E')),
    new THREE.Mesh(new THREE.BoxGeometry(r * 1.65, 0.2, 0.34), lam('#5C7C9E')),
    new THREE.Mesh(new THREE.BoxGeometry(r * 1.65, 0.2, 0.34), lam('#5C7C9E')),
  ]
  for (let i = 0; i < parts.length; i++) {
    const m = parts[i]
    if (axis === 'z') m.rotation.x = Math.PI / 2
    else m.rotation.z = Math.PI / 2
    m.position.copy(V(x, y, z))
    g.add(m)
    registerFloor(m)
  }
  if (axis === 'z') { parts[3].rotation.y = 0.6; parts[4].rotation.y = -0.9 }
  else { parts[3].rotation.x = 0.6; parts[4].rotation.x = -0.9 }
}

export function ladder(g, x, y, z, h, hex) {
  hex = hex || '#9AA3AD'
  box(g, x - 0.34, y, z, 0.16, 0.16, h, hex, { noedge: true })
  box(g, x + 0.18, y, z, 0.16, 0.16, h, hex, { noedge: true })
  for (let i = 1; i < h / 1.3; i++) box(g, x - 0.34, y, z + i * 1.3, 0.68, 0.14, 0.14, hex, { noedge: true })
}

/**
 * 벽. exterior 벽은 카메라 방향 자동 페이드 대상으로 등록.
 * @param interior true → 반투명 칸막이
 */
export function wall(x, y, z, w, d, h, nx, nz, interior) {
  const g = G(null, null)
  const hex = '#EDEFF2'
  const geo = new THREE.BoxGeometry(w, h, d)
  const m = new THREE.Mesh(geo, lam(hex, interior ? 0.45 : 0.95))
  m.material.depthWrite = !interior
  m.position.set(x + w / 2 - CX, z + h / 2, y + d / 2 - CZ)
  g.add(m)
  registerFloor(m)
  const edgeColor = interior ? '#DEE2E5' : '#C5CBD0'
  const e = new THREE.LineSegments(
    new THREE.EdgesGeometry(geo),
    new THREE.LineBasicMaterial({ color: new THREE.Color(edgeColor), transparent: true, opacity: interior ? 0.58 : 0.78, depthTest: true, depthWrite: false }),
  )
  e.material.userData = { baseOp: interior ? 0.58 : 0.78 }
  e.position.copy(m.position)
  e.userData.isEdge = true
  g.add(e)
  registerFloor(e)
  if (!interior) ctx.wallsFade.push({ m, e, n: new THREE.Vector3(nx, 0, nz) })
  return m
}

/**
 * 상부 슬래브 등록 (층 바닥판).
 * 기본을 반투명으로 두어 '전체' 뷰에서도 하부 층 내부가 비쳐 보이고,
 * 탑뷰·하부 장비 선택·층 필터 시 렌더 루프가 목표 불투명도로 페이드한다.
 */
export function slab(x, y, z, w, d, th, floorId, hexBody, hexTop, baseOp) {
  const op = baseOp === undefined ? 0.55 : baseOp
  const g = G(null, null)
  const geo = new THREE.BoxGeometry(w, th, d)
  const m = new THREE.Mesh(geo, lam(hexBody || '#D3D8DC', op))
  m.material.depthWrite = false
  m.position.set(x + w / 2 - CX, z - th / 2, y + d / 2 - CZ)
  g.add(m)
  registerFloor(m)
  const e = addEdges(g, geo, m, '#969EA6')
  const top = topSurface(g, x, y, z + 0.03, w, d, hexTop || '#E8EAEC', Math.min(0.6, op))
  ctx.slabs.push({ m, e, top, zTop: z, floor: floorId, baseOp: op })
  return m
}

/* ── 팔레트 — 고명도 파스텔 (레퍼런스 렌더 무드) ─────────── */
export const P = {
  ground: '#E7EAEE', slab: '#EDEFF2', roof: '#EEF0F3',
  groundTop: '#F2F4F6', slabTop: '#F5F6F8', roofTop: '#F5F6F8',
  hall: '#E9EEF4', plant: '#F2F2EE', office: '#F4F2EE',
  cream: '#F7F2E7', cream2: '#F0E8D6',
  rackBody: '#6B3B52', rackDoor: '#8A4E6C', tray: '#A9D98B',
  blue: '#A4C9F2', blueD: '#79A9E6', cdu: '#79C0F2', teal: '#8FD9CB',
  yel: '#FFD34D', yelD: '#F0B429', purp: '#C9BCF2',
  gray: '#DDE3E8', steel: '#CFD9E2', wood: '#D9B98F', rose: '#EFC0B4',
  /* 도면 존 컬러 (평면도의 실별 색상 반영) */
  zoneElec: '#FBE9B8',   // 전기실 (도면 주황)
  zoneMech: '#CFE2F5',   // 기계실 (도면 파랑)
  zoneHall: '#DDE1F8',   // 전산실 (도면 보라)
  zoneCrah: '#F7DEEA',   // 항온항습실 (도면 분홍)
  zoneOffice: '#F3EDDA', // 사무 구역 (도면 노랑/베이지)
  zoneMeet: '#D8F0EC',   // 회의실 (도면 청록)
  zoneCore: '#EAEDF0',   // 코어/샤프트
}
