import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'
import { CAMERA_WAYPOINTS } from '../constants.js'
import { useSystemStore } from '../store/useSystemStore.js'

const { lerp, damp } = THREE.MathUtils

/** Piecewise-lerp a [x,y,z] triple across the waypoint list at t ∈ [0,1]. */
function sampleWaypoints(key, t, out) {
  const segments = CAMERA_WAYPOINTS.length - 1
  const scaled = THREE.MathUtils.clamp(t, 0, 1) * segments
  const i = Math.min(Math.floor(scaled), segments - 1)
  const localT = smoothstep(scaled - i)
  const a = CAMERA_WAYPOINTS[i][key]
  const b = CAMERA_WAYPOINTS[i + 1][key]
  return out.set(
    lerp(a[0], b[0], localT),
    lerp(a[1], b[1], localT),
    lerp(a[2], b[2], localT),
  )
}

/** Ease each segment in/out so the camera "settles" on every page. */
function smoothstep(t) {
  return t * t * (3 - 2 * t)
}

/**
 * Animates the camera through the 3 waypoints as the user scrolls.
 * scroll.offset (0 → 1) is mapped over the waypoint path, then the actual
 * camera is exponentially damped toward the sampled pose for extra smoothness
 * on top of ScrollControls' own damping.
 */
export default function CameraRig() {
  const scroll = useScroll()
  const camera = useThree((state) => state.camera)
  const setActiveSection = useSystemStore((state) => state.setActiveSection)

  const targetPos = useRef(new THREE.Vector3())
  const targetLook = useRef(new THREE.Vector3())
  const currentLook = useRef(new THREE.Vector3(0, 0, 0))

  useFrame((_, delta) => {
    const t = scroll.offset

    sampleWaypoints('position', t, targetPos.current)
    sampleWaypoints('target', t, targetLook.current)

    // Exponential damping — framerate-independent smooth follow.
    camera.position.x = damp(camera.position.x, targetPos.current.x, 3, delta)
    camera.position.y = damp(camera.position.y, targetPos.current.y, 3, delta)
    camera.position.z = damp(camera.position.z, targetPos.current.z, 3, delta)

    currentLook.current.x = damp(currentLook.current.x, targetLook.current.x, 3, delta)
    currentLook.current.y = damp(currentLook.current.y, targetLook.current.y, 3, delta)
    currentLook.current.z = damp(currentLook.current.z, targetLook.current.z, 3, delta)
    camera.lookAt(currentLook.current)

    // FOV blend between waypoints
    const segments = CAMERA_WAYPOINTS.length - 1
    const scaled = THREE.MathUtils.clamp(t, 0, 1) * segments
    const i = Math.min(Math.floor(scaled), segments - 1)
    const fov = lerp(
      CAMERA_WAYPOINTS[i].fov,
      CAMERA_WAYPOINTS[i + 1].fov,
      smoothstep(scaled - i),
    )
    if (Math.abs(camera.fov - fov) > 0.01) {
      camera.fov = damp(camera.fov, fov, 3, delta)
      camera.updateProjectionMatrix()
    }

    // Publish the nearest page to the store so the HTML overlay can react.
    setActiveSection(Math.round(t * segments))
  })

  return null
}
