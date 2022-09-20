import React from 'react';
import './BookGenre.css'

const BookGenre = ({image}) => {
    return (
        <div
        className="book-cover"
        style={{ backgroundImage: `url(${image})` }}
    />
    );
}

export default BookGenre;
