import React from "react";
import HTMLFlipBook from "react-pageflip";

const Book = ({ book }) => {
  return (
    <HTMLFlipBook width={300} height={500}>
      <div className="demoPage">Page 1</div>
    </HTMLFlipBook>
  );
};

export default Book;
