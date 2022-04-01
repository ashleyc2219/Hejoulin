import React from 'react'
import { pathnameLocale } from './../../config'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
  const location = useLocation()
  console.log(location.pathname)
  let bread = ''

  switch (location.pathname) {
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
            <span className="current">會員中心</span>
          </Link>
        </React.Fragment>
      )
      break
    case '/member/order-list':
      bread = (
        <React.Fragment>
          <Link to="/member/profile">
            <span className="current">會員中心</span>
          </Link>
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
        {location.pathname === '/' ? '' : <span>首頁</span>}
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
