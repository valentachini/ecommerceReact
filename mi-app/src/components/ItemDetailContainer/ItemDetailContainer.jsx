import React, { useEffect, useState } from 'react';
import { products, traerProductos } from '../Products/products';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore} from 'firebase/firestore'

//import './Item.css';


const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({})
    
    const {detailId} = useParams()
    
    useEffect(() => {
        const db = getFirestore()

        const queryProd = doc(db, 'items', 'ag6Oz8WwXgEZuuIJ3jZh')
        getDoc(queryProd)
        .then(resp => setProduct({id: resp.id, ...resp.data()}))



        // traerProductos
        //     .then(res => setProduct(res.find(prod => prod.id === detailId)))
    }, [detailId])
    

    return (
        <div className="container">
         <ItemDetail product={product}/>
        </div>
    );
};

export default ItemDetailContainer;
