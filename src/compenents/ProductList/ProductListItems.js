import React, { useState, useEffect } from 'react'
import './ProductListItems.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Heart from './Heart'
import ProductTitle from './ProductTitle'
import ResultTitle from './ResultTitle'
import CompareBtn from './CompareBtn'
import AddCartIcon from './AddCartIcon'

const ProductListItems = (props) => {
  const [list, setList] = useState([])
  const [rows, setRows] = useState('')
  const [count, setCount] = useState(1)

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
    clear,
    compare,
    setCompare,
    setCartCount,
    setAddcartmodal,
  } = props

  let url = `http://localhost:3001/api/products-sake-filter?perpage=${page}&search=${search}&pro_loca=${locasort}&pro_brand=${brandsort}&order=${sort}&pro_level=${level}&pro_price=${price}&pro_mark=${mark}`

  const product = list.map((v, i) => {
    return (
      <div key={i} className="product">
        <div className="product-wrap">
          <Link to={'/product/detail/' + v.pro_id}>
            <div className="img-wrap">
              <img
                className="product-img"
                src={'http://localhost:3001/images/pro_img/' + v.pro_img}
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

            {v.pro_gift === 0 ? (
              ''
            ) : (
              <img src="/ProductList/gift.svg" alt="" className="pro-mark" />
            )}
          </div>
          <div className="icon">
            <CompareBtn
              id={v.pro_id}
              compare={compare}
              setCompare={setCompare}
            />
            <div className="cart-heart">
              <Heart id={v.pro_id} />
              <AddCartIcon
                setCartCount={setCartCount}
                id={v.pro_id}
                count={count}
                setAddcartmodal={setAddcartmodal}
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
    let a = true
    const fetchList = async () => {
      const res = await fetch(url)
      const fetchedData = await res.json()
      const test = fetchedData

      if (a) {
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
    }
    fetchList()
    clear()
    return () => {
      a = false
    }
  }, [page, search, locasort, level, price, mark])

  return (
    <>
      <div className="product-list">
        {resultTitle ||
        resultTitle2 ||
        resultTitle3 ||
        resultTitle4 ||
        resultTitle5 ||
        resultTitle6 ? (
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
