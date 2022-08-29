import React from 'react';
import './Counter.css'
import "bootswatch/dist/lux/bootstrap.min.css";
import { useState } from 'react';

const Count = ({ stock }) => {
    const [count, setCount] = useState(0)
    const [counterStock, setStock] = useState(stock)

    function add() {
        if (counterStock > 0) {
            setCount(count + 1)
            setStock(counterStock - 1)
        }
        else{
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
            <p>Stock: {counterStock}</p>
            <p>Cantidad: {count} </p>

            <div className='botones'>
                <button className='btn' onClick={substract}> - </button>
                <button className='btn' onClick={reset}> Reset </button>
                <button className='btn' onClick={add}> + </button>
            </div>
        </div>
    );
}

export default Count;
