import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ product }) => {

    const [show, setShow] = useState(true)

    const { name, price, stock, img} = product

    const onAdd = (contador) => {
        setShow(false)
        alert(`${contador}`)
    }

    return (
        <div>
            <h2>{name}</h2>
            <h3>Precio: {price}</h3>
            <h3>Stock: {stock}</h3>
            
            <img src={img} alt={name} />
            {show ? <ItemCount stock={stock} onAdd={onAdd} initial={1}/> :
                <div>
                    <Link to='/cart'><button>Terminar la Compra</button></Link>
                    <Link to='/'><button>Seguir Comprando</button></Link>
                </div>}

        </div>

    )
}

export default ItemDetail