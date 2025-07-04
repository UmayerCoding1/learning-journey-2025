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
   const res = await axios.delete(`${BASE_URL}/${id}`);
   return res.data
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
   }
});


export default productSlice.reducer;