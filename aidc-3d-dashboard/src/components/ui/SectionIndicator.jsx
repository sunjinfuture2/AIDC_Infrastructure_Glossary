import { useSystemStore } from '../../store/useSystemStore.js'

const SECTIONS = [
  {
    title: 'Facility Overview',
    body: 'Isometric view of the AIDC building — B1 power plant, 1F data hall, rooftop heat rejection.',
  },
  {
    title: 'B1 · Power Infrastructure',
    body: 'Switchgear line-ups (전기실), battery room (축전지실) and UPS feed the yellow busway risers.',
  },
  {
    title: '1F + Roof · Cooling & Data Hall',
    body: 'Fan walls condition the GPU rack rows while the FWS/FWR water loop and teal TCS circuit reject heat through rooftop chillers and cooling towers.',
  },
]

/**
 * Left-side scroll narrative. `activeSection` is written by CameraRig every
 * frame, so the copy crossfades exactly in sync with the camera waypoints.
 */
export default function SectionIndicator() {
  const active = useSystemStore((state) => state.activeSection)

  return (
    <nav className="pointer-events-none absolute left-6 top-1/2 z-10 w-72 -translate-y-1/2">
      <ol className="space-y-6">
        {SECTIONS.map(({ title, body }, i) => {
          const isActive = i === active
          return (
            <li
              key={title}
              className="flex gap-3 transition-opacity duration-500"
              style={{ opacity: isActive ? 1 : 0.25 }}
            >
              <span
                className="mt-1 h-8 w-[3px] shrink-0 rounded-full transition-colors duration-500"
                style={{ backgroundColor: isActive ? '#F3C623' : 'rgba(255,255,255,0.2)' }}
              />
              <div>
                <h2 className="text-sm font-bold text-white">{title}</h2>
                {isActive && (
                  <p className="mt-1 text-xs leading-relaxed text-white/60">{body}</p>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
