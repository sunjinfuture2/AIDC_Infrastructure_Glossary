import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Toolbar from './components/Toolbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Viewport from './components/Viewport.jsx'
import { useAppStore } from './store/useAppStore.js'
import singleHtml from './single/aidc-single.html?raw'

export default function App() {
  const mode = useAppStore((s) => s.mode)
  const setMode = useAppStore((s) => s.setMode)

  /* 단층(원본 HTML) 쪽 드롭다운에서 '복층' 선택 → 메시지로 복귀 */
  useEffect(() => {
    const onMessage = (e) => {
      if (e.data && e.data.aidcMode === 'multi') setMode('multi')
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [setMode])

  /* 단층 모드: 업로드된 원본 코드를 수정 없이 그대로 전체 화면 iframe으로 구동 */
  if (mode === 'single') {
    return <iframe className="single-frame" title="인터랙티브 인프라 용어사전 · 단층" srcDoc={singleHtml} />
  }

  return (
    <div className="app-shell">
      <Header />
      <div className="wrap">
        <Sidebar />
        <main className="stage">
          <Toolbar />
          <Viewport />
        </main>
      </div>
    </div>
  )
}
