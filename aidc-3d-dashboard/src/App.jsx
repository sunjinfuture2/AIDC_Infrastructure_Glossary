import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import { Suspense } from 'react'
import Experience from './components/Experience.jsx'
import ControlPanel from './components/ui/ControlPanel.jsx'
import SectionIndicator from './components/ui/SectionIndicator.jsx'
import Header from './components/ui/Header.jsx'
import { SCROLL_PAGES } from './constants.js'

export default function App() {
  return (
    <div className="relative h-full w-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [15, 15, 15], fov: 45, near: 0.1, far: 200 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#0b1020']} />
        <fog attach="fog" args={['#0b1020', 40, 90]} />
        <Suspense fallback={null}>
          {/*
            Strictly VERTICAL scroll — ScrollControls is vertical by default
            (horizontal={false}). 3 pages ↔ 3 camera waypoints.
          */}
          <ScrollControls pages={SCROLL_PAGES} damping={0.25} horizontal={false}>
            <Experience />
          </ScrollControls>
        </Suspense>
      </Canvas>

      {/* HTML UI overlay (absolute-positioned above the Canvas) */}
      <Header />
      <ControlPanel />
      <SectionIndicator />
    </div>
  )
}
