import "./App.css";
import { useState, useEffect } from "react";
import Bookshelves from "./Bookshelves";
import { Route, Routes } from "react-router-dom";
import Search from "./Search";
import Details from "./Details";
import * as BooksAPI from "./BooksAPI";

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
    let tempBooks = books.filter((b) => b.id !== book.id);
    book.shelf = shelf;
    tempBooks.push(book);
    setBooks(tempBooks);
    const update = async () => {
      console.log(`updating book shelf ${shelf} for ${book.title}`);
      await BooksAPI.update(book, shelf);
    };
    update();
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
    </Routes>
  );
}

export default App;
