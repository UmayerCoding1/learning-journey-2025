import React from 'react';
import { ButtonPropsType } from '../../type/type';



const GostButton = ({children }: ButtonPropsType) => {
    return (
        <button className='border border-gray-300 rounded-full px-4 py-2 cursor-pointer hover:bg-gray-100'>
           {children}
        </button>
    );
};

export default GostButton;