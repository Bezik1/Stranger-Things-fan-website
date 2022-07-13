import { useState } from 'react'

import urlStarCourt from '../../assets/starcourt.png'

import './Background.css'

const Background = () =>{
    const [active, setActive] = useState(false)

    return (
    <div className='bg' onClick={() => setActive(!active)}>
        <div className={active ? 'bg-shadow-active' : 'bg-shadow'} />
        <div className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            <br/><br/>
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </div>
        <img className='bg-img' alt='bg-imge' src={urlStarCourt} />
      </div>
    )
}

export default Background