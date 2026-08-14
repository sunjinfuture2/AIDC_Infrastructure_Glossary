import FloorLabel from '../FloorLabel.jsx'
import { LEVELS } from '../../constants.js'
import { GPURackRow, HotAisleContainment } from '../equipment/ITEquipment.jsx'
import { FanWall, CDU } from '../equipment/CoolingEquipment.jsx'
import { useSystemStore } from '../../store/useSystemStore.js'

/**
 * 1F — Data hall.
 * Layout follows the 전산실 plan: parallel GPU rack rows in the hall,
 * a fan-wall gallery (항온항습실) along the north edge, and CDUs feeding
 * the TCS liquid-cooling loop at the east end of the hall.
 */
export default function FirstFloor() {
  const { cooling, tcs } = useSystemStore((state) => state.systems)
  const y = LEVELS.first

  const rackRows = [-2.4, -0.8, 0.8, 2.4]

  return (
    <group position={[0, y, 0]}>
      {/* raised floor slab */}
      <mesh receiveShadow position={[0, -0.05, 0]}>
        <boxGeometry args={[16, 0.1, 10]} />
        <meshStandardMaterial color="#182036" roughness={0.9} />
      </mesh>

      {/* GPU rack rows (전산실) */}
      {rackRows.map((z, i) => (
        <GPURackRow
          key={z}
          racks={7}
          tcsActive={tcs}
          position={[-4.3, 0, z]}
          rotation={[0, i % 2 ? Math.PI : 0, 0]}
        />
      ))}
      <HotAisleContainment length={5.2} position={[-2.15, 0, -1.6]} />
      <HotAisleContainment length={5.2} position={[-2.15, 0, 1.6]} />

      {/* Fan-wall gallery (항온항습실) along the north edge */}
      <FanWall cols={4} rows={2} active={cooling} position={[-3.6, 0, -4.4]} />
      <FanWall cols={4} rows={2} active={cooling} position={[0.6, 0, -4.4]} />

      {/* CDUs — TCS loop source, east end of the hall */}
      <CDU glow={tcs} position={[3.4, 0, -0.8]} />
      <CDU glow={tcs} position={[3.4, 0, 0.8]} />

      <FloorLabel position={[-7.6, 0.02, 4.6]}>1F · DATA HALL</FloorLabel>
    </group>
  )
}
