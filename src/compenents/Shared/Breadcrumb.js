import React from 'react'
import { pathnameLocale } from './../../config'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
  const location = useLocation()
  let pathname = location.pathname
  let bread = ''
  if (location.pathname.includes('/product/detail/')) {
    pathname = '商品詳細'
  }
  if (location.pathname.includes('/event/detail/')) {
    pathname = '活動詳細'
  }
  if (location.pathname.includes('/restaurant/detail/')) {
    pathname = '餐廳詳細'
  }

  switch (pathname) {
    case '/news/list':
      bread = (
        <React.Fragment>
          <Link to="/news/list">
            <span className="current">最新消息</span>
          </Link>
        </React.Fragment>
      )
      break

    case '/sake-intro':
      bread = (
        <React.Fragment>
          <Link to="/sake-intro">
            <span className="current">認識清酒</span>
          </Link>
        </React.Fragment>
      )
      break
    case '/product/list':
      bread = (
        <React.Fragment>
          <Link to="/product/list">
            <span className="current">選購清酒</span>
          </Link>
        </React.Fragment>
      )
      break
    case '/gift':
      bread = (
        <React.Fragment>
          <Link to="/gift">
            <span className="current">禮盒系列</span>
          </Link>
        </React.Fragment>
      )
      break
    case '/sake-guide':
      bread = (
        <React.Fragment>
          <Link to="/sake-guide">
            <span className="current">選酒指南</span>
          </Link>
        </React.Fragment>
      )
      break
    case '/mark/intro':
      bread = (
        <React.Fragment>
          <Link to="/mark/intro">
            <span className="current">客製化酒標</span>
          </Link>
        </React.Fragment>
      )
      break
    case '/mark/edit':
      bread = (
        <React.Fragment>
          <Link to="/mark/intro">
            <span className="current">客製化酒標</span>
          </Link>
        </React.Fragment>
      )
      break
    case '/mark/done':
      bread = (
        <React.Fragment>
          <Link to="/mark/intro">
            <span className="current">客製化酒標</span>
          </Link>
        </React.Fragment>
      )
      break
    case '/sub/plan':
      bread = (
        <React.Fragment>
          <Link to="/sub/plan">
            <span className="current">訂閱清酒</span>
          </Link>
        </React.Fragment>
      )
      break
    case '/sub/time':
      bread = (
        <React.Fragment>
          <Link to="/sub/plan">
            <span className="current">訂閱清酒</span>
          </Link>
        </React.Fragment>
      )
      break
    case '/sub/confirm':
      bread = (
        <React.Fragment>
          <Link to="/sub/plan">
            <span className="current">訂閱清酒</span>
          </Link>
        </React.Fragment>
      )
      break
    case '/sub/cart-verify':
      bread = (
        <React.Fragment>
          <Link to="/sub/cart-verify">
            <span className="current">購物車</span>
          </Link>
        </React.Fragment>
      )
      break
    case '/sub/cart-order':
      bread = (
        <React.Fragment>
          <Link to="/sub/cart-order">
            <span className="current">購物車</span>
          </Link>
        </React.Fragment>
      )
      break
    case '/event/list':
      bread = (
        <React.Fragment>
          <Link to="/event/list">
            <span className="current">參加活動</span>
          </Link>
        </React.Fragment>
      )
      break
    case '/cart/list':
      bread = (
        <React.Fragment>
          <Link to="/cart/list">
            <span className="current">購物車</span>
          </Link>
        </React.Fragment>
      )
      break
    case '/cart/info':
      bread = (
        <React.Fragment>
          <Link to="/cart/info">
            <span className="current">購物車</span>
          </Link>
        </React.Fragment>
      )
      break
    case '/cart/verify':
      bread = (
        <React.Fragment>
          <Link to="/cart/verify">
            <span className="current">購物車</span>
          </Link>
        </React.Fragment>
      )
      break
    case '/cart/order':
      bread = (
        <React.Fragment>
          <Link to="/cart/order">
            <span className="current">購物車</span>
          </Link>
        </React.Fragment>
      )
      break
    case '/restaurant/list':
      bread = (
        <React.Fragment>
          <Link to="/restaurant/list">
            <span className="current">合作餐廳</span>
          </Link>
        </React.Fragment>
      )
      break
    case '/member/profile':
      bread = (
        <React.Fragment>
          <Link to="/member/profile">
            <span className="">會員中心</span>
          </Link>
          <img src="/Shared/rightArrow.svg" alt="" />
          <span className="current">個人資訊</span>
        </React.Fragment>
      )
      break
    case '/member/order-list':
      bread = (
        <React.Fragment>
          <Link to="/member/profile">
            <span className="">會員中心</span>
          </Link>
          <img src="/Shared/rightArrow.svg" alt="" />
          <span className="current">訂單總覽</span>
        </React.Fragment>
      )
      break
    case '/member/event-list':
      bread = (
        <React.Fragment>
          <Link to="/member/profile">
            <span className="">會員中心</span>
          </Link>
          <img src="/Shared/rightArrow.svg" alt="" />
          <span className="current">活動紀錄</span>
        </React.Fragment>
      )
      break
    case '/member/sub-list':
      bread = (
        <React.Fragment>
          <Link to="/member/profile">
            <span className="">會員中心</span>
          </Link>
          <img src="/Shared/rightArrow.svg" alt="" />
          <span className="current">訂閱方案</span>
        </React.Fragment>
      )
      break
    case '/member/fav':
      bread = (
        <React.Fragment>
          <Link to="/member/profile">
            <span className="">會員中心</span>
          </Link>
          <img src="/Shared/rightArrow.svg" alt="" />
          <span className="current">收藏商品</span>
        </React.Fragment>
      )
      break
    case '/member/mark':
      bread = (
        <React.Fragment>
          <Link to="/member/profile">
            <span className="">會員中心</span>
          </Link>
          <img src="/Shared/rightArrow.svg" alt="" />
          <span className="current">酒標作品</span>
        </React.Fragment>
      )
      break
    case '商品詳細':
      bread = (
        <React.Fragment>
          <Link to="/product/list">
            <span className="">選購清酒</span>
          </Link>
          <img src="/Shared/rightArrow.svg" alt="" />
          <span className="current">商品細節</span>
        </React.Fragment>
      )
      break
    case '活動詳細':
      bread = (
        <React.Fragment>
          <Link to="/event/list">
            <span className="">參加活動</span>
          </Link>
          <img src="/Shared/rightArrow.svg" alt="" />
          <span className="current">活動細節</span>
        </React.Fragment>
      )
      break
    case '餐廳詳細':
      bread = (
        <React.Fragment>
          <Link to="/restaurant/list">
            <span className="">合作餐廳</span>
          </Link>
          <img src="/Shared/rightArrow.svg" alt="" />
          <span className="current">餐廳細節</span>
        </React.Fragment>
      )
      break

    default:
      break
  }

  /* const formatTextLocale = (pathname) => {
    // '/product/baby/birth' -> ['','product','baby', 'birth']
    const pathArray = pathname.split('/')

    // to ['','產品','嬰兒', '初生兒']
    const pathArrayLocale = pathArray.map((v, i) => {
      if (!v) return ''

      // id類的最後結尾params會忽略
      if (Number(v)) return ''

      return pathnameLocale[v] ? pathnameLocale[v] : v
    })

    // 轉為bs樣式
    const listArray = pathArrayLocale.map((v, i, array) => {
      // 第一個 與 id類(數字類型)的最後結尾params會忽略, 首頁不需要
      if (i === 0 || v === '') return ''

      // 最後一個
      if (i === array.length - 1) {
        return (
          <React.Fragment key={i}>
            <Link to={pathArray.slice(0, i + 1).join('/')}>
              <span className="current">{v}</span>
            </Link>
          </React.Fragment>
        )
      }
      
      // 其它中間樣式
      return (
        <React.Fragment key={i}>
          <Link to={pathArray.slice(0, i + 1).join('/')}>
            <span className="current">{v}</span>
          </Link>
        </React.Fragment>
      )
    })

    return listArray
  } */

  return (
    <>
      <div className="bread">
        {location.pathname === '/' ? (
          ''
        ) : (
          <Link to="/">
            <span>首頁</span>
          </Link>
        )}
        {location.pathname === '/' ? (
          ''
        ) : (
          <img src="/Shared/rightArrow.svg" alt="" />
        )}
        {bread}

        {/* {formatTextLocale(location.pathname)} */}
      </div>
    </>
  )
}

export default Breadcrumb
