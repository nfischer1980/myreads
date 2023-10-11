import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import PropTypes from "prop-types";
import { useDebounce } from "usehooks-ts";

const Search = ({ onOptionChange, currentBooks }) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 100);

  const handleQuery = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    const getBooks = async () => {
      if (debouncedQuery) {
        const res = await BooksAPI.search(debouncedQuery);
        if (res && res.length > 0) {
          res.map(
            (book) =>
              (book.shelf =
                currentBooks.filter((x) => x.id === book.id)[0]?.shelf ??
                "none")
          );
          setBooks(res);
        } else {
          setBooks(null);
        }
      }
    };

    getBooks();
  }, [debouncedQuery, currentBooks]);

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
      <div className="search-books-results">
        {books && books.length > 0 && query && (
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book book={book} onOptionChange={onOptionChange} />
              </li>
            ))}
          </ol>
        )}
        {books === null && (
          <h4>No books found using the query {debouncedQuery}</h4>
        )}
      </div>
    </div>
  );
};

Search.propTypes = {
  currentBooks: PropTypes.array,
  onOptionChange: PropTypes.func,
};

export default Search;
