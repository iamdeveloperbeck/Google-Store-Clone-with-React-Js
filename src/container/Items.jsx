import React from 'react';
import image from '../constants/image';

export const Items = () => {
  return (
    <div className='relative w-full h-auto pb-[80px] lg:pb-[60px]'>
      <div className='w-full max-w-[1440px] m-[0_auto] pl-[25px] pr-[25px] md:p-0 sm:max-w-[100%] sm:p-[0_20px] 2xl:max-w-[100%] 2xl:p-[0_20px]'>
        <div className='flex items-center justify-between pl-[30px] pr-[120px] flex-wrap lg:justify-center 2xl:pr-[0px] 2xl:pl-[0] 2xl:justify-center 2xl:text-center'>
          <img src={image.category5} alt="category" className='w-[684px] h-[684px] object-cover lg:w-[456px] lg:h-[456px] sm:w-full sm:h-full' />
          <div className='flex items-start flex-col gap-[16px] sm:items-center'>
            <h2 className='text-[40px] leading-[48px] tracking-[-0.5px] text-left sm:text-center text-[#3c4043] font-[500] sm:text-[32px] sm:leading-[38px]'>Putting sustainability <br className='lg:hidden sm:block' /> to work.</h2>
            <p className='text-[16px] leading-[24px] text-[#3c4043]'>We're committed to using recycled or renewable <br className='lg:hidden' /> material in all Pixel, Nest, and Fitbit products by 2025.</p>
            <button className='global-btn mt-[15px]'>Learn more</button>
          </div>
        </div>
        <div className='w-full h-auto p-[60px_0] bg-[#F8F9FA] mt-[40px] flex flex-col items-center justify-center gap-[16px] sm:p-[60px_40px] sm:text-center'>
          <img src={image.desckicon} alt="icon" />
          <h2 className='text-[40px] leading-[48px] tracking-[-0.5px] text-left sm:text-center text-[#3c4043] font-[500] sm:text-[32px] sm:leading-[38px]'>Never miss a beat.</h2>
          <p className='text-[16px] leading-[24px] text-[#3c4043]'>Keep me updated about devices, news, tips, and offers from Google Store.</p>
          <button className='global-btn second'>Sign up</button>
        </div>
        <div className='flex flex-col items-start gap-[10px] mt-[60px]'>
          <p className='text-[12px] leading-[20px] text-[#3c4043]'>Compared to Pixel 6. Speed and helpfulness claims based on internal testing on pre-production devices.</p>
          <p className='text-[12px] leading-[20px] text-[#3c4043]'>Here's what you will pay for Pixel Pass: You'll be required to finance your Pixel Pass purchase with 0% APR Google Store Financing.​​ The full cost of your Pixel and Preferred Care is spread out over 24 monthly payments. The Google services included in Pixel Pass will be charged to your Google Store Financing account each month. Your Pixel Pass subscription will appear as two separate transactions every month on your Google Store Financing account. From $45/month: $648.68 at 0% APR with 24 equal monthly payments = $27.03/month plus Pixel Pass services (Google One 200 GB) = $17.97/month for a Total monthly payment = $45/month. Adjusted for taxes and shipping.</p>
        </div>
      </div>
    </div>
  );
};
