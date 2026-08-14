import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { LEVELS } from '../constants.js'
import { useSystemStore } from '../store/useSystemStore.js'

/**
 * Translucent building shell — columns + slab edges give the isometric
 * overview (page 1) its silhouette without hiding the interior floors.
 * On the basement page the 1F slab and glass shell fade out (cutaway view)
 * so the power infrastructure below stays readable.
 */
export default function Building() {
  const columnsX = [-7.5, -3.75, 0, 3.75, 7.5]
  const columnsZ = [-4.5, 4.5]
  const height = LEVELS.roof - LEVELS.basement

  const slabMat = useRef()
  const shellMat = useRef()

  useFrame((_, delta) => {
    const basementView = useSystemStore.getState().activeSection === 1
    if (slabMat.current) {
      slabMat.current.opacity = THREE.MathUtils.damp(
        slabMat.current.opacity, basementView ? 0.12 : 0.85, 3, delta)
    }
    if (shellMat.current) {
      shellMat.current.opacity = THREE.MathUtils.damp(
        shellMat.current.opacity, basementView ? 0.015 : 0.07, 3, delta)
    }
  })

  return (
    <group>
      {/* glass curtain-wall volume (1F → roof) */}
      <mesh position={[0, (LEVELS.first + LEVELS.roof) / 2, 0]}>
        <boxGeometry args={[16.2, LEVELS.roof - LEVELS.first, 10.2]} />
        <meshPhysicalMaterial
          ref={shellMat}
          color="#3E5C96"
          transparent
          opacity={0.07}
          roughness={0.1}
          metalness={0}
          side={2}
          depthWrite={false}
        />
      </mesh>

      {/* structural columns */}
      {columnsX.map((x) =>
        columnsZ.map((z) => (
          <mesh key={`${x}${z}`} position={[x, LEVELS.basement + height / 2, z]}>
            <boxGeometry args={[0.3, height, 0.3]} />
            <meshStandardMaterial color="#232C4A" roughness={0.8} />
          </mesh>
        )),
      )}

      {/* 1F slab (separates basement from data hall) */}
      <mesh position={[0, LEVELS.first - 0.55, 0]}>
        <boxGeometry args={[16.2, 0.25, 10.2]} />
        <meshStandardMaterial
          ref={slabMat}
          color="#1A2138"
          roughness={0.9}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* ground plane */}
      <mesh receiveShadow position={[0, LEVELS.basement - 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[120, 120]} />
        <meshStandardMaterial color="#080D1C" roughness={1} />
      </mesh>
    </group>
  )
}
