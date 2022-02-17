import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'
import {Link} from 'react-router-dom'
import { useCartContext } from '../context/cartContext'
import IconoSvg from '../../media/icono'


const NavbarCss = () => {

    const {stockItem} = useCartContext()

    return (
        <div className='navbar'>
            
            <p className='navTitle'>Tienda artesanal<IconoSvg/></p>
                        
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
                </ul>                
            </nav>
                <div className='cartWidgetNav'>
                    <Link className='cartLink' to={`/cart`}>
                    <p>{stockItem() !== 0 && stockItem()}</p>
                    <CartWidget/>
                    </Link>                             
                </div>
        </div>
    )
}

export default NavbarCss

