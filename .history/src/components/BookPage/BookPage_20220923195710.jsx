import React from "react";
import BookGenre from "../BookGenre/BookGenre";
import BookBuy from "../BookBuy/BookBuy";
import { useSelector } from "react-redux";
import "./BookPage.css";

const BookPage = () => {
  const book = useSelector((state) => state.current.currentBook);

  if (!book) return null;

  return (
    <div className="container">
      <div className="container-page">
        <h1>{book.title}</h1>
        <img src={book.image} alt="" />
        {book.genres.map((genre) => (
            <BookGenre genre={genre} key={genre} />
          ))}
        <p>{book.description}</p>
        <div className="book-page__buy-game">
          <BookBuy book={book} />
        </div>
        <h2></h2>
      </div>
    </div>
  );
};

export default BookPage;
