import { create } from 'zustand'

/**
 * Global store bridging the HTML overlay and the 3D Canvas.
 *
 * Systems (each drives a family of flow animations in real time):
 *   power   → yellow busway / switchgear flows          (B1 → 1F)
 *   cooling → blue FWS + orange FWR facility water loop (roof ↔ 1F)
 *   tcs     → teal liquid-cooling loop to the GPU racks (CDU ↔ racks)
 */
export const useSystemStore = create((set) => ({
  systems: {
    power: true,
    cooling: true,
    tcs: true,
  },
  toggleSystem: (key) =>
    set((state) => ({
      systems: { ...state.systems, [key]: !state.systems[key] },
    })),
  setSystem: (key, value) =>
    set((state) => ({
      systems: { ...state.systems, [key]: value },
    })),

  /** 0 | 1 | 2 — nearest scroll page, written by the camera rig each frame. */
  activeSection: 0,
  setActiveSection: (index) =>
    set((state) =>
      state.activeSection === index ? state : { activeSection: index },
    ),
}))
