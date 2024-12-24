import React, { useState, useEffect } from 'react'
import './../../styles/ProductList/CompareModal.css'
import Heart from './Heart'
import AddCartBtn from './AddCartBtn'

const CompareModal = ({
  setComparemodel,
  reload,
  comparePro1,
  comparePro2,
  comparePro3,
  setCartCount,
  setAddcartmodal,
  sidebar,
  setSidebar,
  setLoginModal,
}) => {
  const [count, setCount] = useState(1)
  let product1 = comparePro1.map(function (v, i) {
    return (
      <div key={v.pro_id} className="com-pro">
        <div className="pro-wrap">
          <img
            src={`${process.env.REACT_APP_BACKEND_URL}/images/pro_img/` + v.pro_img}
            alt=""
          />
          <div className="pro-name">{v.pro_name}</div>
        </div>
        <div className="spec-wrap">
          <ul>
            <li className="like">
              <Heart id={v.pro_id} setLoginModal={setLoginModal} />
            </li>
            <li>{v.pro_level}</li>
            <li>{v.pro_essence}%</li>
            <li>{v.pro_alco}%</li>
            <li>{v.pro_loca}</li>
            <li>{v.rice}</li>
            <li>{v.pro_brand}</li>
            <li>{v.pro_marker}</li>
            <li>${v.pro_price}</li>
          </ul>
        </div>
        <div className="button">
          <AddCartBtn
            id={v.pro_id}
            setCartCount={setCartCount}
            count={count}
            setAddcartmodal={setAddcartmodal}
            sidebar={sidebar}
            setSidebar={setSidebar}
            setLoginModal={setLoginModal}
          />
        </div>
      </div>
    )
  })
  let product2 = comparePro2.map(function (v, i) {
    return (
      <div key={v.pro_id} className="com-pro">
        <div className="pro-wrap">
          <img
            src={`${process.env.REACT_APP_BACKEND_URL}/images/pro_img/` + v.pro_img}
            alt=""
          />
          <div className="pro-name">{v.pro_name}</div>
        </div>
        <div className="spec-wrap">
          <ul>
            <li className="like">
              <Heart id={v.pro_id} setLoginModal={setLoginModal} />
            </li>
            <li>{v.pro_level}</li>
            <li>{v.pro_essence}%</li>
            <li>{v.pro_alco}%</li>
            <li>{v.pro_loca}</li>
            <li>{v.rice}</li>
            <li>{v.pro_brand}</li>
            <li>{v.pro_marker}</li>
            <li>${v.pro_price}</li>
          </ul>
        </div>
        <div className="button">
          <AddCartBtn
            id={v.pro_id}
            setCartCount={setCartCount}
            count={count}
            setAddcartmodal={setAddcartmodal}
            sidebar={sidebar}
            setSidebar={setSidebar}
            setLoginModal={setLoginModal}
          />
        </div>
      </div>
    )
  })
  let product3 = comparePro3.map(function (v, i) {
    return (
      <div key={v.pro_id} className="com-pro">
        <div className="pro-wrap">
          <img
            src={`${process.env.REACT_APP_BACKEND_URL}/images/pro_img/` + v.pro_img}
            alt=""
          />
          <div className="pro-name">{v.pro_name}</div>
        </div>
        <div className="spec-wrap">
          <ul>
            <li className="like">
              <Heart id={v.pro_id} setLoginModal={setLoginModal} />
            </li>
            <li>{v.pro_level}</li>
            <li>{v.pro_essence}%</li>
            <li>{v.pro_alco}%</li>
            <li>{v.pro_loca}</li>
            <li>{v.rice}</li>
            <li>{v.pro_brand}</li>
            <li>{v.pro_marker}</li>
            <li>${v.pro_price}</li>
          </ul>
        </div>
        <div className="button">
          <AddCartBtn
            id={v.pro_id}
            setCartCount={setCartCount}
            count={count}
            setAddcartmodal={setAddcartmodal}
            sidebar={sidebar}
            setSidebar={setSidebar}
            setLoginModal={setLoginModal}
          />
        </div>
      </div>
    )
  })

  useEffect(() => {}, [reload])
  return (
    <>
      <div
        className="CompareModal"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setComparemodel(false)
          }
        }}
      >
        <div className="comparepage">
          <div
            onClick={() => {
              setComparemodel(false)
            }}
            className="close-white"
          >
            <img src="/ProductList/close-white.svg" alt="" />
          </div>
          <div className="side-box">
            <div className="empty-wrap"></div>
            <div className="spec-title">
              <ul>
                <li>加入收藏</li>
                <li>等級</li>
                <li>精米步合</li>
                <li>酒精度</li>
                <li>產地</li>
                <li>使用米</li>
                <li>品牌</li>
                <li>酒造</li>
                <li>售價</li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="side-box-empty">
            <div className="empty-wrap"></div>
            <div className="spec-title">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          {product1}
          {product2}
          {product3}
        </div>
      </div>
    </>
  )
}

export default CompareModal
