import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import "./AnotherGame.css";
import BookItem from "../BookItem/BookItem";
import uniqid from "uniqid";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Books } from "../../data/data";

import "./AnotherBook.css";

const AnotherBook = () => {

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
      {Books.map((game) => (
        <SwiperSlide key={uniqid()} className="swiper-item">
          <BookItem book={book} key={uniqid()} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AnotherBook;
