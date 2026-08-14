/**
 * Shared constants between the 3D scene and the HTML overlay.
 *
 * FLOW COLOR RULES (strict — do not change per-component):
 *   Yellow → Power (busways, switchgear feeds)
 *   Blue   → Cold water  (FWS: Facility Water Supply)
 *   Orange → Hot water   (FWR: Facility Water Return)
 *   Teal   → Liquid cooling (TCS: Technology Cooling System)
 */
export const FLOW_COLORS = {
  power: '#F3C623',
  fws: '#3B82F6',
  fwr: '#F97316',
  tcs: '#14B8A6',
}

/**
 * Camera waypoints for the 3 scroll pages.
 * Layout reference (see floor-plan PDF):
 *   B1  (y ≈ -4): power infrastructure — switchgear rooms 전기실-1/2,
 *                 battery room 축전지실, UPS, mechanical room 기계실
 *   1F  (y ≈  0): data hall 전산실 with GPU rack rows + fan walls 항온항습실
 *   Roof(y ≈  8): chillers + cooling towers
 */
export const CAMERA_WAYPOINTS = [
  {
    // Page 1 — overall isometric view of the AIDC building
    position: [15, 15, 15],
    target: [0, 0, 0],
    fov: 45,
  },
  {
    // Page 2 — basement B1, power infrastructure (lower angle)
    position: [8.5, -0.8, 11.5],
    target: [-1, -3.6, -0.5],
    fov: 40,
  },
  {
    // Page 3 — 1F data hall + rooftop cooling (elevated, closer, SW corner)
    position: [-11, 8.5, 10.5],
    target: [-1, 2.8, -0.5],
    fov: 42,
  },
]

export const SCROLL_PAGES = CAMERA_WAYPOINTS.length

/** Floor elevations (world Y) used by every floor component. */
export const LEVELS = {
  basement: -4,
  first: 0,
  roof: 7.2,
}
