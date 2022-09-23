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


    return (
        <div>
            
        </div>
    );
}

export default AnotherBook;
