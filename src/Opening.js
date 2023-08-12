import { Canvas, useThree } from '@react-three/fiber'
import { useGLTF, useTexture, Center, Decal, Text3D, MeshTransmissionMaterial } from '@react-three/drei'
import React from 'react';


import * as THREE from 'three';

export function Opening({ margin = 0.5 }) {
    return (
        <>
            <Center rotation={[0, 0, 0]} position={[0, 0.25, 0]}>
                <Text3D
                    curveSegments={100}
                    bevelEnabled
                    bevelSize={0.04}
                    bevelThickness={0.1}
                    height={0.5}
                    lineHeight={0.05}
                    letterSpacing={0.16}
                    size={1.5}
                    receiveShadow
                    castShadow
                    font="fonts/Inter_Bold.json"
                    position={[-1.3, 0, 1]} // Set Y-coordinate to 0 to lay the text on the ground
                >
                    {`Da`}
                    <MeshTransmissionMaterial resolution={1024} distortion={0.25} color="white" thickness={1} anisotropy={0.3} shadowOpacity={0.15} />

                </Text3D>
                <Text3D
                    curveSegments={100}
                bevelEnabled
                      bevelSize={0.06}
                      bevelThickness={0.005}
                    height={0.5}
                    lineHeight={0.005}
                    letterSpacing={0.16}
                    size={1.5}
                    receiveShadow
                    castShadow
                    font="fonts/Inter_Bold.json"
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[2, 0, 1.5]} // Set Y-coordinate to 0 to lay the text on the ground
                >
                    {`yo`}
                    <MeshTransmissionMaterial resolution={1024} distortion={0.125} color="white" thickness={1} anisotropy={1} shadowOpacity={0.05} />

                </Text3D>
            </Center>
        </>
    )
}
