import React from 'react';
import image from '../constants/image';

export const Category = () => {
  return (
    <div className='relative w-full h-auto flex justify-center items-center pb-[80px] pt-[20px] lg:pb-[60px]'>
      <div className='w-full max-w-[1440px] m-[0_auto] pl-[25px] pr-[25px] md:p-0 sm:max-w-[100%] sm:p-[0_20px] 2xl:max-w-[100%] 2xl:p-[0_20px]'>
        <h1 className='text-[40px] leading-[48px] tracking-[-0.5px] text-[#3c4043] text-center font-[500] mb-[40px] sm:text-[32px]'>Shop by category.</h1>
        <div className='flex items-center justify-center gap-[24px] mt-[20px] flex-wrap'>
          <div className='flex flex-col items-center gap-[30px] cursor-pointer'>
            <img src={image.category} alt="category" />
            <p className='text-[14px] leading-[20px] tracking-[.25px] font-[500] text-[#1967d2]'>Cameras</p>
          </div>
          <div className='flex flex-col items-center gap-[30px] cursor-pointer'>
            <img src={image.category2} alt="category" />
            <p className='text-[14px] leading-[20px] tracking-[.25px] font-[500] text-[#1967d2]'>Doorbells</p>
          </div>
          <div className='flex flex-col items-center gap-[30px] cursor-pointer'>
            <img src={image.category3} alt="category" />
            <p className='text-[14px] leading-[20px] tracking-[.25px] font-[500] text-[#1967d2]'>Streaming</p>
          </div>
          <div className='flex flex-col items-center gap-[30px] cursor-pointer'>
            <img src={image.category4} alt="category" />
            <p className='text-[14px] leading-[20px] tracking-[.25px] font-[500] text-[#1967d2]'>Packages</p>
          </div>
        </div>
        <div className='grid grid-cols-[repeat(12,_1fr)] items-start gap-[24px] mt-[40px] lg:grid-cols-[1fr] lg:place-items-center'>
          <div className='flex-[1] rounded-[20px] w-[684px] h-auto bg-[#F3F2F1] overflow-hidden lg:w-[456px] sm:w-full'>
            <div className='w-[100%] flex flex-col items-center gap-[16px] p-[40px] text-center lg:w-[100%] lg:pb-[20px] sm:w-full'>
              <div className='text-[16px] text-[#3c4043] leading-[24px] font-[500]'>Watches</div>
              <div className='text-[42px] text-[#3c4043] leading-[46px] font-[500] lg:text-[28px] lg:leading-[36px]'>Keep moving. <br /> Keep improving.</div>
              <button className='global-btn'>Learn more</button>
            </div>
            <div className='w-full h-auto'>
              <img src={image.product6} alt="" className='w-full h-full object-cover mt-[9px]' />
            </div>
          </div>
          <div className='flex-[1] rounded-[20px] w-[684px] h-auto bg-[#E7EBEE] overflow-hidden lg:w-[456px] sm:w-full'>
            <div className='w-[100%] h-[324px] flex flex-col items-center gap-[16px] p-[40px] text-center lg:w-[100%] lg:pb-[20px] lg:h-auto sm:w-full'>
              <div className='text-[16px] text-[#3c4043] leading-[24px] font-[500]'>Earbuds</div>
              <div className='text-[42px] text-[#3c4043] leading-[46px] font-[500] lg:text-[28px] lg:leading-[36px]'>Great sound. <br /> All around.</div>
              <button className='global-btn'>Learn more</button>
            </div>
            <div className='w-full h-auto'>
              <img src={image.product7} alt="" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center w-full h-auto mt-[70px] sm:mt-[40px]'>
          <div className='w-full p-[20px_0] rounded-[28px] bg-[#E8F1ED] flex items-center justify-center gap-[24px] flex-wrap sm:p-[20px] sm:text-center lg:p-[20px_40px]'>
            <img src={image.package1} alt="package" />
            <div className='flex flex-col items-start gap-[14px]'>
              <p className='text-[20px] leading-[26px] font-[600] text-[#3c4043]'>Pixel is the offical fan phone of the NBA.</p>
              <p className='text-[16px] leading-[24px] font-[400] text-[#505559]'>
                Discover all the ways fans everywhere show their love of the game with <br className='sm:hidden' /> Pixel phones. <a href="#" className='text-[#1967d2] underline'>Watch now.</a>
              </p>
            </div>
            <a href="#" className='p-[8px_20px] bg-[#1967d2] rounded-[4px] text-[16px] leading-[24px] font-[500] text-[#fff] hover:bg-[#2e73d5]'>Shop phones</a>
          </div>
        </div>
      </div>
    </div>
  );
};
