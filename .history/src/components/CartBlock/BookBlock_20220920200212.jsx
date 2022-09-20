import React from "react";
import { BiBook, BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import "./BookBlock.css";

const BookBlock = () => {
  return (
    <div className="BookBlock">
      <BiCartAlt
        size={35}
        className="cart-icon"
        // onClick={() => setCartMenuVisible(!isCartMenuVisible)}
      />
    </div>
  );
};

export default BookBlock;
