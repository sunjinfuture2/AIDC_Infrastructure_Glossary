import Header from './components/Header.jsx'
import Toolbar from './components/Toolbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Viewport from './components/Viewport.jsx'

export default function App() {
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
