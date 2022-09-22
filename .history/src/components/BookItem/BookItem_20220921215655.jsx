import React from "react";
import BookCover from "../BookCover/BookCover";
import BookGenre from "../BookGenre/BookGenre";
import BookBuy from "../BookBuy/BookBuy";
import "./BookItem.css";

const BookItem = ({ book }) => {
  return (
    <div className="book-item">
      <BookCover image={book.image} />
      <div className="book-item__details">
        <div>
          <span className="book-item__title">{book.title}</span>
          <span className="book-item__title">{book.autor}</span>
        </div>

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
};

export default BookItem;
