# AIDC 3D Infrastructure Dashboard

Interactive, scroll-driven 3D dashboard of an AI Data Center built with
React Three Fiber.

## Stack

- **React 18 + Vite**
- **@react-three/fiber** — R3F renderer
- **@react-three/drei** — `ScrollControls`, `useScroll`, `Text`
- **Zustand** — shared state between the 3D Canvas and the HTML overlay
- **Tailwind CSS** — glassmorphism UI overlay

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## How it works

### Vertical scroll → camera waypoints

`<ScrollControls pages={3} horizontal={false}>` (App.jsx) drives a strictly
vertical scroll. `CameraRig.jsx` reads `useScroll().offset` every frame and
piecewise-lerps (with `THREE.MathUtils.lerp` + exponential damping) through
the three waypoints defined in `src/constants.js`:

| Page | Scroll | View |
| ---- | ------ | ---- |
| 1 | 0.0 | Isometric overview, camera `[15, 15, 15]` → `[0, 0, 0]` |
| 2 | 0.5 | B1 power infrastructure (switchgear, UPS, batteries) |
| 3 | 1.0 | 1F data hall + rooftop cooling (racks, fan walls, chillers, towers) |

### Flow animations

`FlowNetwork.jsx` declares every resource route as a `FlowPipe`
(TubeGeometry + custom scrolling-dash shader) and/or `FlowParticles`
(points advancing along a CatmullRom curve). Strict color rules:

| Color | System |
| ----- | ------ |
| 🟡 Yellow `#F3C623` | Power (busway) |
| 🔵 Blue `#3B82F6` | Cold water — FWS |
| 🟠 Orange `#F97316` | Hot water — FWR |
| 🩵 Teal `#14B8A6` | Liquid cooling — TCS |

### State management

`src/store/useSystemStore.js` (Zustand) holds `systems.{power,cooling,tcs}`.
The glass control panel toggles them; pipes, particles, fan spin and rack
LEDs ease on/off in real time. `activeSection` flows the other way — the
camera rig writes the current page so the HTML narrative stays in sync.

## Swapping in real 3D assets

Every equipment component (`src/components/equipment/*`) is a `<group>`
of primitive meshes. Drop `.glb` files into `public/models/` and replace the
primitives with `PlaceholderModel` (`src/components/PlaceholderModel.jsx`),
which contains the ready-to-uncomment `useGLTF` implementation — positions,
rotations and store wiring stay untouched.

## Layout reference

The spatial arrangement follows the Chung-ju datacenter floor plans:
B1 electrical rooms (전기실-1/2) + battery room (축전지실), 1F/2F data hall
(전산실) with fan-wall gallery (항온항습실), and rooftop heat rejection.
