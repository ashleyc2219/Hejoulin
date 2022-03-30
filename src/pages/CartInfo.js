import React from 'react'
import ProgressBar from '../compenents/Cart/ProgressBar'
import '../styles/CartInfo/CartInfo.scss'
import InfoTableSake from '../compenents/Cart/InfoTableSake'
import InfoTableGift from '../compenents/Cart/InfoTableGift'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import smoothscroll from 'smoothscroll-polyfill'
import { CartSummary } from './../App'

const CartInfo = () => {
  const stepContent = ['購物車', '填寫資訊', '訂單成立']
  console.log(CartSummary._currentValue)
  let cartSummaryInfo = CartSummary._currentValue
  // TODO: 可能要換狀態名稱，不然會跟CartList相撞
  const [sakeIncart, setSakeIncart] = useState([])
  const [giftIncart, setGiftIncart] = useState([])
  const [collapseClass, setCollapseClass] = useState('')

  useEffect(() => {
    let a = true
    window.scrollTo(0, 0)
    const member_id = 4
    let cartLength = 0
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
      cartLength += obj.length
      // console.log('obj.length', obj.length)

      if (a) {
        setSakeIncart(obj)
      }
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
      cartLength += obj.length
      // console.log(cartLength)
      if (a) {
        cartListAppearance(cartLength)
      }
      function cartListAppearance(cartLength) {
        if (cartLength === 1) {
          setCollapseClass('list-table one')
          console.log('one', cartLength)
        }
        if (cartLength === 2) {
          setCollapseClass('list-table two')
          console.log('two', cartLength)
        }
        if (cartLength > 2) {
          setCollapseClass('list-table morethantwo')
        }
      }

      if (a) {
        setGiftIncart(obj)
      }
    })()
    return () => {
      a = false
    }
  }, [])
  const renderSakeItems = (sakeIncart) => {
    if (sakeIncart.length) {
      return sakeIncart.map((sake, i) => {
        return <InfoTableSake key={i} sakeInfo={sake} />
      })
    } else {
      return ''
    }
  }
  const renderGiftItems = (giftIncart) => {
    if (giftIncart.length) {
      return giftIncart.map((gift, i) => {
        return <InfoTableGift key={i} giftInfo={gift} />
      })
    } else {
      return ''
    }
  }
  function openCloseHandler() {
    if (collapseClass == 'list-table morethantwo') {
      setCollapseClass('list-table')
    }
    if (collapseClass == 'list-table') {
      setCollapseClass('list-table morethantwo')

      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }
  return (
    <div className="CartInfo">
      <ProgressBar step="two" content={stepContent} />
      <div className="container">
        <div className="left-list">
          <div className="mobile-table-btn ">
            <span className="total">訂單總計: $ 5700</span>
          </div>
          <div className={collapseClass}>
            <div className="table-head">
              <span className="title-product">商品</span>
              <span className="title-subtotal">小計</span>
            </div>
            {renderSakeItems(sakeIncart)}
            {renderGiftItems(giftIncart)}
          </div>
          <div className="list-summary">
            {collapseClass === 'list-table morethantwo' ||
            collapseClass === 'list-table' ? (
              <div className="collapse-btn" onClick={openCloseHandler}>
                {collapseClass === 'list-table morethantwo' ? (
                  <>&darr; 展開</>
                ) : (
                  <>&uarr; 收起</>
                )}
              </div>
            ) : (
              ''
            )}
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
        <div className="right-info">
          <div className="buyer">
            <div className="info-title buyer-title">
              <h5>購買人資訊</h5>
              <div>
                <input type="checkbox" id="c1" name="cc" />
                <label htmlFor="c1">
                  <span></span>與會員資料相同
                </label>
              </div>
            </div>
            <div className="buyer-name-mobile">
              <div className="buyer-name">
                <label className="form-label">購買人姓名</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="真實姓名"
                />
                <div className="form-text">錯誤/提示訊息</div>
              </div>
              <div className="buyer-mobile">
                <label className="form-label">手機號碼</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="0912-345678"
                />
                <div className="form-text">錯誤/提示訊息</div>
              </div>
            </div>
            <div className="buyer-email-check">
              <div className="buyer-email">
                <label className="form-label">電子信箱</label>
                <input type="text" className="form-control" />
                <div className="form-text">錯誤/提示訊息</div>
              </div>
              <div className="sub-check">
                <input type="checkbox" id="c5" name="cc" />
                <label htmlFor="c5">
                  <span></span> 訂閱優惠月報
                </label>
              </div>
            </div>
          </div>
          <hr />
          <div className="receiver">
            <div className="info-title receiver-title">
              <h5>收件人資訊</h5>
              <div>
                <input type="checkbox" id="c2" name="cc" />
                <label htmlFor="c2">
                  <span></span>與購買人資料相同
                </label>
              </div>
            </div>
            <div className="receiver-name-mobile">
              <div className="receiver-name">
                <label className="form-label">收件人姓名</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="真實姓名"
                />
                <div className="form-text">錯誤/提示訊息</div>
              </div>
              <div className="receiver-mobile">
                <label className="form-label">手機號碼</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="0912-345678"
                />
                <div className="form-text">錯誤/提示訊息</div>
              </div>
            </div>
            <div className="receiver-address">
              <div className="address-row">
                <select className="decorated" name="country" disabled>
                  <option value="taiwan">台灣</option>
                </select>
                <select className="decorated" name="city" disabled>
                  <option value="taipei">{cartSummaryInfo.district}</option>
                </select>
                <div className="district-code">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="郵遞區號"
                  />
                  <div className="form-text">錯誤/提示訊息</div>
                </div>
              </div>
              <div className="full-address">
                <input
                  type="text"
                  className="form-control"
                  placeholder="仁愛路4段29號1樓"
                />
                <div className="form-text">錯誤/提示訊息</div>
              </div>
            </div>
          </div>
          <hr />
          <div className="credit-card">
            <div className="info-title">
              <h5>信用卡資訊</h5>
            </div>

            <div className="credit-card-container">
              <div className="credit-card-img">
                <img src="/CartList/card.svg" alt="" />
              </div>
              <div className="card-info">
                <div className="card-num">
                  <label className="form-label">信用卡卡號</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0000 0000 0000 0000"
                  />
                  <div className="form-text">錯誤/提示訊息</div>
                </div>
                <div className="date-code-container">
                  <div className="expire-date">
                    <label className="form-label">有效年月</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="MM/YY"
                    />
                    <div className="form-text">錯誤/提示訊息</div>
                  </div>
                  <div className="security-code">
                    <label className="form-label">安全碼</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="000"
                    />
                    <div className="form-text">錯誤/提示訊息</div>
                  </div>
                </div>
                <div className="card-name">
                  <label className="form-label">持卡人姓名</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Kaneshiro Takeshi"
                  />
                  <div className="form-text">錯誤/提示訊息</div>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <Link to="/cart/list">
              <button className="btn btn-primary">上一步</button>
            </Link>
            <Link to="/cart/order">
              <button className="btn btn-secondary">確認付款</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartInfo
