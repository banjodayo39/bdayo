import React, { Suspense } from 'react';
import * as THREE from 'three'
import { Canvas, useLoader } from '@react-three/fiber'
import {
  Html,
  useGLTF,
  Caustics,
  CubeCamera,
  Environment,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshRefractionMaterial,
  MeshTransmissionMaterial,
  Center,
  ScrollControls,
  Text3D,
  Text
} from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { NameText3D } from './Experience'
import { StudioMain } from "../components/PagesStyle"
import { Sparkles, Shadow, ContactShadows, Billboard, BakeShadows } from '@react-three/drei'
import { LayerMaterial, Depth } from 'lamina'

export function AboutPage() {
  return (
    <StudioMain>
      <Suspense fallback={<div>Loading...</div>}>

        <Canvas shadows camera={{ position: [0, 3, 5], fov: 47 }}>
          <color attach="background" args={['#f0f0f0']} />
          <ambientLight intensity={0.5} />
          <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Caustics color="#FFFFFF" position={[0, -0.5, -3]} lightSource={[5, 5, -10]} worldRadius={0.01} ior={1.2} intensity={0.005}>
            <mesh castShadow receiveShadow position={[-2, 0.5, -1]} scale={0.5}>
              <sphereGeometry args={[1, 64, 64]} />
              <MeshTransmissionMaterial resolution={1024} distortion={0.25} color="#FF8F20" thickness={1} anisotropy={1} />
            </mesh>
          </Caustics>
        <Sphere color="white" amount={30} emissive="purple" glow="#ff90f0" size={0.25} position={[-2.5, 0.5, -2]} />
        <Sphere color="lightpink" amount={20} emissive="green" glow="lightgreen" size={0.25} position={[-2, 0.5, 2]} />
        <ContactShadows renderOrder={2} color="black" resolution={1024} frames={1} scale={10} blur={1.5} opacity={0.65} far={0.5} />
        <BakeShadows />
          {/* <mesh castShadow receiveShadow position={[1.75, 0.25, 1]} scale={0.75}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="hotpink" />
      </mesh> */}
          <AccumulativeShadows
            temporal
            frames={100}
            color="FFFFFF"
            colorBlend={2}
            toneMapped={true}
            alphaTest={0.8}
            opacity={0.4}
            scale={12}
            position={[0, -0.5, 0]}>
            <RandomizedLight amount={8} radius={10} ambient={0.5} intensity={1} position={[5, 5, -10]} bias={0.001} />
          </AccumulativeShadows>
          <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
          <OrbitControls makeDefault autoRotate autoRotateSpeed={0.1} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
          <EffectComposer>
            <Bloom luminanceThreshold={1} intensity={2} levels={9} mipmapBlur />
          </EffectComposer>
          <Suspense >
            <NameText3D color="#FFFFFF" position={[0, -0.5, 0]} lightSource={[5, 5, -10]} worldRadius={0.01} ior={1.2} intensity={0.005} />
          </Suspense>
          <Center>
          </Center>
        </Canvas>
      </Suspense>
    </StudioMain>
  );
}


const Sphere = ({ size = 1, amount = 50, color = 'white', emissive, glow, ...props }) => (
  <mesh {...props}>
    <sphereGeometry args={[size, 64, 64]} />
    <meshPhysicalMaterial roughness={0} color={color} emissive={emissive || color} envMapIntensity={0.2} />
    <Glow scale={size * 1.2} near={-25} color={glow || emissive || color} />
    <Sparkles count={amount} scale={size * 2} size={6} speed={0.4} />
    <Shadow rotation={[-Math.PI / 2, 0, 0]} scale={size} position={[0, -size, 0]} color={emissive} opacity={0.5} />
  </mesh>
)

const Glow = ({ color, scale = 0.5, near = -2, far = 1.4 }) => (
  <Billboard>
    <mesh>
      <circleGeometry args={[2 * scale, 16]} />
      <LayerMaterial
        transparent
        depthWrite={false}
        blending={THREE.CustomBlending}
        blendEquation={THREE.AddEquation}
        blendSrc={THREE.SrcAlphaFactor}
        blendDst={THREE.DstAlphaFactor}>
        <Depth colorA={color} colorB="black" alpha={1} mode="normal" near={near * scale} far={far * scale} origin={[0, 0, 0]} />
        <Depth colorA={color} colorB="black" alpha={0.5} mode="add" near={-40 * scale} far={far * 1.2 * scale} origin={[0, 0, 0]} />
        <Depth colorA={color} colorB="black" alpha={1} mode="add" near={-15 * scale} far={far * 0.7 * scale} origin={[0, 0, 0]} />
        <Depth colorA={color} colorB="black" alpha={1} mode="add" near={-10 * scale} far={far * 0.68 * scale} origin={[0, 0, 0]} />
      </LayerMaterial>
    </mesh>
  </Billboard>
)


