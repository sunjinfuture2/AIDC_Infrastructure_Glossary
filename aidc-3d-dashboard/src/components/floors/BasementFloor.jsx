import FloorLabel from '../FloorLabel.jsx'
import { LEVELS } from '../../constants.js'
import { Switchgear, UPS, BatteryRack, Generator } from '../equipment/PowerEquipment.jsx'
import { useSystemStore } from '../../store/useSystemStore.js'

/**
 * B1 — Power infrastructure floor.
 * Spatial layout follows the basement floor plan (지하1층 평면도):
 *   · 전기실-1 / 전기실-2 (switchgear rooms) on the west & center bays
 *   · 축전지실 (battery room) at center-south
 *   · 기계실 (mechanical/UPS bay) on the east side
 */
export default function BasementFloor() {
  const powerOn = useSystemStore((state) => state.systems.power)
  const y = LEVELS.basement

  return (
    <group position={[0, y, 0]}>
      {/* floor slab */}
      <mesh receiveShadow position={[0, -0.05, 0]}>
        <boxGeometry args={[16, 0.1, 10]} />
        <meshStandardMaterial color="#141A2E" roughness={0.95} />
      </mesh>

      {/* 전기실-1 — main switchgear line-up, west bay */}
      <Switchgear glow={powerOn} sections={6} position={[-6.6, 0, -3.2]} />
      <Switchgear glow={powerOn} sections={6} position={[-6.6, 0, -1.4]} />

      {/* 전기실-2 — secondary switchgear, center bay */}
      <Switchgear glow={powerOn} sections={4} position={[-1.4, 0, -3.2]} />

      {/* 축전지실 — battery racks, center-south */}
      <BatteryRack position={[-1.8, 0, 1.6]} />
      <BatteryRack position={[-1.8, 0, 3.0]} />
      <BatteryRack position={[0.9, 0, 1.6]} />
      <BatteryRack position={[0.9, 0, 3.0]} />

      {/* UPS bay */}
      <UPS glow={powerOn} position={[3.6, 0, -2.6]} />
      <UPS glow={powerOn} position={[3.6, 0, -0.6]} />

      {/* 기계실 — mechanical room / emergency generator, east bay */}
      <Generator position={[6.0, 0, 2.2]} />

      <FloorLabel position={[-7.6, 0.02, 4.6]}>B1 · POWER INFRASTRUCTURE</FloorLabel>
    </group>
  )
}
