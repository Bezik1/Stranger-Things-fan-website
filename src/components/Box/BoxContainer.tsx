import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import ScrollTrigger  from 'gsap/ScrollTrigger';

import { Ref, Uniform } from '../../interfaces/interfaces'
import { Arrows, TEXTURE_URLS } from '../../constans/constans'

import Box from './Box'
import AnimationShader from './AnimationShader'
import Arrow from './Arrow';

import './BoxContainer.css'

gsap.registerPlugin(ScrollTrigger);

const BoxContainer = () =>{
    const { urlMurray, urlHopper, urlJoyce } = TEXTURE_URLS
  
    const texture = useLoader(THREE.TextureLoader, urlMurray)
    const joyce = useLoader(THREE.TextureLoader, urlJoyce)
    const hopper = useLoader(THREE.TextureLoader, urlHopper)
    
    const [meshRef, setMeshRef] = useState<Ref<Uniform>>(null!)
    const [meshRef2, setMeshRef2] = useState<Ref<Uniform>>(null!)
    const [meshRef3, setMeshRef3] = useState<Ref<Uniform>>(null!)
    const meshRefs = [meshRef, meshRef2, meshRef3]

    const canvasRef = useRef(null!)

    const { left, right } = Arrows

    useEffect(() =>{
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: canvasRef.current,
            start: '50% 70%'
            //markers: true
          }
        })
    
        tl.fromTo(canvasRef.current, {
          opacity: 0,
        }, {
          opacity: 1,
        })
      }, [] )

      return (
        <div className='canvas' ref={canvasRef}>
            <Arrow meshRefs={meshRefs} side={right} />
            <Arrow meshRefs={meshRefs} side={left} />
            <Canvas>
            <ambientLight />
              <group>
                  <Box 
                      position={[0, 0, -35]} 
                      texture={hopper} 
                      setMeshRef={ref => setMeshRef(ref)}  
                  />
                  <Box 
                      position={[-40, 0, -35]} 
                      texture={joyce} 
                      setMeshRef={ref => setMeshRef2(ref)}  
                  />
                  <Box 
                      position={[40, 0, -35]} 
                      texture={texture} 
                      setMeshRef={ref => setMeshRef3(ref)}  
                  />
              </group>
            <AnimationShader 
                meshRefs={meshRefs} 
            />

            <pointLight position={[10, 10, 10]} />
            </Canvas>
        </div>
      )
}

export default BoxContainer