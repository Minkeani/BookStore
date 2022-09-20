import React from 'react';
import { useSelector } from 'react-redux';
import './BookBasket.css'

const BookBasket = () => {

    const items = useSelector((state) => state.book.itemsInBook);

    if (items.length < 1) {
        return <h1>Ваша корзина пуста!</h1>;
      }

    return (
        <div>
            BookBasket
        </div>
    );
}

export default BookBasket;
