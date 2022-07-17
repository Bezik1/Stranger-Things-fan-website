import { Canvas } from '@react-three/fiber'
import { Color } from 'three'

import { DemoProps } from '../../interfaces/interfaces'
import Object from './Object'

const Scene = ({ clicked, pos, click } : DemoProps) =>{
    return (
      <Canvas>
        <pointLight color={ifClicked(clicked)} intensity={100} position={[-10, -10, -10]} /> 
        <pointLight color={ifClicked(clicked)} intensity={20} position={[0, 0, 10]} /> 
        <pointLight color={ifClicked(clicked)} intensity={100} position={[10, 10, 10]} /> 
        <ambientLight />
        <Object pos={pos ? pos : [1300, 200]} click={click} clicked={clicked}/>
      </Canvas>
    )
}

const ifClicked = ( clicked : boolean ) =>{
  return clicked ? new Color('#5f0f0f') : new Color('#6c9ab8')
}

export default Scene