import React from 'react';
import uniqid from 'uniqid'
import BookItem from '../BookItem/BookItem';
import { useSelector } from 'react-redux';
import './BookBasket.css'

const BookBasket = () => {

    const items = useSelector((state) => state.book.itemsInBook);

    if (items.length < 1) {
        return <h1>Ваша корзина пуста!</h1>;
      }

    return (
        <div className="container-home">
        <div className="home-page">
          {items.map((book) => (
            <BookItem book={book} key={uniqid()} />
          ))}
        </div>
      </div>
    );
}

export default BookBasket;
