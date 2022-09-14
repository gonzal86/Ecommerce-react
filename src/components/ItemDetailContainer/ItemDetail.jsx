import React, { useState } from 'react';
import './ItemDetail.css';
import Count from '../Counter/itemCount';
import "bootswatch/dist/lux/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { useCartContext } from '../Cart/CartContext';


export const ItemDetail = ({ item }) => {

    const { addToCart } = useCartContext();

    const [show, setshow] = useState(true)

    const onAdd = (count) => {
        setshow(false)
        addToCart(item, count);
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
                                show ? <Count stock = {item.stock} onClick={onAdd} /> : <Link to={`/cart/`}>
                                    <div className='margin-button'><button type="button" className="btn btn-outline-primary"> Ir al carrito </button></div>
                                </Link>
                            }
                        </div>
                    </div>
                </div>

                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Caracteristicas
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Detalle
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ItemDetail;
