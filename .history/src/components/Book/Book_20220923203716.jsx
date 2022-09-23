import React from "react";
import uniqid from 'uniqid'
import HTMLFlipBook from "react-pageflip";

const Book = ({ book }) => {

    // book.text.map(item => {
    //     console.log(item);
    // })

  return (
    <div className="page page-cover">
    <HTMLFlipBook width={300} height={500}>
        {book.text.map(page  => 
            <div key={uniqid()} className="demoPage">{page}</div>
        )}
      
    </HTMLFlipBook>
    </div>
  );
};

export default Book;
