import React, { useEffect, useState } from 'react'
import ReactPaginate from "react-paginate";
import "bootswatch/dist/lux/bootstrap.min.css";
import "./ItemList.css";
import Item from '../Item/Item';

export default function ItemList(props) {
    const { data } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="row row-cols-1 row-cols-md-4 g-4 cards-margin">
                {currentItems.map(producto => {
                    return (
                        <>
                            <Item producto={producto} key={producto.id} />
                        </>
                    );
                })}
            </div>

            <ReactPaginate
                breakLabel="..."
                nextLabel="  >> "
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel=" <<  "
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
            />
        </>
    );

}