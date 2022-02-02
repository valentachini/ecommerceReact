import { useState, useContext, createContext } from "react";

const cartContext = createContext([])

export const CartContext = createContext();

export function useCartContext() {
    return useContext(cartContext)
}

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isOnCart(item.id)) {
            sumarCantidad(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const isOnCart = (id) => {
        const carrito = cart.some((prod) => prod.id === id);

        return carrito;
    };

    const sumarCantidad = (item, cantidad) => {
        const copia = [...cart];
        copia.forEach((producto) => {
            producto.id === item.id && (producto.cantidad += cantidad);
        });
    };

    const deleteProd = (id) => {
        setCart(cart.filter((producto) => producto.id !== id));
    };

    const vaciarCarrito = () => {
        setCart([]);
    };

    const total = () => {
        let count = 0;
        cart.forEach((producto) => {
            count += producto.price * producto.cantidad;
        });
        return count;
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, deleteProd, vaciarCarrito, total }}
        >
            {children}
        </CartContext.Provider>
    );
};

