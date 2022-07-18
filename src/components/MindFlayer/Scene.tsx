import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useState } from "react"
import Object from './Object'

const Scene = ({ pos } : { pos: number[] }) =>{
    return (
    <Canvas>
        <Object/>
        <pointLight color="violet" intensity={100} position={[0 + pos[1], 0 + pos[1], 0 + pos[0]]} /> 
        <pointLight color="violet" intensity={100} position={[0, 0, -30]} /> 
        <pointLight color="violet" intensity={100} position={[0, -30, 0]} /> 
        <OrbitControls target={[0, -20, 0]} enableRotate={false} />
    </Canvas>
    )
}

export default Scene