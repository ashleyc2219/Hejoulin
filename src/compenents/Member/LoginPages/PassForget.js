import React from 'react'
import '../../../styles/Member/Member-Login/PassForget.scss'

const PassForget = () => {
  return (
    <>
      <div className="PassForget">
        <div className="mb-3 PassForgetBox">
          <label className="form-label">請輸入您註冊使用的郵箱</label>
          <input
            type="text"
            className="form-control"
            placeholder="輸入郵箱以取得驗證碼"
          />
          <button className="btn btn-sm btn-primary">送出</button>
        </div>
      </div>
    </>
  )
}

export default PassForget
