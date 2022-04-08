import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// 驗證電子信箱 電話號碼
import validator from 'validator'

import ProgressBar from '../compenents/Cart/ProgressBar'
import '../styles/SubCartInfo/SubCartInfo.scss'
import SubCartInfoCard from '../compenents/Sub/SubCartInfoCard'
import InfoCreditCard from '../compenents/Cart/InfoCreditCard'
import { districts, townships } from './../data/districts'

import { SubCartVerifyInfo } from './../App'
import Spinner from '../compenents/Shared/Spinner'
import FetchMemberId from '../compenents/Member/FetchMemberId'

// 信用卡
import { HunelProvider, HunelCreditCard } from 'reactjs-credit-card'
import {
  memberInfoGet,
  orderMainInsert,
  orderSubInsert,
  shipmentInsert,
  paymentInsert,
} from '../compenents/SubCartFetch/SubCartListFetch'
const hunel = new HunelCreditCard()

const SubCartInfo = (props) => {
  const subInCart = JSON.parse(localStorage.getItem('subCart'))
  // console.log(subInCart)
  const { setSubCartVerifyInfo } = props
  const [spin, setSpin] = useState(true)

  const stepContent = ['確認方案', '填寫資訊', '訂單成立']

  const [memberInfo, setMemberInfo] = useState([])
  // 表單資料 接資料
  const [buyerName, setBuyerName] = useState('')
  const [buyerMobile, setBuyerMobile] = useState('')
  const [buyerEmail, setBuyerEmail] = useState('')
  const [receiverName, setReceiverName] = useState('')
  const [receiverMobile, setReceiverMobile] = useState('')
  const [receiverAddress, setReceiverAddress] = useState('')
  const [receiverCity, setReceiverCity] = useState(-1)
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
  const [passReceiverCity, setPassReceiverCity] = useState(false)
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
    ;(async () => {
      let memberInfoObj = await memberInfoGet(memberId)
      if (a) {
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
  const renderSubItems = (data) => {
    if (data.length) {
      return data.map((sp, i) => {
        return (
          <SubCartInfoCard key={i} subPlan={sp} subMonth={subInCart.subTime} />
        )
      })
    } else {
      return ''
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
    if (receiverCity !== -1) {
      setPassReceiverCity(true)
    } else {
      setPassReceiverCity(false)
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
      total: subInCart.subTimeTotal,
      email_account: buyerEmail,
    }
    setSubCartVerifyInfo(data)
  }
  async function fetchOutData() {
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
      ''
    )
    orderSubInsert(
      order_main_id,
      subInCart.subPlan,
      subInCart.subTime,
      subInCart.subTimeTotal
    )

    // 整理地址加上市、區
    let receiverAddressTidy = receiverAddress
    receiverAddressTidy =
      districts[receiverCity] +
      townships[receiverCity][receiverDistrict] +
      receiverAddressTidy
    // 整理手機號碼 +886 -> 0
    let receiverMobileTidy = receiverMobile
    if (receiverMobileTidy.includes('+886')) {
      receiverMobileTidy = receiverMobileTidy.replace(/\+886/, 0)
    }
    let shipmentResult = await shipmentInsert(
      order_main_id,
      'delivery',
      store_id,
      receiverName,
      receiverMobileTidy,
      receiverAddressTidy,
      'shipment_note'
    )
    let cardNumTidy = cardNum
    cardNumTidy = cardNumTidy.slice(-4)

    let paymentResult = await paymentInsert(order_main_id, cardNumTidy)
    console.log(
      'orderMainResult: ',
      orderMainResult,
      'order_main_id: ',
      order_main_id
    )
    localStorage.setItem('sub_order_main_id', order_main_id)
    console.log('order_main_id: ', order_main_id)
    console.log('shipmentResult: ', shipmentResult)
    console.log('paymentResult: ', paymentResult)
  }

  return spin ? (
    <Spinner />
  ) : (
    <div className="SubCartInfo">
      <ProgressBar step="two" content={stepContent} />
      <div className="container">
        <div className="left-list">
          <div className="mobile-table-btn ">
            <span className="total">訂單總計: $ {subInCart.subTimeTotal}</span>
          </div>
          <div className="list-table">
            <div className="table-head">
              <span className="title-product">商品</span>
              <span className="title-subtotal">小計</span>
            </div>
            {renderSubItems(subInCart.subPlan)}
          </div>
          <div className="list-summary">
            <div className="table-row">
              <p>小計</p>
              <p className="dollar-sign">{subInCart.subTimeTotal}</p>
            </div>
            <div className="table-row">
              <p>運費</p>
              <p className="dollar-sign">0</p>
            </div>

            <div className="table-row">
              <p>總計</p>
              <p className="dollar-sign total">{subInCart.subTimeTotal}</p>
            </div>
          </div>
          {/* <div className="mobile-table-btn ">
            <span className="product-count">&darr; 共4件商品</span>
          </div> */}
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
                <label className="form-label">電子信箱</label>
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
                <select
                  className={
                    passReceiverCity === false && warning === 'red'
                      ? 'decorated red'
                      : 'decorated'
                  }
                  name="city"
                  onChange={(e) => {
                    setReceiverCity(e.target.value)
                    setReceiverDistrict(-1)
                  }}
                >
                  <option value="-1">選擇縣市</option>
                  {!!districts &&
                    districts.map((value, index) => (
                      <option key={index} value={index}>
                        {value}
                      </option>
                    ))}
                </select>
                <div className="district">
                  <select
                    className={
                      passReceiverDistrict === false && warning === 'red'
                        ? 'decorated red'
                        : 'decorated'
                    }
                    name="district"
                    value={receiverDistrict}
                    onChange={(e) => {
                      setReceiverDistrict(e.target.value)
                    }}
                  >
                    <option value="-1">選擇區域</option>
                    {!!districts &&
                      receiverCity !== -1 &&
                      townships[receiverCity].map((value, index) => (
                        <option key={index} value={index}>
                          {value}
                        </option>
                      ))}
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
              <Link to="/sub/cart-verify">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    forCartVerifyInfo()
                    fetchOutData()
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

export default SubCartInfo
