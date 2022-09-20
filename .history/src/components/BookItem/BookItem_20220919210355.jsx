import React from 'react';
import BookCover from '../BookCover/BookCover';
import BookGenre from '../BookGenre/BookGenre';
import './BookItem.css'

const BookItem = ({book}) => {
    return (
        <div className="book-item">
              <BookCover image={book.image} />
              <div className="book-item__details">
              <span className="game-item__title"></span>
        <div className="game-item__genre">
        <div className="game-item__genre">
          {book.genres.map((genre) => (
            <BookGenre genre={genre} key={genre} />
          ))}
        </div>
              </div>
        </div>
    );
}

export default BookItem;
