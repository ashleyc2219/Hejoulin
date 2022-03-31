import React from 'react'
import { Link } from 'react-router-dom'

// 驗證電話號碼套件
import Input from 'react-phone-number-input/input'
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from 'react-phone-number-input'
// 驗證電子信箱
import validator from 'validator'

import ProgressBar from '../compenents/Cart/ProgressBar'
import '../styles/CartInfo/CartInfo.scss'
import InfoTableSake from '../compenents/Cart/InfoTableSake'
import InfoTableGift from '../compenents/Cart/InfoTableGift'
import InfoCreditCard from '../compenents/Cart/InfoCreditCard'
import { useEffect, useState } from 'react'
import { CartSummary } from './../App'
// 信用卡
import { HunelProvider, HunelCreditCard } from 'reactjs-credit-card'
const hunel = new HunelCreditCard()

const CartInfo = () => {
  const stepContent = ['購物車', '填寫資訊', '訂單成立']
  // console.log(CartSummary._currentValue)
  let cartSummaryInfo = CartSummary._currentValue
  // TODO: 可能要換狀態名稱，不然會跟CartList相撞
  // 接清酒跟禮盒的資料
  const [sakeIncart, setSakeIncart] = useState([])
  const [giftIncart, setGiftIncart] = useState([])
  // 左邊清單的收合
  const [collapseClass, setCollapseClass] = useState('')
  // 表單資料 接資料
  const [buyerName, setBuyerName] = useState('')
  const [buyerMobile, setBuyerMobile] = useState('')
  const [buyerEmail, setBuyerEmail] = useState('')
  const [receiverName, setReceiverName] = useState('')
  const [receiverMobile, setReceiverMobile] = useState('')
  const [receiverAddress, setReceiverAddress] = useState('')
  // 信用卡資料
  const [cardNum, setCardNum] = useState('')
  const [cardHolder, setCardHolder] = useState('')
  const [cardMonth, setCardMonth] = useState('')
  const [cardYear, setCardYear] = useState('')
  const [cardCvv, setCardCvv] = useState('')
  const [numberValid, setNumberValid] = useState(true)

  // 表單檢查 讓輸入框變紅色
  const [passBuyerName, setPassBuyerName] = useState(true)
  const [passBuyerMobile, setPassBuyerMobile] = useState(false)
  const [passBuyerEmail, setPassBuyerEmail] = useState(false)
  const [passReceiverName, setPassReceiverName] = useState(false)
  const [passReceiverMobile, setPassReceiverMobile] = useState(false)
  const [passReceiverAddress, setPassReceiverAddress] = useState(false)
  const [passCardNum, setPassCardNum] = useState('default')
  const [passCardHolder, setPassCardHolder] = useState('default')
  const [passCardCvv, setPassCardCvv] = useState('default')

  // 電話驗證
  const [value, setValue] = useState()

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
  // 取得表單資料
  function formCheck() {
    let data = {
      buyerName: buyerName,
      buyerMobile: buyerMobile,
      buyerEmail: buyerEmail,
      receiverName: receiverName,
      receiverMobile: receiverMobile,
      receiverAddress: receiverAddress,
      cardNum: cardNum,
    }

    console.log('data', data)
    // 驗證 表單資料
    // 購買人
    buyerName.length >= 2 ? setPassBuyerName(true) : setPassBuyerName(false)
    if (buyerMobile && isValidPhoneNumber(buyerMobile)) {
      setPassBuyerMobile(true)
    } else {
      setPassBuyerMobile(false)
    }
    validator.isEmail(buyerEmail)
      ? setPassBuyerEmail(true)
      : setPassBuyerEmail(false)
    // 收件人
    receiverName.length >= 2
      ? setPassReceiverName(true)
      : setPassReceiverName(false)

    if (receiverMobile && isValidPhoneNumber(receiverMobile)) {
      setPassReceiverMobile(true)
    } else {
      setPassReceiverMobile(false)
    }
    receiverAddress.length >= 10
      ? setPassReceiverAddress(true)
      : setPassReceiverAddress(false)
    // 信用卡資訊
    // 用元件內的套件檢查 會更新numberValid，再用numberValid做確認
    numberValid === true ? setPassCardNum(true) : setPassCardNum(false)
    cardHolder.length >= 3 ? setPassCardHolder(true) : setPassCardHolder(false)
    cardCvv.length === 3 ? setPassCardCvv(true) : setPassCardCvv(false)

    let pass = {
      passBuyerName: passBuyerName,
      passBuyerMobile: passBuyerMobile,
      passBuyerEmail: passBuyerEmail,
      passReceiverName: passReceiverName,
      passReceiverMobile: passReceiverMobile,
      passReceiverAddress: passReceiverAddress,
      // TODO: 信用卡資訊
    }
    console.log('pass', pass)
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
                  className={
                    passBuyerName ? 'form-control' : 'form-control red'
                  }
                  placeholder="真實姓名"
                  value={buyerName}
                  onChange={(e) => {
                    setBuyerName(e.target.value)
                  }}
                />
                <div className="form-text">錯誤/提示訊息</div>
              </div>
              <div className="buyer-mobile">
                <label className="form-label">手機號碼</label>
                <Input
                  international
                  className={
                    passBuyerMobile ? 'form-control' : 'form-control red'
                  }
                  placeholder="0912 345 678"
                  country="TW"
                  value={buyerMobile}
                  onChange={setBuyerMobile}
                />
                <div className="form-text">錯誤/提示訊息</div>
              </div>
            </div>
            <div className="buyer-email-check">
              <div className="buyer-email">
                <label className="form-label">電子信箱</label>
                <input
                  type="text"
                  className={
                    passBuyerEmail ? 'form-control' : 'form-control red'
                  }
                  value={buyerEmail}
                  onChange={(e) => {
                    setBuyerEmail(e.target.value)
                  }}
                />
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
                  className={
                    passReceiverName ? 'form-control' : 'form-control red'
                  }
                  placeholder="真實姓名"
                  value={receiverName}
                  onChange={(e) => {
                    setReceiverName(e.target.value)
                  }}
                />
                <div className="form-text">錯誤/提示訊息</div>
              </div>
              <div className="receiver-mobile">
                <label className="form-label">手機號碼</label>
                <Input
                  international
                  className={
                    passReceiverMobile ? 'form-control' : 'form-control red'
                  }
                  placeholder="0912 345 678"
                  country="TW"
                  value={receiverMobile}
                  onChange={setReceiverMobile}
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
                  className={
                    passReceiverAddress ? 'form-control' : 'form-control red'
                  }
                  placeholder="仁愛路4段29號1樓"
                  value={receiverAddress}
                  onChange={(e) => {
                    setReceiverAddress(e.target.value)
                  }}
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
            <HunelProvider config={hunel}>
              <InfoCreditCard
                cardNum={cardNum}
                setCardNum={setCardNum}
                setNumberValid={setNumberValid}
                passCardNum={passCardNum}
                passCardHolder={passCardHolder}
                passCardCvv={passCardCvv}
                cardHolder={cardHolder}
                cardMonth={cardMonth}
                cardYear={cardYear}
                setCardHolder={setCardHolder}
                setCardMonth={setCardMonth}
                setCardYear={setCardYear}
                setCardCvv={setCardCvv}
              />
            </HunelProvider>
          </div>
          <div className="buttons">
            <Link to="/cart/list">
              <button className="btn btn-primary">上一步</button>
            </Link>
            {/* <Link to="/cart/order">
              <button className="btn btn-secondary">確認付款</button>
            </Link> */}

            <button className="btn btn-secondary" onClick={formCheck}>
              確認付款
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartInfo
