import React from 'react';
import { useDispatch, useSelector } from "react-redux";


const BookBuy = ({book}) => {

    const dispath = useDispatch()

    const items = useSelector(state => state.book.itemsInBook)

    const isItemInBook = items.some(item => item.id === game.id)

    const handleClick = (e) => {
        e.stopPropagation()
        if(!isItemInBook) {
          dispath(setItemInBook(book))
        } else {
          dispath(deleteItemFromBook(book.id))
        }
        
      }

    return (
        <div className="book-buy">
        <span className="book-buy__price">{book.price}</span>
        <Btn  type={isItemInCart ? "secondary" : "primary" } onClick={handleClick}>
          {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
          
        </Btn>
      </div>
    );
}

export default BookBuy;
