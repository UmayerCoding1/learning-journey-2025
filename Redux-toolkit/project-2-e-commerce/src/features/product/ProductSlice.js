import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
const initialState ={
    products: [],
    isLoaading: false,
    error: null
}

const BASE_URL = 'http://localhost:3003'

 export const fetchProducts  = createAsyncThunk('products/fetchProducts',async() =>{
   const res = await axios.get(`${BASE_URL}/products`);
   return res.data
});

 export const deleteProducts  = createAsyncThunk('products/deleteProducts',async(id) =>{
   const res = await axios.delete(`${BASE_URL}/products/${id}`);
   console.log(res.data);
   
   return id;
});


 export const createProducts  = createAsyncThunk('products/createProduct',async(product) =>{
   const res = await axios.post(`${BASE_URL}/products`,product);
  return res.data
});

export const updateProduct = createAsyncThunk('products/updateProduct', async ({ id, product }) => {
  console.log(id,product);
  
  const res = await axios.put(`${BASE_URL}/products/${id}`, product);
  return res.data;
});
export const productSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {

   },
   extraReducers : (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoaading = true,
      state.error = null
    });
    builder.addCase(fetchProducts.fulfilled, (state,actios) => {
      state.isLoaading = false,
      state.products = actios.payload
      state.error = null
    });
    builder.addCase(fetchProducts.rejected, (state,actios) => {
      state.isLoaading = false,
      state.products = [];
      state.error = actios.error.message || "Failed to fetch data";
    });

     builder.addCase(deleteProducts.fulfilled, (state,actios) => {
      state.products = state.products.filter(product => product.id !== actios.payload);
    });

    builder.addCase(createProducts.fulfilled, (state,actios) => {
      state.products.push = actios.payload;
    });

    builder.addCase(updateProduct.fulfilled, (state,actios) => {
      const index = state.products.findIndex((product) => product.id === actios.payload.id);

      state.products[index] = actios.payload;
    });
   }
});


export default productSlice.reducer;