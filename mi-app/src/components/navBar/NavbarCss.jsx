import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'

const NavbarCss = () => {
    return (
        <div className='navbar'>
            <h3>El carrito</h3>
            <nav>
                <ul>
                    <li>
                        <a href="/#">Home</a>
                    </li>
                    <li>
                        <a href="/#">Shop</a>
                    </li>
                    <li>
                        <a href="/#">LogIn</a>
                    </li>
                </ul>                
            </nav>
                    <a href="/#"><CartWidget/></a>
        </div>
    )
}

export default NavbarCss

