import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import BookItem from "../BookItem/BookItem";
import './AnotherBook.css'
import uniqid from "uniqid";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Books } from "../../data/data";

import "./AnotherBook.css";

const AnotherBook = () => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="'  + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="container">

    
    <Swiper
    pagination={pagination}
    modules={[Pagination]}
    className="mySwiper"
    slidesPerView={3}

  >
      {Books.map((book) => (
        <SwiperSlide key={uniqid()} className="swiper-item">
          <BookItem book={book} key={uniqid()} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default AnotherBook;
