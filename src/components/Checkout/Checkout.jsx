import React, { useState } from 'react';
import "./Checkout.css";
import { useCartContext } from '../Cart/CartContext';
import db from '../../services/firebase';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

const Checkout = () => {
    const { cart, totalprecio, clear } = useCartContext()
    const [orderId, setOrderId] = useState()

    const [buyer, setBuyer] = useState({
        email: '',
        nombre: '',
        apellido: '',
        numeroTarjeta: '',
        nombreTarjeta: '',
        CVV: ''
    })

    const { email, nombre, apellido, numeroTarjeta, nombreTarjeta, CVV } = buyer

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const items = cart.map(e => { return { id: e.id, title: e.titulo, precio: e.precio, cantidad: e.quantity } })
        const dia = new Date()
        const total = totalprecio()
        const data = { buyer, items, dia, total }
        console.log('data', data)
        generateOrder(data)
        clear()
    }

    const generateOrder = async (data) => {
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            console.log("OrdenNro:", order)
            setOrderId(order.id)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {!orderId ?
                <div className='margin-checkout' style={{ maxWidth: '900px' }}>
                    <form onSubmit={handleSubmit}>
                        <h3 className='titulo-checkout'><strong>Datos de contacto</strong></h3>
                        <div className="mb-3 col-8">
                            <label className="form-label">Correo Electornico</label>
                            <input type="email" className="form-control color-text" name="email" required value={email} onChange={handleInputChange} />
                        </div>
                        <h3 className='titulo-checkout dato-contacto'><strong>Datos de Compra</strong></h3>
                        <div className="row">
                            <div className="col">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control color-text" name="nombre" required value={nombre} onChange={handleInputChange} />
                            </div>
                            <div className="col">
                                <label className="form-label">Apellido</label>
                                <input type="text" className="form-control color-text" name="apellido" required value={apellido} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="row datos-tarjeta">
                            <div className="col">
                                <label className="form-label">Numero Tarjeta</label>
                                <input type="number" className="form-control color-text" name="numeroTarjeta" required value={numeroTarjeta} onChange={handleInputChange} />
                            </div>
                            <div className="col">
                                <label className="form-label">Nombre en Tarjeta</label>
                                <input type="text" className="form-control color-text" name="nombreTarjeta" required value={nombreTarjeta} onChange={handleInputChange} />
                            </div>
                            <div className="col">
                                <label className="form-label">CVV</label>
                                <input type="number" className="form-control color-text" name="CVV" required value={CVV} onChange={handleInputChange} />
                            </div>
                        </div>
                        <input type="submit" value="Finalizar Compra" className="btn btn-outline-primary btn-finalizar" />
                    </form>
                </div>
                : <div>  {Swal.fire({
                    icon: 'success',
                    title: 'Orden de Compra',
                    text: `Su codigo de orden de compra es: ${orderId}`,
                    showConfirmButton: false,
                    allowOutsideClick: false,
                    footer: `<a class="btn btn-primary" href="/home">Cerrar</a>`
                })}</div>
            }
        </>
    );
}

export default Checkout;
