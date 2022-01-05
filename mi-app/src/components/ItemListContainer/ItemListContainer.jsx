import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {

    const [stock, setStock] = useState(20)

    return (
        <div>
            <h1>{greeting} </h1>
            <ItemCount stock = {stock} initial = {1} onAdd={()=>console.log('agregado al carrito')} /> 
        </div>
    )
}

export default ItemListContainer
