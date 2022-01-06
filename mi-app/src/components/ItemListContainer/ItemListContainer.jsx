import React, { useEffect, useState } from 'react';
import { traerProductos } from '../Products/products';
import ItemList from '../ItemList/ItemList';

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

    useEffect(() => {
        traerProductos
            .then((respuesta) => {
                setData(respuesta);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

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
