import React from 'react';
import { useSelector } from "react-redux";
import './BookPage.css'

const BookPage = () => {

    const book = useSelector(state => state.current.currentBook)

    console.log(book);
    return (
        <div>
            <h1>{book.title}</h1>
        </div>
    );
}

export default BookPage;
