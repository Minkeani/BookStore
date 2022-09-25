import React from "react";
import './MyBook.css'
import uniqid from 'uniqid'
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page } from "react-pdf";


const MyBook = ({ book }) => {

    // book.text.map(item => {
    //     console.log(item);
    // })

  return (
    <HTMLFlipBook className="book" width={500} height={700}>
        {book.text.map(page  => 
            <div key={uniqid()} className="demoPage"><span>{page}</span></div>
        )}
      
    </HTMLFlipBook>
  );
};

export default MyBook;
