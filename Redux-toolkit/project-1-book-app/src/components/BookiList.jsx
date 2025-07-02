import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../features/booksSlice";
const BookiList = ({onHandleEdit}) => {
  const { books } = useSelector((state) => state.booksR);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };
  const handleEdit = (book) => {
   onHandleEdit(book)
    
  };

  return (
    <div>
      <h2>List of books</h2>

      <ul>
        {books && books.length > 0
          ? books.map((book) => {
              return (
                <li style={{display: "flex", alignItems: 'center'}} key={book.id}>
                  {book.title} by {book.author}
                  --price :{book.price}
                  <div>
                    <button
                    onClick={() => handleDelete(book.id)}
                    className="btn-denger"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEdit(book)}
                    className="btn-info"
                  >
                    Edit
                  </button>
                  </div>
                </li>
              );
            })
          : "No books exist"}
      </ul>
    </div>
  );
};

export default BookiList;
