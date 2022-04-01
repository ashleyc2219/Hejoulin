import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../../../styles/Member/Member-Login/LoginContext.scss'
import Register from './Register'
import EmailVerify from './EmailVerify'
import AccountCheck from './AccountCheck'
import FinishRegister from './FinishRegister'
import SetNewPass from './SetNewPass'

const Login = (props) => {
  const { user, setUser, sidebar, setSidebar } = props
  const [row, setRow] = useState('login')
  const APILogin = 'http://localhost:3001/login/login'
  const API = 'http://localhost:3001/user/api/auth-list'
  let history = useHistory()

  const whenLoginSubmit = async (event) => {
    event.preventDefault() //避免傳統方式送出表單

    const fd = new FormData(document.form1)
    const r = await fetch(APILogin, {
      method: 'POST',
      body: fd,
    })

    const obj = await r.json()

    localStorage.setItem('token', obj.token)
    localStorage.setItem('account', obj.info.user_account)
    setUser(obj.info.user_account)
    const token = localStorage.getItem('token')

    const r2 = await fetch(API, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    const info2 = await r2.json()
    if (info2.obj) {
      setUser(info2.obj)
      history.push('/')
    }
  }

  return (
    <>
      {row === 'login' ? (
        <div className="LoginContext">
          <div className="container">
            <div className="LoginContextBox row">
              <div className="loginPage">
                <h1 className="login-title">歡迎回到禾酒林</h1>
                <br />
                <div className="login-form-group">
                  <form name="form1" onSubmit={whenLoginSubmit}>
                    <div className="mb-4">
                      <label htmlFor="user_account" className="form-label">
                        email (作為帳號使用)
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="user_account"
                        name="user_account"
                        required
                      />
                    </div>
                    <div className="mb-4 passwordInputBox">
                      <label htmlFor="user_pass" className="form-label">
                        密碼
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="user_pass"
                        name="user_pass"
                        required
                      />
                      <div
                        className="passForget"
                        onClick={() => setRow('forgetPass')}
                      >
                        忘記密碼?
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-primary register-btn"
                      onClick={() => setRow('register')}
                    >
                      註冊
                    </button>
                    <button type="submit" className="btn btn-primary login-btn">
                      登入
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : row === 'register' ? (
        <Register
          row={row}
          setRow={setRow}
          sidebar={sidebar}
          setSidebar={setSidebar}
        />
      ) : row === 'forgetPass' ? (
        <AccountCheck row={row} setRow={setRow} />
      ) : row === 'verify' ? (
        <EmailVerify row={row} setRow={setRow} />
      ) : row === 'setNewPass' ? (
        <FinishRegister
          row={row}
          setRow={setRow}
          sidebar={sidebar}
          setSidebar={setSidebar}
        />
      ) : row === 'finish' ? (
        <SetNewPass row={row} setRow={setRow} />
      )  : null}
    </>
  )
}

export default Login
