import React from 'react'
import { useEffect, useState } from 'react'

import '../styles/CartList/CartList.scss'
import { Link } from 'react-router-dom'
import ProgressBar from '../compenents/Cart/ProgressBar'
import ListTableSake from '../compenents/Cart/ListTableSake'
import ListTableGift from '../compenents/Cart/ListTableGift'

const CartList = () => {
  const stepContent = ['購物車', '填寫資訊', '訂單成立']
  const [sakeIncart, setSakeIncart] = useState([])
  const [giftIncart, setGiftIncart] = useState([])
  useEffect(() => {
    const member_id = 4
    ;(async () => {
      const r1 = await fetch(
        `http://localhost:3001/api/cart-list/sake?member_id=${member_id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      const obj = await r1.json()
      setSakeIncart(obj)
    })()
    ;(async () => {
      const rGift = await fetch(
        `http://localhost:3001/api/cart-list/gift?member_id=${member_id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      const obj = await rGift.json()
      setGiftIncart(obj)
    })()
  }, [])

  const renderSakeItems = (sakeIncart) => {
    if (sakeIncart.length) {
      return (
        <>
          <div className="table-head sake-table-head">
            <span className="title-del">刪除</span>
            <span className="title-product">商品</span>
            <span className="title-mark">客製化酒標</span>
            <span className="title-quantity">數量</span>
            <span className="title-subtotal">小計</span>
          </div>
          {sakeIncart.map((sake, i) => {
            return <ListTableSake key={i} sakeInfo={sake} />
          })}
        </>
      )
    } else {
      return ''
    }
  }
  const renderGiftItems = (giftIncart) => {
    if (giftIncart.length) {
      return (
        <>
          <div className="table-head gift-table-head">
            <span className="title-del">刪除</span>
            <span className="title-gift">禮盒</span>
            <span className="title-gift-detail">內容物</span>
            <span className="title-color">顏色</span>
            <span className="title-quantity">數量</span>
            <span className="title-subtotal">小計</span>
          </div>
          {giftIncart.map((gift, i) => {
            return <ListTableGift key={i} giftInfo={gift} />
          })}
        </>
      )
    } else {
      return ''
    }
  }

  return (
    <>
      <div className="CartList">
        <div className="CartList-container">
          <ProgressBar step="one" content={stepContent} />
          <div className="cart-list">
            {console.log('list: ', sakeIncart)}
            {renderSakeItems(sakeIncart)}

            {renderGiftItems(giftIncart)}
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
                <Link to="/product/list">
                  <button className="btn btn-primary">繼續購物</button>
                </Link>
                <Link to="/cart/info">
                  <button className="btn btn-secondary">結帳</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartList
