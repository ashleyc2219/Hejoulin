import React from 'react'

const EmailVerify = () => {
  return (
    <>
      <div className="EmailVerify">
        <div className="mb-3">
          <label className="form-label">請輸入郵箱驗證碼</label>
          <input type="number" className="form-control" placeholder="" />
          <img src="/Member/LineInVerify.svg" alt=""/>
          <input type="number" className="form-control" placeholder="" />
          <div className="form-text">
            沒有收到 ? <a href="">重新發送</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmailVerify
