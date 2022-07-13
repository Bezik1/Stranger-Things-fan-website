import { Vector3 } from "@react-three/fiber";
import React from "react";
import { ShaderMaterial, Mesh, PlaneGeometry, MeshBasicMaterial } from "three";
import * as THREE from 'three'

export interface BoxProps {
    position: Vector3,
    texture: THREE.Texture,
    setMeshRef: React.Dispatch<React.SetStateAction<Ref<Uniform>>>
}

interface WaveMaterial extends ShaderMaterial {
    uniforms: {
        u_time: {
            type: string,
            value: number
        }
        texture1: {
            type: string,
            value: THREE.Texture
        }
        u_active: {
            value: boolean
        }
    }
}

export interface Uniform extends Mesh<PlaneGeometry, WaveMaterial> {}

export interface Ref<T> extends React.MutableRefObject<T> {}