import React, { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addBook } from "../features/booksSlice";
const BookForm = ({bookToEdit,onCancel}) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
  });

  const dispatch = useDispatch();
  const ChangeInputHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 useEffect(() => {
    if (bookToEdit) {
        setFormData(bookToEdit)
    }
 }, [bookToEdit])

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(addBook({ ...formData, id: nanoid() }));
  };

  return (
    <div>
      <h2>Book form</h2>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={ChangeInputHandler}
          placeholder="book title"
          required
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={ChangeInputHandler}
          placeholder="book author"
          required
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={ChangeInputHandler}
          placeholder="book price"
          required
        />

        <input className={bookToEdit ? 'btn-info': 'btn-success'} type="submit" value={bookToEdit ? 'Update Book' : "Add Books"} />
        {bookToEdit && <button onClick={() => onCancel()} className="btn-denger">Clear</button>}
       
      </form>
    </div>
  );
};

export default BookForm;
