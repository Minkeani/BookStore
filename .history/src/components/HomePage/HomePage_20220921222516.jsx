import React, {useState, useEffect} from "react";
import BookItem from "../BookItem/BookItem";
import { Books } from "../../data/data";
import cn from 'classnames'
import Filter from "../Filter/Filter";
import uniqid from "uniqid";
import "./HomePage.css";

const HomePage = () => {

  const [filter, setFilter] = useState(Books)
  const [change, setChange] = useState(true)
  
  const [allBook, setAllBook] = useState(filter.slice(3))
  const [hide, setHide] = useState(false)

  const priceFunc = (arr) => {
    setChange(!change)
    arr.sort(function (a, b) {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    setFilter(arr)
}

const titleFunc = (arr) => {
  setChange(!change)
  arr.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
}

const autorFunc = (arr) => {
  setChange(!change)
  arr.sort(function (a, b) {
    if (a.autor > b.autor) {
      return 1;
    }
    if (a.autor < b.autor) {
      return -1;
    }
    return 0;
  });
}

const handleClick = () => {
  setAllBook(filter)
  setHide(true)
}

useEffect(() => {
  
}, [change]);
  return (
    <div className="container">
    <Filter autorFunc={autorFunc} titleFunc={titleFunc} priceFunc={priceFunc} filter={allBook} setFilter={setFilter}/>
    <div className="container-home">
      <div className="home-page">
        {allBook.map((book) => (
          <BookItem book={book} key={uniqid()} />
        ))}
      </div>
    </div>
      <button onClick={handleClick} className={cn('btn-add', hide? 'hide' : '')}>Показать еще...</button>
    </div>
  );
};

export default HomePage;
