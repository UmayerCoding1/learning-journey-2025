import React, { useState } from 'react';
import ProductsListView from './features/product/ProductsListView';
import ProductForm from './features/product/ProductForm';

const App = () => {
  const [isEdit,setIsEdit] = useState(false);
  const[productToEdit,setProductToEdit] = useState({});
  const handleSetProductToEdit = (product) => {
    setProductToEdit(product);
    setIsEdit(true);
  }

  console.log(productToEdit);
  
  return (
    <div className=''>
      <ProductForm productToEdit={productToEdit} isEdit={isEdit}/>
      <ProductsListView onHandleSetProductToEdit={handleSetProductToEdit}/> 
    </div>
  );
};

export default App;