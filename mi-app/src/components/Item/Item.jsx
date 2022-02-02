import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom'

const Item = ({prod}) => {

    const {id, name, price, stock, img} = prod
    
    return (
        <div className="itemCard">
            <div className="itemImg">
                <img src={img} alt={name}/>
            </div>

            <div className="itemInfo">
                <h2>{name}</h2>
                <h3>Precio: {price}</h3>
                <h3>Stock: {stock}</h3>
                
                <div className="itemBtn">
                    <Link to={`/detail/${id}`}><button variant="primary">Detalle</button></Link>
                </div>            
            </div>

        </div>
    );
};

export default Item;
