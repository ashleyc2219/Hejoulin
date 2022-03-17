import React, { useState, useEffect } from 'react'
import './../styles/ProductList/ProductList.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Sidebar from '../compenents/ProductList/Sidebar'
import CompareBlock from '../compenents/ProductList/CompareBlock'
import CompareModal from '../compenents/ProductList/CompareModal'
import MobileFilterModal from '../compenents/ProductList/MobileFilterModal'
import MobileSortModal from '../compenents/ProductList/MobileSortModal'
import MobileCatModal from '../compenents/ProductList/MobileCatModal'
import { ListGroup } from 'react-bootstrap'
import ProductTop3 from '../compenents/ProductList/ProductTop3'
import ProductMaster from '../compenents/ProductList/ProductMaster'
import ProductListItems from '../compenents/ProductList/ProductListItems'
import EmptyBlock from '../compenents/ProductList/EmptyBlock'

const ProductList = () => {
  const [brand, setBrand] = useState([])
  const [loca, setLoca] = useState([])

  /* 品牌 */
  const fetchBrand = async () => {
    const res = await fetch(
      'http://localhost:3000/api/products-condition/brand'
    )
    const fetchedData = await res.json()
    setBrand(fetchedData)
  }

  const brandData = brand.map((v, i) => {
    return (
      <option key={i} value={v.pro_brand}>
        {v.pro_brand}
      </option>
    )
  })

  /* 產地 */
  const fetchLoca = async () => {
    const res = await fetch(
      'http://localhost:3000/api/products-condition/location'
    )
    const fetchedData = await res.json()
    const test = fetchedData
    setLoca(test)
  }

  const brandLoca = loca.map((v, i) => {
    return (
      <option key={i} value={v.pro_loca}>
        {v.pro_loca}
      </option>
    )
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchLoca()
    fetchBrand()
  }, [])
  return (
    <>
      {/* <CompareModal /> */}
      {/*  <MobileFilterModal /> */}
      {/* <MobileSortModal /> */}
      {/*  <MobileCatModal /> */}
      <div className="ProductList">
        {/* 商品列表的容器 */}
        <div className="product-container">
          <img src="/ProductList/bgelement.svg" alt="" className="bgele1" />
          <img src="/ProductList/bgelement.svg" alt="" className="bgele2" />
          {/* sidebar篩選 */}
          <Sidebar />

          <div className="main">
            <div className="center-container">
              <div className="search-bar">
                <div className="select">
                  <select name="sort" id="">
                    <option value="">預設排序</option>
                    <option value="">最新上架</option>
                    <option value="">價錢高至低</option>
                    <option value="">價錢低至高</option>
                  </select>
                  <select name="brand" id="">
                    <option value="">品牌</option>
                    {brandData}
                  </select>
                  <select name="loca" id="">
                    <option value="">產地</option>
                    {brandLoca}
                  </select>
                </div>
                <div className="search">
                  <img src="/ProductList/search.svg" alt="" />

                  <input type="text" name="" id="" />
                </div>
              </div>
              {/* 手機版的篩選 */}
              <div className="mobile-search-bar">
                <div className="cat">
                  <div className="title">分類</div>
                  <div className="state">購買清酒</div>
                </div>
                <div className="filter">
                  <div className="title">篩選</div>
                  <div className="state">無</div>
                </div>
                <div className="sort">
                  <div className="title">排序</div>
                  <div className="state">預設排序</div>
                </div>
                <div className="compare">
                  <div className="title">比較</div>
                  <div className="state">1</div>
                </div>
              </div>
              {/* 人氣之選 */}
              <ProductTop3 />
              {/* 達人推薦 */}
              <ProductMaster />
              {/* 商品列表 */}
              <ProductListItems />
            </div>

            {/* 右側比較區塊 */}
            <CompareBlock />
            <EmptyBlock />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList
