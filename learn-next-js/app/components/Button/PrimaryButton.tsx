import React from 'react';
import { ButtonPropsType } from '../../type/type';

const PrimaryButton = ({children}: ButtonPropsType) => {
    return (
        <button className={`bg-[#384BFF] px-5 py-4 rounded-lg permary-btn`}>
           <p className='permary-btn-text'>
            {children}
            </p> 
        </button>
    );
};

export default PrimaryButton;