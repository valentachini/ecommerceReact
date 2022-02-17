import { useState } from 'react';
import { useCartContext } from '../context/cartContext';
import { addDoc, collection, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore"
import Resume from '../resume/resume';
import { AiFillDelete } from 'react-icons/ai';
import { BsBagX } from 'react-icons/bs';


const Cart = () => {
    const { cartList, vaciarCarrito, totalPrice, deleteProd } = useCartContext ()
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
        orden.total = totalPrice();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.name;
            const precio = cartItem.price * cartItem.stock;
            const cantidad = cartItem.stock
            
            return {id, nombre, precio, cantidad}   
        }) 
console.log(orden)
        
        const db = getFirestore()

        const orderCollection = collection(db, 'ordenes')
        await addDoc(orderCollection, orden) 
        .then(resp => setIdOrden(resp.id))
        .catch(err => console.log(err))
        .finally(() => console.log('cargando') )
        
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
        <div className='container'>  
            {
                condicional  ? 
                    <Resume idOrden={idOrden} />
                : 
                    <>
                        {
                            <div className='cartContainer' >                
                                                     <div className='cartHeader'>                                                          
                                                             <h2>Carrito</h2>
                                                             <button className='btn btnEmpty' onClick={vaciarCarrito}> <BsBagX/>Vaciar Carrito</button>
                                                    </div>
                            
                                                {cartList?.map((prod) => (
                                                    <div className='cartItems' key={prod.id}>
                                                        
                                                            <div className='cartImg'>
                                                                <img src={prod.img} alt={prod.name}/>
                                                            </div>
                                                            <div className='cartDetail'>
                                                                <h3>{prod.name}</h3>
                                                                <div className='prices'>
                                                                    <p>${prod.price}</p>                                        
                                                                    <p className='amount'>Cantidad: {prod.cantidad}</p>
                                                                </div>                            
                                                                <button className='btn btnDelete' onClick={() => deleteProd(prod.id)}>
                                                                <AiFillDelete/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    
                                                ))}
                                                    <div className='totalContainer'>
                                                        <h3>Total</h3>
                                                        <h3>${totalPrice()}</h3>
                                                    </div>
                                                </div>
                      
                        
                        }
                    <div className='checkOut'>
                        <form onSubmit={realizarCompra}>
                            <input
                                type='text' 
                                name='name' 
                                placeholder='nombre' 
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
                            <input 
                                type='email' 
                                name='email'
                                placeholder='confirmar email' 
                                onChange={handleChange}
                                value={dataForm.email}
                            /><br/>
                        <button className='btn btnChekout' onClick={realizarCompra}>Generar Orden</button>                            
                        </form>
                    </div>    
                    </>

            }          
        </div>
    )
}

export default Cart













