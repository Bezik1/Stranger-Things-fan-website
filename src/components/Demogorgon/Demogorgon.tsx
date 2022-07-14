import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'


import './Demogorgon.css'
import Scene from './Scene'

const Demogorgon = () =>{
    const [pos, setPos] = useState<number[]>(null!)
    const [clicked, click] = useState(false)
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
        <div 
          className={clicked ? "demogorgon-container blood-bg" : "demogorgon-container"}
          ref={DEMOref}
          onPointerMove={(e: any) => setPos([e.clientX, e.clientY])}
         >
            <div className={clicked ?'demogorgon-text blood' : 'demogorgon-text'}>
                <h1 className={clicked ? "demogorgon-header blood-header" : "demogorgon-header"}>Demogorgon</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                <br/><br/>
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            </div>
            <div className='demogorgon'>
              <Scene pos={pos} click={click} clicked={clicked} />
            </div>
        </div>
    )
}

export default Demogorgon