import React from "react";
import { BiCartAlt } from "react-icons/bi";
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
