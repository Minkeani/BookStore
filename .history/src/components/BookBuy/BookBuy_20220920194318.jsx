import React from 'react';

const BookBuy = ({book}) => {
    return (
        <div className="game-buy">
        <span className="game-buy__price">{game.price}</span>
        <Btn  type={isItemInCart ? "secondary" : "primary" } onClick={handleClick}>
          {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
          
        </Btn>
      </div>
    );
}

export default BookBuy;
