import React from 'react';

const BookGenre = ({image}) => {
    return (
        <div
        className="book-cover"
        style={{ backgroundImage: `url(${image})` }}
    />
    );
}

export default BookGenre;
