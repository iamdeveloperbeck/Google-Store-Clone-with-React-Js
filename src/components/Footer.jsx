import React from 'react';
import { BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='p-[0_24px] sm:p-0'>
      <div className='w-full max-w-[1440px] m-[0_auto] pl-[25px] pr-[25px] md:p-0 sm:max-w-[100%] sm:p-[0_20px] 2xl:max-w-[100%] 2xl:p-[0_24px]'>
        <div className='w-full p-[96px_0_72px] table table-fixed'>
          <div className='w-full table-row'>
            <div className='table-cell align-top sm:hidden'></div>
            <div className='table-cell align-top w-[164px]'>
              <ul className='list-none m-0 p-0'>
                <li className='mt-[0px]'>
                  <a href="#" className='relative text-[14px] font-[400] leading-[22px] text-[#3c4043] transition-all hover:text-[#1967d2]'>Shipping options</a>
                </li>
                <li className='mt-[24px]'>
                  <a href="#" className='relative text-[14px] font-[400] leading-[22px] text-[#3c4043] transition-all hover:text-[#1967d2]'>Tracking a package</a>
                </li>
                <li className='mt-[24px]'>
                  <a href="#" className='relative text-[14px] font-[400] leading-[22px] text-[#3c4043] transition-all hover:text-[#1967d2]'>Country availability</a>
                </li>
                <li className='mt-[24px]'>
                  <a href="#" className='relative text-[14px] font-[400] leading-[22px] text-[#3c4043] transition-all hover:text-[#1967d2]'>Repairs</a>
                </li>
                <li className='mt-[24px]'>
                  <a href="#" className='relative text-[14px] font-[400] leading-[22px] text-[#3c4043] transition-all hover:text-[#1967d2]'>Installation</a>
                </li>
                <li className='mt-[24px]'>
                  <a href="#" className='relative text-[14px] font-[400] leading-[22px] text-[#3c4043] transition-all hover:text-[#1967d2]'>Ideas & Info</a>
                </li>
              </ul>
            </div>
            <div className='table-cell align-top w-[164px] bg-clip-padding border-l-[16px] border-transparent sm:border-none'>
              <ul className='list-none m-0 p-0'>
                  <li className='mt-[0px]'>
                    <a href="#" className='relative text-[14px] font-[400] leading-[22px] text-[#3c4043] transition-all hover:text-[#1967d2]'>Help Center</a>
                  </li>
                  <li className='mt-[24px]'>
                    <a href="#" className='relative text-[14px] font-[400] leading-[22px] text-[#3c4043] transition-all hover:text-[#1967d2]'>Contact Us</a>
                  </li>
                  <li className='mt-[24px]'>
                    <a href="#" className='relative text-[14px] font-[400] leading-[22px] text-[#3c4043] transition-all hover:text-[#1967d2]'>Financing</a>
                  </li>
                  <li className='mt-[24px]'>
                    <a href="#" className='relative text-[14px] font-[400] leading-[22px] text-[#3c4043] transition-all hover:text-[#1967d2]'>Device recycling</a>
                  </li>
                  <li className='mt-[24px]'>
                    <a href="#" className='relative text-[14px] font-[400] leading-[22px] text-[#3c4043] transition-all hover:text-[#1967d2]'>Sustainability</a>
                  </li>
                  <li className='mt-[24px]'>
                    <a href="#" className='relative text-[14px] font-[400] leading-[22px] text-[#3c4043] transition-all hover:text-[#1967d2]'>Gift returns</a>
                  </li>
                  <li className='mt-[24px]'>
                    <a href="#" className='relative text-[14px] font-[400] leading-[22px] text-[#3c4043] transition-all hover:text-[#1967d2]'>Refurbished</a>
                  </li>
                  <li className='mt-[24px]'>
                    <a href="#" className='relative text-[14px] font-[400] leading-[22px] text-[#3c4043] transition-all hover:text-[#1967d2]'>Trade-in</a>
                  </li>
                  <li className='mt-[24px]'>
                    <a href="#" className='relative text-[14px] font-[400] leading-[22px] text-[#3c4043] transition-all hover:text-[#1967d2]'>Pixel for Business</a>
                  </li>
                  <li className='mt-[24px]'>
                    <a href="#" className='relative text-[14px] font-[400] leading-[22px] text-[#3c4043] transition-all hover:text-[#1967d2]'>Locations</a>
                  </li>
                </ul>
            </div>
          </div>
        </div>
        <div className='pl-[72px] pr-[72px] sm:p-0'>
          <div className='footer-wrap'>
            <div className='flex justify-between items-center flex-wrap gap-[5px] sm:flex sm:flex-col sm:gap-[25px] sm:items-start'>
              <div className='flex items-center gap-[15px]'>
                <a href="#"><BsTwitter fontSize={19} /></a>
                <a href="#"><BsInstagram fontSize={19} /></a>
                <a href="#"><AiFillFacebook fontSize={19} /></a>
                <a href="#"><BsYoutube fontSize={19} /></a>
                <a href="#"><FaTiktok fontSize={19} /></a>
              </div>
              <div className='flex items-start justify-end flex-wrap lg:justify-start'>
                <a href="#" className='text-[#423f3f] text-[11px] font-[400] leading-[16px]'>United States</a>
                <a href="#" className='text-[#423f3f] text-[11px] font-[400] leading-[16px] ml-[40px] sm:ml-[20px]'>Privacy</a>
                <a href="#" className='text-[#423f3f] text-[11px] font-[400] leading-[16px] ml-[40px] sm:ml-[20px]'>Google Nest Commitment to Privacy</a>
                <a href="#" className='text-[#423f3f] text-[11px] font-[400] leading-[16px] ml-[40px] sm:mr-[20px] sm:ml-[0]'>Sales Terms</a>
                <a href="#" className='text-[#423f3f] text-[11px] font-[400] leading-[16px] ml-[40px] sm:mr-[20px] sm:ml-[0]'>Terms of Service</a>
                <a href="#" className='text-[#423f3f] text-[11px] font-[400] leading-[16px] ml-[40px] sm:ml-0'>Careers</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;