import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ productos }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {productos.map(prod=> <Item key={prod.id} prod={prod}/>)}
        </div>
    );
};

export default ItemList;