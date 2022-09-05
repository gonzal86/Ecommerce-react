import React, { useEffect, useState } from 'react';
import "bootswatch/dist/lux/bootstrap.min.css";
import Item from '../Item/Item';
import './ItemList.css'


const ItemList = ({ list }) => {

    return (
        <div className="row row-cols-1 row-cols-md-4 g-4 cards-margin">
            {list.map((producto) => (
                    <Item producto={producto} key={producto.id} />
            ))}
        </div>
    );
};

export default ItemList;
