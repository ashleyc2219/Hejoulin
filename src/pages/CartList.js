import React from 'react'

import '../styles/CartList/CartList.scss'
import { Link } from 'react-router-dom'
import ProgressBar from '../compenents/Cart/ProgressBar'

const CartList = () => {
  return (
    <>
      <div className="CartList">
        <div className="container">
          <ProgressBar step="one" />
          <div className="cart-list">
            <div className="table-head sake-table-head">
              <span className="title-del">刪除</span>
              <span className="title-product">商品</span>
              <span className="title-mark">客製化酒標</span>
              <span className="title-quantity">數量</span>
              <span className="title-subtotal">小計</span>
            </div>
            <div className="table-item sake-table-item">
              <div className="item item-del">
                <img src="/CartList/trash.png" alt="" />
              </div>
              <div className="item item-product-img">
                <img src="/CartList/M0023.png" alt="" />
              </div>
              <div className="item item-product-info">
                <h5>篠峯 雄町純米大吟釀</h5>
                <p>720</p>
                <p>1880</p>
                <Link to="/gift" className="true">
                  製作禮盒
                </Link>
              </div>
              <div className="item item-mark">
                <img src="/CartList/fakeMark.png" alt="" />
              </div>
              <div className="item item-quantity">
                <div className="quantity-container">
                  <img src="/CartList/plus-circle.svg" alt="" />
                  <p>1</p>
                  <img src="/CartList/minus-circle.svg" alt="" />
                </div>
              </div>
              <div className="item item-subtotal">
                <p>1880</p>
              </div>
            </div>
            <div className="table-head gift-table-head">
              <span className="title-del">刪除</span>
              <span className="title-gift">禮盒</span>
              <span className="title-gift-detail">內容物</span>
              <span className="title-color">顏色</span>
              <span className="title-quantity">數量</span>
              <span className="title-subtotal">小計</span>
            </div>
            <div className="table-item gift-table-item">
              <div className="item item-del">
                <img src="/CartList/trash.png" alt="" />
              </div>
              <div className="item item-gift-img">
                <img src="/CartList/fakeGift.png" alt="" />
                <p>1+1 禮盒</p>
              </div>
              <div className="item item-gift-detail">
                <h5>篠峯 雄町純米大吟釀</h5>
                <p>720</p>
                <h5>津輕金箔玻璃清酒杯</h5>
              </div>
              <div className="item item-color">
                <p>黑色</p>
              </div>
              <div className="item item-quantity">
                <div className="quantity-container">
                  <img src="/CartList/plus-circle.svg" alt="" />
                  <p>1</p>
                  <img src="/CartList/minus-circle.svg" alt="" />
                </div>
              </div>
              <div className="item item-subtotal">
                <p>1880</p>
              </div>
            </div>
            <hr></hr>
          </div>
          <div className="cart-form">
            <div className="form-left">
              <div className="shipment">
                <h5>貨運資訊</h5>
                <label className="form-label">收件地點</label>
                <select className="decorated district" name="district" required>
                  <option value="main">台灣 (本島地區)</option>
                  <option value="outer">台灣 (外島地區)</option>
                </select>

                <select className="decorated city" name="city" required>
                  <option value="main">台北市</option>
                  <option value="outer">新北市</option>
                </select>

                <label className="form-label">運送方式</label>
                <select className="decorated method" name="method" required>
                  <option value="delivery">低溫宅配</option>
                  <option value="pick">門市自取</option>
                </select>
              </div>

              <div className="discount">
                <h5>折扣碼</h5>
                <div className="discount-container">
                  <div className="discount-input">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="輸入折扣碼"
                    />
                    <div className="form-text">錯誤/提示訊息</div>
                  </div>
                  <button className="btn btn-primary">使用折扣碼</button>
                </div>
              </div>
            </div>
            <div className="form-right">
              <div className="order-summary">
                <h5>訂單資訊</h5>
                <div className="order-summary-table">
                  <div className="table-row">
                    <p>小計</p>
                    <p className="dollar-sign">5640</p>
                  </div>
                  <div className="table-row">
                    <p>運費</p>
                    <p className="dollar-sign">60</p>
                  </div>
                  <div className="table-row">
                    <p>折扣碼</p>
                    <p>DiscountCode</p>
                  </div>
                  <div className="table-row">
                    <p>總計</p>
                    <p className="dollar-sign total">5700</p>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button className="btn btn-primary">繼續購物</button>
                <button className="btn btn-secondary">結帳</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartList
