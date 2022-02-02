import React, { useState } from 'react';
import { useCartContext } from '../context/cartContext';
// import { Link } from 'react-router-dom';
import { addDoc, collection, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore"
import Resume from '../resume/resume';



const Cart = () => {
    const { cartList, vaciarCarrito, precioTotal, deleteProd } = useCartContext ()
    const [condicional, setCondicional] = useState(false);
    const [dataForm , setDataForm ] = useState({
        email: '',
        name: '',
        phone: ''
    });
    const [idOrden, setIdOrden] = useState('');

    const realizarCompra = async (e) => {
        e.preventDefault()   
         
        let orden = {}
             

        orden.buyer = dataForm 
        orden.total = precioTotal();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.title;
            const precio = cartItem.precio * cartItem.cantidad;
            const cantidad = cartItem.cantidad
            
            return {id, nombre, precio, cantidad}   
        }) 

        
        const db = getFirestore()

        const oredenCollection = collection(db, 'ordenes')
        await addDoc(oredenCollection, orden) 
        .then(resp => setIdOrden(resp.id))
        .catch(err => console.log(err))
        

        
        const queryCollection = collection(db, 'items')

      
        const queryActulizarStock = query(
            queryCollection, 
            where( documentId() , 'in', cartList.map(it => it.id))          
        ) 

        const batch = writeBatch(db)       
        
        await getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
            }) 
        ))
        .catch(err => console.log(err))
        .finally(()=> console.log('stock actualizado'))

        batch.commit()
        setCondicional(true)    
    }

    function handleChange(e) {
        
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    
    
    return (
        <div>  
            {
                condicional  ? 
                    <Resume idOrden={idOrden} />
                : 
                    <>
                        {
                            <div className='cartContainer' >                
                                                     <div className='cartHeader'> 
                                                         <div >
                                                             <h1>Carrito</h1>
                                                             <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                                                        </div>
                                                    </div>
                            
                                                {cartList?.map((prod) => (
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
                                                    {/* <h3>{total}</h3> */}
                                                </div>
                      
                        
                        /* {cartList.map(prod => <li key={prod.id}>{prod.title} - cant: {prod.cantidad}</li>)}
                        <button onClick={vaciarCarrito}>Vaciar CArrito</button> */}
                        <form 
                            onSubmit={realizarCompra} 
                            //onChange={handleChange} 
                        >
                            <input 
                                type='text' 
                                name='name' 
                                placeholder='name' 
                                onChange={handleChange}
                                value={dataForm.name}
                            /><br />
                            <input 
                                type='text' 
                                name='phone'
                                placeholder='tel' 
                                onChange={handleChange}
                                value={dataForm.phone}
                            /><br/>
                            <input 
                                type='email' 
                                name='email'
                                placeholder='email' 
                                onChange={handleChange}
                                value={dataForm.email}
                            /><br/>
                            <button>Generar Orden</button>
                        </form>
                        {/* <button onClick={realizarCompra}>Generar Orden</button> */}
                    </>

            }          
        </div>
    )
}

export default Cart






// const Cart = () => {
//     const { cart, deleteProd, vaciarCarrito, total } = useContext(CartContext);
    

//     return (
//         <>
//             {cart.length === 0 ? (
//                 <div>
//                     <h2>El carrito esta vacio</h2>
//                     <Link to="/">
//                         <button>Volver a home</button>
//                     </Link>
//                 </div>
//             ) : (
//                 <> <div className='cartContainer' >                
//                         <div className='cartHeader'> 
//                             <div >
//                                 <h1>Carrito</h1>
//                                 <button onClick={vaciarCarrito}>Vaciar Carrito</button>
//                             </div>
//                         </div>

//                     {cart?.map((prod) => (
//                         <div key={prod.id}>
//                             <div className='cartItems'>
//                                 <div className='cartImg'>
//                                     <img src={prod.img} alt={prod.name}/>
//                                 </div>
//                                 <div className='cartDetail'>
//                                     <h3>{prod.name}</h3>
//                                     <div className='prices'>
//                                         <h3>${prod.price}</h3>                                        
//                                         <h3 className='amount'>Cantidad: {prod.cantidad}</h3>
//                                     </div>

//                                     <button onClick={() => deleteProd(prod.id)}>
//                                         X
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                         <h3>{total()}</h3>
//                     </div>
//                 </>
//             )}
//         </>
//     );
// };

// export default Cart;



















