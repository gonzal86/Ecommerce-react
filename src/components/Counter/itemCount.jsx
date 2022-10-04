import React from 'react';
import './Counter.css'
import "bootswatch/dist/lux/bootstrap.min.css";
import { useState } from 'react';

/*Logica para el contador de elementos en el detalle del producto */
export const Count = ({stock,onClick}) => {
    const [count, setCount] = useState(0)
    const [counterStock, setStock] = useState(stock)

    function add() {
        if (counterStock > 0) {
            setCount(count + 1)
            setStock(counterStock - 1)
        }
        else {
            alert("Sin Stock");
        }
    }

    function substract() {
        if (count > 0) {
            setCount(count - 1)
            setStock(counterStock + 1)

        }
    }

    function reset() {
        setCount(0)
        setStock(stock)
    }

    return (
        <div>
            <p>En Stock: {counterStock}</p>
            <p>Cantidad a comprar: {count} </p>
            <div className='botones'>
                <button className='btn btn-outline-dark boton-resta' onClick={substract}> - </button>
                <button className='btn btn-outline-dark' onClick={reset}> Cancelar </button>
                <button className='btn btn-outline-dark boton-suma' onClick={add}> + </button>
                <div className='btn-carrito'>
                    <button className='btn btn-outline-dark' onClick={()=>onClick(count)}> agregar carrito</button>
                </div>
            </div>
        </div>
    );
}

export default Count;
