import React from "react";
import { BiBook, BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import "./BookBlock.css";

const BookBlock = () => {
  return (
    <div className="BookBlock">
      <ItemsInCart quantity={items.length} />

      <BiCartAlt
        size={35}
        className="cart-icon"
        // onClick={() => setCartMenuVisible(!isCartMenuVisible)}
      />
       {totalPrice > 0 ? (
        <span className="total-price">{totalPrice} руб</span>
      ) : null}
    </div>
  );
};

export default BookBlock;
