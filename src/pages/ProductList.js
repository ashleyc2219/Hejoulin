import React, { useState, useEffect } from 'react'
import './../styles/ProductList/ProductList.css'
import Sidebar from '../compenents/ProductList/Sidebar'
import CompareBlock from '../compenents/ProductList/CompareBlock'
import CompareModal from '../compenents/ProductList/CompareModal'
import MobileFilterModal from '../compenents/ProductList/MobileFilterModal'
import MobileSortModal from '../compenents/ProductList/MobileSortModal'
import MobileCatModal from '../compenents/ProductList/MobileCatModal'
import { ListGroup } from 'react-bootstrap'
import Header from '../compenents/Shared/Header'
import Footer from '../compenents/Shared/Footer'

const ProductList = () => {
  const [brand, setBrand] = useState([])
  const [loca, setLoca] = useState([])
  const [top, setTop] = useState([])
  const [master, setMaster] = useState([])

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

  /* 人氣之選 */
  const fetchTop = async () => {
    const res = await fetch(
      'http://localhost:3000/api/products-condition/top-three'
    )
    const fetchedData = await res.json()
    const test = fetchedData

    setTop(test)
    console.log(top)
  }

  const top3 = top.map((v, i) => {
    const img = '/ProductList/productimg/' + v.pro_img
    return (
      <div key={i} className="product">
        <div className="product-wrap">
          <img className="product-img" src={img} alt="" />
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
            <div className="compare">
              <img src="/ProductList/add.svg" alt="" />
              <p>比較</p>
            </div>
            <div className="cart-heart">
              <img className="heart" src="/ProductList/heart.svg" alt="" />
              <img className="cart" src="/ProductList/cart.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="title">
          <p className="name">{v.pro_name}</p>
          <p className="price">＄{v.pro_price}</p>
        </div>
      </div>
    )
  })

  const fetchMaster = async () => {
    const res = await fetch(
      'http://localhost:3000/api/products-condition/random-three'
    )
    const fetchedData = await res.json()
    const test = fetchedData
    console.log(test)
    setMaster(test)
  }

  const mas = master.map((v, i) => {
    const img = '/ProductList/productimg/' + v.pro_img
    return (
      <div key={i} className="product">
        <div className="product-wrap">
          <img className="product-img" src={img} alt="" />
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
            <div className="compare">
              <img src="/ProductList/add.svg" alt="" />
              <p>比較</p>
            </div>
            <div className="cart-heart">
              <img className="heart" src="/ProductList/heart.svg" alt="" />
              <img className="cart" src="/ProductList/cart.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="title">
          <p className="name">{v.pro_name}</p>
          <p className="price">＄{v.pro_price}</p>
        </div>
      </div>
    )
  })

  useEffect(() => {
    fetchLoca()
    fetchBrand()
    fetchTop()
    fetchMaster()
  }, [])
  return (
    <>
      {/* <CompareModal /> */}
      {/*  <MobileFilterModal /> */}
      {/* <MobileSortModal /> */}
      {/*  <MobileCatModal /> */}
      <Header />
      <div className="ProductList">
        <nav>
          <div className="container"></div>
        </nav>
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
              <div className="famous-choose">
                <div className="famous-title">
                  人氣之選
                  <img src="/ProductList/rice.svg" alt="" className="rice" />
                </div>
                <div className="product-container">
                  {/* 商品 */}
                  {top3}
                </div>
              </div>
              {/* 達人推薦 */}
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
              {/* 商品列表 */}
              <div className="product-list">
                <div className="product-title">
                  全部商品
                  <img src="/ProductList/rice.svg" alt="" className="rice" />
                </div>
                <div className="product-container">
                  {/* 商品 */}
                  <div className="product">
                    <div className="product-wrap">
                      <img
                        className="product-img"
                        src="/ProductList/product.png"
                        alt=""
                      />
                      <div className="tag-img">
                        {/* 禮盒跟酒標客製化的ttag */}
                        <img
                          src="/ProductList/mark.svg"
                          alt=""
                          className="pro-gift"
                        />
                        {/* <img
                          src="/ProductList/gift.svg"
                          alt=""
                          className="pro-mark"
                        /> */}
                      </div>
                      <div className="icon">
                        <div className="compare">
                          <img src="/ProductList/add.svg" alt="" />
                          <p>比較</p>
                        </div>
                        <div className="cart-heart">
                          <img
                            className="heart"
                            src="/ProductList/heart.svg"
                            alt=""
                          />
                          <img
                            className="cart"
                            src="/ProductList/cart.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="title">
                      <p className="name">篠峯 雄町純米大吟醸</p>
                      <p className="price">＄2890</p>
                    </div>
                  </div>
                  <div className="product">
                    <div className="product-wrap">
                      <img
                        className="product-img"
                        src="/ProductList/product.png"
                        alt=""
                      />
                      <div className="tag-img">
                        {/* 禮盒跟酒標客製化的ttag */}
                        <img
                          src="/ProductList/mark.svg"
                          alt=""
                          className="pro-gift"
                        />
                        {/* <img
                          src="/ProductList/gift.svg"
                          alt=""
                          className="pro-mark"
                        /> */}
                      </div>
                      <div className="icon">
                        <div className="compare">
                          <img src="/ProductList/add.svg" alt="" />
                          <p>比較</p>
                        </div>
                        <div className="cart-heart">
                          <img
                            className="heart"
                            src="/ProductList/heart.svg"
                            alt=""
                          />
                          <img
                            className="cart"
                            src="/ProductList/cart.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="title">
                      <p className="name">篠峯 雄町純米大吟醸</p>
                      <p className="price">＄2890</p>
                    </div>
                  </div>
                  <div className="product">
                    <div className="product-wrap">
                      <img
                        className="product-img"
                        src="/ProductList/product.png"
                        alt=""
                      />
                      <div className="tag-img">
                        {/* 禮盒跟酒標客製化的ttag */}
                        {/* <img
                          src="/ProductList/mark.svg"
                          alt=""
                          className="pro-gift"
                        /> */}
                        <img
                          src="/ProductList/gift.svg"
                          alt=""
                          className="pro-mark"
                        />
                      </div>
                      <div className="icon">
                        <div className="compare">
                          <img src="/ProductList/add.svg" alt="" />
                          <p>比較</p>
                        </div>
                        <div className="cart-heart">
                          <img
                            className="heart"
                            src="/ProductList/heart.svg"
                            alt=""
                          />
                          <img
                            className="cart"
                            src="/ProductList/cart.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="title">
                      <p className="name">篠峯 雄町純米大吟醸</p>
                      <p className="price">＄2890</p>
                    </div>
                  </div>
                  <div className="product">
                    <div className="product-wrap">
                      <img
                        className="product-img"
                        src="/ProductList/product.png"
                        alt=""
                      />
                      <div className="tag-img">
                        {/* 禮盒跟酒標客製化的ttag */}
                        <img
                          src="/ProductList/mark.svg"
                          alt=""
                          className="pro-gift"
                        />
                        {/* <img
                          src="/ProductList/gift.svg"
                          alt=""
                          className="pro-mark"
                        /> */}
                      </div>
                      <div className="icon">
                        <div className="compare">
                          <img src="/ProductList/add.svg" alt="" />
                          <p>比較</p>
                        </div>
                        <div className="cart-heart">
                          <img
                            className="heart"
                            src="/ProductList/heart.svg"
                            alt=""
                          />
                          <img
                            className="cart"
                            src="/ProductList/cart.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="title">
                      <p className="name">篠峯 雄町純米大吟醸</p>
                      <p className="price">＄2890</p>
                    </div>
                  </div>
                  <div className="product">
                    <div className="product-wrap">
                      <img
                        className="product-img"
                        src="/ProductList/product.png"
                        alt=""
                      />
                      <div className="tag-img">
                        {/* 禮盒跟酒標客製化的ttag */}
                        <img
                          src="/ProductList/mark.svg"
                          alt=""
                          className="pro-gift"
                        />
                        {/* <img
                          src="/ProductList/gift.svg"
                          alt=""
                          className="pro-mark"
                        /> */}
                      </div>
                      <div className="icon">
                        <div className="compare">
                          <img src="/ProductList/add.svg" alt="" />
                          <p>比較</p>
                        </div>
                        <div className="cart-heart">
                          <img
                            className="heart"
                            src="/ProductList/heart.svg"
                            alt=""
                          />
                          <img
                            className="cart"
                            src="/ProductList/cart.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="title">
                      <p className="name">篠峯 雄町純米大吟醸</p>
                      <p className="price">＄2890</p>
                    </div>
                  </div>
                  <div className="product">
                    <div className="product-wrap">
                      <img
                        className="product-img"
                        src="/ProductList/product.png"
                        alt=""
                      />
                      <div className="tag-img">
                        {/* 禮盒跟酒標客製化的ttag */}
                        {/* <img
                          src="/ProductList/mark.svg"
                          alt=""
                          className="pro-gift"
                        /> */}
                        <img
                          src="/ProductList/gift.svg"
                          alt=""
                          className="pro-mark"
                        />
                      </div>
                      <div className="icon">
                        <div className="compare">
                          <img src="/ProductList/add.svg" alt="" />
                          <p>比較</p>
                        </div>
                        <div className="cart-heart">
                          <img
                            className="heart"
                            src="/ProductList/heart.svg"
                            alt=""
                          />
                          <img
                            className="cart"
                            src="/ProductList/cart.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="title">
                      <p className="name">篠峯 雄町純米大吟醸</p>
                      <p className="price">＄2890</p>
                    </div>
                  </div>
                  <div className="product">
                    <div className="product-wrap">
                      <img
                        className="product-img"
                        src="/ProductList/product.png"
                        alt=""
                      />
                      <div className="tag-img">
                        {/* 禮盒跟酒標客製化的ttag */}
                        <img
                          src="/ProductList/mark.svg"
                          alt=""
                          className="pro-gift"
                        />
                        {/* <img
                          src="/ProductList/gift.svg"
                          alt=""
                          className="pro-mark"
                        /> */}
                      </div>
                      <div className="icon">
                        <div className="compare">
                          <img src="/ProductList/add.svg" alt="" />
                          <p>比較</p>
                        </div>
                        <div className="cart-heart">
                          <img
                            className="heart"
                            src="/ProductList/heart.svg"
                            alt=""
                          />
                          <img
                            className="cart"
                            src="/ProductList/cart.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="title">
                      <p className="name">篠峯 雄町純米大吟醸</p>
                      <p className="price">＄2890</p>
                    </div>
                  </div>
                  <div className="product">
                    <div className="product-wrap">
                      <img
                        className="product-img"
                        src="/ProductList/product.png"
                        alt=""
                      />
                      <div className="tag-img">
                        {/* 禮盒跟酒標客製化的ttag */}
                        <img
                          src="/ProductList/mark.svg"
                          alt=""
                          className="pro-gift"
                        />
                        {/* <img
                          src="/ProductList/gift.svg"
                          alt=""
                          className="pro-mark"
                        /> */}
                      </div>
                      <div className="icon">
                        <div className="compare">
                          <img src="/ProductList/add.svg" alt="" />
                          <p>比較</p>
                        </div>
                        <div className="cart-heart">
                          <img
                            className="heart"
                            src="/ProductList/heart.svg"
                            alt=""
                          />
                          <img
                            className="cart"
                            src="/ProductList/cart.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="title">
                      <p className="name">篠峯 雄町純米大吟醸</p>
                      <p className="price">＄2890</p>
                    </div>
                  </div>
                  <div className="product">
                    <div className="product-wrap">
                      <img
                        className="product-img"
                        src="/ProductList/product.png"
                        alt=""
                      />
                      <div className="tag-img">
                        {/* 禮盒跟酒標客製化的ttag */}
                        {/* <img
                          src="/ProductList/mark.svg"
                          alt=""
                          className="pro-gift"
                        /> */}
                        <img
                          src="/ProductList/gift.svg"
                          alt=""
                          className="pro-mark"
                        />
                      </div>
                      <div className="icon">
                        <div className="compare">
                          <img src="/ProductList/add.svg" alt="" />
                          <p>比較</p>
                        </div>
                        <div className="cart-heart">
                          <img
                            className="heart"
                            src="/ProductList/heart.svg"
                            alt=""
                          />
                          <img
                            className="cart"
                            src="/ProductList/cart.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="title">
                      <p className="name">篠峯 雄町純米大吟醸</p>
                      <p className="price">＄2890</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 右側比較區塊 */}
            <CompareBlock />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductList
