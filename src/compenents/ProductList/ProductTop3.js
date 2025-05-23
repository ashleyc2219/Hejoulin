import React, { useState, useEffect, useRef, memo } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './ProductTop3.scss'
import Heart from './Heart'
import CompareBtn from './CompareBtn'
import AddCartIcon from './AddCartIcon'
import { cleanup } from '@testing-library/react'

const ProductTop3 = ({
  compare,
  setCompare,
  setCartCount,
  setAddcartmodal,
  setLoginModal,
}) => {
  const [top, setTop] = useState([])
  const [count, setCount] = useState(1)

  /* 人氣之選 */
  /* const fetchTop = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/products-condition/top-three`
    )
    const fetchedData = await res.json()
    const test = fetchedData

    setTop(test)
  }
 */

  useEffect(() => {
    let a = true
    const fetchTop = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/products-condition/top-three`
      )
      const fetchedData = await res.json()
      const test = fetchedData
      if (a) {
        setTop(test)
      }
    }
    fetchTop()
    return () => {
      a = false
    }
  }, [])

  const top3 = top.map((v, i) => {
    return (
      <div key={i} className="product">
        <div className="product-wrap">
          <Link to={'/product/detail/' + v.pro_id}>
            <div className="img-wrap">
              <img
                className="product-img"
                src={`${process.env.REACT_APP_BACKEND_URL}/images/pro_img/` + v.pro_img}
                alt=""
              />
            </div>
          </Link>
          <div className="tag-img">
            {/* 禮盒跟酒標客製化的tag */}
            {v.pro_mark === 1 ? (
              <img src="/ProductList/mark.svg" alt="" className="pro-gift" />
            ) : (
              ''
            )}

            {v.pro_gift === 1 ? (
              <img src="/ProductList/gift.svg" alt="" className="pro-mark" />
            ) : (
              ''
            )}
          </div>
          <div className="icon">
            <CompareBtn
              id={v.pro_id}
              compare={compare}
              setCompare={setCompare}
            />
            <div className="cart-heart">
              <Heart id={v.pro_id} setLoginModal={setLoginModal} />
              <AddCartIcon
                setCartCount={setCartCount}
                id={v.pro_id}
                count={count}
                setAddcartmodal={setAddcartmodal}
                setLoginModal={setLoginModal}
              />
            </div>
          </div>
        </div>
        <div className="title">
          <Link to={'/product/detail/' + v.pro_id}>
            <p>{v.pro_name}</p>
          </Link>
          <p className="price">＄{v.pro_price}</p>
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="famous-choose">
        <div className="famous-title">
          人氣之選
          <img src="/ProductList/rice.svg" alt="" className="rice" />
        </div>
        <div className="product-container">
          {/* 商品 */}
          {top3}
        </div>
      </div>
    </>
  )
}

export default ProductTop3
