import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import './AnotherGame.css'
import BookItem from "../BookItem/BookItem";
import uniqid from 'uniqid'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import './AnotherBook.css'

const AnotherBook = () => {

    const book = useSelector((state) => state.current.currentBook);

    if(book.length === 0) {
        return (
          <div className="mySwiper">
            <h2>Игры в вашей корзине</h2>
            <p>Вы пока не добавили ничего в корзину</p>
          </div>
        )
      }

    return (
        <div>
            
        </div>
    );
}

export default AnotherBook;
