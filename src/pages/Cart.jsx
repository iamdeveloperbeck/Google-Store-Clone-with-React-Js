import React, { useState } from 'react';
import { AiFillHome, AiOutlineInbox } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';
import { MdOutlineSettings } from 'react-icons/md';
import { TbRefresh } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import image from '../constants/image';

export const Cart = () => {
    const [cart, setCart] = useState(false);

  return (
    <>
        <div className='w-full h-[56px] bg-[#fff] flex items-center'>
            <div className='w-full max-w-[1440px] m-[0_auto]'>
                <div className='flex justify-between items-center w-full pl-[20px] pr-[20px] lg:pl-[10px]'>
                    <Link to='/' className='mr-[20px]'>
                        <img src={image.logo} alt="Google logo" />
                    </Link>
                    <span className='text-[20px] leading-[24px] font-[500]'>Cart</span>
                    {cart ? <FaUserCircle fontSize={24} className=' cursor-pointer text-[#5f6368] mt-[10px] hover:text-[#2962ff]' onClick={() => setCart(false)} /> : <FaUserCircle fontSize={24} className=' cursor-pointer text-[#5f6368] mt-[10px] hover:text-[#2962ff]' onClick={() => setCart(true)} />}
                </div>
            </div>
            {cart && (
                <div className='fixed z-100 top-[65px] right-[16rem] w-[288px] max-w-[320px] rounded-[16px] p-[16px_0] h-[fit-content] shadow bg-[#fff] lg:right-[16px] 2xl:right-[60px] 3xl:right-[125px]'>
                    <div>
                        <div className='p-[12px_24px] text-center'>
                            <button className='border-[1px] border-[#dadce0] p-[8px_22px] rounded-[8px] text-[#636466] hover:border-[#333]'>Sign in</button>
                        </div>
                        <div className='w-full h-[1px] bg-[#dadce0] mt-[12px]'></div>
                        <div className='mt-[16px] hover:bg-[#f8f9fa]'>
                            <div className='p-[12px_24px] flex items-center cursor-pointer'>
                                <AiOutlineInbox fontSize={24} className='text-[#636466] mr-[12px]' />
                                <span className='text-[#636466] text-[16px] mt-[5px]'>Orders</span>
                            </div>
                        </div>
                        <div className='hover:bg-[#f8f9fa]'>
                            <div className='p-[12px_24px] flex items-center cursor-pointer'>
                                <GoPlus fontSize={24} className='text-[#636466] mr-[12px]' />
                                <span className='text-[#636466] text-[16px] mt-[5px]'>Preferred Care</span>
                            </div>
                        </div>
                        <div className='hover:bg-[#f8f9fa]'>
                            <div className='p-[12px_24px] flex items-center cursor-pointer'>
                                <TbRefresh fontSize={24} className='text-[#636466] mr-[12px]' />
                                <span className='text-[#636466] text-[16px] mt-[5px]'>Subscriptions</span>
                            </div>
                        </div>
                        <div className='hover:bg-[#f8f9fa]'>
                            <div className='p-[12px_24px] flex items-center cursor-pointer'>
                                <AiFillHome fontSize={24} className='text-[#636466] mr-[12px]' />
                                <span className='text-[#636466] text-[16px] mt-[5px]'>My Nest Home</span>
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-[#dadce0] mt-[12px]'></div>
                        <div className='mt-[16px] hover:bg-[#f8f9fa]'>
                            <div className='p-[12px_24px] flex items-center cursor-pointer'>
                                <MdOutlineSettings fontSize={24} className='text-[#636466] mr-[12px]' />
                                <span className='text-[#636466] text-[16px] mt-[5px]'>Settings</span>
                            </div>
                        </div>
                    </div>
                </div> 
            )}
        </div>
        <div className='w-full min-h-[75vh] bg-[#f8f9fa]'>
            <div className='w-full max-w-[566px] m-[0_auto] flex flex-col p-[24px_0_60px]'>
                <h2 className='mt-[140px] text-[32px] leading-[36px] font-[500] text-center lg:mt-[100px]'>Your cart is empty</h2>
                <div className='text-center mt-[30px]'>
                    <Link to='/' className='border-[1px] border-[#dadce0] rounded-[5px] p-[8px_24px] text-[.875rem] tracking-[.0107142857em] font-[500]'>Countine shopping</Link>
                </div>
                <div className='w-full flex items-center justify-center mt-[15px]'>
                    <img src={image.cart} alt="cart" className='w-full max-h-[184px] object-contain' />
                </div>
                <div className='w-full bg-[#fff] rounded-[8px]'>
                    <div className='w-full p-[24px] border-b-[1px] border-[#dadce0]'>
                        <h2 className='text-[1.25rem] leading-[1.625rem] font-[500]'>Saved for later</h2>
                    </div>
                    <div className='w-full p-[24px]'>
                        <p className='font-[500] text-[14px] leading-[20px] m-[0_0_6px]'>No items saved yet</p>
                        <p className='font-[400] text-[14px] leading-[20px] m-[0_0_16px]'>Add items you're not buying today to this list</p>
                    </div>
                </div>
            </div>
        </div>
        <footer className='p-[0_24px] bg-[#fff]'>
            <div className='w-full max-w-[1440px] m-[0_auto]'>
                <div className='footer-content'>
                    <div className='border-t-[1px] border-[#f2f2f2] footer-wrap'>
                        <div className='flex items-start justify-end flex-wrap lg:justify-start'>
                            <a href="#" className='text-[#423f3f] text-[11px] font-[400] leading-[16px]'>United States</a>
                            <a href="#" className='text-[#423f3f] text-[11px] font-[400] leading-[16px] ml-[40px] sm:ml-[30px]'>Privacy</a>
                            <a href="#" className='text-[#423f3f] text-[11px] font-[400] leading-[16px] ml-[40px] sm:mr-[30px] sm:ml-[0]'>Google Nest Commitment to Privacy</a>
                            <a href="#" className='text-[#423f3f] text-[11px] font-[400] leading-[16px] ml-[40px] sm:mr-[30px] sm:ml-[0]'>Sales Terms</a>
                            <a href="#" className='text-[#423f3f] text-[11px] font-[400] leading-[16px] ml-[40px] sm:mr-[30px] sm:ml-[0]'>Terms of Service</a>
                            <a href="#" className='text-[#423f3f] text-[11px] font-[400] leading-[16px] sm:mr-[30px]'>Careers</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
};
