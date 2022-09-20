import React from 'react';
import './ItemsInBook.css'

const ItemsInBook = ({ quantity = 0}) => {
    return quantity > 0 ?(
        <div className="items-in-cart">
            { quantity }
        </div>
    ) : null
}

export default ItemsInBook;
