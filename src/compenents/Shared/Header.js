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
                <Link to="/news/list">最新消息</Link>
              </li>
              <li>
                <Link to="/sake-intro">認識清酒</Link>
              </li>
              <li className="purchase-sake">
                <Link to="/product/list">購買清酒</Link>
                <ul className="dropdown-content">
                  <li href="">
                    <Link to="/product/list">選購清酒</Link>
                  </li>
                  <li href="">
                    <Link to="/sake-guide">選酒指南</Link>
                  </li>
                  <li href="">
                    <Link to="/gift">禮盒系列</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/mark/intro">客製化酒標</Link>
              </li>
              <li>
                <Link to="/sub/plan">訂閱清酒</Link>
              </li>
              <li>
                <Link to="/event/list">參加活動</Link>
              </li>
              <li>
                <Link to="/restaurant/list">合作餐廳</Link>
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
              <Link to="/cart/list" className="cart">
                <img alt="" src="/Shared/shoppingCart.svg" />
              </Link>
              <Link to="/member/fav" className="fav">
                <img alt="" src="/Shared/heart.svg" />
              </Link>
              <img src="/Shared/menu.svg" alt="" className="menu" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={sidebar ? 'block' : 'displayNone'}
        onClick={showSidebar}
      />
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <img
              src="/ProductList/close-black.svg"
              onClick={showSidebar}
              alt=""
            />
          </li>
          <LoginContext user={user} setUser={setUser} />
          {/*<EmailVerify />*/}
          {/*<PassForget />*/}
        </ul>
      </nav>
      <div className="mobile-menu">
        <div className="blockbg"></div>

        <div className="menu">
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
            <Link to="/cart/list" className="cart">
              <img alt="" src="/Shared/shoppingCart.svg" />
            </Link>
            <Link to="/member/fav" className="fav">
              <img alt="" src="/Shared/heart.svg" />
            </Link>
          </div>
          <ul className="links">
            <li>
              <Link to="/news/list">最新消息</Link>
            </li>
            <li>
              <Link to="/sake-intro">認識清酒</Link>
            </li>
            <li className="purchase-sake">
              <Link to="/product/list">購買清酒</Link>
              <ul className="dropdown-content">
                <li href="">
                  <Link to="/product/list">選購清酒</Link>
                </li>
                <li href="">
                  <Link to="/sake-guide">選酒指南</Link>
                </li>
                <li href="">
                  <Link to="/gift">禮盒系列</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/mark/intro">客製化酒標</Link>
            </li>
            <li>
              <Link to="/sub/plan">訂閱清酒</Link>
            </li>
            <li>
              <Link to="/event/list">參加活動</Link>
            </li>
            <li>
              <Link to="/restaurant/list">合作餐廳</Link>
            </li>
          </ul>
          <img src="/shared/x.svg" alt="" className="closed" />
        </div>
      </div>
    </>
  )
}

export default Header
