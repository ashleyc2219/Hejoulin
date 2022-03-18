import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './ProductMaster.scss'
import Heart from './Heart'

const ProductMaster = () => {
  const [master, setMaster] = useState([])

  const fetchMaster = async () => {
    const res = await fetch(
      'http://localhost:3000/api/products-condition/random-three'
    )
    const fetchedData = await res.json()
    const test = fetchedData
    setMaster(test)
  }


  const mas = master.map((v, i) => {
    return (
      <div key={i} className="product">
        <div className="product-wrap">
          <Link to={'/product/detail/' + v.pro_id}>
            <div
              onClick={() => {
                console.log('img-wrap')
              }}
              className="img-wrap"
            >
              <img
                className="product-img"
                src={'/ProductList/productimg/' + v.pro_img}
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
            <div
              onClick={() => {
                console.log('比較')
              }}
              className="compare"
            >
              <img src="/ProductList/add.svg" alt="" />
              <p>比較</p>
            </div>
            <div className="cart-heart">
            <Heart id={v.pro_id}/>
              <img
                onClick={() => {
                  console.log('購物車')
                }}
                className="cart"
                src="/ProductList/cart.svg"
                alt=""
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

  useEffect(() => {
    fetchMaster()
  }, [])


  return (
    <>
      <div className="master-recommend">
        <div className="master-title">
          達人推薦
          <img src="/ProductList/rice.svg" alt="" className="rice" />
        </div>
        <div className="product-container">
          {/* 商品 */}
          {mas}
        </div>
      </div>
    </>
  )
}

export default ProductMaster
