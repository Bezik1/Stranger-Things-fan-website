import { useState } from 'react'
import './Navbar.css'

const Navbar = () =>{
    return (
        <div className='nav' id='nav'>
            <div className='nav-links'>
                <a className='nav-link' href="#bg"> Home </a>
                <a className='nav-link' href="#canvas"> Characters </a>
                <a className='nav-link' href="#wd"> Will's Drawings </a>
                <a className='nav-link' href="#vecna"> Vecna </a>
                <a className='nav-link' href="#mf"> Mind Flayer </a>
                <a className='nav-link' href="#demogorgon"> Demogorgon </a>
            </div>
        </div>
    )
}

export default Navbar