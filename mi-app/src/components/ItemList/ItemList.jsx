import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ productos }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {productos?.map((producto) => (
                <Item key={producto.id} {...producto} />
            ))}
        </div>
    );
};

export default ItemList;