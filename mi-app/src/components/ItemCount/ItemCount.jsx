import React, { useState } from 'react'
import './itemCount.css'

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);

    return (
        <>
            <div>
                <div className='itemBtnDetail'>
                    <button disabled={count === 1} onClick={() => setCount(count - 1)}>
                        -
                    </button>
                    <p>
                        {count}
                    </p>
                    <button disabled={count === stock} onClick={() => setCount(count + 1)}>
                        +
                    </button>
                </div>
                <div className='itemBtnDetailAdd'>
                    <button disabled={count === 0} onClick={() => onAdd(count)}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </>
    );
};


export default ItemCount