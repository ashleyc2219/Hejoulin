import { React, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../styles/CartOrder/CartOrder.scss'
import ProgressBar from '../compenents/Cart/ProgressBar'
import OrderTableGift from '../compenents/Cart/OrderTableGift'
import OrderTableSake from '../compenents/Cart/OrderTableSake'
import Spinner from '../compenents/Shared/Spinner'

import { CartSummary } from '../App'
const CartOrder = () => {
  let cartSummaryInfo = CartSummary._currentValue
  console.log('cartSummaryInfo', cartSummaryInfo.order_main_id)
  const [spin, setSpin] = useState(true)

  const [sakeInOrder, setSakeInOrder] = useState([])
  const [giftInOrder, setGiftInOrder] = useState([])
  const [orderInfo, setOrderInfo] = useState([])
  const order_id = cartSummaryInfo.order_main_id
    ? cartSummaryInfo.order_main_id
    : '20220110001'

  // 訂單編號 產生 訂單日期字串
  function genDate(order_id) {
    // console.log('order_id', order_id)
    // console.log('type', typeof order_id)
    order_id = order_id.toString()
    // console.log('type 2', typeof order_id)


    let year = order_id.slice(0, 4)
    let month = order_id.slice(4, 6)
    let date = order_id.slice(6, 8)
    let orderDate = year + '-' + month + '-' + date
    return orderDate
  }
  useEffect(() => {
    let a = true
    window.scrollTo(0, 0)
    // 清酒訂單
    ;(async () => {
      const r1 = await fetch(
        `http://localhost:3001/api/cart-order-confirm/order-sake?order_id=${order_id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      const obj = await r1.json()
      console.log('sake', obj)
      if (a) {
        setSakeInOrder(obj)
      }
    })()
    // 禮盒訂單
    ;(async () => {
      const r1 = await fetch(
        `http://localhost:3001/api/cart-order-confirm/order-gift?order_id=${order_id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      const obj = await r1.json()
      if (a) {
        setGiftInOrder(obj)
      }
    })()
    // 訂單資料
    ;(async () => {
      const r1 = await fetch(
        `http://localhost:3001/api/cart-order-confirm/order-info?order_id=${order_id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      const obj = await r1.json()
      console.log(obj)
      if (a) {
        setOrderInfo(obj[0])
      }
    })()
    setTimeout(() => {
      if (a) {
        setSpin(false)
      }
    }, 1000)
    return () => {
      a = false
    }
  }, [])
  const renderSakeItems = (sakeInOrder) => {
    if (sakeInOrder.length && sakeInOrder[0].pro_name !== null) {
      return sakeInOrder.map((sake, i) => {
        return <OrderTableSake key={i} sakeInfo={sake} />
      })
    } else {
      return ''
    }
  }
  const renderGiftItems = (giftIncart) => {
    // console.log(giftIncart.length)
    if (giftIncart.length && giftIncart[0].order_quantity !== null) {
      return giftIncart.map((gift, i) => {
        return <OrderTableGift key={i} giftInfo={gift} />
      })
    } else {
      return ''
    }
  }
  const stepContent = ['購物車', '填寫資訊', '訂單成立']
  return spin ? (
    <Spinner />
  ) : (
    <div className="CartOrder">
      <ProgressBar step="three" content={stepContent} />
      <div className="container">
        <div className="left-list">
          <div className="mobile-table-btn ">
            <span className="total">
              訂單總計: $ {cartSummaryInfo.allTotal}
            </span>
          </div>
          <div className="list-table">
            <div className="table-head ">
              <span className="title-product">商品</span>
              <span className="title-quantity">數量</span>
              <span className="title-subtotal">小計</span>
            </div>
            {renderSakeItems(sakeInOrder)}
            {renderGiftItems(giftInOrder)}
          </div>
          <div className="list-summary">
            <div className="table-row">
              <p>小計</p>
              <p className="dollar-sign">{cartSummaryInfo.subtotal}</p>
            </div>
            <div className="table-row">
              <p>折扣碼</p>
              <p>{cartSummaryInfo.discountCode}</p>
            </div>
            <div className="table-row">
              <p>運費</p>
              <p className="dollar-sign">{cartSummaryInfo.shipFee}</p>
            </div>

            <div className="table-row">
              <p>總計</p>
              <p className="dollar-sign total">{cartSummaryInfo.allTotal}</p>
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
              <label className="form-label">訂單編碼 {order_id}</label>
              <span>{genDate(order_id)}</span>
            </div>
            <div className="order-row">
              <div className="row-head">
                <p>購買人資訊</p>
              </div>
              <div className="row-data">
                <p>{orderInfo.order_name}</p>
                <p>{orderInfo.order_mobile}</p>
                <p>{orderInfo.order_email}</p>
              </div>
            </div>
            <hr />
            <div className="order-row">
              <div className="row-head">
                <p>收件人資訊</p>
              </div>
              <div className="row-data">
                <p>{orderInfo.receiver}</p>
                <p>{orderInfo.receiver_mobile}</p>
              </div>
            </div>
            <hr />
            <div className="order-row">
              <div className="row-head">
                <p>貨運資訊</p>
              </div>
              <div className="row-data">
                <p>
                  {orderInfo.shipment_method === 'delivery'
                    ? '低溫宅配'
                    : '門市取貨'}
                </p>
                <p>
                  {orderInfo.shipment_address === null
                    ? orderInfo.store_address
                    : orderInfo.shipment_address}
                </p>
              </div>
            </div>
            <hr />
            <div className="order-row">
              <div className="row-head">
                <p>付款資訊</p>
              </div>
              <div className="row-data payment">
                <p>信用卡付款</p>
                <p>卡號末四碼 {orderInfo.card_num}</p>
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
