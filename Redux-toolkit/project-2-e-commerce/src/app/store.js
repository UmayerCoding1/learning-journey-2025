import {configureStore } from '@reduxjs/toolkit';
import  productReducer  from '../features/product/ProductSlice';

export const store = configureStore({
    reducer : {
        productsR: productReducer
    }
});


