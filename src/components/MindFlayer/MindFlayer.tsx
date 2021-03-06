import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

import urlBuildings from '../../assets/buildings.png'
import urlFlesh from '../../assets/flesh.png'
import urlShadow from '../../assets/shadow.webp'

import Scene from './Scene'

import './MindFlayer.css'

const MindFlayer = () =>{
    const fleshRef = useRef(null!)
    const shadowRef = useRef(null!)
    const MFRef = useRef(null!)
    const MFCRef = useRef(null!)
    const [pos, setPos] = useState<number[]>([])

    const handleMove = (e: React.PointerEvent<HTMLDivElement>) =>{
        e.clientX && e.clientY ? setPos([e.clientX - 200, e.clientY - 400]) : setPos([0, 300])
    }

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

    return (
        <div className="mind-flayer-container" ref={MFCRef} id='mf' onPointerMove={e => handleMove(e)}>
            <div className="mind-flayer" ref={MFRef} >
                <Scene pos={pos}/>
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

export default MindFlayer