'use client'

import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment, Float, Center } from '@react-three/drei'
import * as THREE from 'three'

function ToneMapping() {
  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 1.0
  return null
}

function Alocasia() {
  const { scene } = useGLTF('/models/alocasia.glb')
  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.06
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.03
  })

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.15}>
      <group ref={ref} scale={4.5} position={[0, -1, 0]}>
        <Center>
          <primitive object={scene.clone()} />
        </Center>
      </group>
    </Float>
  )
}

export function PlantScene() {
  return (
    <Canvas
      camera={{ position: [0, 2.5, 3.5], fov: 40 }}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        failIfMajorPerformanceCaveat: false,
      }}
      dpr={[1, 2]}
    >
      <ToneMapping />
      {/* F — Dramatic: strong key, minimal fill, sunset env */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 6, 5]} intensity={3.0} color="#f5e8d0" />
      <directionalLight position={[-4, 4, -2]} intensity={0.3} color="#8aaa6a" />
      <spotLight position={[0, 8, 4]} intensity={2.0} angle={0.5} penumbra={0.6} color="#f0e0c0" />
      <Alocasia />
      <Environment preset="sunset" environmentIntensity={0.4} />
    </Canvas>
  )
}

useGLTF.preload('/models/alocasia.glb')
