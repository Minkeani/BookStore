import React, {useState} from "react";
import BookItem from "../BookItem/BookItem";
import { Books } from "../../data/data";
import uniqid from "uniqid";
import "./HomePage.css";

const HomePage = () => {

  const [filter, setFilter] = useState(Books)

  return (
    <div className="container-home">
      <div className="home-page">
        {filter.map((book) => (
          <BookItem book={book} key={uniqid()} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
