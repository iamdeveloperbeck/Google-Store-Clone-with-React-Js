import React from 'react';
import { Link } from 'react-router-dom';
import image from '../constants/image';

export const Error = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className='relative w-full h-full flex items-center justify-center flex-col p-[100px] lg:p-0'>
            <img src={image.error} alt="error" className='w-[1024px] h-full object-cover mb-[-130px] lg:w-[400px] lg:m-0 lg:h-[300px]' />
            <div className='text-[44px] leading-[78px] text-[#423f3f] font-[500]'>Page not found</div>
            <Link to='/' className='border border-[#423f3f] rounded-[8px] p-[8px_18px] text-[16px] text-[#423f3f] leading-[26px] font-[400]'>Go Home Page</Link>
        </div>
    </div>
  );
};
