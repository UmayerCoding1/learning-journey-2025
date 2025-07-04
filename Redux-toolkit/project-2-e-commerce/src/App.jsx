import React from 'react';
import ProductsListView from './features/product/ProductsListView';
import ProductForm from './features/product/ProductForm';

const App = () => {
  return (
    <div className=''>
      <ProductForm/>
      <ProductsListView /> 
    </div>
  );
};

export default App;