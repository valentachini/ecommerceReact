import React, { useEffect, useState } from 'react';
import { products, traerProductos } from '../Products/products';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'

import { collection, getDocs, getFirestore, query } from 'firebase/firestore'

/*const ItemListContainer = ({greeting}) => {

    const [stock, setStock] = useState(20)

    return (
        <div>
            <h1>{greeting} </h1>
            <ItemCount stock = {stock} initial = {1} onAdd={()=>console.log('agregado al carrito')} /> 
        </div>
    )
}

export default ItemListContainer*/

const ItemListContainer = ({ saludo }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); 
    const { categoriaId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = query (collection(db, 'items'))
        getDocs(queryCollection)
        .then (res => setData(res.docs.map(prod=>({id: prod.id, ...prod.data()}))))

        


        // if (categoriaId) {
        //    traerProductos
        //     .then(res => setData(res.filter(prod => prod.categoria === categoriaId)))
        //     .finally(() => setLoading(false))

        // } else {
        //     traerProductos
        //         .then((respuesta) => {
        //             setData(respuesta);
        //         })

        //         .catch((error) => {
        //             console.error(error);
        //         })
        //         .finally(() => {
        //             setLoading(false);
        //         });
        // }
    }, [categoriaId]);

    return (
        <div>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <div>
                    <h2 style={{ textAlign: 'center' }}>{saludo}</h2>
                    <ItemList productos={data} />
 
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;
