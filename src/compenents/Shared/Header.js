import React, { useEffect, useState, memo } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './../../styles/Shared/Header.scss'
import { useLocation } from 'react-router-dom'
import Login from '../Member/LoginPages/Login'
import LoginHover from './LoginHover'
import { CartCount } from '../../App'
import Breadcrumb from './Breadcrumb'
import AddCartModal from '../ProductList/AddCartModal'
import LogoutHover from './LogoutHover'
import FetchMemberId from '../Member/FetchMemberId'

const Header = (props) => {
  const { user, setUser, setCartCount, addcartmodal, sidebar, setSidebar } =
    props
  const [mobileMenu, setMobileMenu] = useState(false)
  const [open, setOpen] = useState(false)
  const [ani, setAni] = useState('')
  const [Quantity, setQuantity] = useState('')
  const getQuantity = async () => {
    const getMember = await FetchMemberId(localStorage.getItem('token'))

    if (getMember !== 'noMemberId') {
      const data = { member_id: getMember }
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
  }

  const location = useLocation()
  if (Quantity !== location.pathname) {
    getQuantity()
    setQuantity(location.pathname)
  }

  useEffect(() => {
    setQuantity(location.pathname)
    getQuantity()
  }, [])

  let style = ''

  useEffect(() => {
    setAni('spanani')
    setTimeout(() => {
      setAni('')
    }, 300)
  }, [CartCount._currentValue])

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
  // ??????token???????????????????????????
  function authCtrl() {
    // console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token') !== null) {
      return <LogoutHover setSidebar={setSidebar} />
    } else {
      setCartCount(0)
      return <LoginHover showSidebar={showSidebar} />
    }
  }
  function favCtrl() {
    // console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token') !== null) {
      return (
        <Link to="/member/fav" className="fav">
          <img alt="" src="/Shared/heart.svg" />
        </Link>
      )
    } else {
      return ''
    }
  }
  const openMenu = () => setOpen(!open)
  return (
    <>
      <div className="Header">
        <div className="Header-container">
          {/* <AddCartModal /> */}
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
                <Link to="/news/list">????????????</Link>
              </li>
              <li>
                <Link to="/sake-intro">????????????</Link>
              </li>
              <li className="purchase-sake">
                <Link to="/product/list">????????????</Link>
                <ul className="dropdown-content">
                  <li href="">
                    <Link to="/product/list">????????????</Link>
                  </li>
                  <li href="">
                    <Link to="/gift">????????????</Link>
                  </li>
                  <li href="">
                    <Link to="/sake-guide">????????????</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/mark/intro">???????????????</Link>
              </li>
              <li>
                <Link to="/sub/plan">????????????</Link>
              </li>
              <li>
                <Link to="/event/list">????????????</Link>
              </li>
              <li>
                <Link to="/restaurant/list">????????????</Link>
              </li>
            </ul>
            <div className="icons">
              {authCtrl()}
              <Link to="/cart/list" className="cart">
                <img alt="" src="/Shared/shoppingCart.svg" />
                <CartCount.Consumer>
                  {(cartCount) =>
                    cartCount === 0 ? (
                      ''
                    ) : (
                      <span className={ani}>{cartCount}</span>
                    )
                  }
                </CartCount.Consumer>
              </Link>
              {favCtrl()}
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
              {/* ??????????????????menu????????? */}
              <img
                className=""
                alt=""
                src="/Shared/loginIcon.svg"
                onClick={showSidebar}
              />
              <span>??????</span>
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
              <Link to="/news/list">????????????</Link>
            </li>
            <li onClick={setmobilemenu}>
              <Link to="/sake-intro">????????????</Link>
            </li>
            <li
              className={open ? 'open purchase-sake' : 'purchase-sake'}
              onClick={openMenu}
            >
              <Link to="/product/list">????????????</Link>
              <ul className="dropdown-content">
                <li className={open ? 'showLi ' : ''}>
                  <Link onClick={setmobilemenu} to="/product/list">
                    ????????????
                  </Link>
                </li>
                <li className={open ? 'showLi ' : ''}>
                  <Link onClick={setmobilemenu} to="/gift">
                    ????????????
                  </Link>
                </li>
                <li className={open ? 'showLi ' : ''}>
                  <Link onClick={setmobilemenu} to="/sake-guide">
                    ????????????
                  </Link>
                </li>
              </ul>
            </li>

            <li onClick={setmobilemenu}>
              <Link to="/mark/intro">???????????????</Link>
            </li>
            <li onClick={setmobilemenu}>
              <Link to="/sub/plan">????????????</Link>
            </li>
            <li onClick={setmobilemenu}>
              <Link to="/event/list">????????????</Link>
            </li>
            <li onClick={setmobilemenu}>
              <Link to="/restaurant/list">????????????</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default React.memo(Header)
