import React from 'react';
import "bootswatch/dist/lux/bootstrap.min.css";
import { useCartContext } from '../Cart/CartContext';

const CartItem = ({ product }) => {


    const { removeItem } = useCartContext();
    return (
        <>
            <li className="list-group-item" style={{ maxWidth: '900px'}}>
                    <div className="row g-0">
                        <div className="col-md-4 imagen-carrito">
                            <img src={product.img} className="img-fluid rounded-start" width='220' height='220' alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h6 className="card-title titulo-item-Cart">{product.titulo}</h6>
                                <p className="card-text Price">${product.precio}</p>
                                <p className="card-text Quantity">Cantidad: {product.quantity}</p>
                                <strong className='pointer'><a onClick={() => removeItem(product.id)}> Quitar </a></strong>
                            </div>
                        </div>
                    </div>
            </li>
        </>
    );
}

export default CartItem;
