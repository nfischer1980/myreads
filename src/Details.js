import { useParams, useNavigate } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import { useState, useEffect } from "react";

const Details = () => {
  const [book, setBook] = useState();
  const { bookId } = useParams();

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.get(bookId);
      console.log(res);
      setBook(res);
    };

    getBooks();
  }, []);

  const navigate = useNavigate();

  const GoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div onClick={GoBack} className="close-search"></div>
      <div className="book-detail-holder">
        <div className="book-detail">
          {book && (
            <div>
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${
                      book.imageLinks?.smallThumbnail ?? book.previewLink
                    }`,
                  }}
                ></div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors?.join(", ")}</div>
              <div className="book-info">
                <p>{book.subtitle}</p>
                <p>{book.categories?.join(", ")}</p>
              </div>
            </div>
          )}
        </div>
        <div className="book-description">{book?.description}</div>
      </div>
    </div>
  );
};

export default Details;
