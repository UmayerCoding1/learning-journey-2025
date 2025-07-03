import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchPost = createAsyncThunk('/post/fecthPost', async () => {
   const res =  await axios.get('https://jsonplaceholder.typicode.com/posts');

   return res.data;
});


export const postSlice = createSlice({
    name: 'post',
    initialState: {
        isLoading: false,
        post: [],
        error: null
    },

    extraReducers: (builder) => {
      builder.addCase(fetchPost.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(fetchPost.fulfilled, (state,action) => {
        state.isLoading = false;
        state.post = action.payload;
        state.error = null;
      });

       builder.addCase(fetchPost.rejected, (state,action) => {
        state.isLoading = false;
        state.post = [];
        state.error = action.error.message;;
      });
    }
});


// export const  {} = postSlice.actions;

export default  postSlice.reducer;