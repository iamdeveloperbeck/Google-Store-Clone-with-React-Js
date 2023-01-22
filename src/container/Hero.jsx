import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { BiPlayCircle } from 'react-icons/bi';
import { Store } from './Store';
import { Products } from './Products';
import { Category } from './Category';
import { Items } from './Items';

const Hero = () => {
  return (
    <>
        <Navbar />
        <div className='w-full h-[600px] relative flex items-start justify-center ml-[auto] mr-[auto] lg:h-[835px] lg:max-w-[600px] md:h-[auto]'>
          <div className='w-full max-w-[1440px] m-[0_auto]'>
            <div className='grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr]'>
              <div className='w-full h-full bg-[#e9e3dc] flex flex-col items-center lg:h-[456px]'>
                <img src="https://lh3.googleusercontent.com/vYAsen-KoinLt7jWqdd6J8modOXSLwFdshDq-YUOx_STxmDO12hW7mKTOaRF4gjrDHl_M2eq7gcjLrZLnaEBiMA59b4_pxdLmQ=rw-e365-w600" alt="hero" className='w-full h-[600px] object-cover lg:h-[456px] lg:w-[456px]' />
              </div>
              <div className='w-full h-full bg-[#e9e3dc] lg:order-[-99]'>
                <div className='flex items-start justify-center flex-col h-[100%] lg:text-center'>
                  <div className='ml-[100px] mr-[100px] lg:mt-[80px] lg:mb-[40px] md:m-[40px_60px_40px_60px]'>
                    <p className='text-[16px] text-[#3c4043] leading-[24px] tracking-[0.1px] font-[500] mb-[30px] lg:mb-[20px]'>Pixel 7 and Pixel 7 Pro</p>
                    <h4 className='text-[40px] leading-[48px] tracking-[-0.5px] font-[700] w-[420px] text-[#3c4043] lg:text-[32px] lg:leading-[40px] md:w-full'>
                      Full speed ahead.
                      <br />
                      The Pixel 7 phones are here.
                    </h4>
                    <p className='text-[16px] leading-[24px] text-[#3c4043] w-[448px] mt-[20px] lg:w-full'>Pixel 7 Pro and Pixel 7 are powered by Google Tensor G2, making them even faster, more helpful, and extra secure.</p>
                    <div className='flex p-[16px_24px] lg:hidden'></div>
                    <div className='flex items-center gap-[10px] mt-[25px] md:flex-col'>
                      <button className='global-btn'>Learn more</button>
                      <button className='flex items-center gap-[8px] p-[6px_16px_6px_12px] text-[16px] text-[#3c4043] leading-[24px] font-[500] rounded-[4px] hover:bg-[#ddd2d2]'>
                        <BiPlayCircle fontSize={24} className='text-[#3c4043]' />
                        Watch the Pixel portfolio video
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Store />
        <Products />
        <Category />
        <Items />
        <Footer />
    </>
  );
};

export default Hero;