import { React, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../styles/SubCartOrder/SubCartOrder.scss'
import ProgressBar from '../compenents/Cart/ProgressBar'
import SubOrderCard from '../compenents/Sub/SubCartOrderCard'
import Spinner from '../compenents/Shared/Spinner'
import { orderInfoGet } from './../compenents/SubCartFetch/SubCartOrderFetch'
const SubCartOrder = () => {
  const [spin, setSpin] = useState(true)

  const [orderInfo, setOrderInfo] = useState([])
  const [allSubInfo, setAllSubInfo] = useState([])
  // console.log(cartSummaryInfo.order_main_id)
  let order_main_id = localStorage.getItem('sub_order_main_id')
  const order_id = order_main_id ? order_main_id : '20220406004'

  // 訂單編號 產生 訂單日期字串
  function genDate(order_id) {
    let year = order_id.slice(0, 4)
    let month = order_id.slice(4, 6)
    let date = order_id.slice(6, 8)
    let orderDate = year + '-' + month + '-' + date
    return orderDate
  }
  useEffect(() => {
    let a = true
    window.scrollTo(0, 0)
    ;(async function fetchGet(params) {
      let [order_info, all_sub_info] = await orderInfoGet(order_id)
      if (a) {
        setOrderInfo(order_info)
        setAllSubInfo(all_sub_info)
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
  const renderSubItems = (allSubInfo) => {
    if (allSubInfo.length) {
      return allSubInfo.map((sub, i) => {
        return <SubOrderCard key={i} subInfo={sub} />
      })
    } else {
      return ''
    }
  }

  const stepContent = ['確認方案', '填寫資訊', '訂單成立']
  return spin ? (
    <Spinner />
  ) : (
    <div className="SubCartOrder">
      <ProgressBar step="three" content={stepContent} />
      <div className="container">
        <div className="left-list">
          <div className="mobile-table-btn ">
            <span className="total">
              訂單總計: $ {'cartSummaryInfo.allTotal'}
            </span>
          </div>
          <div className="list-table">
            <div className="table-head ">
              <span className="title-product">商品</span>
              <span className="title-quantity">數量</span>
              <span className="title-subtotal">小計</span>
            </div>
            {renderSubItems(allSubInfo)}
          </div>
          <div className="list-summary">
            <div className="table-row">
              <p>小計</p>
              <p className="dollar-sign">{orderInfo.order_d_price}</p>
            </div>

            <div className="table-row">
              <p>運費</p>
              <p className="dollar-sign">{orderInfo.ship_fee}</p>
            </div>

            <div className="table-row">
              <p>總計</p>
              <p className="dollar-sign total">{orderInfo.order_d_price}</p>
            </div>
          </div>
          {/* <div className="mobile-table-btn ">
            <span className="product-count">&darr; 共4件商品</span>
          </div> */}
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
                <p>{orderInfo.shipment_address}</p>
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

export default SubCartOrder
