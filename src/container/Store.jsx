import React from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image from '../constants/image';
import Slider from 'react-slick';
import { MdKeyboardArrowRight } from 'react-icons/md';
 
export const Store = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 479,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
    };

  return (
    <div className='relative w-full h-[auto] pt-[80px]'>
        <div className='w-full max-w-[1440px] m-[0_auto]'>
            <h1 className='text-[42px] leading-[46px] text-center font-[600] text-[#3c4043] mb-[60px] md:text-[36px] md:leading-[40px] sm:text-[32px]'>Popular on the Google <br className='hidden sm:block' /> Store</h1>
            <div className='ml-[150px] mr-[150px] lg:ml-[140px] lg:mr-[140px] md:ml-[0px] md:mr-[0px]'>
                <Slider {...settings}>
                    <div className='w-[212px_!important] h-auto product-box lg:w-[100%_!important]'>
                        <div className='relative pt-[20px] pb-[20px] w-full h-[288px] bg-[#f8f9fa] rounded-[20px] flex items-center justify-center'>
                            <div className='item-info'>New</div>
                            <img src={image.product} width='476' height={558} alt="product" className='product-img' />
                        </div>
                        <div className='flex flex-col items-start gap-[16px]'>
                            <div className='leading-[24px] mt-[20px] item-name'>Google Pixel Watch</div>
                            <div>
                                <div className='flex flex-wrap justify-start items-center items-price text-[#3c4043]'>
                                    From $319.99 <span className='ml-[8px] line-through mr-[8px]'>$349.99</span>
                                    <span className='text-[12px] font-[400] text-[#66806e]'>Save $30</span>
                                </div>
                            </div>
                            <button className='item-cta'>
                                Buy now
                                <MdKeyboardArrowRight fontSize={22} />
                            </button>
                        </div>
                    </div>
                    <div className='w-[212px_!important] h-auto product-box lg:w-[100%_!important]'>
                        <div className='relative pt-[20px] pb-[20px] w-full h-[288px] bg-[#f8f9fa] rounded-[20px] flex items-center justify-center'>
                            <div className='item-info'>New</div>
                            <img src={image.product2} width='476' height={558} alt="product" className='product-img' />
                        </div>
                        <div className='flex flex-col items-start gap-[16px]'>
                            <div className='leading-[24px] mt-[20px] item-name'>Pixel 7 Pro</div>
                            <div>
                                <div className='flex flex-wrap justify-start items-center items-price text-[#3c4043]'>
                                    From $749 <span className='ml-[8px] line-through mr-[8px]'>$899</span>
                                    <span className='text-[12px] font-[400] text-[#66806e]'>Save $150</span>
                                </div>
                            </div>
                            <button className='item-cta'>
                                Buy now
                                <MdKeyboardArrowRight fontSize={22} />
                            </button>
                        </div>
                    </div>
                    <div className='w-[212px_!important] h-auto product-box lg:w-[100%_!important]'>
                        <div className='relative pt-[20px] pb-[20px] w-full h-[288px] bg-[#f8f9fa] rounded-[20px] flex items-center justify-center'>
                            <div className='item-info'>New</div>
                            <img src={image.product3} width='476' height={558} alt="product" className='product-img' />
                        </div>
                        <div className='flex flex-col items-start gap-[16px]'>
                            <div className='leading-[24px] mt-[20px] item-name'>Pixel 7</div>
                            <div>
                                <div className='flex flex-wrap justify-start items-center items-price text-[#3c4043]'>
                                    From $499 <span className='ml-[8px] line-through mr-[8px]'>$599</span>
                                    <span className='text-[12px] font-[400] text-[#66806e]'>Save $100</span>
                                </div>
                            </div>
                            <button className='item-cta'>
                                Buy now
                                <MdKeyboardArrowRight fontSize={22} />
                            </button>
                        </div>
                    </div>
                    <div className='w-[212px_!important] h-auto product-box lg:w-[100%_!important]'>
                        <div className='relative pt-[20px] pb-[20px] w-full h-[288px] bg-[#f8f9fa] rounded-[20px] flex items-center justify-center'>
                            <img src={image.product4} width='476' height={558} alt="product" className='product-img' />
                        </div>
                        <div className='flex flex-col items-start gap-[16px]'>
                            <div className='leading-[24px] mt-[20px] item-name'>Pixel Buds Pro</div>
                            <div>
                                <div className='flex flex-wrap justify-start items-center items-price text-[#3c4043]'>
                                    $169.99 <span className='ml-[8px] line-through mr-[8px]'>$199.99</span>
                                    <span className='text-[12px] font-[400] text-[#66806e]'>Save $30</span>
                                </div>
                            </div>
                            <button className='item-cta'>
                                Buy now
                                <MdKeyboardArrowRight fontSize={22} />
                            </button>
                        </div>
                    </div>
                    <div className='w-[212px_!important] h-auto product-box lg:w-[100%_!important]'>
                        <div className='relative pt-[20px] pb-[20px] w-full h-[288px] bg-[#f8f9fa] rounded-[20px] flex items-center justify-center'>
                            <div className='item-info'>New</div>
                            <img src={image.product5} width='476' height={558} alt="product" className='product-img' />
                        </div>
                        <div className='flex flex-col items-start gap-[16px]'>
                            <div className='leading-[24px] mt-[20px] item-name'>Nest Doorbells</div>
                            <div>
                                <div className='flex flex-wrap justify-start items-center items-price text-[#3c4043]'>
                                    $179.99
                                </div>
                            </div>
                            <button className='item-cta'>
                                Buy now
                                <MdKeyboardArrowRight fontSize={22} />
                            </button>
                        </div>
                    </div>
                    <div className='w-[212px_!important] h-auto product-box lg:w-[100%_!important]'>
                        <div className='relative pt-[20px] pb-[20px] w-full h-[288px] overflow-hidden bg-[#f8f9fa] rounded-[20px] flex items-center justify-center'>
                            <div className='item-info'>New</div>
                            <img src="https://lh3.googleusercontent.com/0L_3IpSF2p0qZSjJ3Vur9jNDDahvoDAvXfqTS2-N5Be03nRtuLDgOMvVgk3mF5ABUtHlhad5OhstF7vwFLCjvzb-l7TDbwiGp60=rw-e365-w250" width='476' height={558} alt="product" className='product-img' />
                        </div>
                        <div className='flex flex-col items-start gap-[16px]'>
                            <div className='leading-[24px] mt-[20px] item-name'>Nest Wifi Pro</div>
                            <div>
                                <div className='flex flex-wrap justify-start items-center items-price text-[#3c4043]'>
                                    From $199.99
                                </div>
                            </div>
                            <button className='item-cta'>
                                Buy now
                                <MdKeyboardArrowRight fontSize={22} />
                            </button>
                        </div>
                    </div>
                    <div className='w-[212px_!important] h-auto product-box lg:w-[100%_!important]'>
                        <div className='relative pt-[20px] pb-[20px] w-full h-[288px] bg-[#f8f9fa] rounded-[20px] flex items-center justify-center'>
                            <img src="https://lh3.googleusercontent.com/RwacKODP-m3cXpAd0E82IM3KSY2Loy9nnh4BXweDFOE8zpHhBkI9DDNQzsx_pkX_pd6O3usnvqhEo-8K7kVgBEAEE2xMV0_xTAU=rw-e365-w250" width='476' height={558} alt="product" className='product-img' />
                        </div>
                        <div className='flex flex-col items-start gap-[16px]'>
                            <div className='leading-[24px] mt-[20px] item-name'>Chromecast with Google TV</div>
                            <div>
                                <div className='flex flex-wrap justify-start items-center items-price text-[#3c4043]'>
                                    From $29.99
                                </div>
                            </div>
                            <button className='item-cta'>
                                Buy now
                                <MdKeyboardArrowRight fontSize={22} />
                            </button>
                        </div>
                    </div>
                    <div className='w-[212px_!important] h-auto product-box lg:w-[100%_!important]'>
                        <div className='relative pt-[20px] pb-[20px] w-full h-[288px] bg-[#f8f9fa] rounded-[20px] flex items-center justify-center'>
                            <img src="https://lh3.googleusercontent.com/MhltSDwvVB2G08xXetLIxAf9llHXzMWo5TMW9RSuSyjhMHjiqSm_-mlgab16Y6JS4zRtemZlfDyv1UTnlazQ2xjzMoMDWye_Zjxo=rw-e365-w250" width='476' height={558} alt="product" className='product-img' />
                        </div>
                        <div className='flex flex-col items-start gap-[16px]'>
                            <div className='leading-[24px] mt-[20px] item-name'>Nest Cam (battery)</div>
                            <div>
                                <div className='flex flex-wrap justify-start items-center items-price text-[#3c4043]'>
                                    From $139.99 <span className='ml-[10px] line-through mr-[10px]'>$179.99</span>
                                    <span className='text-[12px] font-[400] text-[#66806e]'>Save $40</span>
                                </div>
                            </div>
                            <button className='item-cta'>
                                Buy now
                                <MdKeyboardArrowRight fontSize={22} />
                            </button>
                        </div>
                    </div>
                    <div className='w-[212px_!important] h-auto product-box lg:w-[100%_!important]'>
                        <div className='relative pt-[20px] pb-[20px] w-full h-[288px] bg-[#f8f9fa] rounded-[20px] flex items-center justify-center'>
                            <img src="https://lh3.googleusercontent.com/0SuhGx6yMxJ07L8XJIdvjhY0YHtOLTOcIU8HlMJSJ916q8ppl6muEQILxMVdUr5s07bL3zgZu8HqJmqZJT8jWXbyDjNDU10CRk0=rw-e365-w250" width='476' height={558} alt="product" className='product-img' />
                        </div>
                        <div className='flex flex-col items-start gap-[16px]'>
                            <div className='leading-[24px] mt-[20px] item-name'>Pixel Pass</div>
                            <div>
                                <div className='flex flex-wrap justify-start items-center items-price text-[#3c4043]'>
                                    From $37/month*
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className='w-full flex items-center mt-[40px] lg:items-end'>
                <div className='w-[1120px] h-[2px] bg-[#3c4043] m-[0_auto] lg:w-[800px] lg:m-[0_0_0_auto] sm:bg-[#f8f9fa]'></div>
            </div>
        </div>
    </div>
  );
};
