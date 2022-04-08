import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// 驗證電子信箱 電話號碼套件
import validator from 'validator'

import ProgressBar from '../compenents/Cart/ProgressBar'
import '../styles/CartInfo/CartInfo.scss'
import InfoTableSake from '../compenents/Cart/InfoTableSake'
import InfoTableGift from '../compenents/Cart/InfoTableGift'
import InfoCreditCard from '../compenents/Cart/InfoCreditCard'
import Spinner from '../compenents/Shared/Spinner'
import FetchMemberId from '../compenents/Member/FetchMemberId'

import { districtsData } from './../data/districts'

import { CartSummary } from './../App'
// 信用卡
import { HunelProvider, HunelCreditCard } from 'reactjs-credit-card'
import {
  memberInfoGet,
  orderMainInsert,
  orderSakeMarkInsert,
  orderGiftGdInsert,
  cartSakeMarkDelete,
  cartGiftGdDelete,
  shipmentInsert,
  paymentInsert,
} from '../compenents/CartFetch/CartListFetch'
const hunel = new HunelCreditCard()

const CartInfo = (props) => {
  const { setCartVerifyInfo, setCartSummary } = props
  const [spin, setSpin] = useState(true)

  const stepContent = ['購物車', '填寫資訊', '訂單成立']
  // cartList 傳過來的資料
  let cartSummaryInfo = CartSummary._currentValue
  let cartSummaryInfoDistrict = cartSummaryInfo.district
    ? cartSummaryInfo.district
    : '台北市'

  // TODO: 可能要換狀態名稱，不然會跟CartList相撞
  // 接清酒跟禮盒的資料
  const [sakeIncart, setSakeIncart] = useState([])
  const [giftIncart, setGiftIncart] = useState([])
  const [memberInfo, setMemberInfo] = useState([])
  // 左邊清單的收合
  const [collapseClass, setCollapseClass] = useState('')
  // 表單資料 接資料
  const [buyerName, setBuyerName] = useState('')
  const [buyerMobile, setBuyerMobile] = useState('')
  const [buyerEmail, setBuyerEmail] = useState('')
  const [receiverName, setReceiverName] = useState('')
  const [receiverMobile, setReceiverMobile] = useState('')
  const [receiverAddress, setReceiverAddress] = useState('')
  const [receiverDistrict, setReceiverDistrict] = useState(-1)
  // 信用卡資料
  const [cardNum, setCardNum] = useState('')
  const [cardHolder, setCardHolder] = useState('')
  const [cardMonth, setCardMonth] = useState('')
  const [cardYear, setCardYear] = useState('')
  const [cardCvv, setCardCvv] = useState('')
  const [numberValid, setNumberValid] = useState(false)

  // 表單檢查 讓輸入框變紅色
  const [passBuyerName, setPassBuyerName] = useState('defualt')
  const [passBuyerMobile, setPassBuyerMobile] = useState('defualt')
  const [passBuyerEmail, setPassBuyerEmail] = useState('defualt')
  const [passReceiverName, setPassReceiverName] = useState('defualt')
  const [passReceiverMobile, setPassReceiverMobile] = useState('defualt')
  const [passReceiverAddress, setPassReceiverAddress] = useState('defualt')
  const [passReceiverDistrict, setPassReceiverDistrict] = useState(false)
  const [passCardNum, setPassCardNum] = useState(false)
  const [passCardHolder, setPassCardHolder] = useState('default')
  const [passCardCvv, setPassCardCvv] = useState('default')
  const [passThrough, setPassThrough] = useState(false)
  // 讓border變紅色
  const [warning, setWarning] = useState('no')
  // 自動填寫
  const [autoBuyer, setAutoBuyer] = useState(false)
  const [autoReceiver, setAutoReceiver] = useState(false)
  const [memberId, setMemberId] = useState('')

  // TODO: store_id 要在做門市元件後換
  const store_id = ''

  useEffect(() => {
    ;(async () => {
      let member_id = await FetchMemberId(localStorage.getItem('token'))
      setMemberId(member_id)
      console.log('member_id: ', member_id)
    })()
  }, [])
  useEffect(() => {
    let a = true
    window.scrollTo(0, 0)
    let cartLength = 0
    ;(async () => {
      const r1 = await fetch(
        `http://localhost:3001/api/cart-list/sake?member_id=${memberId}`,
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
        `http://localhost:3001/api/cart-list/gift?member_id=${memberId}`,
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
      let memberInfoObj = await memberInfoGet(memberId)
      console.log(memberInfoObj)
      if (a) {
        setGiftIncart(obj)
        setMemberInfo(memberInfoObj)
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
  }, [memberId])
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
    if (collapseClass === 'list-table morethantwo') {
      setCollapseClass('list-table')
    }
    if (collapseClass === 'list-table') {
      setCollapseClass('list-table morethantwo')

      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }
  // 取得表單資料 後簡禪表單資料
  function formCheck() {
    // 驗證 表單資料
    // 購買人
    if (buyerName.length >= 2) {
      setPassBuyerName(true)
    } else {
      setPassBuyerName(false)
      setPassThrough(false)
    }

    if (buyerMobile && validator.isMobilePhone(buyerMobile, 'zh-TW')) {
      setPassBuyerMobile(true)
    } else {
      setPassBuyerMobile(false)
      setPassThrough(false)
    }
    if (validator.isEmail(buyerEmail)) {
      setPassBuyerEmail(true)
    } else {
      setPassBuyerEmail(false)
      setPassThrough(false)
    }
    // 收件人
    if (receiverName.length >= 2) {
      setPassReceiverName(true)
    } else {
      setPassReceiverName(false)
      setPassThrough(false)
    }
    if (receiverMobile && validator.isMobilePhone(receiverMobile, 'zh-TW')) {
      setPassReceiverMobile(true)
    } else {
      setPassReceiverMobile(false)
      setPassThrough(false)
    }
    if (receiverAddress.length >= 10) {
      setPassReceiverAddress(true)
    } else {
      setPassReceiverAddress(false)
      setPassThrough(false)
    }
    if (receiverDistrict !== -1) {
      setPassReceiverDistrict(true)
    } else {
      setPassReceiverDistrict(false)
      setPassThrough(false)
    }
    // 信用卡資訊
    // 用元件內的套件檢查 會更新numberValid，再用numberValid做確認
    if (numberValid === true) {
      setPassCardNum(true)
    } else {
      setPassCardNum(false)
      setPassThrough(false)
    }
    if (cardHolder.length >= 3) {
      setPassCardHolder(true)
    } else {
      setPassCardHolder(false)
      setPassThrough(false)
    }
    if (cardCvv.length === 3) {
      setPassCardCvv(true)
    } else {
      setPassCardCvv(false)
      setPassThrough(false)
    }

    let pass = {
      passBuyerName: passBuyerName,
      passBuyerMobile: passBuyerMobile,
      passBuyerEmail: passBuyerEmail,
      passReceiverName: passReceiverName,
      passReceiverMobile: passReceiverMobile,
      passReceiverAddress: passReceiverAddress,
      passCardNum: passCardNum,
      passCardHolder: passCardHolder,
      passCardCvv: passCardCvv,
    }
    if (
      buyerName &&
      buyerMobile &&
      buyerEmail &&
      receiverName &&
      receiverMobile &&
      receiverAddress &&
      cardNum &&
      cardHolder &&
      cardCvv
    ) {
      setPassThrough(true)
    }
  }
  useEffect(() => {
    formCheck()
  }, [
    buyerName,
    buyerMobile,
    buyerEmail,
    receiverName,
    receiverMobile,
    receiverAddress,
    cardNum,
    cardHolder,
    cardCvv,
  ])
  useEffect(() => {
    if (autoBuyer) {
      setBuyerName(memberInfo.member_name)
      setBuyerMobile(memberInfo.member_mob)
      setBuyerEmail(memberInfo.user_account)
    } else {
      setBuyerName('')
      setBuyerMobile('')
      setBuyerEmail('')
    }
  }, [autoBuyer])
  useEffect(() => {
    if (autoReceiver) {
      setReceiverName(buyerName)
      setReceiverMobile(buyerMobile)
    } else {
      setReceiverName('')
      setReceiverMobile('')
    }
  }, [autoReceiver])

  async function forCartVerifyInfo() {
    let cardNumTidy = cardNum
    cardNumTidy = cardNumTidy.slice(-4)
    let data = {
      cardNum: cardNumTidy,
      total: cartSummaryInfo.allTotal,
      email_account: buyerEmail,
    }
    setCartVerifyInfo(data)
  }
  async function fectOutData() {
    let data = {
      buyerName: buyerName,
      buyerMobile: buyerMobile,
      buyerEmail: buyerEmail,
      receiverName: receiverName,
      receiverMobile: receiverMobile,
      receiverAddress: receiverAddress,
      cardNum: cardNum,
    }

    console.log(data)
    // 將手機號碼 +886轉成 0
    let buyerMobileTidy = buyerMobile
    if (buyerMobileTidy.includes('+886')) {
      buyerMobileTidy = buyerMobileTidy.replace(/\+886/, 0)
    }
    // insert order_main訂單資料 回傳的order_main_id要給之後的訂單明細用
    let [orderMainResult, order_main_id] = await orderMainInsert(
      memberId,
      buyerName,
      buyerMobileTidy,
      buyerEmail,
      cartSummaryInfo.discountCode
    )

    // insert sake mark訂單資料
    let orderSakeMarkResult = await orderSakeMarkInsert(
      memberId,
      order_main_id
    )
    // insert 禮盒 禮盒明細訂單資料
    let orderGiftResult = await orderGiftGdInsert(memberId, order_main_id)
    let cartSakeMarkDelResult = await cartSakeMarkDelete(memberId)
    let cartGiftGdDelResult = await cartGiftGdDelete(memberId)

    // 整理地址加上市、區
    let receiverAddressTidy = receiverAddress
    receiverAddressTidy =
      cartSummaryInfoDistrict + receiverDistrict + receiverAddressTidy
    let receiverMobileTidy = receiverMobile
    if (receiverMobileTidy.includes('+886')) {
      receiverMobileTidy = receiverMobileTidy.replace(/\+886/, 0)
    }
    let shipmentResult = await shipmentInsert(
      order_main_id,
      cartSummaryInfo.method,
      store_id,
      receiverName,
      receiverMobileTidy,
      receiverAddressTidy,
      'shipment_note'
    )
    let cardNumTidy = cardNum
    cardNumTidy = cardNumTidy.slice(-4)
    // 設定order_main_id 到useContext 給後面的步驟用
    cartSummaryInfo['order_main_id'] = order_main_id
    cartSummaryInfo['cardNum'] = cardNumTidy
    setCartSummary(cartSummaryInfo)
    let paymentResult = await paymentInsert(order_main_id, cardNumTidy)
    console.log(
      'orderMainResult: ',
      orderMainResult,
      'order_main_id: ',
      order_main_id
    )
    console.log('orderSakeMarkResult: ', orderSakeMarkResult)
    console.log('orderGiftResult: ', orderGiftResult)
    console.log('cartSakeMarkDelResult: ', cartSakeMarkDelResult)
    console.log('cartGiftGdDelResult: ', cartGiftGdDelResult)
    console.log('shipmentResult: ', shipmentResult)
    console.log('paymentResult: ', paymentResult)
  }

  return spin ? (
    <Spinner />
  ) : (
    <div className="CartInfo">
      <ProgressBar step="two" content={stepContent} />
      <div className="container">
        <div className="left-list">
          <div className="mobile-table-btn ">
            <span className="total">
              訂單總計: $ {cartSummaryInfo.allTotal}
            </span>
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
                <input
                  type="checkbox"
                  id="sameMember"
                  name="sameMember"
                  onClick={(e) => {
                    e.target.checked ? setAutoBuyer(true) : setAutoBuyer(false)
                  }}
                />
                <label htmlFor="sameMember">
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
                    passBuyerName === false && warning === 'red'
                      ? 'form-control red'
                      : 'form-control'
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
                <input
                  className={
                    passBuyerMobile === false && warning === 'red'
                      ? 'form-control red'
                      : 'form-control'
                  }
                  placeholder="0912 345 678"
                  value={buyerMobile}
                  onChange={(e) => {
                    setBuyerMobile(e.target.value)
                  }}
                />
                <div className="form-text">錯誤/提示訊息</div>
              </div>
            </div>
            <div className="buyer-email-check">
              <div className="buyer-email">
                <label className="form-label">
                  電子信箱 (將用於傳送驗證碼)
                </label>
                <input
                  type="text"
                  className={
                    passBuyerEmail === false && warning === 'red'
                      ? 'form-control red'
                      : 'form-control'
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
                <input
                  type="checkbox"
                  id="sameBuyer"
                  name="sameBuyer"
                  onClick={(e) => {
                    e.target.checked
                      ? setAutoReceiver(true)
                      : setAutoReceiver(false)
                  }}
                />
                <label htmlFor="sameBuyer">
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
                    passReceiverName === false && warning === 'red'
                      ? 'form-control red'
                      : 'form-control'
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

                <input
                  className={
                    passReceiverMobile === false && warning === 'red'
                      ? 'form-control red'
                      : 'form-control'
                  }
                  placeholder="0912 345 678"
                  value={receiverMobile}
                  onChange={(e) => {
                    setReceiverMobile(e.target.value)
                  }}
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
                  <option value="taipei">{cartSummaryInfoDistrict}</option>
                </select>
                <div className="district">
                  <select
                    className={
                      passReceiverDistrict === false && warning === 'red'
                        ? 'decorated red'
                        : 'decorated'
                    }
                    name="district"
                    onChange={(e) => {
                      setReceiverDistrict(e.target.value)
                    }}
                  >
                    <option value="-1">選擇區域</option>
                    {!!districtsData &&
                      districtsData[cartSummaryInfoDistrict].map(
                        (value, index) => (
                          <option key={index} value={value}>
                            {value}
                          </option>
                        )
                      )}
                  </select>
                  <div className="form-text">錯誤/提示訊息</div>
                </div>
              </div>
              <div className="full-address">
                <input
                  type="text"
                  className={
                    passReceiverAddress === false && warning === 'red'
                      ? 'form-control red'
                      : 'form-control'
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
                warning={warning}
              />
            </HunelProvider>
          </div>
          <div className="buttons">
            <Link to="/cart/list">
              <button className="btn btn-primary">上一步</button>
            </Link>
            {passThrough === true ? (
              <Link to="/cart/verify">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    forCartVerifyInfo()
                    fectOutData()
                  }}
                >
                  確認付款
                </button>
              </Link>
            ) : (
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setWarning('red')
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                }}
              >
                確認付款
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartInfo
