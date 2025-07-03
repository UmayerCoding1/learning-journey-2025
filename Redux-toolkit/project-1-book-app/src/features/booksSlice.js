import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, author: "Jhon", title: "Books 1", price: 1100 },
    { id: 2, author: "Devid", title: "Books 2", price: 1200 },
    { id: 3, author: "Anish", title: "Books 3", price: 1300 },
  ],
};
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },

    updateBook: (state,action) => {
      const { id, title, author, price } = action.payload;
      const existBook = state.books.find((book) => book.id === id);
      if (existBook) {
        existBook.title = title;
        existBook.author = author;
        existBook.price = price;
      }
    },

    addBook: (state,action) => {
      state.books.push(action.payload);
    },

    
  },
});

export const { deleteBook ,addBook,updateBook} = bookSlice.actions;

export default bookSlice.reducer;
