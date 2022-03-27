import React, { useState } from 'react'
import '../../../styles/Member/Member-Login/EmailVerify.scss'
import SetNewPass from './SetNewPass'

const EmailVerify = () => {
  const [page, setPage] = useState('emailVerify')
  const APIVerify = 'http://localhost:3001/login/code-verify'
  const whenSubmit = async (event) => {
    event.preventDefault() //避免傳統方式送出表單
    const fd = new FormData(document.formV)
    const r = await fetch(APIVerify, {
      method: 'POST',
      body: fd,
    })
    const obj = await r.json()
    console.log(obj)
    if (obj.message === '驗證成功') {
      setPage('setNewPass')
    }
  }
  return (
    <>
      {page === 'emailVerify' ? (
        <div className="EmailVerify">
          <div className="EmailVerifyBox">
            <div className="mb-3">
              <form name="formV" onSubmit={whenSubmit}>
                <label className="form-label">請輸入郵箱驗證碼</label>
                <div className="inputGroup row">
                  <input
                    type="number"
                    className="form-control"
                    id="verifyCodeFirst"
                    name="verifyCodeFirst"
                    placeholder=""
                    maxLength="3"
                  />
                  <img src="/Member/LineInVerify.svg" alt="" />
                  <input
                    type="number"
                    className="form-control"
                    id="verifyCodeLast"
                    name="verifyCodeLast"
                    placeholder=""
                    maxLength="3"
                  />
                </div>
                <div className="form-text reSendTag">
                  沒有收到 ? <button>重新發送</button>
                </div>
                <button type="submit" className="btn btn-sm btn-primary">
                  送出
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : page === 'setNewPass' ? (
        <SetNewPass page={page} setPage={setPage} />
      ) : null}
    </>
  )
}

export default EmailVerify
