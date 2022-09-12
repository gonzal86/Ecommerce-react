import React, { useState } from 'react';
import './ItemDetail.css';
import Count from '../Counter/itemCount';
import "bootswatch/dist/lux/bootstrap.min.css";
import { Link } from 'react-router-dom';

export const ItemDetail = ({ item }) => {

    const [show, setshow] = useState(true)

    const onAdd = () => {
        setshow(false)
        console.log({ show })
    }

    return (
        <article className='margin-detail'>
            <div className="card mb-4" style={{ maxWidth: '1200px' }}>
                <div className="row g-0">
                    <div className="col-md-4 margin-img">
                        <img src={item.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 detalle-letra">
                        <div className="card-body">
                            <h5 className="card-title">{item.titulo}</h5>
                            <p className="card-text">{item.descripcion}</p>
                            <p className="card-text">{item.detalle}</p>
                            <h4 className="card-text">$ {item.precio}</h4>
                            {
                                show ? <Count onAdd={onAdd} /> : <Link to={`/cart/`}>
                                    <div className='margin-button'><button type="button" className="btn btn-outline-primary"> Ir al carrito </button></div>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ItemDetail;
