import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cart, deleteProd, vaciarCarrito, total } = useContext(CartContext);
    

    return (
        <>
            {cart.length === 0 ? (
                <div>
                    <h2>El carrito esta vacio</h2>
                    <Link to="/">
                        <button>Volver a home</button>
                    </Link>
                </div>
            ) : (
                <> <div className='cartContainer' >                
                        <div className='cartHeader'> 
                            <div >
                                <h1>Carrito</h1>
                                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                            </div>
                        </div>

                    {cart?.map((prod) => (
                        <div key={prod.id}>
                            <div className='cartItems'>
                                <div className='cartImg'>
                                    <img src={prod.img} alt={prod.name}/>
                                </div>
                                <div className='cartDetail'>
                                    <h3>{prod.name}</h3>
                                    <div className='prices'>
                                        <h3>${prod.price}</h3>                                        
                                        <h3 className='amount'>Cantidad: {prod.cantidad}</h3>
                                    </div>

                                    <button onClick={() => deleteProd(prod.id)}>
                                        X
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                        <h3>{total()}</h3>
                    </div>
                </>
            )}
        </>
    );
};

export default Cart;