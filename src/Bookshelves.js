import Bookshelf from "./Bookshelf";
import ShelfOptions from "./ShelfOptions";
import { Link } from "react-router-dom";
import { useState } from "react";

const Bookshelves = ({ books, onOptionChange }) => {
  const [selectBook, setSelectBook] = useState();
  const [selectShelf, setSelectShelf] = useState();

  const handleDragBook = (book) => {
    setSelectBook(book);
  };

  const dragBookToShelf = (shelf) => {
    setSelectShelf(
      ShelfOptions.filter((option) => option.label === shelf)[0].value
    );
    console.log(
      "book: " + selectBook?.title + " is dragged to shelf: " + selectShelf
    );
  };

  const onBookDrop = () => {
    console.log(
      "the book " + selectBook.title + " is dropped to the shelf " + selectShelf
    );
    onOptionChange(selectBook, selectShelf);
  };

  let shelfNames = books
    .map((b) => b.shelf)
    .filter((value, index, self) => self.indexOf(value) === index);

  return (
    <div>
      {shelfNames
        .filter((s) => s !== "none")
        .map((name) => (
          <Bookshelf
            onOptionChange={onOptionChange}
            handleDragBook={handleDragBook}
            onDrag={dragBookToShelf}
            onBookDrop={onBookDrop}
            key={name}
            name={
              ShelfOptions.filter((option) => option.value === name)[0].label
            }
            books={books.filter((value) => value.shelf === name)}
          />
        ))}
      ;
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Bookshelves;
