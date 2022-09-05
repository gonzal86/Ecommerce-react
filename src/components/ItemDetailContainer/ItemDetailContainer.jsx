import React, {useEffect, useState} from 'react';
import prodData from '../data/produData';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    const getProduct = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve(prodData.find(produ => produ.id === 2)), 2000)
    })

    useEffect(() => {
        getProduct()
        .then(response => setItem(response))
    },[])

    return (
        <div>
            <ItemDetail item = { item }/>
        </div>
    );
}

export default ItemDetailContainer;
