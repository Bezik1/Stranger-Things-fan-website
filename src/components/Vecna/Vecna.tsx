import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import urlSpider from '../../assets/widow.png'
import Scene from './Scene'

import './Vecna.css'

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
               <Scene />
            </div>
            <div className='vecna-info'>
                <h1 className='vecna-info-header'>Vecna / 001</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                <br/><br/>
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
        </div>
    )
}

export default Vecna