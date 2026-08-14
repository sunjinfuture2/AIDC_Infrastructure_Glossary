import * as THREE from 'three'
import {
  ctx, resetCtx, setFloor, tagFloor, G, V, lam, box, cylY, cylDir, pipe, wall, slab,
  topSurface, gradientGroundSurface, fanTop, fanFront, ladder, addEdges, P, CX, CZ,
} from './helpers.js'

/**
 * 충주 데이터센터 — 평면도(지하1층 / 1층 / 2층) 기반 시설 모델.
 *
 * 좌표(도면 기준, 단위 m):
 *   전산동: x 0~105.3 (그리드 1~15), y 0~38.6 (그리드 N~H, 북→남)
 *   공급동: x 2~56, y 47~104 (전산동 남측, 공동구로 연결)
 *   레벨:   B1 바닥 z=0 · 1F 바닥 z=9 · 2F 바닥 z=18 · 옥상 z=27
 *
 * 실 배치는 도면 표기(전기실-1/2, 축전지실, 기계실, 항온항습실, 전산실,
 * MMR/MDF, 하역장, 상황실, GIS, 유류펌프실, RCP실, 비상발전기실, 유류탱크실,
 * 소화가스실, 운영사무실, 회의실)를 따른다.
 */

const MAIN = { x0: 0, x1: 105.3, y0: 0, y1: 38.6 }   // 전산동
const SUP = { x0: 2, x1: 56, y0: 47, y1: 104 }        // 공급동
const LV = { b1: 0, f1: 9, f2: 18, roof: 27 }
const WH = 5.8   // 층 벽 높이

export function buildFacility(scene) {
  resetCtx(scene)

  /* ═══ 대지 ═══ */
  setFloor(null)
  ;(function site() {
    const g = G(null, null)
    // 부지 기단 (전체 바운딩)
    box(g, -14, -10, -1.2, 152, 126, 1.2, P.slab, { edge: '#969EA6' })
    gradientGroundSurface(g, -32, -26, -1.15, 190, 160, P.groundTop)
    topSurface(g, -14, -10, 0.04, 152, 126, P.slabTop)
    // 옥외주차장 (전산동 동측) + 진입 도로 톤
    topSurface(g, 108, 0, 0.06, 26, 38.6, '#E3E5E7')
    topSurface(g, 58, 44, 0.06, 50, 62, '#E6E8E9')
    // 조경 힌트 (남동측 정원)
    topSurface(g, 60, 70, 0.07, 44, 32, '#E2E8DF')
  })()

  buildB1()
  buildF1()
  buildF2()
  buildRoof()
  buildFlows()

  return ctx
}

/* ═══════════════ 지하 1층 ═══════════════ */
function buildB1() {
  setFloor('b1')

  /* 전산동 B1 — 존 색상 (도면 채색 반영) */
  ;(function zones() {
    const g = G(null, null)
    topSurface(g, 7, 3, 0.08, 41, 24, P.zoneElec)      // 전기실-1
    topSurface(g, 48, 3, 0.08, 18, 13, P.zoneElec)     // 전기실-2
    topSurface(g, 48, 18, 0.08, 12, 10, P.zoneElec)    // 축전지실
    topSurface(g, 70, 3, 0.08, 28, 13, P.zoneMech)     // 기계실
    topSurface(g, 70, 18, 0.08, 28, 15, P.zoneMech)    // 축열·배관 갤러리
    topSurface(g, 0, 0, 0.08, 7, 38.6, P.zoneCore)     // 서측 코어 (PS·소방·창고)
    topSurface(g, 98.3, 0, 0.08, 7, 38.6, P.zoneCore)  // 동측 코어
  })()

  /* 전산동 B1 외벽 + 칸막이 */
  wall(MAIN.x0, MAIN.y0, 0, MAIN.x1 - MAIN.x0, 1.1, WH, 0, -1, false)
  wall(MAIN.x0, MAIN.y1 - 1.1, 0, MAIN.x1 - MAIN.x0, 1.1, WH, 0, 1, false)
  wall(MAIN.x0, 1.1, 0, 1.1, MAIN.y1 - 2.2, WH, -1, 0, false)
  wall(MAIN.x1 - 1.1, 1.1, 0, 1.1, MAIN.y1 - 2.2, WH, 1, 0, false)
  wall(7, 1.1, 0, 0.7, 36.4, WH * 0.86, 0, 0, true)      // 서측 코어 벽
  wall(98.3, 1.1, 0, 0.7, 36.4, WH * 0.86, 0, 0, true)   // 동측 코어 벽
  wall(47.2, 1.1, 0, 0.7, 28, WH * 0.86, 0, 0, true)     // 전기실-1 | 전기실-2
  wall(66.5, 1.1, 0, 0.7, 36.4, WH * 0.86, 0, 0, true)   // 전기실 | 기계실
  wall(48, 16.2, 0, 18, 0.7, WH * 0.86, 0, 0, true)      // 전기실-2 | 축전지실
  wall(70, 16.2, 0, 28, 0.7, WH * 0.86, 0, 0, true)      // 기계실 | 갤러리

  /* 전기실-1 — 수배전반 열반 3열 (도면의 라인업 배열) */
  ;(function switchgearRoom() {
    const g = G('switchgear', 'power')
    for (let row = 0; row < 3; row++) {
      const y = 5.5 + row * 7
      for (let i = 0; i < 6; i++) {
        const x = 10 + i * 5.6
        box(g, x, y, 0, 4.8, 3.1, 2.5, P.yel)
        box(g, x + 0.4, y + 2.95, 0.8, 4, 0.28, 1.4, '#F6E4AE')            // 도어
        box(g, x + 0.7, y + 3.1, 2.0, 1.4, 0.2, 0.34, '#3A3F45', { noedge: true }) // 계기
        box(g, x + 2.9, y + 3.1, 2.0, 1.1, 0.2, 0.34, '#C3542F', { noedge: true })
      }
    }
  })()

  /* 전기실-2 — 몰드 변압기 3대 */
  ;(function trRoom() {
    const g = G('transformer', 'power')
    for (let i = 0; i < 3; i++) {
      const x = 49.5 + i * 5.6
      box(g, x, 5, 0, 4.4, 5, 3.2, P.yel)
      for (let f = 0; f < 3; f++) {
        box(g, x - 0.4, 5.5 + f * 1.4, 0.5, 0.4, 0.9, 2.2, '#D9A32E', { noedge: true })  // 방열핀
        box(g, x + 4.4, 5.5 + f * 1.4, 0.5, 0.4, 0.9, 2.2, '#D9A32E', { noedge: true })
      }
      for (let b = 0; b < 3; b++) {
        cylY(g, x + 0.9 + b * 1.3, 7.5, 3.2, 0.28, 0.9, '#EDE7D8')   // 부싱
        const cap = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 10), lam('#C9971B'))
        cap.position.copy(V(x + 0.9 + b * 1.3, 7.5, 4.3)); g.add(cap); tagFloor(cap)
      }
      box(g, x + 0.4, 11.5, 0, 3.6, 1.6, 2.2, '#E4C25C', { noedge: true })  // 제어반
    }
  })()

  /* 축전지실 — 배터리 랙 2×2 */
  ;(function batteryRoom() {
    const g = G('battery', 'power')
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
      const x = 49 + i * 5.6, y = 19 + j * 4.6
      box(g, x, y, 0, 4.8, 3.4, 2.3, P.yel)
      for (let s = 0; s < 3; s++) box(g, x + 0.3, y + 3.25, 0.35 + s * 0.72, 4.2, 0.24, 0.42, '#F6E4AE')
      box(g, x, y + 3.25, 2.35, 4.8, 0.2, 0.2, '#C3542F', { noedge: true })
    }
  })()

  /* 기계실 — 칠러 2 · 순환펌프 3 · 수처리 */
  ;(function mechRoom() {
    const g = G('chiller', 'cooling')
    function chiller(x, y) {
      box(g, x, y, 0, 15, 4.6, 0.8, P.steel, { noedge: true })
      cylDir(g, [x + 0.8, y + 1.4, 2.2], [x + 14.2, y + 1.4, 2.2], 1.15, P.blue, { seg: 16 })
      cylDir(g, [x + 0.8, y + 3.2, 3.8], [x + 14.2, y + 3.2, 3.8], 1.15, P.blueD, { seg: 16 })
      cylY(g, x + 4.6, y + 2.3, 4.6, 1.1, 1.6, '#DCE6EF')
      cylY(g, x + 9.5, y + 2.3, 4.6, 1.1, 1.6, '#DCE6EF')
      pipe(g, [[x + 4.6, y + 2.3, 5.7], [x + 9.5, y + 2.3, 5.7]], '#AEC2D4', 0.3, false)
      box(g, x + 12.8, y + 1, 0.8, 1.6, 0.4, 3.4, '#2E3238')
    }
    chiller(71.5, 4); chiller(71.5, 10)

    const p = G('pumps', 'cooling')
    function pump(x, y) {
      box(p, x - 1.1, y - 1.1, 0, 2.2, 2.2, 0.4, P.steel, { noedge: true })
      cylY(p, x, y, 0.4, 0.88, 0.95, '#8FA9C0')
      cylY(p, x, y, 1.35, 0.68, 1.75, '#DCE6EF')
      cylY(p, x, y, 3.1, 0.76, 0.28, '#8FA9C0')
      pipe(p, [[x, y, 0.7], [x - 1.9, y, 0.7]], '#9FB6CC', 0.32, false)
    }
    pump(90, 5); pump(90, 8.8); pump(90, 12.6)

    const w = G('water-treatment', 'cooling')
    box(w, 94, 10.5, 0, 3.4, 3, 4.2, P.teal)
    box(w, 94.4, 13.4, 2.6, 1.5, 0.26, 1.1, '#2E3238')
    cylY(w, 95, 6.5, 0, 0.65, 2.3, '#BFE3DC')
    cylY(w, 96.8, 6.5, 0, 0.65, 2.3, '#BFE3DC')
    pipe(w, [[94.8, 10.5, 3.4], [95, 7.5, 2.6]], '#72B6A8', 0.22, false)
  })()

  /* 축열·배관 갤러리 — 축열조 2기 (도면 동측 스트라이프 존) */
  ;(function tesGallery() {
    const g = G('tes', 'cooling')
    function tank(x, y) {
      cylY(g, x, y, 0, 3.4, 6.8, '#E7EDF2', { seg: 26 })
      const dome = new THREE.Mesh(
        new THREE.SphereGeometry(3.4, 26, 12, 0, Math.PI * 2, 0, Math.PI / 2), lam('#DDE5EB'))
      dome.position.copy(V(x, y, 6.8)); g.add(dome); ctx.pickables.push(dome); tagFloor(dome)
      cylY(g, x, y, 2.2, 3.55, 0.28, '#C5D3DE', { seg: 26 })
      cylY(g, x, y, 4.7, 3.55, 0.28, '#C5D3DE', { seg: 26 })
      ladder(g, x + 3.9, y, 0, 6.4)
    }
    tank(76, 25.5); tank(88, 25.5)
  })()

  /* ── 공급동 B1: GIS · 유류펌프실 · RCP실 · 옥외유류탱크 ── */
  ;(function supplyB1() {
    const g0 = G(null, null)
    topSurface(g0, SUP.x0 + 6, 52, 0.08, 26, 36, P.zoneElec)   // GIS실
    topSurface(g0, SUP.x0, 58, 0.08, 6, 18, P.zoneMech)        // 유류펌프실
    topSurface(g0, 36, 56, 0.08, 8, 12, P.zoneCore)            // RCP실
    topSurface(g0, 26, MAIN.y1, 0.08, 4.4, SUP.y0 - MAIN.y1, P.zoneCore) // 공동구

    // 공급동 외벽
    wall(SUP.x0, SUP.y0, 0, SUP.x1 - SUP.x0, 1.1, WH, 0, -1, false)
    wall(SUP.x0, SUP.y1 - 1.1, 0, SUP.x1 - SUP.x0, 1.1, WH, 0, 1, false)
    wall(SUP.x0, SUP.y0 + 1.1, 0, 1.1, SUP.y1 - SUP.y0 - 2.2, WH, -1, 0, false)
    wall(SUP.x1 - 1.1, SUP.y0 + 1.1, 0, 1.1, SUP.y1 - SUP.y0 - 2.2, WH, 1, 0, false)
    wall(34.5, SUP.y0 + 1.1, 0, 0.7, 40, WH * 0.86, 0, 0, true)   // GIS | RCP·코어

    // GIS — 가스절연개폐장치 3베이
    const g = G('gis', 'power')
    for (let i = 0; i < 3; i++) {
      const y = 56 + i * 10
      box(g, 11, y, 0, 3.4, 6.4, 2.6, P.gray)                       // 제어 큐비클
      cylDir(g, [15.5, y + 1.6, 1.9], [27, y + 1.6, 1.9], 1.05, '#C9D2DA', { seg: 14 }) // 모선 탱크
      cylDir(g, [15.5, y + 4.8, 1.9], [27, y + 4.8, 1.9], 1.05, '#C9D2DA', { seg: 14 })
      for (let b = 0; b < 3; b++) {
        cylY(g, 17.5 + b * 4, y + 3.2, 2.6, 0.75, 1.7, '#BEC9D2', { seg: 14 })          // 차단기 폴
        cylY(g, 17.5 + b * 4, y + 3.2, 4.3, 0.34, 1.1, '#EDE7D8')
      }
      box(g, 27.5, y + 0.9, 0, 2.4, 4.6, 1.7, '#AEB9C2', { noedge: true })
    }

    // 유류펌프실 — 이송 펌프 2
    const f = G('fuel', 'power')
    for (let i = 0; i < 2; i++) {
      const y = 62 + i * 6
      box(f, 3.4, y - 1.1, 0, 2.2, 2.2, 0.4, P.steel, { noedge: true })
      cylY(f, 4.5, y, 0.4, 0.8, 0.9, '#C9A94F')
      cylY(f, 4.5, y, 1.3, 0.6, 1.5, '#E3D6BB')
    }
    // 옥외유류탱크 (서측 야드, 도면 좌측 2개소)
    function oilTank(y) {
      cylDir(f, [-9, y, 2.2], [-9, y + 10, 2.2], 1.9, '#E3D6BB', { seg: 16 })
      box(f, -10.2, y + 1.2, 0, 2.4, 0.9, 1.5, '#B7A88C', { noedge: true })
      box(f, -10.2, y + 7.9, 0, 2.4, 0.9, 1.5, '#B7A88C', { noedge: true })
      cylY(f, -9, y + 3.4, 4.1, 0.34, 0.6, '#B7A88C')
    }
    oilTank(52); oilTank(78)
    pipe(f, [[-9, 63, 1], [0, 63, 1], [4.5, 63.5, 1]], '#C9B98A', 0.22, false)

    // RCP실 — 원방 감시·제어반
    const r = G(null, null)
    box(r, 37, 58, 0, 2.6, 5.6, 2.4, '#33383F')
    box(r, 40.2, 58, 0, 2.6, 5.6, 2.4, '#33383F')
    box(r, 37.3, 61.2, 1.5, 2, 0.22, 0.6, '#7FD8C8', { noedge: true })
  })()
}

/* ═══════════════ 1층 ═══════════════ */
function buildF1() {
  setFloor('f1')

  slab(MAIN.x0, MAIN.y0, LV.f1, MAIN.x1 - MAIN.x0, MAIN.y1 - MAIN.y0, 1, 'f1')
  slab(34, SUP.y0, LV.f1, SUP.x1 - 34, SUP.y1 - SUP.y0, 1, 'f1')  // 공급동 동측 (GIS 상부는 오픈)

  const z = LV.f1

  ;(function zones() {
    const g = G(null, null)
    topSurface(g, 7, 0, z + 0.08, 91.3, 4.2, P.zoneCrah)        // 항온항습실 (북측 갤러리)
    topSurface(g, 12, 6, z + 0.08, 28, 13, P.zoneElec)          // 전기실1
    topSurface(g, 42, 6, z + 0.08, 16, 13, P.zoneElec)          // 축전지실
    topSurface(g, 60, 6, z + 0.08, 28, 13, P.zoneElec)          // 전기실2
    topSurface(g, 0.6, 5, z + 0.08, 6.4, 11, P.zoneCore)        // MMR/MDF 서
    topSurface(g, 98.3, 5, z + 0.08, 6.4, 11, P.zoneCore)       // MMR/MDF 동
    topSurface(g, 20, 23, z + 0.08, 14, 13, P.zoneCore)         // 하역장
    topSurface(g, 36, 23, z + 0.08, 12, 10, P.zoneCore)         // 검품실·창고
    topSurface(g, 62, 23, z + 0.08, 32, 13, P.zoneOffice)       // 브리핑룸·상황실·스크린룸
    topSurface(g, 36, 58, z + 0.08, 18, 32, P.zoneOffice)       // 공급동 로비·보안실
  })()

  /* 외벽 + 칸막이 */
  wall(MAIN.x0, MAIN.y0, z, MAIN.x1 - MAIN.x0, 1.1, WH, 0, -1, false)
  wall(MAIN.x0, MAIN.y1 - 1.1, z, MAIN.x1 - MAIN.x0, 1.1, WH, 0, 1, false)
  wall(MAIN.x0, 1.1, z, 1.1, MAIN.y1 - 2.2, WH, -1, 0, false)
  wall(MAIN.x1 - 1.1, 1.1, z, 1.1, MAIN.y1 - 2.2, WH, 1, 0, false)
  wall(7, 4.4, z, 91.3, 0.7, WH * 0.86, 0, 0, true)     // 항온항습실 | 홀 (도면 y=4.2 경계)
  wall(10.8, 4.9, z, 0.7, 15, WH * 0.86, 0, 0, true)
  wall(41, 4.9, z, 0.7, 15, WH * 0.86, 0, 0, true)      // 전기실1 | 축전지실
  wall(58.8, 4.9, z, 0.7, 15, WH * 0.86, 0, 0, true)    // 축전지실 | 전기실2
  wall(12, 20.8, z, 82, 0.7, WH * 0.86, 0, 0, true)     // 전기 존 | 남측 복도
  wall(34.5, SUP.y0, z, 0.7, 46, WH * 0.86, 0, 0, true) // 공급동 로비 서측 벽

  /* 항온항습실 — 팬월 유닛 8기 (남향 급기) */
  ;(function crahGallery() {
    const g = G('crah', 'cooling')
    for (let i = 0; i < 8; i++) {
      const x = 10 + i * 11.4
      box(g, x, 0.8, z, 6.6, 2.8, WH * 0.82, P.blue)
      box(g, x + 0.3, 0.95, z + WH * 0.82, 6, 2.5, 0.55, '#8FA9C0')
      fanFront(g, x + 1.8, 3.75, z + 1.7, 1.1, 'z')
      fanFront(g, x + 4.8, 3.75, z + 1.7, 1.1, 'z')
      fanFront(g, x + 1.8, 3.75, z + 3.9, 1.1, 'z')
      fanFront(g, x + 4.8, 3.75, z + 3.9, 1.1, 'z')
    }
  })()

  /* 전기실1 — UPS 라인업 4기 */
  ;(function upsRoom() {
    const g = G('ups', 'power')
    for (let i = 0; i < 4; i++) {
      const x = 14 + i * 6.4
      box(g, x, 7, z, 5.4, 3.1, 2.6, P.yel)
      box(g, x + 0.5, 10, z + 1.9, 3.4, 0.26, 0.55, '#2E3238')
      box(g, x + 0.8, 10.15, z + 2.05, 1.2, 0.18, 0.26, '#57D0A8', { noedge: true })
      for (let s = 0; s < 4; s++) box(g, x + 0.5, 10.1, z + 0.4 + s * 0.34, 3.4, 0.16, 0.22, '#C9A94F', { noedge: true })
    }
    // 남측: 정류·바이패스 반 열
    for (let i = 0; i < 4; i++) {
      const x = 14 + i * 6.4
      box(g, x, 14.5, z, 5.4, 3.1, 2.6, P.yel)
      box(g, x + 0.4, 17.45, z + 0.5, 4.4, 0.26, 1.5, '#F6E4AE')
    }
  })()

  /* 축전지실 — 배터리 랙 (도면 중앙) */
  ;(function batteryF1() {
    const g = G('battery', 'power')
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
      const x = 43.5 + i * 6.8, y = 7.5 + j * 6.4
      box(g, x, y, z, 5.8, 3.6, 2.4, P.yel)
      for (let s = 0; s < 3; s++) box(g, x + 0.35, y + 3.45, z + 0.35 + s * 0.75, 5.1, 0.24, 0.44, '#F6E4AE')
      box(g, x, y + 3.45, z + 2.45, 5.8, 0.2, 0.2, '#C3542F', { noedge: true })
    }
  })()

  /* 전기실2 — 수배전반 열반 2열 */
  ;(function sgF1() {
    const g = G('switchgear', 'power')
    for (let row = 0; row < 2; row++) {
      const y = 7.5 + row * 7
      for (let i = 0; i < 5; i++) {
        const x = 61.5 + i * 5.3
        box(g, x, y, z, 4.6, 3.1, 2.5, P.yel)
        box(g, x + 0.4, y + 2.95, z + 0.8, 3.8, 0.26, 1.35, '#F6E4AE')
        box(g, x + 0.6, y + 3.1, z + 1.95, 1.3, 0.2, 0.33, '#3A3F45', { noedge: true })
      }
    }
  })()

  /* MMR · MDF — 통신 인입 랙 (동·서 이중화) */
  ;(function mmr() {
    const g = G('mmr', 'it')
    for (let i = 0; i < 3; i++) {
      box(g, 1.6, 6 + i * 3.4, z, 4.2, 2.6, 2.5, P.purp)
      for (let s = 0; s < 4; s++) box(g, 1.75, 8.45 + i * 3.4, z + 0.4 + s * 0.5, 3.9, 0.2, 0.3, '#CFC8EE')
    }
    for (let i = 0; i < 2; i++) {
      box(g, 99.4, 6.5 + i * 3.8, z, 4.2, 2.8, 2.5, P.purp)
      for (let s = 0; s < 3; s++) box(g, 99.55, 9.15 + i * 3.8, z + 0.45 + s * 0.55, 3.9, 0.2, 0.32, '#CFC8EE')
    }
  })()

  /* 상황실 · 스크린룸 — 관제 (도면 동남측) */
  ;(function noc() {
    const g = G('bms', 'mgmt')
    for (let i = 0; i < 3; i++) {
      const m = box(g, 66 + i * 7.4, 24.2, z + 1, 6.6, 0.4, 3.6, '#33383F')
      m.rotation.y = (i - 1) * 0.12
      box(g, 66.6 + i * 7.4, 24.1, z + 1.8, 2.1, 0.22, 1.4, i === 0 ? '#7FD8C8' : i === 1 ? '#F2C94C' : '#E8836A', { noedge: true, ry: (i - 1) * 0.12 })
      box(g, 69.4 + i * 7.4, 24.1, z + 1.6, 2.5, 0.22, 1.9, '#8FB4D8', { noedge: true, ry: (i - 1) * 0.12 })
    }
    const d = G(null, null)
    box(d, 68, 30, z + 1.05, 10, 2.6, 0.4, P.wood)
    box(d, 69, 30.6, z, 0.9, 1.4, 2.1, P.wood, { noedge: true })
    box(d, 76, 30.6, z, 0.9, 1.4, 2.1, P.wood, { noedge: true })
    box(d, 70.4, 30.4, z + 1.5, 1.7, 0.2, 1.1, '#5E7A94')
    box(d, 73.2, 30.4, z + 1.5, 1.7, 0.2, 1.1, '#5E7A94')
  })()

  /* 하역장 · 로비 데코 */
  ;(function deco() {
    const d = G(null, null)
    // 하역장 팔레트
    box(d, 22, 26, z, 2.8, 2.2, 0.4, P.wood, { noedge: true })
    box(d, 22, 26, z + 0.4, 2.8, 2.2, 1.5, P.cream2)
    box(d, 26, 25, z, 2.5, 2, 2.4, P.cream2)
    box(d, 23, 31, z, 2.2, 1.9, 1.5, P.cream2)
    // 공급동 로비 — 안내 데스크 + 소파
    box(d, 40, 66, z, 7.4, 2.4, 1.1, P.wood)
    box(d, 41.5, 72, z, 4.6, 1.8, 0.5, P.rose)
    box(d, 41.5, 72, z + 0.5, 4.6, 0.6, 0.65, P.rose, { noedge: true })
    box(d, 41.5, 76, z, 4.6, 1.8, 0.5, P.rose)
    box(d, 41.5, 76.6, z + 0.5, 4.6, 0.6, 0.65, P.rose, { noedge: true })
  })()
}

/* ═══════════════ 2층 ═══════════════ */
function buildF2() {
  setFloor('f2')

  slab(MAIN.x0, MAIN.y0, LV.f2, MAIN.x1 - MAIN.x0, MAIN.y1 - MAIN.y0, 1, 'f2')
  slab(SUP.x0, SUP.y0, LV.f2, SUP.x1 - SUP.x0, SUP.y1 - SUP.y0, 1, 'f2')

  const z = LV.f2

  ;(function zones() {
    const g = G(null, null)
    topSurface(g, 7, 0, z + 0.08, 91.3, 4.2, P.zoneCrah)        // 항온항습실
    topSurface(g, 10, 5, z + 0.08, 85, 16.5, P.zoneHall)        // 전산실
    topSurface(g, 12, 24, z + 0.08, 82, 10, P.zoneElec)         // 전기실1·축전지실1/2·전기실2
    topSurface(g, 0.6, 5, z + 0.08, 6.4, 11, P.zoneCore)        // 공조실 서
    topSurface(g, 98.3, 5, z + 0.08, 6.4, 11, P.zoneCore)       // 공조실 동
    topSurface(g, 8, 52, z + 0.08, 28, 40, P.zoneMech)          // 비상발전기실
    topSurface(g, SUP.x0, 48, z + 0.08, 6, 10, P.zoneMech)      // 유류탱크실-1
    topSurface(g, SUP.x0, 86, z + 0.08, 6, 10, P.zoneMech)      // 유류탱크실-2
    topSurface(g, 30, 45, z + 0.08, 10, 7, P.zoneCore)          // 소화가스실
    topSurface(g, 42, 52, z + 0.08, 14, 34, P.zoneOffice)       // 운영사무실·사무실
    topSurface(g, 42, 92, z + 0.08, 14, 10, P.zoneMeet)         // 회의실
  })()

  /* 외벽 + 칸막이 */
  wall(MAIN.x0, MAIN.y0, z, MAIN.x1 - MAIN.x0, 1.1, WH, 0, -1, false)
  wall(MAIN.x0, MAIN.y1 - 1.1, z, MAIN.x1 - MAIN.x0, 1.1, WH, 0, 1, false)
  wall(MAIN.x0, 1.1, z, 1.1, MAIN.y1 - 2.2, WH, -1, 0, false)
  wall(MAIN.x1 - 1.1, 1.1, z, 1.1, MAIN.y1 - 2.2, WH, 1, 0, false)
  wall(SUP.x0, SUP.y0, z, SUP.x1 - SUP.x0, 1.1, WH, 0, -1, false)
  wall(SUP.x0, SUP.y1 - 1.1, z, SUP.x1 - SUP.x0, 1.1, WH, 0, 1, false)
  wall(SUP.x0, SUP.y0 + 1.1, z, 1.1, SUP.y1 - SUP.y0 - 2.2, WH, -1, 0, false)
  wall(SUP.x1 - 1.1, SUP.y0 + 1.1, z, 1.1, SUP.y1 - SUP.y0 - 2.2, WH, 1, 0, false)
  wall(7, 1.1, z, 91.3, 0.7, WH * 0.86, 0, 0, true)     // 항온항습실 | 전산실
  wall(12, 22.4, z, 82, 0.7, WH * 0.86, 0, 0, true)     // 전산실 | 전기 존
  wall(7, 1.8, z, 0.7, 35, WH * 0.86, 0, 0, true)
  wall(97.6, 1.8, z, 0.7, 35, WH * 0.86, 0, 0, true)
  wall(40.5, SUP.y0 + 1.1, z, 0.7, 54, WH * 0.86, 0, 0, true)  // 발전기실 | 사무 윙

  /* 항온항습실 — 2층 팬월 10기 (전산실 급기) */
  ;(function crahF2() {
    const g = G('crah', 'cooling')
    for (let i = 0; i < 10; i++) {
      const x = 8.6 + i * 9.1
      box(g, x, 0.8, z, 6.4, 2.8, WH * 0.82, P.blue)
      box(g, x + 0.3, 0.95, z + WH * 0.82, 5.8, 2.5, 0.55, '#8FA9C0')
      fanFront(g, x + 1.7, 3.75, z + 1.7, 1.1, 'z')
      fanFront(g, x + 4.7, 3.75, z + 1.7, 1.1, 'z')
      fanFront(g, x + 1.7, 3.75, z + 3.9, 1.1, 'z')
      fanFront(g, x + 4.7, 3.75, z + 3.9, 1.1, 'z')
    }
  })()

  /* ── 전산실: GPU 랙 5열(핫아일 격리) + 스토리지 + 네트워크 ── */
  const AISLES = [6.6, 9.6, 12.6, 15.6, 18.6]   // 각 격리 통로 중심 y
  const RACK_X0 = 13, RACK_N = 11, RACK_PITCH = 2.35

  ;(function dataHall() {
    const g = G('gpu-rack', 'it')
    for (let r = 0; r < AISLES.length; r++) {
      const yA = AISLES[r]
      for (const side of [-1, 1]) {
        const y = yA + side * 0.75 - (side > 0 ? 0 : 1.15)  // 랙 depth 1.15, 통로 폭 1.5
        for (let i = 0; i < RACK_N; i++) {
          const x = RACK_X0 + i * RACK_PITCH
          box(g, x, y, z, 1.9, 1.15, 2.6, P.rackBody)
          box(g, x + 0.15, side > 0 ? y - 0.06 : y + 1.15, z + 0.2, 1.6, 0.06, 2.2, P.rackDoor, { noedge: true })
          box(g, x + 1.55, side > 0 ? y - 0.04 : y + 1.17, z + 2.42, 0.16, 0.05, 0.12, '#5FE3A8', { noedge: true })
        }
        // 케이블 트레이
        box(g, RACK_X0, yA + side * 1.55 - 0.15, z + 2.95, RACK_N * RACK_PITCH - 0.4, 0.3, 0.1, P.tray, { noedge: true })
      }
    }
    // 스토리지 랙 (동측)
    const s = G('storage', 'it')
    for (let i = 0; i < 4; i++) {
      box(s, 72 + (i % 2) * 3.2, 7 + Math.floor(i / 2) * 4.4, z, 2.6, 2.9, 2.6, P.purp)
      for (let k = 0; k < 4; k++) box(s, 72.15 + (i % 2) * 3.2, 9.75 + Math.floor(i / 2) * 4.4, z + 0.4 + k * 0.55, 2.3, 0.2, 0.3, '#CFC8EE')
    }
    // 네트워크 스파인 랙
    const n = G('network', 'it')
    for (let i = 0; i < 4; i++) {
      box(n, 82 + (i % 2) * 3.2, 7 + Math.floor(i / 2) * 4.4, z, 2.6, 2.9, 2.6, P.purp)
      for (let k = 0; k < 3; k++) box(n, 82.15 + (i % 2) * 3.2, 9.75 + Math.floor(i / 2) * 4.4, z + 0.35 + k * 0.5, 2.3, 0.2, 0.22, '#5F51A8', { noedge: true })
      box(n, 82.15 + (i % 2) * 3.2, 9.75 + Math.floor(i / 2) * 4.4, z + 2.15, 2.3, 0.2, 0.36, '#CFC8EE')
    }
  })()

  /* 핫아일 격리 캐노피 */
  ;(function containment() {
    const g = G('containment', 'cooling')
    for (const yA of AISLES) {
      box(g, RACK_X0 - 0.3, yA - 0.78, z + 3.1, RACK_N * RACK_PITCH, 1.56, 0.12, '#BFD2DE', { op: 0.28 })
      box(g, RACK_X0 - 0.3, yA - 0.78, z + 2.6, 0.1, 1.56, 0.5, '#BFD2DE', { op: 0.24 })
      box(g, RACK_X0 - 0.3 + RACK_N * RACK_PITCH - 0.1, yA - 0.78, z + 2.6, 0.1, 1.56, 0.5, '#BFD2DE', { op: 0.24 })
    }
  })()

  /* CDU 5기 + 콜드플레이트 마커 + TCS 매니폴드 */
  ;(function liquidCooling() {
    const g = G('cdu', 'cooling')
    for (let r = 0; r < AISLES.length; r++) {
      const x = 42 + r * 4.6
      box(g, x, 23, z, 3, 2.4, 2.4, P.cdu)
      box(g, x + 0.3, 25.3, z + 1.8, 1.2, 0.2, 0.4, '#2E3238')
      cylDir(g, [x + 0.8, 25.4, z + 0.9], [x + 0.8, 25.9, z + 0.9], 0.24, '#0FA396', { seg: 10 })
      cylDir(g, [x + 1.8, 25.4, z + 0.9], [x + 1.8, 25.9, z + 0.9], 0.24, '#E2793B', { seg: 10 })
    }
    const cp = G('cold-plate', 'cooling')
    box(cp, RACK_X0 + 4 * RACK_PITCH, AISLES[2] - 0.7, z + 2.62, 0.5, 0.7, 0.5, '#0FA396')
  })()

  /* ── 전기 존 (남측 밴드): UPS 4 · 배터리 4 ── */
  ;(function elecBand() {
    const g = G('ups', 'power')
    for (let i = 0; i < 4; i++) {
      const x = 14 + i * 6.2
      box(g, x, 25, z, 5.2, 3.1, 2.6, P.yel)
      box(g, x + 0.5, 28, z + 1.9, 3.2, 0.26, 0.55, '#2E3238')
      box(g, x + 0.8, 28.15, z + 2.05, 1.2, 0.18, 0.26, '#57D0A8', { noedge: true })
    }
    const b = G('battery', 'power')
    for (let i = 0; i < 4; i++) {
      const x = 46 + i * 6.2
      box(b, x, 25, z, 5.2, 3.4, 2.3, P.yel)
      for (let s = 0; s < 3; s++) box(b, x + 0.3, 28.25, z + 0.35 + s * 0.72, 4.6, 0.24, 0.42, '#F6E4AE')
      box(b, x, 28.25, z + 2.35, 5.2, 0.2, 0.2, '#C3542F', { noedge: true })
    }
    const p = G('pdu', 'power')
    for (let i = 0; i < 2; i++) {
      const x = 88 + i * 4.4
      box(p, x, 25, z, 3.6, 3, 2.5, P.yel)
      for (let s = 0; s < 3; s++) box(p, x + 0.4, 27.85, z + 0.5 + s * 0.5, 2.8, 0.18, 0.32, '#C9A94F', { noedge: true })
      cylDir(p, [x + 1, 27.9, z + 2.2], [x + 1, 28.2, z + 2.2], 0.5, '#F6E4AE', { seg: 14 })
    }
  })()

  /* ── 버스웨이 2계통 (전산실 상부, 열 직교 방향) ── */
  ;(function busway() {
    const g = G('busway', 'power')
    for (const bx of [24, 52]) {
      box(g, bx - 0.55, 5, z + 5.1, 1.1, 16.5, 1.0, P.yel)
      for (const yA of AISLES) {
        box(g, bx - 0.7, yA - 0.7, z + 4.6, 1.4, 1.4, 0.6, P.yelD)   // 탭오프
        pipe(g, [[bx, yA, z + 4.7], [bx, yA, z + 3.1]], '#EBB410', 0.2, false)
      }
    }
  })()

  /* ── 공급동 2F: 비상발전기실 · 유류탱크실 · 소화가스실 · 사무 윙 ── */
  ;(function genRoom() {
    const g = G('generator', 'power')
    function gen(x, y) {
      box(g, x, y, z, 12, 5.2, 0.9, '#B7A88C', { noedge: true })          // 스키드
      box(g, x + 0.3, y + 0.2, z + 0.9, 2.6, 4.8, 5.4, '#E4B640')         // 라디에이터
      for (let s = 0; s < 4; s++) box(g, x + 0.15, y + 0.6 + s * 1.05, z + 1.6, 0.18, 0.7, 4.2, '#B58A1C', { noedge: true })
      box(g, x + 3.2, y + 0.5, z + 0.9, 5, 4.2, 4.2, P.yel)               // 엔진
      cylDir(g, [x + 8.6, y + 2.6, z + 3], [x + 11.4, y + 2.6, z + 3], 1.5, '#EDBE4B', { seg: 16 })  // 알터네이터
      cylY(g, x + 11.4, y + 2.6, z + 3, 0.5, 0.24, '#C9971B')
      cylDir(g, [x + 3.7, y + 0.9, z + 5.8], [x + 7.6, y + 0.9, z + 5.8], 0.55, '#AFB6BD', { seg: 12 }) // 머플러
      pipe(g, [[x + 7.6, y + 0.9, z + 5.8], [x + 8.4, y + 0.9, z + 5.8], [x + 8.4, y + 0.9, z + 7.2]], '#8E8B82', 0.3, false)
      box(g, x + 4.8, y + 4.8, z + 5.3, 2, 0.24, 1.2, '#2E3238')
    }
    gen(10, 56); gen(23, 56); gen(10, 74); gen(23, 74)
    // DA 급기 루버 (서측)
    const d = G(null, null)
    for (let i = 0; i < 6; i++) box(d, 8.3, 55 + i * 6, z + 1 + (i % 2), 0.3, 4, 3, '#C6CDD3', { noedge: true })

    // 유류탱크실 — 일일 서비스 탱크
    const f = G('fuel', 'power')
    for (const ty of [50, 88]) {
      cylY(f, 4.6, ty + 3, z, 1.7, 4.6, '#E3D6BB', { seg: 16 })
      cylY(f, 4.6, ty + 3, z + 4.6, 1.75, 0.3, '#C9B98A', { seg: 16 })
      pipe(f, [[4.6, ty + 3, z + 1], [9, ty + 5, z + 1]], '#C9B98A', 0.2, false)
    }
  })()

  ;(function fireGas() {
    const g = G('fire-gas', 'mgmt')
    for (let i = 0; i < 6; i++) {
      const x = 31.5 + (i % 3) * 1.8, y = 47 + Math.floor(i / 3) * 2.2
      cylY(g, x, y, z, 0.62, 3.2, '#EDBE4B')
      cylY(g, x, y, z + 3.2, 0.26, 0.5, '#8A8577')
    }
    box(g, 36.8, 46.4, z, 2, 4.6, 2.2, '#CBD1D7')
  })()

  ;(function officeWing() {
    const d = G(null, null)
    // 운영사무실 데스크 3열
    for (let r = 0; r < 3; r++) {
      box(d, 44, 56 + r * 9, z, 8, 2.2, 1.05, P.wood)
      box(d, 45, 56.4 + r * 9, z + 1.1, 1.6, 0.2, 1, '#5E7A94')
      box(d, 48.5, 56.4 + r * 9, z + 1.1, 1.6, 0.2, 1, '#5E7A94')
      box(d, 45.5, 59 + r * 9, z, 1, 1, 1.1, '#6B7280', { noedge: true })
      box(d, 49, 59 + r * 9, z, 1, 1, 1.1, '#6B7280', { noedge: true })
    }
    // 회의실
    box(d, 45, 94.5, z, 8, 3.4, 1.05, P.wood)
    for (let c = 0; c < 4; c++) {
      box(d, 45.6 + c * 1.9, 93.2, z, 0.9, 0.9, 1.1, '#6B7280', { noedge: true })
      box(d, 45.6 + c * 1.9, 98.3, z, 0.9, 0.9, 1.1, '#6B7280', { noedge: true })
    }
  })()
}

/* ═══════════════ 옥상 ═══════════════ */
function buildRoof() {
  setFloor('roof')

  slab(MAIN.x0, MAIN.y0, LV.roof, MAIN.x1 - MAIN.x0, MAIN.y1 - MAIN.y0, 1, 'roof', P.roof, P.roofTop, 0.8)
  slab(SUP.x0, SUP.y0, LV.roof, SUP.x1 - SUP.x0, SUP.y1 - SUP.y0, 1, 'roof', P.roof, P.roofTop, 0.62)

  const z = LV.roof

  /* 파라펫 */
  ;(function parapet() {
    const d = G(null, null)
    box(d, MAIN.x0, MAIN.y0, z, MAIN.x1 - MAIN.x0, 0.5, 1.1, P.roof, { noedge: true })
    box(d, MAIN.x0, MAIN.y1 - 0.5, z, MAIN.x1 - MAIN.x0, 0.5, 1.1, P.roof, { noedge: true })
    box(d, MAIN.x0, MAIN.y0, z, 0.5, MAIN.y1 - MAIN.y0, 1.1, P.roof, { noedge: true })
    box(d, MAIN.x1 - 0.5, MAIN.y0, z, 0.5, MAIN.y1 - MAIN.y0, 1.1, P.roof, { noedge: true })
  })()

  /* 냉각탑 3기 (레퍼런스 tower 포팅) */
  ;(function towers() {
    const g = G('cooling-tower', 'cooling')
    function tower(x, y) {
      box(g, x, y, z, 10, 8, 1.4, '#DCD3C2')
      box(g, x + 0.3, y + 0.3, z + 1.4, 9.4, 7.4, 4.2, P.cream2)
      for (let s = 0; s < 4; s++) {
        box(g, x + 0.6, y + 7.5, z + 1.8 + s * 0.85, 8.8, 0.22, 0.34, '#C6B89E', { noedge: true })
        box(g, x + 9.5, y + 0.6, z + 1.8 + s * 0.85, 0.22, 6.8, 0.34, '#BCAE93', { noedge: true })
      }
      box(g, x, y, z + 5.6, 10, 8, 0.7, P.cream)
      fanTop(g, x + 2.7, y + 2.4, z + 6.3, 1.4)
      fanTop(g, x + 7.3, y + 2.4, z + 6.3, 1.4)
      fanTop(g, x + 2.7, y + 5.7, z + 6.3, 1.4)
      fanTop(g, x + 7.3, y + 5.7, z + 6.3, 1.4)
      ladder(g, x + 10.3, y + 4, z, 6.2)
    }
    tower(12, 7); tower(26, 7); tower(40, 7)
  })()

  /* 드라이쿨러 3기 */
  ;(function drycoolers() {
    const g = G('dry-cooler', 'cooling')
    function dryc(x, y) {
      box(g, x, y, z, 7.4, 1.5, 0.85, P.steel, { noedge: true })
      const v1 = box(g, x + 0.55, y + 0.4, z + 0.55, 6.3, 0.4, 3.7, '#E4C7A6'); v1.rotation.x = -0.42
      const v2 = box(g, x + 0.55, y + 4.85, z + 0.55, 6.3, 0.4, 3.7, '#E4C7A6'); v2.rotation.x = 0.42
      box(g, x + 0.3, y + 0.3, z + 3.4, 6.8, 4.9, 0.42, P.cream2)
      fanTop(g, x + 2, y + 2.7, z + 3.85, 1.2, '#B08A62')
      fanTop(g, x + 5.4, y + 2.7, z + 3.85, 1.2, '#B08A62')
    }
    dryc(62, 7); dryc(72, 7); dryc(82, 7)
  })()

  /* AHU · 배기 (장식) */
  ;(function ahu() {
    const d = G(null, null)
    box(d, 62, 22, z, 7, 5.4, 2.6, P.cream2)
    fanTop(d, 65.5, 24.7, z + 2.6, 1.4)
    box(d, 74, 22.5, z, 6, 4.6, 2, P.cream2)
    for (let s = 0; s < 3; s++) box(d, 74.3, 27, z + 0.4 + s * 0.55, 5.4, 0.2, 0.22, '#BCAE93', { noedge: true })
    // 공급동 옥상 배기 팬 (발전기 상부)
    for (const fy of [60, 78]) { box(d, 14, fy, z, 4, 4, 1, P.cream2); fanTop(d, 16, fy + 2, z + 1, 1.3) }
  })()
}

/* ═══════════════ 계통 배관 · 버스웨이 흐름 ═══════════════ */
function buildFlows() {
  /* B1 소속 배관 */
  setFloor('b1')

  // 전력: GIS → 공동구 → B1 전기실-1 수배전반
  ;(function powerIntake() {
    const g = G('gis', 'power')
    pipe(g, [[22, 54, 2.2], [22, 43, 2.2], [28, 40, 2.2], [28, 24, 2.2], [26, 14, 2.6]], '#EBB410', 0.34)
    // 인입 철탑 힌트 (부지 남서측) — 가공선 인입
    const d = G(null, null)
    const legs = [[-6, 96], [-2, 96], [-6, 100], [-2, 100]]
    for (let l = 0; l < 4; l++) cylDir(d, [legs[l][0], legs[l][1], 0], [-4, 98, 13], 0.2, '#8A9AA8', { seg: 8, pick: false })
    box(d, -6.5, 97.4, 7.6, 5, 0.5, 0.42, '#8A9AA8', { noedge: true })
  })()

  // 전력: 수배전반 → 변압기 → 동측 EPS 라이저 (B1→2F)
  ;(function powerRisers() {
    const g = G('switchgear', 'power')
    pipe(g, [[26, 14, 2.6], [44, 14, 2.6], [51, 10, 3.0]], '#EBB410', 0.3, false)
    pipe(g, [[56, 10, 3.0], [76, 30, 3.0], [101.5, 30, 3.0], [101.5, 30, 20.5], [93, 27, 20.5]], '#EBB410', 0.34)
    // 서측 라이저 (B1 → 1F 전기실1)
    pipe(g, [[24, 8, 2.8], [3.6, 8, 2.8], [3.6, 8, 11.6], [15, 8.5, 11.6]], '#EBB410', 0.3)
  })()

  // 응축수 루프: 옥상 냉각탑 ↔ B1 칠러 응축기
  ;(function condensate() {
    const g = G('fws', 'cooling')
    pipe(g, [[17, 12, 28.6], [17, 33, 28.6], [96, 33, 28.6], [96, 33, 3.6], [86, 12, 3.9]], '#9CC6E4', 0.42)
  })()

  // 냉수(FWS·공랭용): B1 칠러 → 서측 라이저 → 1F·2F 항온항습실 헤더
  ;(function chilled() {
    const g = G('fws', 'cooling')
    pipe(g, [[80, 6, 2.4], [60, 2.5, 2.4], [9.5, 2.5, 2.4], [9.5, 2.5, 21.9], [94, 2.5, 21.9]], '#3E9CD6', 0.42)
    setFloor('f1')
    pipe(g, [[9.5, 2.5, 12.9], [94, 2.5, 12.9]], '#3E9CD6', 0.3)
    for (const dx of [16, 39, 62, 85]) pipe(g, [[dx, 2.5, 12.9], [dx, 2.5, 11.2]], '#3E9CD6', 0.2, false)
    setFloor('f2')
    for (const dx of [16, 39, 62, 85]) pipe(g, [[dx, 2.5, 21.9], [dx, 2.5, 20.2]], '#3E9CD6', 0.2, false)
  })()

  /* 2F 소속 배관 */
  setFloor('f2')

  // 고온수(FWS·액랭용): CDU 회수 헤더 → 동측 라이저 → 옥상 드라이쿨러
  ;(function hotLoop() {
    const g = G('fws', 'cooling')
    pipe(g, [[43, 26.2, 20.7], [60, 26.2, 20.7], [96.5, 26.2, 20.7], [96.5, 26.2, 28.6], [96.5, 9, 28.6], [90, 9, 28.6]], '#E2793B', 0.42)
  })()

  // TCS: CDU → 각 핫아일 매니폴드
  ;(function tcsLoops() {
    const t = G('tcs', 'cooling')
    const m = G('manifold', 'cooling')
    const AISLES = [6.6, 9.6, 12.6, 15.6, 18.6]
    for (let r = 0; r < AISLES.length; r++) {
      const cduX = 43.5 + r * 4.6
      pipe(t, [[cduX, 23, 20.4], [cduX, 21.6, 21.5], [cduX, AISLES[r], 21.5]], '#0FA396', 0.26)
      pipe(m, [[cduX, AISLES[r], 21.5], [13.5, AISLES[r], 21.5]], '#0FA396', 0.26, false)
    }
  })()

  // 전력: 버스웨이 급전 (2F 전기실 → 버스웨이)
  ;(function buswayFeed() {
    const g = G('busway', 'power')
    pipe(g, [[24, 24.5, 20.8], [24, 21.5, 23.6], [24, 5.5, 23.6]], '#EBB410', 0.28)
    pipe(g, [[52, 24.5, 20.8], [52, 21.5, 23.6], [52, 5.5, 23.6]], '#EBB410', 0.28)
  })()

  // 전력: 비상발전기 → 전산동 라이저 (모선 연락)
  ;(function genTie() {
    const g = G('generator', 'power')
    pipe(g, [[16, 56, 24.6], [16, 44, 24.6], [80, 44, 24.6], [101.5, 33, 24.6], [101.5, 30, 20.8]], '#EBB410', 0.3)
  })()

  setFloor(null)
}

/* ═══════════════ 라벨 앵커 ═══════════════ */
export const LABELS = [
  ['cooling-tower', [31, 11, 34.2]],
  ['dry-cooler', [75.5, 9.5, 31.5]],
  ['crah', [50, 2.2, 23.6]],
  ['gpu-rack', [26, 12.6, 21.4]],
  ['containment', [38, 15.6, 21.3]],
  ['cold-plate', [22.7, 12.0, 20.9]],
  ['manifold', [20, 9.6, 21.6]],
  ['tcs', [47, 20, 21.6]],
  ['cdu', [52, 24.2, 20.4]],
  ['busway', [52, 8, 23.7]],
  ['pdu', [90, 26.5, 20.6]],
  ['storage', [74.5, 9, 20.8]],
  ['network', [84.5, 9, 20.8]],
  ['mmr', [3.8, 9, 11.6]],
  ['ups', [24, 8.6, 11.8]],
  ['battery', [50, 10.6, 11.6]],
  ['switchgear', [26, 12, 2.6]],
  ['transformer', [55, 7.5, 3.4]],
  ['gis', [21, 66, 3.2]],
  ['fuel', [-9, 57, 4.2]],
  ['generator', [17, 78.6, 23]],
  ['fire-gas', [34, 48, 21.6]],
  ['chiller', [79, 6.3, 2.6]],
  ['pumps', [90, 8.8, 2.2]],
  ['water-treatment', [95.7, 12, 4.4]],
  ['tes', [82, 25.5, 7]],
  ['fws', [9.5, 2.5, 17]],
  ['bms', [77, 25, 12.8]],
]
