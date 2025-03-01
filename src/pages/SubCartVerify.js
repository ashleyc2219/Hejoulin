import React from 'react'
import './../styles/CartVerify/CartVerify.scss'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { SubCartVerifyInfo } from './../App'

const SubCartVerify = () => {
  let subCartVerifyInfo = SubCartVerifyInfo._currentValue
  // console.log({
  //   to: subCartVerifyInfo.email_account,
  //   cardNum: subCartVerifyInfo.cardNum,
  //   total: subCartVerifyInfo.total,
  // })
  const [btnText, setBtnText] = useState('取得信箱傳送交易密碼')
  const [enterCode, setEnterCode] = useState('')

  const today = new Date()
  let date =
    today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate()

  let history = useHistory()

  const sendEmail = async function () {
    let data = {
      email_account: subCartVerifyInfo.email_account,
      cardNum: subCartVerifyInfo.cardNum,
      total: subCartVerifyInfo.total,
    }

    const r1 = await fetch(`${process.env.REACT_APP_BACKEND_URL}}/api/cart-verify/send-email`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const obj = await r1.json()
    console.log(obj)
  }
  const verifyTheCode = async function () {
    let data = {
      enterCode: enterCode,
    }

    const r1 = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}}/api/cart-verify/code-verify`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
    const obj = await r1.json()
    if (obj.result === 'success') {
      history.push('/sub/cart-order', { some: 'state' })
    } else {
      setBtnText('驗證碼錯誤 按我重新發送')
    }
  }

  return (
    <>
      <div className="CreditCardVerified">
        <div className="Verified-container">
          <div className="logo">
            <img src="/CreditCardVerified/visa.png" alt="" />
            <img src="/CreditCardVerified/bank.jpg" alt="" />
          </div>
          <div className="info">
            <div className="title">請輸入您的VISA驗證 密碼</div>
            <div className="card-main">
              <div className="left">
                <p>特約商店：</p>
                <p>交易金額：</p>
                <p>交易日期：</p>
                <p>卡號：</p>
              </div>
              <div className="right">
                <p>Hejoulin</p>
                <p className="price">TWD {subCartVerifyInfo.total}</p>
                <p>{date}</p>
                <p>XXXX-XXXX-XXXX-{subCartVerifyInfo.cardNum}</p>
                <div className="input">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="請輸入驗證密碼"
                    onChange={(e) => {
                      setEnterCode(e.target.value)
                    }}
                  />

                  <button
                    onClick={() => {
                      verifyTheCode()
                    }}
                  >
                    確認
                  </button>
                </div>
                <button
                  onClick={() => {
                    sendEmail()
                    setBtnText('已將交易密碼送至信箱')
                  }}
                >
                  {btnText}
                </button>
                <div className="illustrate">
                  <a href="#/">
                    <span>?</span> 說明
                  </a>
                  <a href="#/">取消</a>
                </div>
              </div>
            </div>
            <div className="precautions">
              <p>注意事項</p>
              <ol>
                <li>
                  請點選「取得email傳送交易密碼」按鍵，本行將於1~2分鐘內以簡訊及E-mail傳送動態交易認證碼。
                </li>
                <li>
                  請檢視留存本行手機或E-mail已取得動態交易認證密碼並輸入送出。
                </li>
                <li>
                  若您無法完成交易或是未收到認證密碼，請與客服中心聯絡，電話(02)xxxx-xxxx。
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubCartVerify
