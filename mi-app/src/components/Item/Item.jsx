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
                <div className='itemInfoList'>
                    <h2>{name}</h2>
                    <p>Precio: ${price}</p>
                    <p>Stock: {stock}</p>
                </div>                
                <div className="itemBtnList">
                    <Link to={`/detail/${id}`}><button variant="primary">Detalle</button></Link>
                </div>            
            </div>
        </div>
    );
};

export default Item;
