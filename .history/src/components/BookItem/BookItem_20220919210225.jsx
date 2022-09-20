import React from 'react';
import BookCover from '../BookCover/BookCover';
import './BookItem.css'

const BookItem = ({book}) => {
    return (
        <div className="book-item">
              <BookCover image={book.image} />
        </div>
    );
}

export default BookItem;
