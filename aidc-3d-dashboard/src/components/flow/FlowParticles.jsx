import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Particle stream along a path — complements FlowPipe for the highest-emphasis
 * routes (e.g. the TCS liquid-cooling loop). Particles are distributed along a
 * CatmullRom curve and advance with time; they collapse to the start point and
 * fade out when the system is toggled off.
 */
export default function FlowParticles({
  points,
  color,
  active = true,
  count = 60,
  size = 0.09,
  speed = 0.08,
}) {
  const pointsRef = useRef()
  const materialRef = useRef()
  const intensity = useRef(active ? 1 : 0)

  const { curve, offsets, positions } = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(
      points.map((p) => new THREE.Vector3(...p)),
      false,
      'catmullrom',
      0.1,
    )
    const offsets = Float32Array.from({ length: count }, (_, i) => i / count)
    const positions = new Float32Array(count * 3)
    return { curve, offsets, positions }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const tmp = useMemo(() => new THREE.Vector3(), [])

  useFrame((state, delta) => {
    if (!pointsRef.current) return
    intensity.current = THREE.MathUtils.damp(intensity.current, active ? 1 : 0, 6, delta)

    const t = state.clock.elapsedTime * speed
    const attr = pointsRef.current.geometry.attributes.position
    for (let i = 0; i < count; i += 1) {
      const u = (offsets[i] + t) % 1
      curve.getPointAt(u, tmp)
      attr.array[i * 3 + 0] = tmp.x
      attr.array[i * 3 + 1] = tmp.y
      attr.array[i * 3 + 2] = tmp.z
    }
    attr.needsUpdate = true

    if (materialRef.current) {
      materialRef.current.opacity = 0.9 * intensity.current
      materialRef.current.size = size * (0.4 + 0.6 * intensity.current)
    }
  })

  return (
    <points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        color={color}
        size={size}
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
