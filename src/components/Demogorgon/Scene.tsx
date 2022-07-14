import { Canvas } from '@react-three/fiber'
import { Color } from 'three'

import { DemoProps } from '../../interfaces/interfaces'
import Object from './Object'

const Scene = ({ clicked, pos, click } : DemoProps) =>{
    return (
      <Canvas>
      <pointLight color={clicked ? new Color('#5f0f0f') : new Color('#6c9ab8')} intensity={100} position={[-10, -10, -10]} /> 
      <pointLight color={clicked ? new Color('#5f0f0f') : new Color('#6c9ab8')} intensity={100} position={[0, 10, -10]} /> 
      <pointLight color={clicked ? new Color('#5f0f0f') : new Color('#6c9ab8')} intensity={100} position={[10, 10, 10]} /> 
      <ambientLight />
      <Object pos={pos} click={click} clicked={clicked}/>
    </Canvas>
    )
}

export default Scene