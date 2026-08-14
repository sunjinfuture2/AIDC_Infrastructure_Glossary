import FloorLabel from '../FloorLabel.jsx'
import { LEVELS } from '../../constants.js'
import { Chiller, CoolingTower } from '../equipment/CoolingEquipment.jsx'
import { useSystemStore } from '../../store/useSystemStore.js'

/**
 * Rooftop — heat-rejection plant: chillers + cooling towers.
 * FWS (blue) leaves this level, FWR (orange) returns to it.
 */
export default function Rooftop() {
  const cooling = useSystemStore((state) => state.systems.cooling)
  const y = LEVELS.roof

  return (
    <group position={[0, y, 0]}>
      {/* roof slab */}
      <mesh receiveShadow position={[0, -0.05, 0]}>
        <boxGeometry args={[16, 0.1, 10]} />
        <meshStandardMaterial color="#1C2440" roughness={0.85} />
      </mesh>

      {/* cooling towers, north row */}
      <CoolingTower active={cooling} position={[-4.6, 0, -2.8]} />
      <CoolingTower active={cooling} position={[-2.2, 0, -2.8]} />
      <CoolingTower active={cooling} position={[0.2, 0, -2.8]} />

      {/* chiller plant, south row */}
      <Chiller position={[-3.4, 0, 1.8]} />
      <Chiller position={[0.6, 0, 1.8]} />

      <FloorLabel position={[-7.6, 0.02, 4.6]}>ROOF · HEAT REJECTION</FloorLabel>
    </group>
  )
}
