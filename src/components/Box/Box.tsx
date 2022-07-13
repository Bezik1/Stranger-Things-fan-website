import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';

import frag from "./shaders/frag";
import vert from "./shaders/vert";

import { BoxProps, Uniform } from '../../interfaces/interfaces';

const Box = ({ texture, position, setMeshRef } : BoxProps) =>{
    const meshRef = useRef<Uniform>(null!)
    const { camera } = useThree()

    camera.position.set(0, 0, 0)

    setMeshRef(meshRef)

    const uniforms = {
        u_time: { type: 'f', value: 1.0 },
        texture1: { type: "sampler2D", value: texture },  
        u_active: { value: false }
    }

    return (
      <mesh
        position={position}
        ref={meshRef}
      >
        <planeGeometry args={[24, 24, 24, 6]} />
        <shaderMaterial 
          side={THREE.DoubleSide}
          uniforms={uniforms}
          vertexShader={vert}
          fragmentShader={frag}
          //wireframe={true}
        />
    </mesh>
    )
}

export default Box