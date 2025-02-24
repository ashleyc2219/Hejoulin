import React, { useState, useEffect } from 'react'
import './../styles/RestaurantDetail/RestaurantDetail.scss'
import { Carousel } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Swiper from '../compenents/restaurant/Swiper'
import Spinner from '../compenents/Shared/Spinner'
import { useParams } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const RestaurantDetail = () => {
  const [loading, setLoading] = useState(true)
  const [restaurant, setRestaurant] = useState({})
  const [restaurantPic, setRestaurantPic] = useState([])
  const [spMenu, setSpMenu] = useState([])
  const [menuPic, setMenuPic] = useState([])
  const { id } = useParams()

  const [show, setShow] = useState(false)
  const [tempImg, setTempImg] = useState('')
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  //to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // use aos
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  // get restaurant data
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/restaurant?resId=${id}`
      )
      const obj = await res.json()
      setRestaurant(obj[0])
    }
    fetchData()
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  // get restaurant pics
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/restaurant-pic?resId=${id}`
      )
      const obj = await res.json()
      setRestaurantPic(obj)
    }
    fetchData()
  }, [])

  // get sp menu
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `{process.env.REACT_APP_BACKEND_URL}/api/spmenu?resId=` + id
      )
      const obj = await res.json()
      setSpMenu(obj)
    }
    fetchData()
  }, [])

  // get menu pics
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/menu-pic?resId=` + id
      )
      const obj = await res.json()
      setMenuPic(obj)
    }
    fetchData()
  }, [])

  const renderRestaurantPics = restaurantPic.map((v) => {
    return (
      <Carousel.Item key={v.res_pic_id} style={{ maxHeight: '500px' }}>
        <img
          className="d-block w-100"
          src={
            `${process.env.REACT_APP_BACKEND_URL}/images/res_pic` + v.res_pic_name
          }
          alt=""
        />
      </Carousel.Item>
    )
  })

  const renderMenuPics = menuPic.map((v) => {
    return (
      <Carousel.Item key={v.menu_pic_id} style={{ maxHeight: '500px' }}>
        <img
          className="d-block w-100"
          style={{ cursor: 'pointer' }}
          src={
            process.env.REACT_APP_SERVER + 'images/menu_pic/' + v.menu_pic_name
          }
          onClick={() => {
            setTempImg(
              process.env.REACT_APP_SERVER +
                'images/menu_pic/' +
                v.menu_pic_name
            )
            handleShow()
          }}
          alt=""
        />
      </Carousel.Item>
    )
  })

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="RestaurantDetail">
          <Carousel>{renderRestaurantPics}</Carousel>
          <div className="res-info" data-aos="fade-up">
            <h5 className="mb-3 pl-sm-4">{restaurant.res_name}</h5>
            <div className="px-3">
              {' '}
              <div>
                <img className="mr-2" src="/restaurant/location.svg" alt="" />
                {restaurant.res_address}
              </div>
              <div>
                <img className="mr-2" src="/restaurant/time.svg" alt="" />
                {restaurant.res_ser_hours &&
                  '今日 ' +
                    JSON.parse(restaurant.res_ser_hours)[new Date().getDay()]}
              </div>
              <div>
                <img className="mr-2" src="/restaurant/phone.svg" alt="" />
                {restaurant.res_t_number}
              </div>
              {restaurant.web_link && (
                <>
                  <a
                    href={restaurant.web_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="mr-2" src="/restaurant/site.svg" alt="" />
                    {restaurant.web_link}
                  </a>
                  <br />
                </>
              )}
              {restaurant.fb_link && (
                <>
                  <span className="mr-1">
                    <a
                      href={restaurant.fb_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/restaurant/fb.svg" alt="" />
                    </a>
                  </span>
                </>
              )}
              {restaurant.ig_link && (
                <>
                  <span>
                    <a
                      href={restaurant.ig_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/restaurant/ig.svg" alt="" />
                    </a>
                  </span>
                </>
              )}
            </div>
            <br />

            {restaurant.booking_link && (
              <a
                href={restaurant.booking_link}
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="btn btn-secondary d-flex"
                  style={{ margin: 'auto' }}
                >
                  <img className="mr-2" src="/restaurant/calendar.svg" alt="" />
                  馬上訂位
                </button>
              </a>
            )}
          </div>
          <div className="container">
            <div className="res-intro" data-aos="fade-up">
              <h6>餐廳簡介</h6>
              <p>{restaurant.res_intro}</p>
            </div>
          </div>
          <div className="container">
            <div className="sp-menu" data-aos="fade-up">
              <div className="title">
                <h6>特別菜單</h6>
              </div>
              <div className="sake">
                <img
                  src={
                    spMenu.length &&
                    process.env.REACT_APP_SERVER +
                      'images/sp_menu/' +
                      spMenu[0].sp_menu_pic_name
                  }
                  alt=""
                />
                <p>{spMenu.length && spMenu[0].sp_menu_name}</p>
              </div>
              <div className="dish">
                <img
                  src={
                    spMenu.length &&
                    process.env.REACT_APP_SERVER +
                      'images/sp_menu/' +
                      spMenu[1].sp_menu_pic_name
                  }
                  alt=""
                />
                <p>{spMenu.length && spMenu[1].sp_menu_name}</p>
              </div>
            </div>
          </div>
          <div className="menu-pic">
            <h6 className="mb-3">菜單圖片</h6>
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
            <Carousel className="mobile">{renderMenuPics}</Carousel>
            <div className="container desktop">
              <Swiper menuPic={menuPic} className="menu-pic-swiper" />
            </div>
          </div>

          <div className="res-map">
            <h6 className="mb-3">餐廳地圖</h6>
            <iframe
              title="map"
              style={{ minHeight: '360px' }}
              width="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={`https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=${restaurant.lat},${restaurant.lng}&z=16&output=embed&t=`}
            ></iframe>
          </div>

          <img
            className="pattern1 d-none d-md-block"
            src="/restaurant/1.svg"
            alt=""
          />
          <img
            className="pattern2 d-none d-md-block"
            src="/restaurant/2.svg"
            alt=""
          />
          <img
            className="pattern3 d-none d-md-block"
            src="/restaurant/3.svg"
            alt=""
          />
        </div>
      )}
    </>
  )
}

export default RestaurantDetail
