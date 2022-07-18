import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useState } from "react"
import Object from './Object'

const Scene = () =>{
    const [pos, setPos] = useState<number[]>([])

    const handleMove = (e: React.PointerEvent<HTMLDivElement>) =>{
        e.clientX && e.clientY ? setPos([e.clientX - 200, e.clientY - 400]) : setPos([0, 300])
    }

    return (
    <Canvas onPointerMove={e => handleMove(e)}>
        <Object/>
        <pointLight color="violet" intensity={100} position={[0 + pos[1], 0 + pos[1], 0 + pos[0]]} /> 
        <pointLight color="violet" intensity={100} position={[0, 0, -30]} /> 
        <pointLight color="violet" intensity={100} position={[0, -30, 0]} /> 
        <OrbitControls target={[0, -20, 0]} enableRotate={false} />
    </Canvas>
    )
}

export default Scene