import React from 'react'
import '../../../styles/Member/Member-Login/EmailVerify.scss'

const EmailVerify = () => {
  return (
    <>
      <div className="EmailVerify">
        <div className="EmailVerifyBox">
          <div className="mb-3">
            <label className="form-label">請輸入郵箱驗證碼</label>
            <div className="inputGroup row">
              <input type="text" className="form-control" placeholder="" />
              <img src="/Member/LineInVerify.svg" alt=""/>
              <input type="text" className="form-control" placeholder="" />
            </div>
            <div className="form-text reSendTag">
              沒有收到 ? <a href="#">重新發送</a>
            </div>
            <button className="btn btn-sm btn-primary">送出</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmailVerify
