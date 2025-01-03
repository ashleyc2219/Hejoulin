import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './ProductMaster.scss'
import Heart from './Heart'
import CompareBtn from './CompareBtn'
import AddCartIcon from './AddCartIcon'

const ProductMaster = ({
  compare,
  setCompare,
  setCartCount,
  setAddcartmodal,
  setLoginModal,
}) => {
  const [master, setMaster] = useState([])
  const [count, setCount] = useState(1)

  const mas = master.map((v, i) => {
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

  useEffect(() => {
    let a = true

    const fetchMaster = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/products-condition/random-three`
      )
      const fetchedData = await res.json()
      const test = fetchedData
      if (a) {
        setMaster(test)
      }
    }

    fetchMaster()

    return () => {
      a = false
    }
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
