import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import BookItem from "../BookItem/BookItem";
import uniqid from "uniqid";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Books } from "../../data/data";

import "./AnotherBook.css";

const AnotherBook = () => {

  Books.map((book) => {
    console.log(book);
  })

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {Books.map((book) => (
        <SwiperSlide key={uniqid()} className="swiper-item">
          1
          <BookItem book={book} key={uniqid()} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AnotherBook;
