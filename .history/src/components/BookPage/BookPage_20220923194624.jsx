import React from "react";
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
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookPage;
