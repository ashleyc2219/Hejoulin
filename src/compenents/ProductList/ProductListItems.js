import React, { useState, useEffect } from 'react'
import './ProductListItems.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Heart from './Heart'
import ProductTitle from './ProductTitle'
import ResultTitle from './ResultTitle'

const ProductListItems = (props) => {
  const [list, setList] = useState([])
  const [rows, setRows] = useState('')
  console.log(props.resultTitle)

  let url = `http://localhost:3000/api/products-sake-filter?perpage=${props.page}&search=${props.search}`

  const fetchList = async () => {
    const res = await fetch(url)
    const fetchedData = await res.json()
    const test = fetchedData
    setRows(test.totalRows)
    setList(test.rows)

    // 後端摟出的資料大於等於所有資料 按鈕就消失
    if (props.page >= test.totalRows) {
      props.load(false)
    }
  }

  const product = list.map((v, i) => {
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
              <Heart id={v.pro_id} />
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
    fetchList()
  }, [])

  useEffect(() => {
    fetchList()
  }, [props.page, props.search])
  return (
    <>
      <div className="product-list">
        {props.resultTitle ? <ProductTitle /> : <ResultTitle />}

        <div className="product-container">
          {/* 商品 */}
          {product}
        </div>
      </div>
    </>
  )
}

export default ProductListItems
