import React from 'react'
import './CreditCardVerified.scss'

const CreditCardVerified = () => {
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
                <p className="price">TWD 16888</p>
                <p>2022/4/13</p>
                <p>XXXX-XXXX-XXXX-1688</p>
                <div className="input">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="請輸入驗證密碼"
                  />
                  <button>確認</button>
                </div>
                <button>取得簡訊傳送交易密碼</button>
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
                  請點選「取得簡訊傳送交易密碼」按鍵，本行將於1~2分鐘內以簡訊及E-mail傳送動態交易認證碼。
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

export default CreditCardVerified
