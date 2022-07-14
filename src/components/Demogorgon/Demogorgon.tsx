import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { OrbitControls } from '@react-three/drei'
import { Color, MeshPhongMaterial } from 'three'
import gsap from 'gsap'

import { MODELS_URLS } from '../../constans/constans'

import './Demogorgon.css'

const Demogorgon = () =>{
    const [pos, setPos] = useState<number[]>(null!)
    const DEMOref = useRef(null!)

    useEffect(() =>{
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: DEMOref.current,
            start: '50% 80%'
          }
        })
    
        tl.fromTo(DEMOref.current, {
          opacity: 0,
        }, {
          opacity: 1,
        })
      }, [] )

    return (
        <div className="demogorgon-container" ref={DEMOref} onPointerMove={(e: any) => setPos([e.clientX, e.clientY])}>
            <div className='demogorgon-text'>
                <h1 className="demogorgon-header">Demogorgon</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                <br/><br/>
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            </div>
            <div className='demogorgon'>
                <Canvas>
                    <pointLight color={new Color('#6c9ab8')} intensity={100} position={[-10, -10, -10]} /> 
                    <pointLight color={new Color('#6c9ab8')} intensity={100} position={[0, 10, -10]} /> 
                    <pointLight color={new Color('#6c9ab8')} intensity={100} position={[10, 10, 10]} /> 
                    <ambientLight />
                    <Object pos={pos} />
                    <OrbitControls />
                </Canvas>
            </div>
        </div>
    )
}

const Object = ({ pos } : { pos: number[] }) =>{
    const { urlDemo } = MODELS_URLS
    const obj = useLoader(OBJLoader, urlDemo)

  useFrame(() =>{ 
    obj.rotation.x = (pos[1] - 200) / 2000
    obj.rotation.y = (pos[0] - 1000) / 2000
  })

    obj.children.forEach((mesh : any) => 
        mesh.material = new MeshPhongMaterial({color: new Color('#000')}) )

    return <primitive object={obj} />
}

export default Demogorgon