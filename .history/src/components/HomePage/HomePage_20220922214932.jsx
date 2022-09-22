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
  const [value, setValue] = useState('')
  
  const [allBook, setAllBook] = useState(filter.slice(2))
  const [sorted, setSorted] = useState(allBook)
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

const filterInput = (value) => {
  setValue(value)
  if(value !== '') {
    setSorted(allBook.filter(item => 
      item.title.includes(value)
  ))
  } else {
    setSorted(allBook)
  }
  
}


const deleteAdd = () => {
  if(hide && sorted.length > 4) {
    return true
  } else {
    return false
  }
}

useEffect(() => {
  
}, [change, allBook]);
  return (
    <div className="container">
    <Filter value={value} filterInput={filterInput} autorFunc={autorFunc} titleFunc={titleFunc} priceFunc={priceFunc} filter={allBook} setFilter={setFilter}/>
    <div className="container-home">
      <div className="home-page">
        {sorted.map((book) => (
          <BookItem book={book} key={uniqid()} />
        ))}
      </div>
    </div>
      <button onClick={handleClick} className={cn('btn-add', (sorted.length < 4) && hide ? 'hide' : '')}>Показать еще...</button>
    </div>
  );
};

export default HomePage;
