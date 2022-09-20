import React from 'react';
import BookCover from '../BookCover/BookCover';
import BookGenre from '../BookGenre/BookGenre';
import './BookItem.css'

const BookItem = ({book}) => {
    return (
        <div className="book-item">
        <BookCover image={book.image} />
        <div className="book-item__details">
          <span className="book-item__title"></span>
          <div className="book-item__genre">
            {book.genres.map((genre) => (
              <BookGenre genre={genre} key={genre} />
            ))}
          </div>
          <div className="book-item__buy">
            <BookBuy book={book} />
          </div>
        </div>
      </div>
    );
}

export default BookItem;
