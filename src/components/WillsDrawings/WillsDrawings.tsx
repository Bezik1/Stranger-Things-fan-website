import gsap from 'gsap'
import { useState, useRef, useEffect } from 'react'

import urlDemo from '../../assets/demogorgon.webp'
import urlMF from '../../assets/mindflayer.jpg'
import urlCH from '../../assets/charakters.jpg'

import './WillsDrawings.css'

const WillsDrawings = () =>{
    const [clicked, click] = useState(false)
    const [clicked2, click2] = useState(false)
    const demoRef = useRef(null!)

    useEffect(() =>{
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: demoRef.current,
            start: '50% 80%'
          }
        })
    
        tl.fromTo(demoRef.current, {
          opacity: 0,
        }, {
          opacity: 1,
        })
      }, [] )

    return (
        <div className="demo-container" ref={demoRef}>
            <img 
              className={clicked2 ? "demo-img-active" : "demo-img"}
              src={urlDemo} 
              alt="demogorgon" 
              onClick={() => click2(!clicked2)}
            />
            <img className="charackters-img" src={urlCH} alt="charackters" />
            <img 
                className={clicked ? "mf-img-active" : "mf-img"} 
                src={urlMF} 
                alt="mindflayer" 
                onClick={() => click(!clicked)}
            />

            <div className='wills-dream'>
                <h1>Will's drawings</h1>
            </div>
        </div>
    )
}
export default WillsDrawings