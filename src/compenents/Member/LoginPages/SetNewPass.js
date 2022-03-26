import React from 'react'
import '../../../styles/Member/Member-Login/SetNewPass.scss'

const SetNewPass = (props) => {
  const { page, setPage } = props
  return (
    <>
      <div className="SetNewPass">
        <div className="SetNewPassBox">
          <div className="mb-3">
            <form name="formP" className="setPassForm">
              <label className="form-label">請輸入新密碼</label>
              <input
                type="text"
                className="form-control mb-3"
                id="user_pass"
                name="user_pass"
                placeholder=""
              />
              <label className="form-label">再次請輸入新密碼</label>
              <input
                type="text"
                className="form-control mb-3"
                id="user_passConf"
                name="user_passConf"
                placeholder=""
              />
              <button type="submit" className="btn btn-sm btn-primary">
                送出
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SetNewPass