import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function MyBook({book}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={book} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default MyBook;
