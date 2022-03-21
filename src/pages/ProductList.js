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
import { Spinner } from 'react-bootstrap'

const ProductList = () => {
  const [brand, setBrand] = useState([]) //品牌
  const [loca, setLoca] = useState([]) // 產地
  const [title, setTitle] = useState(true) // 設定人氣跟達人推薦出現或消失
  const [load, setLoad] = useState(true) //載入更多的按鈕
  const [spin, setSpin] = useState(false) // 最下面的spinner
  const [spinTop, setSpinTop] = useState(false) // 最上面搜尋時會出現的spinner
  const [perpage, setPerpage] = useState(18) // 這訂每次載入商品的比數
  const [prolist, setProlist] = useState(true) // 設定全部商品的列表是否要出現
  const [resultTitle, setResultTitle] = useState(true) // 設定商品列表的標題的樣式 直會傳到子層三原作判斷
  const [noresult, setNoresult] = useState(true) //如果沒有搜尋結果會顯示的文字

  const [search, setSearch] = useState('') // 設定搜尋的文字傳到子曾重新fetch商品列表
  const [locasort, setLocasort] = useState('')

  // 按下載入更多會觸發的spinner
  const spinner = () => {
    setLoad(false)
    setSpin(true)
    setTimeout(() => {
      setLoad(true)
      setSpin(false)
      setPerpage(perpage + 18)
    }, 1000)
  }

  const keypress = (e) => {
    const searchword = e.target.value.trim()
    if (e.key === 'Enter') {
      if (searchword.length > 0) {
        setProlist(false)
        setTitle(false)
        setSpinTop(true)
        setLoad(false)
        setResultTitle(true)
        setSearch(searchword)
        setNoresult(true)
        setTimeout(() => {
          // 如果搜尋文字長度大於0會執行以下動作
          setSpinTop(false)
          setResultTitle(false)
          setProlist(true)
        }, 1000)
      } else if (searchword.length <= 0) {
        setProlist(false)
        setSearch(searchword)
        setTitle(false)
        setSpinTop(true)
        setLoad(false)
        setResultTitle(true)
        setNoresult(true)
        setPerpage(18)
        setTimeout(() => {
          const searchword = e.target.value
          setLoad(true)
          setTitle(true)
          setProlist(true)
          setSpinTop(false)
          setSearch(searchword)
        }, 1500)
      }
    }
  }

  const locahandler = (e) => {
    const loca = e.target.value
    if (loca === '') {
      setTitle(false)
      setProlist(false)
      setSpinTop(true)
      setLoad(false)
      setResultTitle(true)
      setNoresult(true)
      setPerpage(18)
      setLocasort('')
      setTimeout(() => {
        const searchword = e.target.value
        setLoad(true)
        setTitle(true)
        setProlist(true)
        setSpinTop(false)
        setSearch(searchword)
      }, 1500)
    } else {
      setLocasort(loca)
      setProlist(false)
      setTitle(false)
      setSpinTop(true)
      setLoad(false)
      setResultTitle(true)
      setTimeout(() => {
        setSpinTop(false)
        setResultTitle(false)
        setProlist(true)
      }, 1000)
    }
  }

  const brandhandler = (e) => {
    const brand = e.target.value
    console.log(brand)
  }

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
                  <select name="brand" id="" onChange={brandhandler}>
                    <option value="">品牌</option>
                    {brandData}
                  </select>
                  <select name="loca" id="" onChange={locahandler}>
                    <option value="">產地</option>
                    {brandLoca}
                  </select>
                </div>
                <div className="search">
                  <img src="/ProductList/search.svg" alt="" />

                  <input onKeyPress={keypress} type="text" name="" id="" />
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
              {spinTop ? (
                <div className="spin">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden"></span>
                  </Spinner>
                </div>
              ) : (
                ''
              )}
              {/* 人氣之選 */}
              {title ? <ProductTop3 /> : ''}
              {/* 達人推薦 */}
              {title ? <ProductMaster /> : ''}

              {/* 商品列表 */}
              {prolist ? (
                <ProductListItems
                  page={perpage}
                  setLoad={setLoad}
                  search={search}
                  resultTitle={resultTitle}
                  setNoresult={setNoresult}
                  locasort={locasort}
                />
              ) : (
                ''
              )}

              {load ? (
                <div className="load">
                  <button onClick={spinner} className="btn btn-outline-primary">
                    載入更多
                  </button>
                </div>
              ) : (
                ''
              )}

              {spin ? (
                <div className="spin">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden"></span>
                  </Spinner>
                </div>
              ) : (
                ''
              )}

              {noresult ? (
                ''
              ) : (
                <div className="noresult ">
                  <h1>沒有搜尋結果</h1>
                </div>
              )}
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
