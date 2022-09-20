import React from "react";
import BookItem from "../BookItem/BookItem";
import uniqid from "uniqid";
import "./HomePage.css";

const HomePage = () => {

  return (
    <div className="container-home">
      <div className="home-page">
        {Books.map((book) => (
          <BookItem book={book} key={uniqid()} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
