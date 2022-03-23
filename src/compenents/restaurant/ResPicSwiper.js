import React, { useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

export default ({ resPic, place }) => {
  const swiperRef = useRef(null)
  const render = resPic
    .filter((placePic) => placePic.res_id === place.res_id)
    .map((v) => {
      return (
        <SwiperSlide key={v.res_pic_id}>
          <img
            style={{ width: '100%' }}
            src={
              process.env.REACT_APP_SERVER + 'images/res_pic/' + v.res_pic_name
            }
            alt=""
          />
        </SwiperSlide>
      )
    })

  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={1}
        observer={true}
        observeParents={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        <div
          id="previousButton"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <img
            style={{ width: '32px', cursor: 'pointer' }}
            src="/restaurant/prev.svg"
            alt=""
          />
        </div>
        {render}
        <div
          id="nextButton"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <img
            style={{ width: '32px', cursor: 'pointer' }}
            src="/restaurant/next.svg"
            alt=""
          />
        </div>
      </Swiper>
    </>
  )
}
