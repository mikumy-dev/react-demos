import React from 'react'
import logo from '../../public/logo192.png'

export default function Navbar() {
    return (
        <nav>
            <img className='nav-logo' src={logo} alt='react logo'></img>
            <h3 className='nav-text'>ReactFacts</h3>
            <h4 className='nav-title'>Project 05.react-facts</h4>
        </nav>
    )
}