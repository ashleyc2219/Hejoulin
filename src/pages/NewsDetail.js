import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './../styles/Home/Home3dSake.scss'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper'

export default function App() {
  return (
    <>
      <div className="Home3dSake">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 3,
            stretch: 3,
            depth: 100,
            modifier: 0,
            scale: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="sakeCard">10</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sakeCard">2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sakeCard">3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sakeCard">4</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sakeCard">5</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sakeCard">6</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sakeCard">70</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sakeCard">8</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
