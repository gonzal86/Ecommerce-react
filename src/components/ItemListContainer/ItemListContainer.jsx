import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import db from '../../services/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const { categoria } = useParams();

    const getData = async (categoria) => {
        try {
            const document = categoria ? query(collection(db, "items"), where("categoria", "==", categoria))
                : collection(db, "items")
            const col = await getDocs(document)
            const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
            setProductos(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData(categoria)
    }, [categoria])

    return (
        <>
            <ItemList data={productos} />
        </>
    )

};

export default ItemListContainer;

