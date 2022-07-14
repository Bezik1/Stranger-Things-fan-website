import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Object from './Object'

const Scene = ({ click, clicked } : { click: React.Dispatch<React.SetStateAction<boolean>>, clicked: boolean }) =>{
    return (
    <Canvas>
        <Object onClick={click} clicked={clicked} />
        <pointLight color="violet" intensity={100} position={[0, 0, 0]} /> 
        <pointLight color="violet" intensity={100} position={[0, 0, -30]} /> 
        <pointLight color="violet" intensity={100} position={[0, -30, 0]} /> 
        <OrbitControls target={[0, -20, 0]} enableRotate={false} />
    </Canvas>
    )
}

export default Scene