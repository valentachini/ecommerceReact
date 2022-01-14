import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'
import {Link} from 'react-router-dom'

const NavbarCss = () => {
    return (
        <div className='navbar'>
            <h3>El carrito</h3>
            <nav>
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                    <Link to={`/`}>Shop</Link>
                    </li>
                    <li>
                    <Link to={`/`}>LogIn</Link>
                    </li>
                </ul>                
            </nav>
                    <Link to={`/`}><CartWidget/></Link>
        </div>
    )
}

export default NavbarCss

