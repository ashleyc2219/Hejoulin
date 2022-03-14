import React from 'react'
import './../styles/ProductList/ProductList.css'
import Sidebar from '../compenents/ProductList/Sidebar'
import CompareBlock from '../compenents/ProductList/CompareBlock'
import CompareModal from '../compenents/ProductList/CompareModal'
import MobileFilterModal from '../compenents/ProductList/MobileFilterModal'
import MobileSortModal from '../compenents/ProductList/MobileSortModal'
import MobileCatModal from '../compenents/ProductList/MobileCatModal'

const ProductList = (props) => {
  fetch('http://localhost:3000/api/products-condition/brand', {})
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log('錯誤:', err)
    })
    

  return (
    <>
      {/* <CompareModal /> */}
      {/*  <MobileFilterModal /> */}
      {/* <MobileSortModal /> */}
      {/* <MobileCatModal /> */}
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
                    <option value="">最新上架</option>
                    <option value="">價錢高至低</option>
                    <option value="">價錢低至高</option>
                  </select>
                  <select name="loca" id="">
                    <option value="">產地</option>
                    <option value="">最新上架</option>
                    <option value="">價錢高至低</option>
                    <option value="">價錢低至高</option>
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
              {/* 達人推薦 */}
              <div className="master-recommend">
                <div className="master-title">
                  達人推薦
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
    </>
  )
}

export default ProductList
