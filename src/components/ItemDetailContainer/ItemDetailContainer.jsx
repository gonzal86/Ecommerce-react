import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import "./ItemDetailContainer.css"
import { useParams } from 'react-router-dom';
import db from '../../services/firebase'
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const { id } = useParams()

    const getSelected = async (id) => {
        try {
            const document = doc(db, "items", id)
            const response = await getDoc(document)
            const result = { id: response.id, ...response.data() }
            setItem(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSelected(id)
    }, [id])

    return (
        <>
            {
                item ? <ItemDetail item={item} /> : <div className='loading'><img src="https://cdn-icons-gif.flaticon.com/7403/7403027.gif" width="100" heigth="100" alt=''></img>Cargando...</div>
            }
        </>
    )
}

export default ItemDetailContainer;
