import React from 'react'
import { Link } from 'react-router-dom'

function NavbarAfterLogin() {
    return (
        <div className='nav'>
            <nav >
                <li><Link to="/news_feed" className='nav-li-link'>News Feed</Link></li>
                <li><Link to="/profile" className='nav-li-link'>Profile</Link></li>
                <li><Link to="/logout" className='nav-li-link'>Log out</Link></li>
            </nav>
        </div>
    )
}

export default NavbarAfterLogin;