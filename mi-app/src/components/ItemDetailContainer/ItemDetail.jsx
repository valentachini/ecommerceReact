import React, {useState} from 'react'
//import './Item.css';
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ name, price, stock, img }) => {
    
    const [cantidad, setCantidad] = useState(20)
    
    return (
        <div className="card">
            <h2>{name}</h2>
            <h3>Precio: {price}</h3>
            <h3>Stock: {stock}</h3>
            <img src={img} alt={name} />
            <ItemCount cantidad = {cantidad} initial = {1} onAdd={()=>console.log('agregado al carrito')} />
        </div>
    );
};

export default ItemDetail;
