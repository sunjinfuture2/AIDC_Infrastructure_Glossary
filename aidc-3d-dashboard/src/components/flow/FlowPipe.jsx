import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Animated "flow" pipe — a TubeGeometry along a CatmullRom path with a custom
 * shader that scrolls emissive dashes along the tube's U coordinate.
 *
 * Props
 *   points   : Array<[x,y,z]>  path waypoints (world space)
 *   color    : string          FLOW_COLORS value (strict color rules)
 *   active   : boolean         from the Zustand store — fades flow in/out
 *   radius   : number          tube radius
 *   speed    : number          dash scroll speed (negative reverses direction)
 *   dashes   : number          dash count along the path
 */
const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  uniform vec3 uColor;
  uniform float uTime;
  uniform float uSpeed;
  uniform float uDashes;
  uniform float uIntensity; // 0 → off, 1 → running
  varying vec2 vUv;

  void main() {
    // Scrolling dash pattern along the tube length (u axis follows the path)
    float phase = fract(vUv.x * uDashes - uTime * uSpeed);
    float dash = smoothstep(0.35, 0.0, abs(phase - 0.35));

    // Static pipe shell so the geometry stays readable when the system is off
    vec3 shell = uColor * 0.16;
    vec3 flow  = uColor * (0.35 + 2.2 * dash);

    vec3 color = mix(shell, flow, uIntensity);
    float alpha = mix(0.28, 0.55 + 0.45 * dash, uIntensity);
    gl_FragColor = vec4(color, alpha);
  }
`

export default function FlowPipe({
  points,
  color,
  active = true,
  radius = 0.07,
  speed = 1.2,
  dashes = 14,
}) {
  const materialRef = useRef()
  const intensity = useRef(active ? 1 : 0)

  const { geometry, uniforms } = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(
      points.map((p) => new THREE.Vector3(...p)),
      false,
      'catmullrom',
      0.1,
    )
    const geometry = new THREE.TubeGeometry(curve, points.length * 12, radius, 8, false)
    const uniforms = {
      uColor: { value: new THREE.Color(color) },
      uTime: { value: 0 },
      uSpeed: { value: speed },
      uDashes: { value: dashes },
      uIntensity: { value: active ? 1 : 0 },
    }
    return { geometry, uniforms }
    // Path/params are static per pipe instance.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useFrame((state, delta) => {
    if (!materialRef.current) return
    // Ease the flow in/out when the system is toggled in the UI.
    intensity.current = THREE.MathUtils.damp(intensity.current, active ? 1 : 0, 6, delta)
    materialRef.current.uniforms.uIntensity.value = intensity.current
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
  })

  return (
    <mesh geometry={geometry} frustumCulled={false}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}
