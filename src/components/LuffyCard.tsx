import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll, RoundedBox, Text, Float, Sparkles } from "@react-three/drei"
import * as THREE from "three"

const lerp = THREE.MathUtils.lerp

export function LuffyCard() {
  const group = useRef<THREE.Group>(null!)
  const tilt = useRef<THREE.Group>(null!)
  const holo = useRef<THREE.MeshBasicMaterial>(null!)
  const glint = useRef<THREE.PointLight>(null!)
  const scroll = useScroll()

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    const damp = 1 - Math.pow(0.001, delta)

    if (tilt.current) {
      const idleY = Math.sin(t * 0.3) * 0.22
      const targetRotY = idleY + state.pointer.x * 0.35
      const targetRotX = -state.pointer.y * 0.28
      tilt.current.rotation.y = lerp(tilt.current.rotation.y, targetRotY, damp * 0.5)
      tilt.current.rotation.x = lerp(tilt.current.rotation.x, targetRotX, damp * 0.5)
    }

    if (group.current) {
      const o = scroll.offset
      const targetX = Math.sin(o * Math.PI * 1.5) * 1.1
      group.current.position.x = lerp(group.current.position.x, targetX, damp * 0.3)
      const targetScale = lerp(0.95, 1.08, Math.sin(o * Math.PI))
      const s = lerp(group.current.scale.x, targetScale, damp * 0.3)
      group.current.scale.set(s, s, s)
    }

    if (holo.current) {
      const hue = (t * 0.05) % 1
      holo.current.color.setHSL(hue, 0.85, 0.6)
    }

    if (glint.current) {
      const a = t * 0.4
      glint.current.position.set(Math.cos(a) * 3, Math.sin(a) * 2, 3)
    }
  })

  return (
    <group ref={group}>
      <Sparkles count={30} scale={9} size={1.6} speed={0.05} noise={0.2} opacity={0.4} color="#ffe6a3" />
      <pointLight ref={glint} intensity={2.2} color="#fff3d0" distance={12} />

      <Float speed={1} rotationIntensity={0.12} floatIntensity={0.5}>
        <group ref={tilt}>
          <RoundedBox args={[2.5, 3.5, 0.08]} radius={0.12} smoothness={6} position={[0, 0, -0.03]}>
            <meshStandardMaterial color="#e8b53a" metalness={1} roughness={0.22} />
          </RoundedBox>

          <RoundedBox args={[2.36, 3.36, 0.1]} radius={0.1} smoothness={6}>
            <meshStandardMaterial color="#7a1620" metalness={0.85} roughness={0.3} />
          </RoundedBox>

          <mesh position={[0, 0.35, 0.055]}>
            <planeGeometry args={[2.0, 2.0]} />
            <meshStandardMaterial color="#10314f" metalness={0.4} roughness={0.5} />
          </mesh>

          <mesh position={[0, 0, 0.062]}>
            <planeGeometry args={[2.2, 3.2]} />
            <meshBasicMaterial
              ref={holo}
              transparent
              opacity={0.16}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>

          <group position={[0, 0.45, 0.12]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.55, 0.16, 16, 48]} />
              <meshStandardMaterial color="#f4c542" metalness={0.3} roughness={0.5} />
            </mesh>
            <mesh position={[0, 0.16, 0]}>
              <cylinderGeometry args={[0.34, 0.4, 0.34, 32]} />
              <meshStandardMaterial color="#f1bf3d" metalness={0.3} roughness={0.5} />
            </mesh>
            <mesh position={[0, 0.13, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.36, 0.05, 12, 40]} />
              <meshStandardMaterial color="#c0392b" emissive="#5a120c" emissiveIntensity={0.4} roughness={0.5} />
            </mesh>
          </group>

          <Text position={[0, 1.42, 0.1]} fontSize={0.3} color="#fff4d6" anchorX="center" anchorY="middle" letterSpacing={0.06}>
            LUFFY
          </Text>

          <Text position={[0, -0.78, 0.1]} fontSize={0.13} color="#ffe6a3" anchorX="center" anchorY="middle" letterSpacing={0.14}>
            STRAW HAT PIRATES
          </Text>

          <Text position={[0, -1.25, 0.1]} fontSize={0.42} color="#ffd34d" anchorX="center" anchorY="middle">
            5000
          </Text>

          <mesh position={[0.92, 1.42, 0.12]}>
            <octahedronGeometry args={[0.12, 0]} />
            <meshStandardMaterial color="#7ee0ff" emissive="#1f8fbf" emissiveIntensity={1.4} metalness={0.6} roughness={0.2} />
          </mesh>
        </group>
      </Float>
    </group>
  )
}
