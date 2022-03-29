import React from 'react'
import { pathnameLocale } from './../../config'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
  const location = useLocation()
  const formatTextLocale = (pathname) => {
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
            <img className="test" src="/Shared/rightArrow.svg" alt="" />
            <span className="current">{v}</span>
          </React.Fragment>
        )
      }

      // 其它中間樣式
      return (
        <React.Fragment key={i}>
          <img src="/Shared/rightArrow.svg" alt="" />
          <span className="current">{v}</span>
        </React.Fragment>
      )
    })

    return listArray
  }

  return (
    <>
      <div className="bread">
        <span>首頁</span>

        {formatTextLocale(location.pathname)}
      </div>
    </>
  )
}

export default Breadcrumb
