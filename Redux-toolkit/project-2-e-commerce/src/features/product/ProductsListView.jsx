import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchProducts } from './ProductSlice';
const ProductsListView = () => {
    const {isLoaading,products,error} = useSelector((stste) => stste.productsR);
    const dispatch = useDispatch();
 console.log(products);
 
    useEffect(() => {
        dispatch(fetchProducts());
    },[]);

    if (isLoaading) {
        return <p>Loading . . . </p>
    }
    return (
        <div>
            {isLoaading && <p>Loading . . . </p>}
            {error && <p>{error}</p>}
           <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2'>
             {!isLoaading && !error && products && products.length > 0 && products.map((product,inx) => {
                return (
                    <article className=' bg-gray-100 shadow-md border border-gray-200 rounded-lg p-2 transition-all ease-in-out duration-200 hover:bg-gray-200' key={inx}>
                         <h2 className='text-2xl font-medium'>{product.title}</h2>
                         <p>{product.description}</p>
                    </article>
                )
            })}
           </section>
        </div>
    );
};

export default ProductsListView;