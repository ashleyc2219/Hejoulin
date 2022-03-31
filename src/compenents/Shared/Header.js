import React, { useEffect, useState, memo } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './../../styles/Shared/Header.scss'
import { useLocation } from 'react-router-dom'
import Login from '../Member/LoginPages/Login'
import LoginHover from './LoginHover'
import { CartCount } from '../../App'
import Breadcrumb from './Breadcrumb'
import AddCartModal from '../ProductList/AddCartModal'

const Header = (props) => {
  const { user, setUser, setCartCount, addcartmodal } = props
  const [sidebar, setSidebar] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [open, setOpen] = useState(false)

  const location = useLocation()
  console.log(addcartmodal)
  const getQuantity = async () => {
    const data = { member_id: 4 }
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    try {
      const fetchResponse = await fetch(
        'http://localhost:3001/api/products-cart-quantity',
        settings
      )
      const data = await fetchResponse.json()
      setCartCount(data)
    } catch (e) {
      return e
    }
  }

  getQuantity()

  useEffect(() => {
    if (!location.state) return

    if (location.state.from === 'login-success' && sidebar) {
      setSidebar(false)
    }
  }, [location.state])

  const showSidebar = () => setSidebar(!sidebar)
  const setmobilemenu = () => {
    setMobileMenu(!mobileMenu)
    setOpen(false)
  }
  const openMenu = () => setOpen(!open)
  return (
    <>
      <div className="Header">
        <div className="Header-container">
          {addcartmodal ? <AddCartModal /> : ''}

          <div className="logo-bread">
            <Link to="/">
              <img className="logo" src="/Shared/logo.svg" alt="" />
            </Link>
            <Breadcrumb />
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
                    <Link to="/gift">禮盒系列</Link>
                  </li>
                  <li href="">
                    <Link to="/sake-guide">選酒指南</Link>
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
              <LoginHover showSidebar={showSidebar} />
              <Link to="/cart/list" className="cart">
                <img alt="" src="/Shared/shoppingCart.svg" />
                <CartCount.Consumer>
                  {(cartCount) =>
                    cartCount === 0 ? '' : <span>{cartCount}</span>
                  }
                </CartCount.Consumer>
              </Link>
              <Link to="/member/fav" className="fav">
                <img alt="" src="/Shared/heart.svg" />
              </Link>
              <img
                onClick={setmobilemenu}
                src="/Shared/menu.svg"
                alt=""
                className="menu"
              />
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
          <Login
            user={user}
            setUser={setUser}
            sidebar={sidebar}
            setSidebar={setSidebar}
          />
        </ul>
      </nav>
      <div className="mobile-menu">
        <div
          className={mobileMenu ? 'blockbg' : 'displayNone'}
          onClick={setmobilemenu}
        ></div>

        <div className={mobileMenu ? 'menu' : 'menu menudisplaynone'}>
          <div className="icons">
            <div onClick={setmobilemenu} className="login">
              {' '}
              {/* 按下登入按鈕menu會消失 */}
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
            <img
              src="/shared/x.svg"
              alt=""
              className="closed"
              onClick={setmobilemenu}
            />
          </div>
          <ul className="links">
            <li onClick={setmobilemenu}>
              <Link to="/news/list">最新消息</Link>
            </li>
            <li onClick={setmobilemenu}>
              <Link to="/sake-intro">認識清酒</Link>
            </li>
            <li
              className={open ? 'open purchase-sake' : 'purchase-sake'}
              onClick={openMenu}
            >
              <Link to="/product/list">購買清酒</Link>
              <ul className="dropdown-content">
                <li className={open ? 'showLi ' : ''}>
                  <Link onClick={setmobilemenu} to="/product/list">
                    選購清酒
                  </Link>
                </li>
                <li className={open ? 'showLi ' : ''}>
                  <Link onClick={setmobilemenu} to="/gift">
                    禮盒系列
                  </Link>
                </li>
                <li className={open ? 'showLi ' : ''}>
                  <Link onClick={setmobilemenu} to="/sake-guide">
                    選酒指南
                  </Link>
                </li>
              </ul>
            </li>

            <li onClick={setmobilemenu}>
              <Link to="/mark/intro">客製化酒標</Link>
            </li>
            <li onClick={setmobilemenu}>
              <Link to="/sub/plan">訂閱清酒</Link>
            </li>
            <li onClick={setmobilemenu}>
              <Link to="/event/list">參加活動</Link>
            </li>
            <li onClick={setmobilemenu}>
              <Link to="/restaurant/list">合作餐廳</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default React.memo(Header)
