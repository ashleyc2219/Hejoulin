import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default ({ menuPic }) => {
    const swiperRef = React.useRef(null);
    const render = menuPic.map((v) => {
        return (
            <SwiperSlide key={v.menu_pic_id}>
                <img
                    style={{ width: '100%' }}
                    src={process.env.REACT_APP_SERVER + 'images/menu_pic/' + v.menu_pic_name}
                    alt=""
                />
            </SwiperSlide>
        );
    });

    return (
        <>
            <Swiper ref={swiperRef} spaceBetween={30} slidesPerView={3}>
                <div id="previousButton" onClick={() => swiperRef.current.swiper.slidePrev()}>
                    <img style={{ width: '32px', cursor: 'pointer' }} src="/restaurant/prev.svg" alt="" />
                </div>
                {render}
                <div id="nextButton" onClick={() => swiperRef.current.swiper.slideNext()}>
                    <img style={{ width: '32px', cursor: 'pointer' }} src="/restaurant/next.svg" alt="" />
                </div>
            </Swiper>
        </>
    );
};
