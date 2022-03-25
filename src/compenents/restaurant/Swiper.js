import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import Modal from 'react-bootstrap/Modal'
import './../../styles/RestaurantDetail/Modal.scss'

// Import Swiper styles
import 'swiper/css'

export default ({ menuPic }) => {
  const [show, setShow] = useState(false)

  const [tempImg, setTempImg] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const swiperRef = React.useRef(null)
  const render = menuPic.map((v) => {
    return (
      <SwiperSlide key={v.menu_pic_id}>
        <img
          style={{ width: '100%', cursor: 'pointer' }}
          src={
            process.env.REACT_APP_SERVER + 'images/menu_pic/' + v.menu_pic_name
          }
          alt=""
          onClick={() => {
            setTempImg(
              process.env.REACT_APP_SERVER +
                'images/menu_pic/' +
                v.menu_pic_name
            )
            handleShow()
          }}
        />
      </SwiperSlide>
    )
  })

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <img className="now-img" src={tempImg} alt="" />
        <img
          onClick={() => {
            handleClose()
          }}
          src="/ProductList/close-white.svg"
          alt=""
          style={{
            width: '29px',
            height: '29px',
            right: '-36px',
            cursor: 'pointer',
          }}
          className="position-absolute"
        />
      </Modal>

      <Swiper ref={swiperRef} spaceBetween={30} slidesPerView={3}>
        {menuPic.length > 3 && (
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
        )}

        {render}

        {menuPic.length > 3 && (
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
        )}
      </Swiper>
    </>
  )
}
