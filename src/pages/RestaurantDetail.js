import React, { useState, useEffect } from 'react';
import './../styles/RestaurantDetail/RestaurantDetail.scss';
import { Carousel } from 'react-bootstrap';
import Swiper from '../compenents/restaurant/Swiper';
import { useParams } from 'react-router-dom';

const RestaurantDetail = () => {
    const [restaurant, setRestaurant] = useState({});
    const [restaurantPic, setRestaurantPic] = useState([]);
    const [spMenu, setSpMenu] = useState([]);
    const [menuPic, setMenuPic] = useState([]);
    const { id } = useParams();
    // get restaurant data
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(process.env.REACT_APP_SERVER + 'api/restaurant?resId=' + id);
            const obj = await res.json();
            setRestaurant(obj[0]);
        };
        fetchData();
    }, []);

    // get restaurant pics
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(process.env.REACT_APP_SERVER + 'api/restaurant-pic?resId=' + id);
            const obj = await res.json();
            setRestaurantPic(obj);
        };
        fetchData();
    }, []);

    // get sp menu
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(process.env.REACT_APP_SERVER + 'api/spmenu?resId=' + id);
            const obj = await res.json();
            setSpMenu(obj);
        };
        fetchData();
    }, []);

    // get menu pics
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(process.env.REACT_APP_SERVER + 'api/menu-pic?resId=' + id);
            const obj = await res.json();
            setMenuPic(obj);
        };
        fetchData();
    }, []);

    const renderRestaurantPics = restaurantPic.map((v) => {
        return (
            <Carousel.Item key={v.res_pic_id} style={{ maxHeight: '500px' }}>
                <img
                    className="d-block w-100"
                    src={process.env.REACT_APP_SERVER + 'images/res_pic/' + v.res_pic_name}
                    alt=""
                />
            </Carousel.Item>
        );
    });

    const renderMenuPics = menuPic.map((v) => {
        return (
            <Carousel.Item key={v.menu_pic_id} style={{ maxHeight: '500px' }}>
                <img
                    className="d-block w-100"
                    src={process.env.REACT_APP_SERVER + 'images/menu_pic/' + v.menu_pic_name}
                    alt=""
                />
            </Carousel.Item>
        );
    });

    return (
        <div className="RestaurantDetail">
            <Carousel>{renderRestaurantPics}</Carousel>
            <div className="res-info">
                <h5 className="text-center">{restaurant.res_name}</h5>
                <div className="px-3">
                    {' '}
                    <div>
                        <img className="mr-2" src="/restaurant/location.svg" alt="" />
                        {restaurant.res_address}
                    </div>
                    <div>
                        <img className="mr-2" src="/restaurant/time.svg" alt="" />
                        {restaurant.res_ser_hours &&
                            '今日 ' + JSON.parse(restaurant.res_ser_hours)[new Date().getDay()]}
                    </div>
                    <div>
                        <img className="mr-2" src="/restaurant/phone.svg" alt="" />
                        {restaurant.res_t_number}
                    </div>
                    {restaurant.web_link && (
                        <>
                            <a href={restaurant.web_link} target="_blank" rel="noreferrer">
                                <img className="mr-2" src="/restaurant/site.svg" alt="" />
                                {restaurant.web_link}
                            </a>
                            <br />
                        </>
                    )}
                    {restaurant.fb_link && (
                        <>
                            <span className="mr-1">
                                <a href={restaurant.fb_link} target="_blank" rel="noreferrer">
                                    <img src="/restaurant/fb.svg" alt="" />
                                </a>
                            </span>
                        </>
                    )}
                    {restaurant.ig_link && (
                        <>
                            <span>
                                <a href={restaurant.ig_link} target="_blank" rel="noreferrer">
                                    <img src="/restaurant/ig.svg" alt="" />
                                </a>
                            </span>
                        </>
                    )}
                </div>
                <br />

                {restaurant.booking_link && (
                    <a href={restaurant.booking_link} target="_blank" rel="noreferrer">
                        <button type="button" className="btn btn-secondary d-flex" style={{ margin: 'auto' }}>
                            <img className="mr-2" src="/restaurant/calendar.svg" alt="" />
                            馬上訂位
                        </button>
                    </a>
                )}
            </div>
            <div className="container">
                <div className="res-intro">
                    <h6>餐廳簡介</h6>
                    <p>{restaurant.res_intro}</p>
                </div>
            </div>
            <div className="container">
                <div className="sp-menu">
                    <div className="title">
                        <h6>特別菜單</h6>
                    </div>
                    <div className="sake">
                        <img
                            src={
                                spMenu.length &&
                                process.env.REACT_APP_SERVER + 'images/sp_menu/' + spMenu[0].sp_menu_pic_name
                            }
                            alt=""
                        />
                        <p>{spMenu.length && spMenu[0].sp_menu_name}</p>
                    </div>
                    <div className="dish">
                        <img
                            src={
                                spMenu.length &&
                                process.env.REACT_APP_SERVER + 'images/sp_menu/' + spMenu[1].sp_menu_pic_name
                            }
                            alt=""
                        />
                        <p>{spMenu.length && spMenu[1].sp_menu_name}</p>
                    </div>
                </div>
            </div>
            <div className="menu-pic">
                <h6>菜單圖片</h6>
                <Carousel className="mobile">{renderMenuPics}</Carousel>
                <div className="container desktop">
                    <Swiper menuPic={menuPic} className="menu-pic-swiper" />
                </div>
            </div>

            <div className="res-map">
                <h6>餐廳地圖</h6>
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
        </div>
    );
};

export default RestaurantDetail;
