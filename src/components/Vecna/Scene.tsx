import { Canvas} from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";

import Object from './Object'

const Scene = () =>{
    return (
        <Canvas>
            <Object />
            <ambientLight color='black'/>
            <pointLight color="red" intensity={0.5} position={[10, 10, 10]} /> 
            <pointLight color="red" intensity={1} position={[-10, -10, -10]} /> 
            <OrbitControls target={[0, 15 ,0]}  enableRotate={false} />
        </Canvas>
    )
}

export default Scene