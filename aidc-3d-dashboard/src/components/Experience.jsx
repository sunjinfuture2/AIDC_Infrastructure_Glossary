import CameraRig from './CameraRig.jsx'
import Building from './Building.jsx'
import BasementFloor from './floors/BasementFloor.jsx'
import FirstFloor from './floors/FirstFloor.jsx'
import Rooftop from './floors/Rooftop.jsx'
import FlowNetwork from './FlowNetwork.jsx'

/**
 * Root of the 3D scene. Everything lives inside <ScrollControls> (see App),
 * so CameraRig can read useScroll() and fly the camera through the pages.
 */
export default function Experience() {
  return (
    <>
      <CameraRig />

      {/* lighting */}
      <ambientLight intensity={0.75} />
      <directionalLight
        castShadow
        position={[18, 24, 10]}
        intensity={1.6}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      <hemisphereLight args={['#8FA3D9', '#1A2036', 0.9]} />
      {/* interior fill lights — one per level so equipment stays readable */}
      <pointLight position={[0, -1.2, 0]} intensity={30} distance={16} color="#7C8FD1" />
      <pointLight position={[0, 3.5, 0]} intensity={30} distance={16} color="#7C8FD1" />
      <pointLight position={[0, 10, 0]} intensity={25} distance={14} color="#8FA3D9" />
      {/* NOTE: swap in <Environment preset="city" /> (drei) once online HDR
          fetching is acceptable, or point Environment `files` at a local HDR. */}

      {/* facility */}
      <Building />
      <BasementFloor />
      <FirstFloor />
      <Rooftop />
      <FlowNetwork />
    </>
  )
}
