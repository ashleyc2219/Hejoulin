import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './../../styles/Shared/Header.scss'
import LoginContext from '../Member/LoginContext'

const Header = (props) => {
  const { user, setUser } = props
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
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
                <img
                  className=""
                  alt=""
                  src="/Shared/loginIcon.svg"
                  onClick={showSidebar}
                />
                <span>登入</span>
              </div>
              <img className="cart" alt="" src="/Shared/shoppingCart.svg" />
              <img className="fav" alt="" src="/Shared/heart.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={sidebar ? 'block' : 'displayNone'} />
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <img src="/Shared/x.svg" onClick={showSidebar} alt="" />
          </li>
          <LoginContext user={user} setUser={setUser} />
        </ul>
      </nav>
    </>
  )
}

export default Header
