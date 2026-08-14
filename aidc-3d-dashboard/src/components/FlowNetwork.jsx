import FlowPipe from './flow/FlowPipe.jsx'
import FlowParticles from './flow/FlowParticles.jsx'
import { FLOW_COLORS, LEVELS } from '../constants.js'
import { useSystemStore } from '../store/useSystemStore.js'

const B1 = LEVELS.basement
const F1 = LEVELS.first
const RF = LEVELS.roof

/**
 * Every animated resource route in the facility, driven by the Zustand store.
 *
 *   POWER  (yellow) : switchgear B1 → UPS → riser → busway over the rack rows
 *   FWS    (blue)   : chillers RF → riser → fan walls / CDU on 1F
 *   FWR    (orange) : fan walls / CDU 1F → riser → cooling towers RF
 *   TCS    (teal)   : CDU ↔ GPU racks closed loop (pipe + particle stream)
 */
export default function FlowNetwork() {
  const { power, cooling, tcs } = useSystemStore((state) => state.systems)

  return (
    <group>
      {/* ── POWER (yellow) ─────────────────────────────────────────── */}
      {/* switchgear → UPS across B1 */}
      <FlowPipe
        color={FLOW_COLORS.power}
        active={power}
        speed={1.6}
        points={[
          [-6.2, B1 + 1.9, -2.3],
          [-3.5, B1 + 2.4, -2.3],
          [0.5, B1 + 2.4, -1.6],
          [3.6, B1 + 1.6, -1.6],
        ]}
      />
      {/* UPS → riser → 1F busway above the rack rows */}
      <FlowPipe
        color={FLOW_COLORS.power}
        active={power}
        speed={1.6}
        points={[
          [3.6, B1 + 1.6, -1.6],
          [5.6, B1 + 2.6, -1.6],
          [5.6, F1 + 2.8, -1.6],
          [-0.5, F1 + 2.8, -1.6],
          [-4.5, F1 + 2.8, -1.6],
        ]}
      />
      <FlowPipe
        color={FLOW_COLORS.power}
        active={power}
        speed={1.6}
        points={[
          [5.6, F1 + 2.8, 0.2],
          [-0.5, F1 + 2.8, 1.6],
          [-4.5, F1 + 2.8, 1.6],
        ]}
      />

      {/* ── FWS — cold facility water (blue) ───────────────────────── */}
      {/* chiller plant → riser (east) → fan walls */}
      <FlowPipe
        color={FLOW_COLORS.fws}
        active={cooling}
        radius={0.09}
        speed={1.1}
        points={[
          [-2.0, RF + 0.4, 1.8],
          [2.5, RF + 0.5, 1.8],
          [6.4, RF + 0.3, 1.0],
          [6.4, F1 + 1.5, 0.0],
          [3.9, F1 + 1.2, -1.9],
          [0.6, F1 + 1.4, -4.2],
          [-3.6, F1 + 1.4, -4.2],
        ]}
      />
      {/* chillers ← cooling towers condenser side (short roof loop) */}
      <FlowPipe
        color={FLOW_COLORS.fws}
        active={cooling}
        radius={0.07}
        speed={0.9}
        points={[
          [-2.2, RF + 1.0, -2.2],
          [-2.6, RF + 0.7, 0.2],
          [-3.0, RF + 0.5, 1.6],
        ]}
      />

      {/* ── FWR — warm return water (orange) ───────────────────────── */}
      <FlowPipe
        color={FLOW_COLORS.fwr}
        active={cooling}
        radius={0.09}
        speed={1.1}
        points={[
          [-3.6, F1 + 0.9, -4.0],
          [0.6, F1 + 0.9, -4.0],
          [4.2, F1 + 0.8, -2.4],
          [7.0, F1 + 1.6, -0.6],
          [7.0, RF + 0.3, -1.2],
          [2.6, RF + 0.6, -2.8],
          [0.2, RF + 1.3, -2.8],
        ]}
      />

      {/* ── TCS — liquid cooling loop (teal) ───────────────────────── */}
      {/* CDU supply manifold weaving through the rack rows */}
      <FlowPipe
        color={FLOW_COLORS.tcs}
        active={tcs}
        radius={0.055}
        speed={2.0}
        dashes={20}
        points={[
          [3.4, F1 + 1.0, -0.8],
          [1.2, F1 + 2.2, -0.8],
          [-2.0, F1 + 2.2, -2.4],
          [-4.6, F1 + 2.2, -2.4],
          [-4.6, F1 + 2.2, 0.8],
          [-2.0, F1 + 2.2, 2.4],
          [1.2, F1 + 2.2, 2.4],
          [3.4, F1 + 1.0, 0.8],
        ]}
      />
      {/* particle stream riding the same loop for extra emphasis */}
      <FlowParticles
        color={FLOW_COLORS.tcs}
        active={tcs}
        count={80}
        speed={0.06}
        points={[
          [3.4, F1 + 1.0, -0.8],
          [1.2, F1 + 2.2, -0.8],
          [-2.0, F1 + 2.2, -2.4],
          [-4.6, F1 + 2.2, -2.4],
          [-4.6, F1 + 2.2, 0.8],
          [-2.0, F1 + 2.2, 2.4],
          [1.2, F1 + 2.2, 2.4],
          [3.4, F1 + 1.0, 0.8],
        ]}
      />
    </group>
  )
}
