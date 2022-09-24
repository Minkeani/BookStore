import React from "react";
import BookCover from "../BookCover/BookCover";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BookGenre from "../BookGenre/BookGenre";
import BookBuy from "../BookBuy/BookBuy";
import { setCurrentBook } from "../../redux/CurrentBook/currentBookReducer";
import "./BookItem.css";

const BookItem = ({ book }) => {

  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispath(setCurrentBook(book));
    window.scrollTo(0, 0)
    navigate(`/app/${book.title}`);
  };

  return (
    <div onClick={handleClick}  className="book-item">
      <BookCover image={book.image} />
      <div className="book-item__details">
        <div className="autor-cont">
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
