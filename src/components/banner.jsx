import React from 'react'
// import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import categoryimg1 from '../imgs/categoryimg1.png'
import productsimg1 from '../imgs/productsimg1.png'
import productsimg2 from '../imgs/productsimg2.png'

function Banner() {
  return (
    <>
    <div className='container m-auto pt-[20px]'>

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
          <img src={productsimg2} alt="" />
        </SwiperSlide>
        
      </Swiper>
          </div>
    </>
  )
}

export default Banner