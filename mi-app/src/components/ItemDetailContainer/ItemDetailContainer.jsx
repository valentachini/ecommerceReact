import React, { useEffect, useState } from 'react';
import { products, traerProductos } from '../Products/products';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

//import './Item.css';


const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({})
    
    const {detailId} = useParams()
    
    useEffect(() => {
        traerProductos
            .then(res => setProduct(res.find(prod => prod.id === detailId)))
    }, [detailId])
    

    return (
        <div className="container">
         <ItemDetail product={product}/>
        </div>
    );
};

export default ItemDetailContainer;
