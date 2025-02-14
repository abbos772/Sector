import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import productsimg1 from '../../imgs/banner.png'


function Banner() {
  return (
    <>
    <div className='container p-5 max-w-[1420px] m-auto pt-[20px]'>

        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
        <SwiperSlide>
            <img src={productsimg1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={productsimg1} alt="" />
        </SwiperSlide>
        
      </Swiper>
          </div>
    </>
  )
}

export default Banner