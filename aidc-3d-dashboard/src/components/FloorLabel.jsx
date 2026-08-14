import { useMemo } from 'react'
import * as THREE from 'three'

/**
 * Lightweight floor tag rendered to a CanvasTexture — no font fetching, so it
 * works fully offline (drei's <Text> pulls troika font data from a CDN).
 * Lies flat on the slab; width scales with the text length.
 */
export default function FloorLabel({ children, color = '#4A5578', size = 0.55, ...props }) {
  const { texture, aspect } = useMemo(() => {
    const text = String(children)
    const font = `700 64px 'Segoe UI', 'Helvetica Neue', Arial, sans-serif`

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    ctx.font = font
    const w = Math.ceil(ctx.measureText(text).width) + 16
    canvas.width = w
    canvas.height = 96

    ctx.font = font
    ctx.textBaseline = 'middle'
    ctx.fillStyle = color
    ctx.fillText(text, 8, 48)

    const texture = new THREE.CanvasTexture(canvas)
    texture.anisotropy = 4
    return { texture, aspect: w / 96 }
  }, [children, color])

  return (
    // Left-anchored like drei's <Text anchorX="left"> so floor tags line up.
    <group {...props}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[(size * aspect) / 2, 0, 0]}>
        <planeGeometry args={[size * aspect, size]} />
        <meshBasicMaterial map={texture} transparent depthWrite={false} />
      </mesh>
    </group>
  )
}
