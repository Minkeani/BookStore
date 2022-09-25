import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { useCallback, useRef } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "./styles.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PageBook = React.forwardRef((props, ref) => {
  function onDocumentLoadSuccess({ numPages }) {}

  return (
    <div className="demoPage" ref={ref}>
      <Document file={props.book} onDocumentLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={props.pageNumber} />
      </Document>
    </div>
  );
});

function MyBook(props) {
  const book = useRef(null);
  const container = useRef(null);

  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(105);
  const totalPageDive = Math.ceil(totalPage / 5);
  return (
    <div id="container" ref={container}>
      <HTMLFlipBook
        width={480}
        height={720}
        size="stretch"
        minWidth={315}
        maxWidth={600}
        minHeight={400}
        maxHeight={900}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="demo-book"
        ref={book}
      >
        {[...Array(20)].map((item, index) => (
          <PageBook key={index} pageNumber={pageNumber} />
        ))}
      </HTMLFlipBook>
      <button onClick={() => book.current.pageFlip().flipPrev()}>
        prev page
      </button>
      <button
        style={{ margin: "70px" }}
        onClick={() => {
          book.current.pageFlip().flipNext();
          setPageNumber(pageNumber + 1);
        }}
      >
        next page
      </button>
    </div>
  );
}

export default MyBook;
