import React, {useState} from 'react'
import './Item.css';
import { Link } from 'react-router-dom'

const Item = ({prod}) => {

    const {id, name, price, stock, img, categoria} = prod
    
    return (
        <div className="card">

            <h2>{name}</h2>
            <h3>Precio: {price}</h3>
            <h3>Stock: {stock}</h3>
            
            <img src={img} alt={name} />
            <Link to={`/detail/${id}`}><button variant="primary">Detalle</button></Link>
        </div>
    );
};

export default Item;
