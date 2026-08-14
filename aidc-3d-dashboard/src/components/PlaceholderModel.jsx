// import { useGLTF } from '@react-three/drei'

/**
 * GLTF swap-in point.
 *
 * Every equipment component renders primitive meshes today. When the real
 * assets are ready, drop the .glb files into /public/models and replace the
 * primitive JSX with this component, e.g.:
 *
 *   <PlaceholderModel url="/models/gpu-rack.glb" scale={0.5} />
 *
 * Uncomment the implementation below (and the preloads) — nothing else in the
 * scene graph needs to change because every equipment component already
 * receives position/rotation via its group wrapper.
 */
export default function PlaceholderModel({ url, ...props }) {
  // const { scene } = useGLTF(url)
  // return <primitive object={scene} {...props} />
  console.warn(`PlaceholderModel: GLTF loading is stubbed (${url}). See comments.`)
  return null
}

// Preload models once real assets exist:
// useGLTF.preload('/models/gpu-rack.glb')
// useGLTF.preload('/models/cooling-tower.glb')
