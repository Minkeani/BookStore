import React, {useState, useEffect} from "react";
import BookItem from "../BookItem/BookItem";
import { Books } from "../../data/data";
import Filter from "../Filter/Filter";
import uniqid from "uniqid";
import "./HomePage.css";

const HomePage = () => {

  const [filter, setFilter] = useState(Books)

  const priceFunc = (arr) => {
    arr.sort(function (a, b) {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });
    setFilter(arr)
    return filter
    console.log(filter);
}

useEffect(() => {
  console.log('1');
  
}, [priceFunc]);
  return (
    <div className="container">
    <Filter priceFunc={priceFunc} filter={filter} setFilter={setFilter}/>
    <div className="container-home">
      <div className="home-page">
        {filter.map((book) => (
          <BookItem book={book} key={uniqid()} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default HomePage;
