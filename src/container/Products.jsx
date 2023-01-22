import React from 'react';

import image from '../constants/image';

export const Products = () => {
  return (
    <div className='pt-[60px] pb-[80px]'>
        <div className='w-full max-w-[1440px] m-[0_auto] pl-[25px] pr-[25px] md:p-0 sm:max-w-[100%] sm:p-[0_10px] 2xl:max-w-[100%] 2xl:p-[0_20px]'>
            <div className='flex flex-col items-start gap-[24px] lg:items-center lg:w-[600px] lg:m-[0_auto] md:w-full'>
                <div className='grid grid-cols-[repeat(12,_1fr)] items-start justify-center gap-[24px] lg:grid-cols-[1fr] lg:items-center sm:w-full'>
                    <div className='w-full h-auto bg-[#e9e3dc] rounded-[20px] lg:w-[456px] sm:w-full'>
                        <div className='w-[448px] flex flex-col items-center gap-[16px] p-[40px] text-center lg:w-[456px] lg:pb-0 sm:w-full'>
                            <div className='text-[16px] text-[#3c4043] leading-[24px] font-[500]'>Google Pixel Watch</div>
                            <div className='text-[42px] text-[#3c4043] leading-[46px] font-[500] lg:text-[28px] lg:leading-[36px]'>Help by Google. <br /> Health by Fitbit.</div>
                            <button className='global-btn'>Learn more</button>
                        </div>
                        <div className='w-full h-auto lg:w-[456px] lg:h-[300px] sm:w-full'>
                            <img src={image.item2} alt="item" className='w-[448px] h-full object-cover lg:w-full lg:h-[300px] lg:object-contain' />
                        </div>
                    </div>
                    <div className='w-full h-auto bg-[#e9e3dc] rounded-[20px] lg:w-[456px] sm:w-full'>
                        <div className='w-[448px] flex flex-col items-center gap-[16px] p-[40px] text-center lg:w-[456px] lg:pb-0 sm:w-full'>
                            <div className='text-[16px] text-[#3c4043] leading-[24px] font-[500]'>Nest Wifi Pro with Wi-Fi 6E</div>
                            <div className='text-[42px] text-[#3c4043] leading-[46px] font-[500] lg:text-[28px] lg:leading-[36px]'>The better way <br /> to Wi-Fi.</div>
                            <button className='global-btn'>Learn more</button>
                        </div>
                        <div className='w-full h-auto lg:w-[456px] lg:h-[300px] sm:w-full'>
                            <img src={image.item1} alt="item" className='w-[448px] h-full object-cover lg:w-full lg:h-[300px] lg:object-contain' />
                        </div>
                    </div>
                    <div className='w-full h-auto bg-[#e9e3dc] rounded-[20px] lg:w-[456px] sm:w-full'>
                        <div className='w-[448px] flex flex-col items-center gap-[16px] p-[40px] text-center lg:w-[456px] lg:pb-0 sm:w-full'>
                            <div className='text-[16px] text-[#3c4043] leading-[24px] font-[500]'>Nest Doorbell (wired)</div>
                            <div className='text-[42px] text-[#3c4043] leading-[46px] font-[500] lg:text-[28px] lg:leading-[36px]'>Know more. <br /> No charging.</div>
                            <button className='global-btn'>Learn more</button>
                        </div>
                        <div className='w-full h-auto lg:w-[456px] lg:h-[300px] sm:w-full'>
                            <img src={image.item3} alt="item" className='w-[448px] h-full object-cover lg:w-full lg:h-[300px] lg:object-contain' />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-[repeat(12,_1fr)] items-start gap-[24px] lg:grid-cols-[1fr]'>
                    <div className='flex-[1] rounded-[20px] w-[684px] h-auto bg-[#D6E2DB] overflow-hidden lg:w-[456px] sm:w-full'>
                        <div className='w-[100%] flex flex-col items-center gap-[16px] p-[40px] text-center lg:w-[100%] lg:pb-[20px] sm:w-full'>
                            <div className='text-[16px] text-[#3c4043] leading-[24px] font-[500]'>Google Pixel Watch</div>
                            <div className='text-[42px] text-[#3c4043] leading-[46px] font-[500] lg:text-[28px] lg:leading-[36px]'>Help by Google. <br /> Health by Fitbit.</div>
                            <button className='global-btn'>Learn more</button>
                        </div>
                        <div className='w-full h-auto'>
                            <img src={image.item4} alt="" className='w-full h-full object-cover' />
                        </div>
                    </div>
                    <div className='flex-[1] rounded-[20px] w-[684px] h-auto bg-[#EFDDCD] overflow-hidden lg:w-[456px] sm:w-full'>
                        <div className='w-[100%] h-[324px] flex flex-col items-center gap-[16px] p-[40px] text-center lg:w-[100%] lg:pb-[20px] lg:h-auto sm:w-full'>
                            <div className='text-[16px] text-[#3c4043] leading-[24px] font-[500]'>Switch to Pixel</div>
                            <div className='text-[42px] text-[#3c4043] leading-[46px] font-[500] lg:text-[28px] lg:leading-[36px]'>Here's what #TeamPixel has to <br /> say about it.</div>
                            <button className='global-btn'>Learn more</button>
                        </div>
                        <div className='w-full h-auto'>
                            <img src={image.item5} alt="" className='w-full h-full object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};