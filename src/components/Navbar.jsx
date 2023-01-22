import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../constants/image';
import { navData } from '../constants/NavData';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';
import { MdSearch, MdOutlineSettings } from 'react-icons/md';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { IoMdCart } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineInbox, AiFillHome } from 'react-icons/ai';
import { GoPlus } from 'react-icons/go';
import { TbRefresh } from 'react-icons/tb';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [cart, setCart] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
  
    window.addEventListener('scroll', changeBackground);

  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
        <div className='w-full max-w-[1440px] m-[0_auto]'>
            <div className='flex justify-between items-center w-full pl-[20px] pr-[20px] lg:pl-[10px]'>
                <div className='flex items-center'>
                    <div className='w-[48px] h-[48px] mr-[15px] hidden items-center justify-center cursor-pointer lg:flex'>
                        {toggle ? <VscChromeClose fontSize={22} onClick={() => setToggle(false)} /> : <VscMenu fontSize={20} onClick={() => setToggle(true)}  />}
                    </div>
                    <Link to='/' className='mr-[20px]'>
                        <img src={image.logo} alt="Google logo" />
                    </Link>
                    <nav className="flex items-center gap-[20px] lg:hidden">
                        {navData.map((nav, index) => (
                            <a href={nav.url} key={nav.url} className='mt-[10px] text-[14px] leading-[20px] text-[#3c4043] font-[400] hover:text-[#2962ff]'>
                                {nav.title}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className='flex items-center gap-[30px] lg:gap-[20px]'>
                    <MdSearch className=' cursor-pointer text-[#5f6368] hover:text-[#2962ff]' fontSize={26} />
                    <a href="https://support.google.com/store/?visit_id=638092037126609219-3209976277&hl=en&rd=2#topic=3237699" target="_blank" className='lg:hidden'>
                        <BsFillQuestionCircleFill fontSize={24} className=' cursor-pointer text-[#5f6368] hover:text-[#2962ff]' />
                    </a>
                    <Link to='/cart'> <IoMdCart fontSize={24} className=' cursor-pointer text-[#5f6368] hover:text-[#2962ff]' /> </Link>
                    {cart ? <FaUserCircle fontSize={24} className=' cursor-pointer text-[#5f6368] hover:text-[#2962ff]' onClick={() => setCart(false)} /> : <FaUserCircle fontSize={24} className=' cursor-pointer text-[#5f6368] hover:text-[#2962ff]' onClick={() => setCart(true)} />}
                </div>
            </div>
        </div>
        {toggle && (
            <div className='absolute top-[55px] left-0 w-full h-[100vh] bg-white z-10'>
                <nav className="flex flex-col items-start gap-[30px] pt-[80px] pl-[30px]">
                    {navData.map((nav, index) => (
                        <a href={nav.url} key={nav.url} className='text-[18px] leading-[20px] text-[#3c4043] font-[400] hover:text-[#2962ff]'>
                            {nav.title}
                        </a>
                    ))}
                </nav>
                <div className='border-t-[2px] border-[#dadce0] mt-[60px] p-[30px]'>
                    <div className='flex flex-col gap-[20px]'>
                        <Link to='/orders' className='text-[18px] leading-[20px] text-[#3c4043] font-[400] hover:text-[#2962ff]'>Orders</Link>
                        <a href="https://support.google.com/store/?visit_id=638092037126609219-3209976277&hl=en&rd=2#topic=3237699" target="_blank" className='text-[18px] leading-[20px] text-[#3c4043] font-[400] hover:text-[#2962ff]'>Help</a>
                    </div>
                </div>
                <div className='w-full absolute left-0 bottom-0 top-auto h-[300px] bg-[#f8f9fa] sm:hidden'></div>
            </div>
        )}
        {cart && (
            <div className='fixed top-[65px] right-[16rem] w-[288px] max-w-[320px] rounded-[16px] p-[16px_0] h-[fit-content] shadow bg-[#fff] 3xl:right-0 3xl:mr-[16px] lg:right-[16px]'>
                <div>
                    <div className='p-[12px_24px] text-center'>
                        <button className='border-[1px] border-[#dadce0] p-[8px_22px] rounded-[8px] text-[#636466] hover:border-[#333]'>Sign in with Google</button>
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
  );
};

export default Navbar;