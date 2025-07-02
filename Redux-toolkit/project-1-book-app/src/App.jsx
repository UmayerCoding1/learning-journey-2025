import React, { useState } from 'react';
import BookiList from './components/BookiList';
import BookForm from './components/BookForm';

const App = () => {
  const [bookToEdit,setBookToEdit] = useState(null);
  const handleEdit = (book) => {
  setBookToEdit(book);
  }


  const handleCancelEdit = () => {
    setBookToEdit(null);
  }
  return (
    <div>
      <BookForm bookToEdit={bookToEdit} onCancel={handleCancelEdit}/>
      <BookiList onHandleEdit={handleEdit}/>
    </div>
  );
};

export default App;