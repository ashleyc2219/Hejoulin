import React from 'react'
import '../styles/CartOrder/CartOrder.scss'
import ProgressBar from '../compenents/Cart/ProgressBar'
import OrderTableItem from '../compenents/Cart/OrderTableItem'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { useEffect } from 'react'
const CartOrder = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const stepContent = ['購物車', '填寫資訊', '訂單成立']
  return (
    <div className="CartOrder">
      <ProgressBar step="three" content={stepContent} />
      <div className="container">
        <div className="left-list">
          <div className="mobile-table-btn ">
            <span className="total">訂單總計: $ 5700</span>
          </div>
          <div className="list-table">
            <div className="table-head ">
              <span className="title-product">商品</span>
              <span className="title-quantity">數量</span>
              <span className="title-subtotal">小計</span>
            </div>
            <OrderTableItem mark="true" />
            <OrderTableItem mark="false" />
          </div>
          <div className="list-summary">
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
          <div className="mobile-table-btn ">
            <span className="product-count">&darr; 共4件商品</span>
          </div>
        </div>
        <div className="right-order">
          <div className="order-container">
            <img src="/CartList/orderBg.png" alt="" />
            <div className="order-title">
              <label className="form-label">訂單編碼 20220102001</label>
              <span>2022-01-02</span>
            </div>
            <div className="order-row">
              <div className="row-head">
                <p>購買人資訊</p>
              </div>
              <div className="row-data">
                <p>金城武</p>
                <p>0987382937</p>
                <p>kco9384@gmail.com</p>
              </div>
            </div>
            <hr />
            <div className="order-row">
              <div className="row-head">
                <p>收件人資訊</p>
              </div>
              <div className="row-data">
                <p>金城武</p>
                <p>0987382937</p>
                <p>kco9384@gmail.com</p>
              </div>
            </div>
            <hr />
            <div className="order-row">
              <div className="row-head">
                <p>貨運資訊</p>
              </div>
              <div className="row-data">
                <p>低溫宅配</p>
                <p>台北市大安區仁愛路4段29號1樓</p>
              </div>
            </div>
            <hr />
            <div className="order-row">
              <div className="row-head">
                <p>付款資訊</p>
              </div>
              <div className="row-data payment">
                <p>信用卡付款</p>
                <p>卡號末四碼 1689</p>
              </div>
            </div>
          </div>
          <Link to="/">
            <button className="btn btn-secondary">回首頁</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartOrder
