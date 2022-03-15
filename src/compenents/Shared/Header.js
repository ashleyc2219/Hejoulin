import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './../../styles/Shared/Header.scss'

const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="Header-container">
          <div className="logo-bread">
            <img className="logo" src="/Shared/logo.svg" alt="" />
            <div className="bread">
              <span>首頁</span>
              <img src="/Shared/rightArrow.svg" alt="" />
              <span className="current">購物車</span>
            </div>
          </div>
          <div className="navbar">
            <ul className="links">
              <li>
                <Link to="">最新消息</Link>
              </li>
              <li>
                <Link to="">認識清酒</Link>
              </li>
              <li className="purchase-sake">
                <Link to="">購買清酒</Link>
                <ul className="dropdown-content">
                  <li href="">
                    <Link to="">選購清酒</Link>
                  </li>
                  <li href="">
                    <Link to="">選酒指南</Link>
                  </li>
                  <li href="">
                    <Link to="">禮盒系列</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="">客製化酒標</Link>
              </li>
              <li>
                <Link to="">訂閱清酒</Link>
              </li>
              <li>
                <Link to="">參加活動</Link>
              </li>
              <li>
                <Link to="">合作餐廳</Link>
              </li>
            </ul>
            <div className="icons">
              <div className="login">
                <img className="" alt="" src="/Shared/loginIcon.svg" />
                <span>登入</span>
              </div>
              <img className="cart" alt="" src="/Shared/shoppingCart.svg" />
              <img className="fav" alt="" src="/Shared/heart.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
