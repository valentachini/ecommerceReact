import React from 'react'
import './NavBar.css'
import { BiShoppingBag } from 'react-icons/bi';

const CartWidget = () => {  

    return (
        <div>
            <BiShoppingBag className='cartIcon'/>
        </div>
    )
}

export default CartWidget
