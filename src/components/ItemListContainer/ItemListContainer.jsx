import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import prodData from '../data/produData';


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {


        const getProduData = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(prodData);
            }, 2000);
        });

        getProduData.then((response) => setProductos(response));

    }, []);

    return <ItemList list={productos} />

};

export default ItemListContainer;

