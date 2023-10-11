import Changer from "./Changer";
import { Outlet, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Book = ({ book, onOptionChange, onBookDrag, onBookDrop }) => {
  const onStatusChange = (shelf) => {
    console.log(`new book status: ${shelf}`);
    book.shelf = shelf;
    onOptionChange(book, shelf);
  };

  let navigate = useNavigate();

  const handleClick = (event) => {
    console.log("I was clicked");
    console.log(book.id);
    navigate(`/books/${book.id}`);
  };

  const dragStart = () => {
    console.log("dragging book: " + book.title);
    onBookDrag(book);
  };

  const drop = () => {
    onBookDrop();
  };

  return (
    <div className="book" onDragStart={dragStart} onDragEnd={drop}>
      <div className="book-top">
        <div
          draggable
          onClick={handleClick}
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks?.smallThumbnail ?? book.previewLink
            }`,
          }}
        ></div>
        <Changer shelf={book.shelf} onStatusChange={onStatusChange} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors?.join(", ")}</div>
      <Outlet />
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object,
  onOptionChange: PropTypes.func,
  onBookDrag: PropTypes.func,
  onBookDrop: PropTypes.func,
};

export default Book;
