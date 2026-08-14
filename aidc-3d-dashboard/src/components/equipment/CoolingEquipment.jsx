import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { FLOW_COLORS } from '../../constants.js'

/*
 * Cooling-infrastructure placeholders: fan walls (항온항습실), chillers,
 * cooling towers, and the CDU that feeds the TCS liquid-cooling loop.
 * Fan blades actually spin when the cooling system is on.
 */

/** One spinning fan; speed eases with the `active` flag. */
function Fan({ radius = 0.32, active = true, ...props }) {
  const bladesRef = useRef()
  const speed = useRef(active ? 1 : 0)

  useFrame((_, delta) => {
    speed.current = THREE.MathUtils.damp(speed.current, active ? 1 : 0, 2.5, delta)
    if (bladesRef.current) bladesRef.current.rotation.z += delta * 7 * speed.current
  })

  return (
    <group {...props}>
      <mesh>
        <torusGeometry args={[radius, 0.035, 8, 24]} />
        <meshStandardMaterial color="#556086" roughness={0.5} metalness={0.4} />
      </mesh>
      <group ref={bladesRef}>
        {[0, 1, 2, 3, 4].map((i) => (
          <mesh key={i} rotation={[0, 0, (i / 5) * Math.PI * 2]} position={[0, 0, 0]}>
            <boxGeometry args={[radius * 1.75, 0.09, 0.02]} />
            <meshStandardMaterial color="#8B96C2" roughness={0.4} metalness={0.5} />
          </mesh>
        ))}
      </group>
    </group>
  )
}

/** Fan wall unit — grid of spinning fans facing the data hall. */
export function FanWall({ cols = 3, rows = 2, active = true, ...props }) {
  return (
    <group {...props}>
      <mesh castShadow position={[0, (rows * 0.85) / 2, -0.12]}>
        <boxGeometry args={[cols * 0.85 + 0.2, rows * 0.85 + 0.2, 0.35]} />
        <meshStandardMaterial color="#2C3552" roughness={0.6} metalness={0.25} />
      </mesh>
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <Fan
            key={`${r}-${c}`}
            active={active}
            position={[
              (c - (cols - 1) / 2) * 0.85,
              0.55 + r * 0.85,
              0.08,
            ]}
          />
        )),
      )}
    </group>
  )
}

/** Water-cooled chiller — long shell-and-tube barrels on a skid. */
export function Chiller(props) {
  return (
    <group {...props}>
      <mesh receiveShadow position={[0, 0.09, 0]}>
        <boxGeometry args={[3.0, 0.18, 1.3]} />
        <meshStandardMaterial color="#1E2438" roughness={0.9} />
      </mesh>
      {[0.42, 1.0].map((y, i) => (
        <mesh key={y} castShadow position={[0, y, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.3, 0.3, 2.7, 20]} />
          <meshStandardMaterial
            color={i === 0 ? '#3E9CD6' : '#43508A'}
            roughness={0.4}
            metalness={0.45}
          />
        </mesh>
      ))}
      <mesh castShadow position={[1.15, 0.85, 0.4]}>
        <boxGeometry args={[0.5, 0.8, 0.4]} />
        <meshStandardMaterial color="#2C3552" roughness={0.6} />
      </mesh>
    </group>
  )
}

/** Rooftop cooling tower with a top fan. */
export function CoolingTower({ active = true, ...props }) {
  return (
    <group {...props}>
      <mesh castShadow position={[0, 0.8, 0]}>
        <boxGeometry args={[1.7, 1.6, 1.7]} />
        <meshStandardMaterial color="#3A4568" roughness={0.55} metalness={0.25} />
      </mesh>
      {/* louvers */}
      {[0.35, 0.65, 0.95].map((y) => (
        <mesh key={y} position={[0, y, 0.86]}>
          <boxGeometry args={[1.5, 0.16, 0.03]} />
          <meshStandardMaterial color="#242C4A" roughness={0.8} />
        </mesh>
      ))}
      <mesh castShadow position={[0, 1.75, 0]}>
        <cylinderGeometry args={[0.55, 0.7, 0.35, 20]} />
        <meshStandardMaterial color="#4C5878" roughness={0.5} metalness={0.35} />
      </mesh>
      <Fan radius={0.42} active={active} position={[0, 1.95, 0]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

/** CDU — Coolant Distribution Unit for the TCS (liquid-cooling) loop. */
export function CDU({ glow = false, ...props }) {
  return (
    <group {...props}>
      <mesh castShadow position={[0, 0.9, 0]}>
        <boxGeometry args={[0.8, 1.8, 1.0]} />
        <meshStandardMaterial color="#1F4C4A" roughness={0.5} metalness={0.3} />
      </mesh>
      <mesh position={[0, 1.35, 0.51]}>
        <boxGeometry args={[0.55, 0.35, 0.02]} />
        <meshStandardMaterial
          color={FLOW_COLORS.tcs}
          emissive={FLOW_COLORS.tcs}
          emissiveIntensity={glow ? 1.8 : 0.25}
        />
      </mesh>
    </group>
  )
}
