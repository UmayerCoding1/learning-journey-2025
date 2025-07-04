import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    products: [],
    isLoaading: false,
    error: null
}

export const productSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
    
   }
});


export default productSlice.reducer;