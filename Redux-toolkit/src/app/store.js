import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "../features/counter/CounterSlice";
import  postReducr  from "../features/post/PostSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        post: postReducr
    }
});

export default store;