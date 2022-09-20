import React from 'react';
import './BookCover.css'

const BookCover = ({image}) => {
    return (
        <div
        className="book-cover"
        style={{ backgroundImage: `url(${image})` }}
    />
    );
}

export default BookCover;
