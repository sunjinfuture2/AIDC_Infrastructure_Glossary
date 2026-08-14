import { useSystemStore } from '../../store/useSystemStore.js'
import { FLOW_COLORS } from '../../constants.js'

const SYSTEMS = [
  {
    key: 'power',
    label: 'Power',
    sub: 'Switchgear · UPS · Busway',
    color: FLOW_COLORS.power,
  },
  {
    key: 'cooling',
    label: 'Cooling',
    sub: 'FWS / FWR · Fan Wall · Chiller',
    color: FLOW_COLORS.fws,
    secondary: FLOW_COLORS.fwr,
  },
  {
    key: 'tcs',
    label: 'TCS',
    sub: 'Liquid Cooling · CDU Loop',
    color: FLOW_COLORS.tcs,
  },
]

function Toggle({ on, color, onClick, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={onClick}
      className="relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200"
      style={{ backgroundColor: on ? color : 'rgba(255,255,255,0.15)' }}
    >
      <span
        className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-all duration-200"
        style={{ left: on ? 'calc(100% - 22px)' : '2px' }}
      />
    </button>
  )
}

/**
 * Glassmorphism control panel. Toggles write to the Zustand store; the 3D
 * flow shaders, particles, fans and LEDs react to those state changes in
 * real time (see FlowNetwork / equipment components).
 */
export default function ControlPanel() {
  const systems = useSystemStore((state) => state.systems)
  const toggleSystem = useSystemStore((state) => state.toggleSystem)

  return (
    <aside className="glass-panel absolute bottom-6 right-6 z-10 w-72 p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
        System Control
      </p>

      <ul className="mt-4 space-y-3">
        {SYSTEMS.map(({ key, label, sub, color, secondary }) => {
          const on = systems[key]
          return (
            <li
              key={key}
              className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-3"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-sm transition-opacity"
                    style={{ backgroundColor: color, opacity: on ? 1 : 0.3 }}
                  />
                  {secondary && (
                    <span
                      className="-ml-1 h-2 w-2 rounded-sm transition-opacity"
                      style={{ backgroundColor: secondary, opacity: on ? 1 : 0.3 }}
                    />
                  )}
                  <span className="text-sm font-semibold text-white">{label}</span>
                </div>
                <p className="mt-0.5 truncate text-[10px] text-white/40">{sub}</p>
              </div>
              <Toggle
                on={on}
                color={color}
                label={`Toggle ${label}`}
                onClick={() => toggleSystem(key)}
              />
            </li>
          )
        })}
      </ul>

      {/* flow color legend — strict color rules */}
      <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 border-t border-white/10 pt-3 text-[10px] text-white/50">
        <span className="flex items-center gap-1.5">
          <i className="h-[3px] w-4 rounded" style={{ background: FLOW_COLORS.power }} />
          Power
        </span>
        <span className="flex items-center gap-1.5">
          <i className="h-[3px] w-4 rounded" style={{ background: FLOW_COLORS.fws }} />
          Cold Water (FWS)
        </span>
        <span className="flex items-center gap-1.5">
          <i className="h-[3px] w-4 rounded" style={{ background: FLOW_COLORS.tcs }} />
          Liquid Cooling (TCS)
        </span>
        <span className="flex items-center gap-1.5">
          <i className="h-[3px] w-4 rounded" style={{ background: FLOW_COLORS.fwr }} />
          Hot Water (FWR)
        </span>
      </div>
    </aside>
  )
}
