import React, { useState } from 'react';
import {nanoid} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { createProducts } from './ProductSlice';
const ProductForm = () => {
    const [product, setProduct] = useState({
        id: nanoid(),
        title: '',
        price: '',
        description: ''
    });

    const dispatch = useDispatch();


     const submitHandler = (e) => {
        e.preventDefault();
        console.log(product);
        dispatch(createProducts(product));
        setProduct({
            id: nanoid(),
            title: '',
            price: '',
            description: '',
            color: '',
            all: ''
        })
     } 

    const changeHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form
        onSubmit={submitHandler}
            className="max-w-md mx-auto mt-10 p-6 rounded-xl shadow-lg bg-white flex flex-col gap-4"
        >
            <input
                type="text"
                name="title"
                onChange={changeHandler}
                required
                value={product.title}
                placeholder="Title"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
                type="number"
                name="price"
                onChange={changeHandler}
                required
                value={product.price}
                placeholder="Price"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
                type="text"
                name="description"
                onChange={changeHandler}
                required
                value={product.description}
                placeholder="Description"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
                type="submit"
                value={"Add Product"}
                className="p-3 rounded-md bg-blue-600 text-white font-bold cursor-pointer mt-2 hover:bg-blue-700 transition-colors"
            />
        </form>
    );
};

export default ProductForm;