import React from 'react';
import "bootswatch/dist/lux/bootstrap.min.css";
import { useCartContext } from '../Cart/CartContext';
import CartItem from './CartItem';
import './CartItem.css';
import './CartView.css';
import { Link } from 'react-router-dom';


const CartView = () => {
    const { cart, totalprecio } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <ul className="list-group margin-cart">
                    <li className="list-group-item" style={{ maxWidth: '900px' }}>
                        <div className="Carrito-Vacio">
                            <img src='https://cdn-icons-gif.flaticon.com/6451/6451073.gif' width='100' heigth='100' alt=''></img>
                            <strong> Tu carrito está Vacío </strong>
                            <Link to={`/Home`}>
                                <p className='link-compra'> ir a comprar <img src='https://cdn-icons-gif.flaticon.com/7740/7740503.gif' width='40' heigth='40' alt='' ></img></p>
                            </Link>
                        </div>
                    </li>
                </ul>
            </>
        );
    }

    return (
        <>
            <ul className="list-group margin-cart">
                {cart.map((element) => (
                    <CartItem key={element.id} product={element} />
                ))}

                <li className="list-group-item" style={{ maxWidth: '900px' }}>
                    <p className='Subtotal'>Subtotal:  <strong>${totalprecio()}</strong></p>
                    <Link to={`/Checkout/`}>
                        <button className="btn btn-outline-primary btn-finalizar"> Realizar Compra </button>
                    </Link>

                    <Link className='Seguir-Comprando' to={`/home`}>
                        <p> o Seguir Comprando <img src='https://cdn-icons-gif.flaticon.com/7740/7740503.gif' width='40' heigth='40' alt=''></img></p>
                    </Link>
                </li>

            </ul>

        </>
    );
}

export default CartView;
