import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'
import {Link} from 'react-router-dom'

const NavbarCss = () => {
    return (
        <div className='navbar'>
            <p className='navTitle'>Tienda artesanal</p>
            <nav>
                <ul>
                    <li>
                    <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                    <Link to={`/category/platitos`}>Platitos</Link>
                    </li>
                    <li>
                    <Link to={`/category/velas`}>Velas</Link>
                    </li>
                    <li> 
                    <Link to={`/cart`}><CartWidget/></Link>
                    </li> 
                </ul>                
            </nav>
        </div>
    )
}

export default NavbarCss

