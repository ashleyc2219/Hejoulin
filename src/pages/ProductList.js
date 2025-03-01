import React, { useState, useEffect, useRef } from 'react'
import './../styles/ProductList/ProductList.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Sidebar from '../compenents/ProductList/Sidebar'
import CompareBlock from '../compenents/ProductList/CompareBlock'
import CompareModal from '../compenents/ProductList/CompareModal'
import MobileFilterModal from '../compenents/ProductList/MobileFilterModal'
import MobileSortModal from '../compenents/ProductList/MobileSortModal'
import MobileCatModal from '../compenents/ProductList/MobileCatModal'
import ProductTop3 from '../compenents/ProductList/ProductTop3'
import ProductMaster from '../compenents/ProductList/ProductMaster'
import ProductListItems from '../compenents/ProductList/ProductListItems'
import EmptyBlock from '../compenents/ProductList/EmptyBlock'
import NoResult from '../compenents/ProductList/NoResult'
import MobileGuideButton from '../compenents/SakeGuide/MobileGuide'
import Spinner from '../compenents/Shared/Spinner'
import AlertLoginModal from '../compenents/Shared/AlertLoginModal'

const ProductList = (props) => {
  const [brand, setBrand] = useState([]) //品牌
  const [loca, setLoca] = useState([]) // 產地
  const [load, setLoad] = useState(true) //載入更多的按鈕
  const [spin, setSpin] = useState(false) // 最下面的spinner
  const [spinTop, setSpinTop] = useState(false) // 最上面搜尋時會出現的spinner
  const [perpage, setPerpage] = useState(18) // 這訂每次載入商品的比數
  const [prolist, setProlist] = useState(true) // 設定全部商品的列表是否要出現
  const [resultTitle, setResultTitle] = useState(false) // 設定商品列表的標題的樣式 直會傳到子層三原作判斷
  const [resultTitle2, setResultTitle2] = useState(false) // 設定商品列表的標題的樣式 直會傳到子層三原作判斷
  const [resultTitle3, setResultTitle3] = useState(false) // 設定商品列表的標題的樣式 直會傳到子層三原作判斷
  const [resultTitle4, setResultTitle4] = useState(false) // 設定商品列表的標題的樣式 直會傳到子層三原作判斷
  const [resultTitle5, setResultTitle5] = useState(false) // 設定商品列表的標題的樣式 直會傳到子層三原作判斷
  const [resultTitle6, setResultTitle6] = useState(false) // 設定商品列表的標題的樣式 直會傳到子層三原作判斷
  const [resultTitle7, setResultTitle7] = useState(false) // 設定商品列表的標題的樣式 直會傳到子層三原作判斷
  const [noresult, setNoresult] = useState(true) //如果沒有搜尋結果會顯示的文字
  const [up, setUp] = useState(false)

  const [search, setSearch] = useState('') // 設定搜尋的文字傳到子曾重新fetch商品列表
  const [locasort, setLocasort] = useState('')
  const [brandsort, setBrandsort] = useState('')
  const [sort, setSort] = useState('')
  const locavalue = useRef(null)
  const brandvalue = useRef(null)
  const searchvalue = useRef(null)
  const sortvalue = useRef(null)

  const [level, setLevel] = useState('')
  const [price, setPrice] = useState('')
  const [mark, setMark] = useState('')

  const {
    compare,
    setCompare,
    setCartCount,
    setAddcartmodal,
    sidebar,
    setSidebar,
    loginModal,
    setLoginModal,
  } = props
  //const [compare, setCompare] = useState([])
  const [comparePro1, setComparePro1] = useState([])
  const [comparePro2, setComparePro2] = useState([])
  const [comparePro3, setComparePro3] = useState([])
  const [comparemodal, setComparemodel] = useState(false)
  const [reload, setReload] = useState(0)

  const [catModal, setCatModal] = useState(false)
  const [filterModal, setFilterModal] = useState(false)
  const [sortModal, setSortModal] = useState(false)

  const reset = () => {
    locavalue.current.value = ''
    brandvalue.current.value = ''
    sortvalue.current.value = '1'
    searchvalue.current.value = ''
    setBrandsort('')
    setLocasort('')
    setSort('')
    setLevel('')
    setPrice('')
    setMark('')
    preToLoad()
    setSearch('')
    setNoresult(true)
    setPerpage(18)
    setResultTitle7(true)
    setResultTitle(false)
    setTimeout(() => {
      setResultTitle(false)
      setResultTitle2(false)
      setResultTitle3(false)
      setResultTitle4(false)
      setResultTitle5(false)
      setResultTitle6(false)
      setResultTitle7(false)
      setLoad(true)
      setProlist(true)
      setSpinTop(false)
    }, 1000)
  }

  const clear = () => {
    return () => {
      setLocasort('')
      setSearch('')
      setBrandsort('')
      setLevel('')
      setPrice('')
      setMark('')
    }
  }
  const preToLoad = () => {
    setProlist(false)
    setSpinTop(true)
    setLoad(false)
  }

  const sidebarToLoad1 = () => {
    setProlist(false)
    setSpinTop(true)
    setLoad(false)
    setNoresult(true)
    setResultTitle4(true)
    setTimeout(() => {
      setProlist(true)
      setSpinTop(false)
      setLoad(true)
    }, 1000)
  }
  const sidebarToLoad2 = () => {
    setProlist(false)
    setSpinTop(true)
    setLoad(false)
    setNoresult(true)
    setResultTitle5(true)
    setTimeout(() => {
      setProlist(true)
      setSpinTop(false)
      setLoad(true)
    }, 1000)
  }
  const sidebarToLoad3 = () => {
    setProlist(false)
    setSpinTop(true)
    setLoad(false)
    setNoresult(true)
    setResultTitle6(true)
    setTimeout(() => {
      setProlist(true)
      setSpinTop(false)
      setLoad(true)
    }, 1000)
  }

  const levelToLoad = () => {
    setProlist(false)
    setNoresult(true)
    setSpinTop(true)
    setLoad(false)
    setTimeout(() => {
      setProlist(true)
      setResultTitle4(false)
      setSpinTop(false)
      setLoad(true)
    }, 1000)
  }

  const priceToLoad = () => {
    setProlist(false)
    setNoresult(true)
    setSpinTop(true)
    setLoad(false)
    setTimeout(() => {
      setProlist(true)
      setResultTitle5(false)
      setSpinTop(false)
      setLoad(true)
    }, 1000)
  }
  const markToLoad = () => {
    setProlist(false)
    setNoresult(true)
    setSpinTop(true)
    setLoad(false)
    setTimeout(() => {
      setProlist(true)
      setResultTitle6(false)
      setSpinTop(false)
      setLoad(true)
    }, 1000)
  }

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
      sortvalue.current.value = '1'
      setLevel('')
      setPrice('')
      setMark('')
      setBrandsort('')
      setLocasort('')
      setSort('1')
      preToLoad()
      setResultTitle(false)
      if (searchword.length > 0) {
        setSearch(searchword)
        setResultTitle7(true)
        setNoresult(true)
        setTimeout(() => {
          // 如果搜尋文字長度大於0會執行以下動作
          setSpinTop(false)
          setResultTitle(true)
          setProlist(true)
        }, 1000)
      } else if (searchword.length <= 0) {
        setSearch('')
        setNoresult(true)
        setPerpage(18)
        setResultTitle7(true)
        setTimeout(() => {
          setResultTitle(false)
          setResultTitle2(false)
          setResultTitle3(false)
          setResultTitle4(false)
          setResultTitle5(false)
          setResultTitle6(false)
          setResultTitle7(false)
          setLoad(true)
          setProlist(true)
          setSpinTop(false)
        }, 1000)
      }
    }
  }

  const locahandler = (e) => {
    const loca = e.target.value
    searchvalue.current.value = ''
    setSearch('')
    if (loca === '') {
      preToLoad()
      setPerpage(18)
      setLocasort('')
      setNoresult(true)
      setTimeout(() => {
        setResultTitle(false)
        setLoad(true)
        setProlist(true)
        setSpinTop(false)
      }, 1000)
    } else {
      setLocasort(loca)
      preToLoad()
      setNoresult(true)
      setResultTitle(true)
      setTimeout(() => {
        setSpinTop(false)
        //setResultTitle(true)
        setProlist(true)
      }, 1000)
    }
  }

  const brandhandler = (e) => {
    const brand = e.target.value
    searchvalue.current.value = ''
    setSearch('')
    if (brand === '') {
      preToLoad()
      setNoresult(true)
      setPerpage(18)
      setBrandsort('')
      setTimeout(() => {
        setResultTitle2(false)
        setLoad(true)
        setProlist(true)
        setSpinTop(false)
      }, 1000)
    } else {
      setNoresult(true)
      setBrandsort(brand)
      preToLoad()
      setResultTitle2(true)
      setTimeout(() => {
        setSpinTop(false)
        setProlist(true)
      }, 1000)
    }
  }

  const sorthandler = (e) => {
    const sort = e.target.value
    if (sort === '1') {
      preToLoad()
      setNoresult(true)
      setPerpage(18)
      setSort('')
      setTimeout(() => {
        setResultTitle3(false)
        setLoad(true)
        setProlist(true)
        setSpinTop(false)
      }, 1000)
    } else {
      setNoresult(true)
      setSort(sort)
      preToLoad()
      setResultTitle3(true)
      setPerpage(18)
      setTimeout(() => {
        setLoad(true)
        setSpinTop(false)
        //setResultTitle3(true)
        setProlist(true)
      }, 1000)
    }
  }

  const brandData = brand.map((v, i) => {
    return (
      <option key={i} value={v.pro_brand}>
        {v.pro_brand}
      </option>
    )
  })

  const brandLoca = loca.map((v, i) => {
    return (
      <option key={i} value={v.pro_loca}>
        {v.pro_loca}
      </option>
    )
  })

  useEffect(() => {
    let a = true
    const scroll = () => {
      if (a) {
        window.scrollTo(0, 0)
      }
    }
    scroll()
    setUp()
    /* 產地 */
    const fetchLoca = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/products-condition/location`
      )
      const fetchedData = await res.json()
      const test = fetchedData
      if (a) {
        setLoca(test)
      }
    }
    /* 品牌 */
    const fetchBrand = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/products-condition/brand`
      )
      const fetchedData = await res.json()
      if (a) {
        setBrand(fetchedData)
      }
    }
    scroll()
    fetchLoca()
    fetchBrand()

    /* window.addEventListener('scroll', () => {
      if (a) {
        handleScroll()
      }
    }) */

    return () => {
      a = false
    }
  }, [])


  // 手機版的篩選排序光箱
  const mobilecat = () => {
    setCatModal(!catModal)
  }
  const mobilefilter = () => {
    setFilterModal(!filterModal)
  }
  const mobileSort = () => {
    setSortModal(!sortModal)
  }

  return (
    <>
      {loginModal ? (
        <AlertLoginModal
          setSidebar={setSidebar}
          setLoginModal={setLoginModal}
        />
      ) : (
        ''
      )}
      {sortModal ? (
        <MobileSortModal
          sortModal={sortModal}
          setSortModal={setSortModal}
          sorthandler={sorthandler}
        />
      ) : (
        ''
      )}
      {filterModal ? (
        <MobileFilterModal
          setFilterModal={setFilterModal}
          filterModal={filterModal}
          level={level}
          setLevel={setLevel}
          sidebarToLoad1={sidebarToLoad1}
          sidebarToLoad2={sidebarToLoad2}
          sidebarToLoad3={sidebarToLoad3}
          levelToLoad={levelToLoad}
          price={price}
          setPrice={setPrice}
          priceToLoad={priceToLoad}
          markToLoad={markToLoad}
          mark={mark}
          setMark={setMark}
          reset={reset}
        />
      ) : (
        ''
      )}
      {catModal ? <MobileCatModal mobilecat={mobilecat} catModal={catModal} /> : ''}
      {comparemodal ? (
        <CompareModal
          setComparemodel={setComparemodel}
          reload={reload}
          comparePro1={comparePro1}
          comparePro2={comparePro2}
          comparePro3={comparePro3}
          setCartCount={setCartCount}
          setAddcartmodal={setAddcartmodal}
          sidebar={sidebar}
          setSidebar={setSidebar}
          setLoginModal={setLoginModal}
        />
      ) : (
        ''
      )}
      <div className="ProductList">
        {/* 商品列表的容器 */}
        <div className="product-container">
          <img src="/ProductList/bgelement.svg" alt="" className="bgele1" />
          <img src="/ProductList/bgelement.svg" alt="" className="bgele2" />
          {/* sidebar篩選 */}
          <Sidebar
            level={level}
            setLevel={setLevel}
            sidebarToLoad1={sidebarToLoad1}
            sidebarToLoad2={sidebarToLoad2}
            sidebarToLoad3={sidebarToLoad3}
            levelToLoad={levelToLoad}
            price={price}
            setPrice={setPrice}
            priceToLoad={priceToLoad}
            markToLoad={markToLoad}
            mark={mark}
            setMark={setMark}
            reset={reset}
          />

          <div className="main">
            <MobileGuideButton />
            <div className="center-container">
              <div className="search-bar">
                <div className="select">
                  <select
                    ref={sortvalue}
                    name="sort"
                    id=""
                    onChange={sorthandler}
                  >
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
                <div className="cat" onClick={mobilecat}>
                  <div className="title">分類</div>
                  <div className="state">購買清酒</div>
                </div>
                <div className="filter" onClick={mobilefilter}>
                  <div className="title">篩選</div>
                </div>
                <div className="sort" onClick={mobileSort}>
                  <div className="title">排序</div>
                </div>
                <div
                  className="compare"
                  onClick={() => {
                    if (compare.length > 0) {
                      setComparemodel(!comparemodal)
                    }
                  }}
                >
                  <div className="title">比較</div>
                  <div className="state">{compare.length}</div>
                </div>
              </div>
              {spinTop ? <Spinner /> : ''}
              {/* {spinTop ? (
                <div className="spin">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden"></span>
                  </Spinner>
                </div>
              ) : (
                ''
              )} */}
              {/* 人氣之選 */}
              {resultTitle ||
              resultTitle2 ||
              resultTitle3 ||
              resultTitle4 ||
              resultTitle5 ||
              resultTitle6 ||
              resultTitle7 ? (
                ''
              ) : (
                <ProductTop3
                  compare={compare}
                  setCompare={setCompare}
                  setCartCount={setCartCount}
                  setAddcartmodal={setAddcartmodal}
                  sidebar={sidebar}
                  setSidebar={setSidebar}
                  setLoginModal={setLoginModal}
                />
              )}
              {/* 達人推薦 */}
              {resultTitle ||
              resultTitle2 ||
              resultTitle3 ||
              resultTitle4 ||
              resultTitle5 ||
              resultTitle6 ||
              resultTitle7 ? (
                ''
              ) : (
                <ProductMaster
                  compare={compare}
                  setCompare={setCompare}
                  setCartCount={setCartCount}
                  setAddcartmodal={setAddcartmodal}
                  setLoginModal={setLoginModal}
                />
              )}

              {/* 商品列表 */}
              {prolist ? (
                <ProductListItems
                  page={perpage}
                  setLoad={setLoad}
                  search={search}
                  resultTitle={resultTitle}
                  resultTitle2={resultTitle2}
                  resultTitle3={resultTitle3}
                  resultTitle4={resultTitle4}
                  resultTitle5={resultTitle5}
                  resultTitle6={resultTitle6}
                  setNoresult={setNoresult}
                  locasort={locasort}
                  brandsort={brandsort}
                  sort={sort}
                  level={level}
                  price={price}
                  mark={mark}
                  clear={clear}
                  compare={compare}
                  setCompare={setCompare}
                  setCartCount={setCartCount}
                  setAddcartmodal={setAddcartmodal}
                  setLoginModal={setLoginModal}
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

              {spin ? <Spinner /> : ''}
              {/* {spin ? (
                <div className="spin">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden"></span>
                  </Spinner>
                </div>
              ) : (
                ''
              )} */}

              {noresult ? '' : <NoResult />}
            </div>

            {/* 右側比較區塊 */}
            <CompareBlock
              up={up}
              compare={compare}
              setCompare={setCompare}
              comparemodal={comparemodal}
              setComparemodel={setComparemodel}
              reload={reload}
              setReload={setReload}
              comparePro1={comparePro1}
              setComparePro1={setComparePro1}
              comparePro2={comparePro2}
              setComparePro2={setComparePro2}
              comparePro3={comparePro3}
              setComparePro3={setComparePro3}
            />
            <EmptyBlock />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList
