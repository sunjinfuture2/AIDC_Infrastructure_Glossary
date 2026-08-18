import { useEffect, useRef } from 'react'
import Header from './components/Header.jsx'
import Toolbar from './components/Toolbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Viewport from './components/Viewport.jsx'
import { useAppStore } from './store/useAppStore.js'

/* 단층 원본과 동일한 고정 디자인 캔버스 (창에 맞춰 축소·중앙 정렬) */
const DESIGN_W = 1908
const DESIGN_H = 928

export default function App() {
  const mode = useAppStore((s) => s.mode)
  const shellRef = useRef(null)

  /* 단층 기준 레이아웃: 1908×928 캔버스를 min(w/1908, h/928) 배율로 스케일 */
  useEffect(() => {
    const el = shellRef.current
    if (!el) return
    const apply = () => {
      const s = Math.max(0.1, Math.min(window.innerWidth / DESIGN_W, window.innerHeight / DESIGN_H))
      window.__designScale = s
      el.style.transform = `scale(${s})`
      el.style.left = (window.innerWidth - DESIGN_W * s) / 2 + 'px'
      el.style.top = (window.innerHeight - DESIGN_H * s) / 2 + 'px'
    }
    apply()
    window.addEventListener('resize', apply)
    return () => window.removeEventListener('resize', apply)
  }, [])

  return (
    <div className="app-shell" ref={shellRef}>
      <Header />
      <div className="wrap">
        <Sidebar />
        <main className="stage">
          <Toolbar />
          {/* 복층/단층 전환: 레이아웃은 그대로, 3D 씬만 재마운트로 교체 */}
          <Viewport key={mode} />
        </main>
      </div>
    </div>
  )
}
