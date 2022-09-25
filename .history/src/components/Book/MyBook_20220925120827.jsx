import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function MyBook({book}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const previous = () => {
    if(pageNumber !== 1) {
      setPageNumber(pageNumber - 1)
    }
  }

  const next = () => {
    if(pageNumber+1 !== numPages) {
      setPageNumber(pageNumber + 1)
    }
  }

  console.log(book);

  return (
    <div>
      <Document file={book} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      {/* <button onClick={previous}>Предыдущая</button>
      <button onClick={next}>Следущая</button> */}
    </div>
  );
}

export default MyBook;