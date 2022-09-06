import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import prodData from '../data/produData';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const { categoria } = useParams();


    const getProduData = () => new Promise((resolve, reject) => {
        if(categoria){
            setTimeout(() => resolve(prodData.filter(produ => produ.categoria === categoria)), 2000)
        }else{
            setTimeout(() => resolve(prodData), 2000)
        }

    })

    useEffect(() => {
        getProduData()
            .then(response => setProductos(response))
    }, [categoria]);

    return <ItemList list={productos} />

};

export default ItemListContainer;

