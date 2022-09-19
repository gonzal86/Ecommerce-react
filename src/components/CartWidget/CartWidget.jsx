import React from 'react'
import { Link } from 'react-router-dom'
import "./CartWidget.css"
import { useCartContext } from '../Cart/CartContext';


export default function CartWidget() {
    const { cart, totalProductos  } = useCartContext();

    return (
        <>
            <div className={`${cart.length === 0 ? "d-none" : "d-block"}`}>
                <Link to={`/cart/`}>
                    <img  className='Margin-widget' src="https://cdn-icons-gif.flaticon.com/6416/6416376.gif" width="50" heigth="50"></img>
                </Link>
                <strong className='CantProductos'>{totalProductos()}</strong>
                
            </div>
        </>
    )
}
