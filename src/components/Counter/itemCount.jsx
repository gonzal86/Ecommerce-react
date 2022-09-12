import React from 'react';
import './Counter.css'
import "bootswatch/dist/lux/bootstrap.min.css";
import { useState } from 'react';

export const Count = ({ onAdd }) => {
    const [count, setCount] = useState(0)
    const [counterStock, setStock] = useState(10)

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
        setStock(10)
    }


    return (
        <div>
            <p>En Stock: {counterStock}</p>
            <p>Cantidad a comprar: {count} </p>
            <div className='botones'>
                <button className='btn btn-outline-dark' onClick={substract}> - </button>
                <button className='btn btn-outline-dark' onClick={reset}> Cancelar </button>
                <button className='btn btn-outline-dark' onClick={add}> + </button>
                <div className='btn-carrito'>
                    <button className='btn btn-outline-dark' onClick={() => onAdd()}> agregar carrito</button>
                </div>
            </div>
        </div>
    );
}

export default Count;
