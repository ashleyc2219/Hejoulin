import React from 'react'
import Sidebar from '../compenents/Member/Sidebar'
import '../styles/Member/MemberFav.scss'

const MemberFav = () => {
  return (
    <>
      <div className="MemberFav">
        <Sidebar />
        <div className="MemberFavBox">
          <div className="container">
            <div className="MemberFavBar">
              <img
                className="search-icon-fav"
                src="/ProductList/search.svg"
                alt=""
              />
              <div className="MemberFavBar-right">
                <div className="countItemsTotal">收藏商品8</div>
                <select className="decorated ItemsSort" name="drinks" required>
                  <option value="" disabled selected hidden>
                    商品排序
                  </option>
                  <option value="coffee">Coffee</option>
                  <option value="tea">Tea</option>
                  <option value="milk">Milk</option>
                </select>
              </div>
            </div>
            <div className="MobileMemberFavBar">
              <div className="MemberFavBar-left">
                <div className="countItemsTotal">收藏商品8</div>
                <img
                  className="search-icon-fav"
                  src="/ProductList/search.svg"
                  alt=""
                />
              </div>
              <div className="MemberFavBar-right">
                <select className="decorated ItemsSort" name="drinks" required>
                  <option value="" disabled selected hidden>
                    商品排序
                  </option>
                  <option value="coffee">Coffee</option>
                  <option value="tea">Tea</option>
                  <option value="milk">Milk</option>
                </select>
              </div>
            </div>
            <div className="MemberFavItems">
              <table>
                <tr>
                  <div className="product-list">
                    <div className="product-title"></div>
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
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberFav
