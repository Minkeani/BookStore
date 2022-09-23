import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Btn from '../Ui/Btn/Btn';
import { setItemInBook, deleteItemFromBook } from '../../redux/FavouriteBook/FavReducer';


const BookBuy = ({book}) => {

    const dispath = useDispatch()

    const items = useSelector(state => state.book.itemsInBook)

    const isItemInBook = items.some(item => item.id === book.id)

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
        <span className="book-buy__price">{book.price} руб. </span>
        <Btn  type={isItemInBook ? "secondary" : "primary" } onClick={handleClick}>
          {isItemInBook ? 'Убрать из корзины' : 'В корзину'}
          
        </Btn>
      </div>
    );
}

export default BookBuy;
