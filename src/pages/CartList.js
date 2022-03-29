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
  const [sakeTotal, setSakeTotal] = useState(0)
  const [giftTotal, setGiftTotal] = useState(0)
  const member_id = 4
  useEffect(() => {
    let a = true
    window.scrollTo(0, 0)
    // fetch 清酒資料
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

      if (a) {
        setSakeIncart(obj)
      }
      function initialSakeTotal(obj) {
        let total = 0
        for (const sake of obj) {
          total += sake.cart_quantity * sake.pro_price
        }
        // console.log(total)
        return total
      }
      if (a) {
        setSakeTotal(initialSakeTotal(obj))
      }
    })()

    // fetch 禮盒資料
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
      // console.log('obj', obj)
      if (a) {
        setGiftIncart(obj)
      }
      function initialGiftTotal(obj) {
        let total = 0
        for (const gift of obj) {
          let price = 0
          if (gift.gift_id === 3) {
            price = gift.pro_one.pro_price + gift.pro_two.pro_price + 200
          }
          if (gift.gift_id === 2) {
            price = gift.pro_price + 200
          }
          if (gift.gift_id === 4) {
            price = gift.pro_price + 200 + 600
          }
          total += price
          // console.log(total)
        }
        return total
      }
      if (a) {
        setGiftTotal(initialGiftTotal(obj))
      }
    })()
    return () => {
      a = false
    }
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
            return (
              <ListTableSake
                key={i}
                index={i}
                sakeIncart={sakeIncart}
                setSakeIncart={setSakeIncart}
                sakeInfo={sake}
                member_id={member_id}
                sakeTotal={sakeTotal}
                setSakeTotal={setSakeTotal}
              />
            )
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
            return (
              <ListTableGift
                key={i}
                giftIncart={giftIncart}
                setGiftIncart={setGiftIncart}
                giftInfo={gift}
                member_id={member_id}
                giftTotal={giftTotal}
                setGiftTotal={setGiftTotal}
              />
            )
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
            {/* {console.log('list: ', sakeIncart)} */}
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
                  <option value="台北市" data-index="0">
                    台北市
                  </option>
                  <option value="基隆市" data-index="1">
                    基隆市
                  </option>
                  <option value="新北市" data-index="2">
                    新北市
                  </option>
                  <option value="宜蘭縣" data-index="3">
                    宜蘭縣
                  </option>
                  <option value="桃園市" data-index="4">
                    桃園市
                  </option>
                  <option value="新竹市" data-index="5">
                    新竹市
                  </option>
                  <option value="新竹縣" data-index="6">
                    新竹縣
                  </option>
                  <option value="苗栗縣" data-index="7">
                    苗栗縣
                  </option>
                  <option value="台中市" data-index="8">
                    台中市
                  </option>
                  <option value="彰化縣" data-index="9">
                    彰化縣
                  </option>
                  <option value="南投縣" data-index="10">
                    南投縣
                  </option>
                  <option value="嘉義市" data-index="11">
                    嘉義市
                  </option>
                  <option value="嘉義縣" data-index="12">
                    嘉義縣
                  </option>
                  <option value="雲林縣" data-index="13">
                    雲林縣
                  </option>
                  <option value="台南市" data-index="14">
                    台南市
                  </option>
                  <option value="高雄市" data-index="15">
                    高雄市
                  </option>
                  <option value="澎湖縣" data-index="16">
                    澎湖縣
                  </option>
                  <option value="金門縣" data-index="17">
                    金門縣
                  </option>
                  <option value="屏東縣" data-index="18">
                    屏東縣
                  </option>
                  <option value="台東縣" data-index="19">
                    台東縣
                  </option>
                  <option value="花蓮縣" data-index="20">
                    花蓮縣
                  </option>
                  <option value="連江縣" data-index="21">
                    連江縣
                  </option>
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
                    <p className="dollar-sign">{sakeTotal + giftTotal}</p>
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
                    <p className="dollar-sign total">{sakeTotal + giftTotal}</p>
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
