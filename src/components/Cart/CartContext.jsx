import React, { useContext, useState } from 'react';

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
        if(isInCart(item.id)){
            console.log("existe en el carrito")
            setCart(cart.map(product=>{
                return product.id === item.id ? {...product, quantity: product.quantity + quantity , stock: product.stock - quantity} : product
            })); 
        }else{
            console.log("No existe en el carrito")
            setCart([...cart, {...item, quantity}]) //Si no está el item lo agrego y le sumo el campo quantity
        }
    }

    console.log(cart)

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            addToCart,
            removeItem,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}