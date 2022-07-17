import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='nav'>
            <nav >
                <li><Link to="/" className='nav-li-link'>Home</Link></li>
                <li><Link to="/login" className='nav-li-link'>Log in</Link></li>
                <li><Link to="/signup" className='nav-li-link'>Sign up</Link></li>
            </nav>
        </div>
    )
}

export default Navbar