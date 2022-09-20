import React from 'react';
import './BookGenre.css'

const BookGenre = ({genre}) => {
    return (
        <span className="book-genre">{ genre }</span>
    );
}

export default BookGenre;
