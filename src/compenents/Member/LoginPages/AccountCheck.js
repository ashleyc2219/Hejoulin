import React, { useState } from 'react'
import '../../../styles/Member/Member-Login/AccountCheck.scss'
import EmailVerify from './EmailVerify'

const AccountCheck = ({ goVerify, setGoVerify }) => {
  const [next, setNext] = useState('check')
  const APICheck = 'http://localhost:3001/login/account-check'
  const APISendEmail = 'http://localhost:3001/login/send-email'
  const whenSubmit = async (event) => {
    event.preventDefault() //避免傳統方式送出表單
    localStorage.setItem('email', document.querySelector('#user_account').value)
    const fd = new FormData(document.form2)
    const r = await fetch(APICheck, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(fd).toString(),
    })

    const obj = await r.json()
    console.log(obj)

    if (obj.used === true) {
      setNext('forgetVerify')
      await fetch(APISendEmail, {
        method: 'POST',
        body: fd,
      })
    }
  }

  // function nextPage() {
  //   const newPage = next === 'check' ? 'verify' : 'check'
  //   setNext(newPage)
  // }

  return (
    <>
      {next === 'check' ? (
        <div className="AccountCheck">
          <div className="AccountCheckBox">
            <form name="form2" onSubmit={whenSubmit}>
              <div className="mb-3">
                <div className="inputGroup row">
                  <label htmlFor="user_account" className="form-label">
                    請輸入您註冊時使用的郵箱
                  </label>
                  <input
                    type="email"
                    id="user_account"
                    name="user_account"
                    className="form-control"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-sm btn-primary">
                送出
              </button>
            </form>
          </div>
        </div>
      ) : next === 'forgetVerify' ? (
        <EmailVerify goVerify={goVerify} setGoVerify={setGoVerify} />
      ) : null}
    </>
  )
}

export default AccountCheck
