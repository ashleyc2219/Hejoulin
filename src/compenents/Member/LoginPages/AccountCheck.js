import React from 'react'
import '../../../styles/Member/Member-Login/AccountCheck.scss'

const AccountCheck = (props) => {
  const { forgetPassData, setForgetPassData, setRow  } = props
  const APICheck = 'http://localhost:3001/login/account-check'
  const APISendEmail = 'http://localhost:3001/login/send-email'

  const whenACSubmit = async (event) => {
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
    const uId = JSON.stringify(obj.uId)
    const userAccount = JSON.stringify(obj.userAccount)
    let userData = {
      userId: uId,
      userAccount: userAccount,
    }
    console.log(userData)
    setForgetPassData(userData)
    if (obj.used === 'have') {
      // setRow('verify2')
      const rs =  await fetch(APISendEmail, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      const obj2 = await rs.json()
      const emailCheck = obj2
      console.log(emailCheck)
      if (emailCheck.message === 'success') {
        // localStorage.setItem('token', obj.token)
        setRow('verify2')
      }
    } else {
      setRow('login')
    }

  }


  return (
    <>
      <div className="AccountCheck">
        <div className="AccountCheckBox">
          <form name="form2" onSubmit={whenACSubmit}>
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
    </>
  )
}

export default AccountCheck
