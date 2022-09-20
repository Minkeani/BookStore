import React, {useState} from "react";
import { BiBook, BiCartAlt } from "react-icons/bi";
import ItemsInBook from "../ItemsInBook/ItemsInBook";
import { useSelector } from "react-redux";
import "./BookBlock.css";

const BookBlock = () => {

  const items = useSelector((state) => state.book.itemsInBook);
  const totalPrice = items.reduce((acc, game) => (acc += game.price), 0);
  const [isCartMenuVisible, setCartMenuVisible] = useState(false)


  return (
    <div className="book-block ">
      <ItemsInBook quantity={items.length} />

      <BiCartAlt
        size={35}
        className="book-icon"
        // onClick={() => setCartMenuVisible(!isCartMenuVisible)}
      />
       {totalPrice > 0 ? (
        <span className="total-price">{totalPrice} руб</span>
      ) : null}
    </div>
  );
};

export default BookBlock;
