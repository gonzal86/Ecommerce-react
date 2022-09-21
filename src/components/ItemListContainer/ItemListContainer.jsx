import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import prodData from '../data/produData';
import { useParams } from 'react-router-dom';
import db from '../../services/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const { categoria } = useParams();


//    const getProduData = () => new Promise((resolve, reject) => {
//        if (categoria) {
//             setTimeout(() => resolve(prodData.filter(produ => produ.categoria === categoria)), 2000)
//         } else {
//             setTimeout(() => resolve(prodData), 2000)
//         }

//     })

//     useEffect(() => {
//         getProduData()
//             .then(response => setProductos(response))
//     }, [categoria]);

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
            <ItemList list={productos} />
        </>
    )

};

export default ItemListContainer;

