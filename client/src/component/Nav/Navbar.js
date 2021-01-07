import React from 'react'
import { Buger } from './Buger'
import "./nav.css";

export const Navbar = () => {
    return (
        <div className='nav_Container'>
            <nav className='app_Nav'>Reminiz</nav>
            <Buger />
        </div>
    )
}
