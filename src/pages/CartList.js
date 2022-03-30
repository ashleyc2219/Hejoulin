import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/CartList/CartList.scss'
import ProgressBar from '../compenents/Cart/ProgressBar'
import ListTableSake from '../compenents/Cart/ListTableSake'
import ListTableGift from '../compenents/Cart/ListTableGift'
import ListSelection from '../compenents/Cart/ListSelection'

const CartList = () => {
  const stepContent = ['購物車', '填寫資訊', '訂單成立']
  const [sakeIncart, setSakeIncart] = useState([])
  const [giftIncart, setGiftIncart] = useState([])
  const [sakeTotal, setSakeTotal] = useState(0)
  const [giftTotal, setGiftTotal] = useState(0)
  const [discountCode, setDiscountCode] = useState('no code')
  const [discountMsg, setDiscountMsg] = useState(0)
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
  const enter = (e) => {
    if (e.key === 'Enter') {
      fetchDiscountCode(discountCode)
    }
  }
  async function fetchDiscountCode(code) {
    let data = {
      discountCode: code,
    }
    const r1 = await fetch(`http://localhost:3001/api/cart-list/discount`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const obj = await r1.json()
    console.log(obj)
    console.log(discountCode)
    if (obj.length) {
      const result = obj[0]
      let perscentString = result.perscentString
      let msg = result.discount_info + ' ' + perscentString + '折'
      setDiscountMsg(msg)
    } else {
      setDiscountMsg('折扣碼無效')
    }
  }

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
                <ListSelection />
              </div>

              <div className="discount">
                <h5>折扣碼</h5>
                <div className="discount-container">
                  <div className="discount-input">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="輸入折扣碼"
                      onChange={(e) => {
                        setDiscountCode(e.target.value)
                      }}
                      onKeyPress={enter}
                    />
                    {discountMsg !== 0 ? (
                      <div className="form-text">{discountMsg}</div>
                    ) : (
                      <div className="form-text">預設狀態</div>
                    )}
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      fetchDiscountCode(discountCode)
                    }}
                  >
                    使用折扣碼
                  </button>
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
