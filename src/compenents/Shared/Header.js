import React from 'react'
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
              <img src="/Shared/rightArrow.svg" />
              <span className="current">購物車</span>
            </div>
          </div>
          <div className="navbar">
            <div className="links">
              <a>最新消息</a>
              <a>認識清酒</a>
              <div class="purchase-sake">
                <button class="dropdown-btn">購買清酒</button>
                <div class="dropdown-content">
                  <a href="">選購清酒</a>
                  <a href="">選酒指南</a>
                  <a href="">禮盒系列</a>
                </div>
              </div>

              <a>客製化酒標</a>
              <a>訂閱清酒</a>
              <a>參加活動</a>
              <a>合作餐廳</a>
            </div>
            <div className="icons">
              <img className="login" alt="" src="/Shared/loginIcon.svg" />
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
