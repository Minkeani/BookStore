import React from "react";
import BookGenre from "../BookGenre/BookGenre";
import BookBuy from "../BookBuy/BookBuy";
import { useSelector } from "react-redux";
import "./BookPage.css";
import { useNavigate } from "react-router-dom";
import MyBook from "../Book/MyBook";
import AnotherBook from "../AnotherBook/AnotherBook";
const BookPage = () => {
  const book = useSelector((state) => state.current.currentBook);

  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };
  if (!book) return (<div className="empty"></div>)
  return (
    <div className="container">
      <div className="container-page">
        <button className="back-btn" onClick={handleClick}>← Назад</button>
        <h1>{book.title}</h1>
        <img src={book.image} alt="" />
        {book.genres.map((genre) => (
          <BookGenre genre={genre} key={genre} />
        ))}
        <p>{book.description}</p>
        <div className="book-page__buy-game">
          <BookBuy book={book} />
        </div>
        <h2>Обязательно посмотрите видео о книге</h2>
        <iframe
          width="90%"
          height="500px" 
          src={book.video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe> 
        <h2>Почитайте</h2>
        {book.pdf ? <MyBook book={book.pdf} /> : ""}
        <h2>Другие книги</h2>
        <AnotherBook />
      </div>
    </div>
  );
};

export default BookPage;
