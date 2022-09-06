import React, { useEffect, useState } from 'react';
import prodData from '../data/produData';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const { id } = useParams()

    const getProduct = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve(prodData.find(produ => produ.id === Number(id))), 2000)
    })

    useEffect(() => {
        getProduct()
            .then(response => setItem(response))
    }, [])

    return (
        <>
            {
                item ? <ItemDetail item={item} /> : <h1>Cargando</h1>
            }
        </>
    )
}

export default ItemDetailContainer;