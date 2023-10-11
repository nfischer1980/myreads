import "./App.css";
import { useState, useEffect } from "react";
import Bookshelves from "./Bookshelves";
import { Route, Routes } from "react-router-dom";
import Search from "./Search";
import Details from "./Details";
import * as BooksAPI from "./BooksAPI";
import NotFound from "./NotFound";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      console.log(res);
      setBooks(res);
    };

    getBooks();
  }, []);

  const onOptionChange = (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then(() => {
      setBooks([...books.filter((b) => b.id !== book.id), book]);
    });
    console.log(books);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Bookshelves books={books} onOptionChange={onOptionChange} />}
      />
      <Route
        path="/search"
        exact
        element={
          <Search currentBooks={books} onOptionChange={onOptionChange} />
        }
      ></Route>
      <Route path="/books/:bookId" element={<Details />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
