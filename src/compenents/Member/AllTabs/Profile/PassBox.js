import React from 'react'
import '../../../../styles/Member/Member-ProfileBox/PassBox.scss'

const PassBox = () => {
  return (
    <>
      <div className="PassBox">
        <div className="mb-3 PassBox-Item">
          <label className="form-label mobileTitle">舊密碼</label>
          <input
            type="text"
            className="form-control old-pass"
            placeholder="請輸入6~12位數,並包含大小寫"
          />
        </div>
        <div className="mb-3 PassBox-Item">
          <label className="form-label">新密碼</label>
          <input
            type="text"
            className="form-control new-pass"
            placeholder="請輸入6~12位數,並包含大小寫"
          />
        </div>
        <div className="mb-3 PassBox-Item">
          <label className="form-label new-pass-again">再次輸入新密碼</label>
          <input
            type="text"
            className="form-control input-zip"
            placeholder="請輸入6~12位數,並包含大小寫"
          />
        </div>
        <br />
        <button className="btn btn-primary Pass-btn">
          {' '}
          修改密碼
        </button>
      </div>
    </>
  )
}

export default PassBox
