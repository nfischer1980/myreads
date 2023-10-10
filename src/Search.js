import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

const Search = ({ onOptionChange, currentBooks }) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const handleQuery = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    const getBooks = async () => {
      if (query) {
        const res = await BooksAPI.search(query);
        if (res && res.length > 0) {
          res.map(
            (book) =>
              (book.shelf =
                currentBooks.filter((x) => x.id === book.id)[0]?.shelf ??
                "none")
          );
        }
        setBooks(res);
      }
    };

    getBooks();
  }, [query, currentBooks]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            name="query"
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => handleQuery(event.target.value)}
          />
        </div>
      </div>
      {books && books.length > 0 && query && (
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book book={book} onOptionChange={onOptionChange} />
              </li>
            ))}
          </ol>
        </div>
      )}
      ;
    </div>
  );
};

export default Search;
