import React, { useState } from 'react'
import './itemCount.css'

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <div>
                    <button disabled={count === stock} onClick={() => setCount(count + 1)}>
                        +
                    </button>
                    <p>
                        {count}
                    </p>
                    <button disabled={count === 0} onClick={() => setCount(count - 1)}>
                        -
                    </button>
                </div>
                <div>
                    <button disabled={count === 0} onClick={() => onAdd(count)}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </>
    );
};








// const ItemCount = ({stock, initial, onAdd}) => {

//     const [amount, setAmount] = useState(initial)

//     return (
//         <div className="itemBtn">
//             <div className='itemcount'>
//                 <button onClick={()=>setAmount(Math.max( amount - 1, initial))}>-</button>
//                 <span>{amount}</span>
//                 <button onClick={()=>setAmount(Math.min( amount + 1,  stock))}>+</button>  
//                 <button onClick={()=>onAdd()}> Agregar al carrito</button>          
//             </div>
//         </div>
//     )
// }

export default ItemCount