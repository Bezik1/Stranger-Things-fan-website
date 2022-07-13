import { useRef, useState, useEffect } from 'react'
import { OrbitControls } from "@react-three/drei"
import { Canvas, useLoader, useThree } from "@react-three/fiber"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MeshBasicMaterial, Vector3, Color } from "three"
import gsap from 'gsap'

import urlBuildings from '../../assets/buildings.png'
import urlFlesh from '../../assets/flesh.png'
import urlShadow from '../../assets/shadow.webp'

import { MODELS_URLS } from "../../constans/constans"

import './MindFlayer.css'

const MindFlayer = () =>{
    const [clicked, click] = useState(true)

    const fleshRef = useRef(null!)
    const shadowRef = useRef(null!)
    const MFRef = useRef(null!)
    const MFCRef = useRef(null!)

    const tl = gsap.timeline()

    useEffect(() =>{
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: MFCRef.current,
            start: '50% 80%'
          }
        })
    
        tl.fromTo(MFCRef.current, {
          opacity: 0,
        }, {
          opacity: 1,
        })
      }, [] )

        if(clicked){
            tl.to(fleshRef.current, {
                scale: 1,
                opacity: 1
            }).to(shadowRef.current, {
                scale: 1,
                opacity: 1
            })
        } else {
            tl.to(fleshRef.current, {
                scale: 0.1,
                opacity: 0
            }).to(shadowRef.current, {
                scale: 0.1,
                opacity: 0
            })  
        }

    return (
        <div className="mind-flayer-container" ref={MFCRef}>
            <div className="mind-flayer" ref={MFRef} onClick={() => click(!clicked)}>
                <Canvas>
                    <Object />
                    <OrbitControls target={[0, -20, 0]} enableRotate={false} />
                </Canvas>
                <img src={urlBuildings} className="mind-flayer-img" alt="mind-flayer-img"/>
                <img ref={fleshRef} src={urlFlesh} className="mind-flayer-flesh" alt='flesh-monster' />
                <img ref={shadowRef} src={urlShadow} className="mind-flayer-shadow" alt='flesh-monster' />
                <div className="mind-flayer-info">
                    <h1 className='mind-flayer-header'>Mind Flayer</h1>
                    <div className='mind-flayer-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </div>
                </div>
            </div>
        </div>
    )
}

const Object = () =>{
    const { camera } = useThree()
    camera.lookAt(new Vector3(0, -20, -20))

    const { urlMF } = MODELS_URLS
    const obj = useLoader(OBJLoader, urlMF)
    obj.children.forEach((mesh : any) => {
        mesh.material = new MeshBasicMaterial({color: new Color('#000')}) 
    })

    return <primitive object={obj} rotation={[-0.65 , Math.PI - 0.47, 0]} position={[0, -20, 0]} scale={[0.75, 0.75, 0.75]}/>
}

export default MindFlayer