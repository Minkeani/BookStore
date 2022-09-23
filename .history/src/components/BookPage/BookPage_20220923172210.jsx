import React from 'react';
import { useSelector } from "react-redux";
import './BookPage.css'

const BookPage = () => {

    const book = useSelector(state => state.current.currentBook)

    return (
        <div>
            
        </div>
    );
}

export default BookPage;
