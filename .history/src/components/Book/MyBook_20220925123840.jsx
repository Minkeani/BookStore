import React, { useState } from 'react';
import  { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



function MyBook({book}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const prev = () => {
    if(pageNumber !== 1) {
      setPageNumber(pageNumber - 1)
    }
  }

  const next = () => {
    if(pageNumber !== numPages) {
      setPageNumber(pageNumber + 1)
    }
    else {
      setPageNumber(1)
    }
  }
  return (
    <div>
      <Document file={book} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button onClick={prev}>Предыдущая</button>
      <button onClick={next}>Следущая</button>
    </div>
  );
}

export default MyBook;
