import React, { useState, useEffect } from 'react'
import './ProductListItems.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Heart from './Heart'
import ProductTitle from './ProductTitle'
import ResultTitle from './ResultTitle'
import ProductMaster from './ProductMaster'

const ProductListItems = (props) => {
  const [list, setList] = useState([])
  const [rows, setRows] = useState('')

  const {
    page,
    search,
    setLoad,
    resultTitle,
    resultTitle2,
    resultTitle3,
    resultTitle4,
    resultTitle5,
    resultTitle6,
    setNoresult,
    locasort,
    brandsort,
    sort,
    level,
    price,
    mark,
    clear
  } = props

  let url = `http://localhost:3000/api/products-sake-filter?perpage=${page}&search=${search}&pro_loca=${locasort}&pro_brand=${brandsort}&order=${sort}&pro_level=${level}&pro_price=${price}&pro_mark=${mark}`
console.log(url)
  const fetchList = async () => {
    const res = await fetch(url)
    const fetchedData = await res.json()
    const test = fetchedData
    setRows(test.totalRows)
    setList(test.rows)

    if (test.rows.length === 0) {
      setNoresult(false)
    } else {
      setNoresult(true)
    }
    // 後端摟出的資料大於等於所有資料 按鈕就消失
    if (page >= test.totalRows) {
      setLoad(false)
    }
  }

  const product = list.map((v, i) => {
    return (
      <div key={i} className="product">
        <div className="product-wrap">
          <Link to={'/product/detail/' + v.pro_id}>
            <div onClick={() => {}} className="img-wrap">
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
    //fetchList()
  }, [])

  useEffect(() => {
    //clear()

    ;(async () => {
      await fetchList()
      await clear()
    })()
  }, [page, search, locasort, level, price, mark])

  

  return (
    <>
      <div className="product-list">
        {resultTitle || resultTitle2 || resultTitle3 || resultTitle4|| resultTitle5|| resultTitle6 ? (
          <ResultTitle />
        ) : (
          <ProductTitle />
        )}

        <div className="product-container">
          {/* 商品 */}
          {product}
        </div>
      </div>
    </>
  )
}

export default ProductListItems
