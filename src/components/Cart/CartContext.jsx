import React, { useContext, useState } from 'react';
import { ShopWindow } from 'react-bootstrap-icons';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    /*Logica del carrito de compras*/

    const [cart, setCart] = useState([]);

    /*Funcion para limpiar el carrito */
    const clearCart = () => {
        setCart = [];
    }

    /*Agregar elementos al carrito (verifico si el elemento existe: si existe modifico valores, sino lo agrego al array)*/
    const addToCart = (item, quantity) => {
        /*     if (isInCart(item.id)) {
                setCart(cart.map(product => {
                    return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
                }));
                console.log("actualizo");
                console.log({ cart });
            }
            else {
                setCart([...cart, { item: item, quantity: quantity }])
                console.log(isInCart(item.id));
                console.log("Nuevo");
                console.log(cart);
            }
        } */

        if (cart.length === 0) {
            setCart([...cart, { item: item, quantity: quantity }])
        } else {
            const findICart = cart.find(producto => producto.id === item.id)
            if (findICart) {
                findICart.quantity = findICart.quantity + quantity
                setCart([...cart])
            } else {
                setCart([...cart, { item: item, quantity: quantity }])
            }
        }

        console.log(cart)
    }


    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

    return (
        <CartContext.Provider value={{
            clearCart,
            addToCart,
            isInCart,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}