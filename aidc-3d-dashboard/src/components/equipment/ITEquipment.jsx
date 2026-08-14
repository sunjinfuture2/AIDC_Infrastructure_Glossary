import { useMemo } from 'react'
import * as THREE from 'three'
import { FLOW_COLORS } from '../../constants.js'

/**
 * GPU rack row placeholder (전산실 rack line-ups on the 2F plan).
 * Server LEDs glow teal when the TCS liquid-cooling loop is running.
 */
export function GPURackRow({ racks = 6, tcsActive = true, ...props }) {
  const ledMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#0F172A',
        emissive: new THREE.Color(FLOW_COLORS.tcs),
        emissiveIntensity: tcsActive ? 1.2 : 0.08,
      }),
    [tcsActive],
  )

  return (
    <group {...props}>
      {Array.from({ length: racks }).map((_, i) => (
        <group key={i} position={[i * 0.72, 0, 0]}>
          {/* cabinet */}
          <mesh castShadow position={[0, 1.1, 0]}>
            <boxGeometry args={[0.62, 2.2, 1.1]} />
            <meshStandardMaterial color="#151B30" roughness={0.45} metalness={0.4} />
          </mesh>
          {/* front server LED slots */}
          {Array.from({ length: 6 }).map((_, s) => (
            <mesh
              key={s}
              material={ledMaterial}
              position={[0, 0.35 + s * 0.32, 0.56]}
            >
              <boxGeometry args={[0.5, 0.05, 0.02]} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  )
}

/** Hot-aisle containment shell over two facing rack rows. */
export function HotAisleContainment({ length = 4.4, ...props }) {
  return (
    <group {...props}>
      <mesh position={[0, 2.35, 0]}>
        <boxGeometry args={[length, 0.08, 1.6]} />
        <meshStandardMaterial
          color="#7A4A2B"
          transparent
          opacity={0.28}
          roughness={0.2}
        />
      </mesh>
    </group>
  )
}
