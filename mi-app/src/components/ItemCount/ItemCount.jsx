import React, { useState } from 'react'
import './itemCount.css'

const ItemCount = ({cantidad, initial, onAdd}) => {

    const [amount, setAmount] = useState(initial)

    return (
        <div className='itemcount'>
            <button onClick={()=>setAmount(Math.max( amount - 1, initial))}>-</button>
            <span>{amount}</span>
            <button onClick={()=>setAmount(Math.min( amount + 1,  cantidad))}>+</button>  
            <button onClick={()=>onAdd()}> Agregar al carrito</button>          
        </div>
    )
}

export default ItemCount