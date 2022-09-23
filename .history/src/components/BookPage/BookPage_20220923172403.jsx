import React from 'react';
import { useSelector } from "react-redux";
import './BookPage.css'

const BookPage = () => {

    const book = useSelector(state => state.current.currentBook)

    console.log(book);
    return (
        <div>
            
        </div>
    );
}

export default BookPage;
