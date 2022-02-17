import { useState, useContext, createContext } from 'react'

const cartContext = createContext([])


export function useCartContext() {
    return useContext(cartContext)
}

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])


    function addToCart(items) {

         const indice=cartList.findIndex(i => i.id === items.id) 
       
         if (indice > -1){
             const qtyVieja=cartList[indice].cantidad
 
             let qtyNueva= qtyVieja + items.cantidad
 
             cartList[indice].cantidad = qtyNueva
             
             let arrAux = [...cartList]
             
             setCartList(arrAux)
 
         }else{
            setCartList([...cartList, items])
         }
    }

    const totalPrice = () => {
        return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.price) , 0)
      }
  
    const deleteProd = (id) => {
        setCartList( cartList.filter(prod => prod.id !== id) )
    }

    const stockItem = () =>{
        return cartList.reduce( (acum, item)=> acum = acum + item.cantidad , 0)
    }

    
    function vaciarCarrito() {
        setCartList([])
    }

    console.log(cartList)

    return(
        <cartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            totalPrice,
            deleteProd,
            stockItem
        }} >
            {children}
        </cartContext.Provider>
    )
}


























// import { useState, useContext, createContext } from "react";

// const CartContext = createContext([])

// // export const CartContext = createContext();

// export function useCartContext() {
//     return useContext(CartContext)
// }

// export const CartContextProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     const addToCart = (item, cantidad) => {
//         if (isOnCart(item.id)) {
//             sumarCantidad(item, cantidad);
//         } else {
//             setCart([...cart, { ...item, cantidad }]);
//         }
//     };

//     const isOnCart = (id) => {
//         const carrito = cart.some((prod) => prod.id === id);

//         return carrito;
//     };

//     const sumarCantidad = (item, cantidad) => {
//         const copia = [...cart];
//         copia.forEach((producto) => {
//             producto.id === item.id && (producto.cantidad += cantidad);
//         });
//     };

//     const deleteProd = (id) => {
//         setCart(cart.filter((producto) => producto.id !== id));
//     };

//     const vaciarCarrito = () => {
//         setCart([]);
//     };

//     const total = () => {
//         let count = 0;
//         cart.forEach((producto) => {
//             count += producto.price * producto.cantidad;
//         });
//         return count;
//     };

//     return (
//         <CartContext.Provider
//             value={{ cart, addToCart, deleteProd, vaciarCarrito, total }}
//         >
//             {children}
//         </CartContext.Provider>
//     );
// };

