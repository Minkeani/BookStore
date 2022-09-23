import React from "react";
import HTMLFlipBook from "react-pageflip";

const Book = ({ book }) => {
  return (
    <HTMLFlipBook width={300} height={500}>
        {/* {book.text.map(page => 
            <div className="demoPage">{page}</div>
        )}
       */}
    </HTMLFlipBook>
  );
};

export default Book;
