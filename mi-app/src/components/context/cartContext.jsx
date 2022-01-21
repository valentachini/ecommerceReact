import { useState, useContext, createContext } from "react";

const cartContext = createContext([])

export function useCartContext () {
    return useContext (cartContext)
}

export const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])

    function agregarAlCarrito (items) {
        setCartList ([...cartList, items])
    }

    function vaciarCarrito() {
        setCartList([])
    }
    
    return(
        <cartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito
        }}>
            {children}
        </cartContext.Provider>
    )
}