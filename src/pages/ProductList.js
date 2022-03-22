import React, { useState, useEffect, useRef } from 'react'
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
import NoResult from '../compenents/ProductList/NoResult'
import { Spinner } from 'react-bootstrap'

import GuideButton from '../compenents/SakeGuide/Guide'

const ProductList = () => {
  const [brand, setBrand] = useState([]) //品牌
  const [loca, setLoca] = useState([]) // 產地
  const [title, setTitle] = useState(false) // 設定人氣跟達人推薦出現或消失
  const [load, setLoad] = useState(true) //載入更多的按鈕
  const [spin, setSpin] = useState(false) // 最下面的spinner
  const [spinTop, setSpinTop] = useState(false) // 最上面搜尋時會出現的spinner
  const [perpage, setPerpage] = useState(18) // 這訂每次載入商品的比數
  const [prolist, setProlist] = useState(true) // 設定全部商品的列表是否要出現
  const [resultTitle, setResultTitle] = useState(false) // 設定商品列表的標題的樣式 直會傳到子層三原作判斷
  const [resultTitle2, setResultTitle2] = useState(false) // 設定商品列表的標題的樣式 直會傳到子層三原作判斷
  const [resultTitle3, setResultTitle3] = useState(false) // 設定商品列表的標題的樣式 直會傳到子層三原作判斷
  const [noresult, setNoresult] = useState(true) //如果沒有搜尋結果會顯示的文字
  const [up, setUp] = useState(false)

  const [search, setSearch] = useState('') // 設定搜尋的文字傳到子曾重新fetch商品列表
  const [locasort, setLocasort] = useState('')
  const [brandsort, setBrandsort] = useState('')
  const [sort, setSort] = useState('')
  const locavalue = useRef(null)
  const brandvalue = useRef(null)
  const searchvalue = useRef(null)

  const [level, setLevel] = useState('')
  const [price, setPrice] = useState('')
  const [mark, setMark] = useState('')

 

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
      locavalue.current.value = ''
      brandvalue.current.value = ''
      setProlist(false)
      setTitle(true)
      setSpinTop(true)
      setLoad(false)
      setResultTitle(false)
      if (searchword.length > 0) {
        setSearch(searchword)
        setTimeout(() => {
          setNoresult(true)
          // 如果搜尋文字長度大於0會執行以下動作
          setSpinTop(false)
          setResultTitle(true)
          setProlist(true)
        }, 1000)
      } else if (searchword.length <= 0) {
        //setProlist(false)
        setSearch('')
        //setTitle(true)
        //setSpinTop(true)
        //setLoad(false)
        //setResultTitle(false)
        setNoresult(true)
        setPerpage(18)
        setTimeout(() => {
          //const searchword = e.target.value
          setLoad(true)
          //setTitle(false)
          setProlist(true)
          setSpinTop(false)
          //setSearch(searchword)
        }, 1500)
      }
    }
  }

  const locahandler = (e) => {
    const loca = e.target.value
    searchvalue.current.value = ''
    setSearch('')
    if (loca === '') {
      setTitle(true)
      setProlist(false)
      setSpinTop(true)
      setLoad(false)
      setResultTitle(false)
      setPerpage(18)
      setLocasort('')
      setNoresult(true)
      setTimeout(() => {
        setLoad(true)
        //setTitle(false)
        setProlist(true)
        setSpinTop(false)
      }, 1500)
    } else {
      //setNoresult(true)
      ;(async function del() {
        await setLocasort(loca)
        await setProlist(false)
        await setTitle(true)
        await setSpinTop(true)
        await setLoad(false)
        await setResultTitle(false)
      })()
      /* setLocasort(loca)
      setProlist(false)
      setTitle(true)
      setSpinTop(true)
      setLoad(false)
      setResultTitle(false) */
      setTimeout(() => {
        setSpinTop(false)
        setResultTitle(true)
        setProlist(true)
      }, 1000)
    }
  }

  const brandhandler = (e) => {
    const brand = e.target.value
    searchvalue.current.value = ''
    setSearch('')
    if (brand === '') {
      setTitle(true)
      setProlist(false)
      setSpinTop(true)
      setLoad(false)
      setResultTitle2(false)
      setNoresult(true)
      setPerpage(18)
      setBrandsort('')
      setTimeout(() => {
        setLoad(true)
        //setTitle(false)
        setProlist(true)
        setSpinTop(false)
      }, 1500)
    } else {
      setBrandsort(brand)
      setProlist(false)
      setTitle(true)
      setSpinTop(true)
      setLoad(false)
      setResultTitle2(false)
      setTimeout(() => {
        setSpinTop(false)
        setResultTitle2(true)
        setProlist(true)
      }, 1000)
    }
  }

  const sorthandler = (e) => {
    const sort = e.target.value
    if (sort === '1') {
      setResultTitle3(false)
      setTitle(true)
      setProlist(false)
      setSpinTop(true)
      setLoad(false)
      setNoresult(true)
      setPerpage(18)
      setSort('')
      setTimeout(() => {
        setLoad(true)
        //setTitle(false)
        setProlist(true)
        setSpinTop(false)
      }, 1500)
    } else {
      setSort(sort)
      setProlist(false)
      setTitle(true)
      setSpinTop(true)
      setLoad(false)
      setResultTitle3(false)
      setPerpage(18)
      setTimeout(() => {
        setLoad(true)
        setSpinTop(false)
        setResultTitle3(true)
        setProlist(true)
      }, 1000)
    }
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
    window.addEventListener('scroll', handleScroll)
  }, [])
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 300
    ) {
      setUp(true)
    } else {
      setUp(false)
    }
  }
  return (
    <>
      {/*  <CompareModal /> */}
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
          <GuideButton />

          <div className="main">
            <div className="center-container">
              <div className="search-bar">
                <div className="select">
                  <select name="sort" id="" onChange={sorthandler}>
                    <option value="1">預設排序</option>
                    <option value="2">最新上架</option>
                    <option value="5">價錢高至低</option>
                    <option value="4">價錢低至高</option>
                  </select>
                  <select
                    ref={brandvalue}
                    name="brand"
                    id=""
                    onChange={brandhandler}
                    defaultValue={''}
                  >
                    <option value="">品牌</option>
                    {brandData}
                  </select>
                  <select
                    ref={locavalue}
                    name="loca"
                    id=""
                    onChange={locahandler}
                  >
                    <option value="">產地</option>
                    {brandLoca}
                  </select>
                </div>
                <div className="search">
                  <img src="/ProductList/search.svg" alt="" />

                  <input
                    ref={searchvalue}
                    onKeyPress={keypress}
                    type="text"
                    name=""
                    id=""
                  />
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
              {title ? '' : <ProductTop3 />}
              {/* 達人推薦 */}
              {title ? '' : <ProductMaster />}

              {/* 商品列表 */}
              {prolist ? (
                <ProductListItems
                  page={perpage}
                  setLoad={setLoad}
                  search={search}
                  resultTitle={resultTitle}
                  resultTitle2={resultTitle2}
                  resultTitle3={resultTitle3}
                  setNoresult={setNoresult}
                  locasort={locasort}
                  brandsort={brandsort}
                  sort={sort}
                  setLocasort={setLocasort}
                  level={level}
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

              {noresult ? '' : <NoResult />}
            </div>

            {/* 右側比較區塊 */}
            <CompareBlock up={up} />
            <EmptyBlock />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList
