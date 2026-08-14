import { FLOW_COLORS } from '../../constants.js'

/*
 * B1 power-infrastructure placeholders (swap for GLTF later — each component
 * is a <group> wrapper so a <PlaceholderModel url=... /> drops straight in).
 * Layout follows the B1 floor plan: 전기실-1/2 (switchgear), 축전지실 (batteries).
 */

const steel = { color: '#37415C', roughness: 0.55, metalness: 0.35 }

/** Switchgear line-up — a row of tall cabinets (전기실 / MV-LV switchgear). */
export function Switchgear({ sections = 5, glow = false, ...props }) {
  return (
    <group {...props}>
      {Array.from({ length: sections }).map((_, i) => (
        <group key={i} position={[i * 0.62, 0, 0]}>
          <mesh castShadow position={[0, 0.85, 0]}>
            <boxGeometry args={[0.55, 1.7, 0.9]} />
            <meshStandardMaterial {...steel} />
          </mesh>
          {/* status lamp strip */}
          <mesh position={[0, 1.45, 0.46]}>
            <boxGeometry args={[0.4, 0.06, 0.02]} />
            <meshStandardMaterial
              color={FLOW_COLORS.power}
              emissive={FLOW_COLORS.power}
              emissiveIntensity={glow ? 1.6 : 0.25}
            />
          </mesh>
        </group>
      ))}
    </group>
  )
}

/** UPS block — twin cabinets on a plinth. */
export function UPS({ glow = false, ...props }) {
  return (
    <group {...props}>
      <mesh receiveShadow position={[0, 0.05, 0]}>
        <boxGeometry args={[2.1, 0.1, 1.1]} />
        <meshStandardMaterial color="#232A40" roughness={0.9} />
      </mesh>
      {[-0.55, 0.55].map((x) => (
        <mesh key={x} castShadow position={[x, 0.75, 0]}>
          <boxGeometry args={[0.95, 1.3, 0.9]} />
          <meshStandardMaterial color="#414D74" roughness={0.5} metalness={0.3} />
        </mesh>
      ))}
      <mesh position={[0, 1.2, 0.46]}>
        <boxGeometry args={[1.6, 0.05, 0.02]} />
        <meshStandardMaterial
          color={FLOW_COLORS.power}
          emissive={FLOW_COLORS.power}
          emissiveIntensity={glow ? 1.4 : 0.2}
        />
      </mesh>
    </group>
  )
}

/** Battery room rack — stacked battery modules (축전지실). */
export function BatteryRack({ shelves = 4, modules = 5, ...props }) {
  return (
    <group {...props}>
      <mesh castShadow position={[0, 0.8, 0]}>
        <boxGeometry args={[modules * 0.42 + 0.1, 1.6, 0.7]} />
        <meshStandardMaterial color="#2A3350" roughness={0.7} metalness={0.2} />
      </mesh>
      {Array.from({ length: shelves }).map((_, s) =>
        Array.from({ length: modules }).map((_, m) => (
          <mesh
            key={`${s}-${m}`}
            position={[(m - (modules - 1) / 2) * 0.42, 0.28 + s * 0.38, 0.34]}
          >
            <boxGeometry args={[0.34, 0.26, 0.06]} />
            <meshStandardMaterial
              color="#111827"
              emissive={FLOW_COLORS.power}
              emissiveIntensity={0.12}
            />
          </mesh>
        )),
      )}
    </group>
  )
}

/** Diesel generator placeholder (비상발전기). */
export function Generator(props) {
  return (
    <group {...props}>
      <mesh receiveShadow position={[0, 0.08, 0]}>
        <boxGeometry args={[2.6, 0.16, 1.2]} />
        <meshStandardMaterial color="#1E2438" roughness={0.9} />
      </mesh>
      <mesh castShadow position={[-0.5, 0.75, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.48, 0.48, 1.5, 20]} />
        <meshStandardMaterial color="#4C5878" roughness={0.45} metalness={0.4} />
      </mesh>
      <mesh castShadow position={[0.85, 0.7, 0]}>
        <boxGeometry args={[0.8, 1.05, 1.0]} />
        <meshStandardMaterial {...steel} />
      </mesh>
    </group>
  )
}
