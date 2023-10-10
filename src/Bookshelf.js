import Book from "./Book";
import React, { useRef, useState } from "react";

const Bookshelf = ({
  name,
  books,
  onOptionChange,
  onDrag,
  handleDragBook,
  onBookDrop,
}) => {
  return (
    <div className="bookshelf" onDragEnter={() => onDrag(name)}>
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book
                book={book}
                onOptionChange={onOptionChange}
                onBookDrag={handleDragBook}
                onBookDrop={onBookDrop}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
