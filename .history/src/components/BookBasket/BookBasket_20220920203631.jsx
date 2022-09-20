import React from 'react';
import './BookBasket.css'

const BookBasket = () => {

    const items = useSelector((state) => state.book.itemsInBook);


    return (
        <div>
            BookBasket
        </div>
    );
}

export default BookBasket;
