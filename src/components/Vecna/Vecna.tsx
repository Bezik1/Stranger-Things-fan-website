import { useState, useEffect, useRef } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Canvas, useLoader, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import gsap from 'gsap';

import urlSpider from '../../assets/widow.png'

import './Vecna.css'
import { Mesh } from 'three';

const Vecna = () =>{
    const vecnaRef = useRef(null!)

    useEffect(() =>{
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: vecnaRef.current,
            start: '50% 80%'
          }
        })
    
        tl.fromTo(vecnaRef.current, {
          opacity: 0,
        }, {
          opacity: 1,
        })
      }, [] )

    return (
        <div className='vecna-container' ref={vecnaRef}>
            <img alt='spider' className='spider' src={urlSpider} />
            <div className='vecna'>
                    <Canvas>
                        <Object />
                        <ambientLight color='black'/>
                        <pointLight color="red" intensity={0.5} position={[10, 10, 10]} /> 
                        <pointLight color="red" intensity={1} position={[-10, -10, -10]} /> 
                        <OrbitControls target={[0, 15 ,0]}  enableRotate={false} />
                    </Canvas>
            </div>
            <div className='vecna-info'>
                <h1>Vecna / 001</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                <br/><br/>
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
        </div>
    )
}

const Object = () =>{
    const [clicked, click] = useState(false)
    const vecnaRef = useRef<Mesh>(null!)

    const obj = useLoader(OBJLoader, './Vecna.obj')
    const { camera } = useThree()

    camera.position.x = 15
    camera.position.z = 5
    camera.position.y = 17
    
    useFrame(() => {
        if(clicked){
            vecnaRef.current.rotation.y += 0.0 
        } else {
            vecnaRef.current.rotation.y += 0.01
        }
    })

    return <primitive onClick={() => click(!clicked)} ref={vecnaRef} object={obj} />
    
}

export default Vecna