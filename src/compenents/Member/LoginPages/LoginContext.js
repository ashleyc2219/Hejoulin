import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../../styles/Member/Member-Login/LoginContext.scss'
import RegisterContext from './RegisterContext'
import EmailVerify from './EmailVerify'
import AccountCheck from './AccountCheck'

const LoginContext = (props) => {
  const { user, setUser, sidebar, setSidebar } = props
  const [row, setRow] = useState('login')

  const APILogin = 'http://localhost:3001/login/login'
  let history = useHistory()

  const whenSubmit = async (event) => {
    event.preventDefault() //避免傳統方式送出表單

    const fd = new FormData(document.form1)
    const r = await fetch(APILogin, {
      method: 'POST',
      body: fd,
    })

    const obj = await r.json()
    // TODO: is success
    console.log(obj)
    console.log(history)

    localStorage.setItem('token', obj.token)
    localStorage.setItem('account', obj.info.user_account)
    setUser(obj.info.user_account)
    const token = localStorage.getItem('token')

    const r2 = await fetch('http://localhost:3001/user/api/auth-list', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    const info2 = await r2.json()
    console.log({ info2 })
    setUser(info2.obj)
    history.push('/', { from: 'login-success' })

    // const
    //   .then((res) => res.json())
    //   .then((response) => {
    //     setUser(response.obj)
    //     history.push('/')
    //   })
  }
  function jump() {
    localStorage.clear()
    if (localStorage.hasOwnProperty('token') === false) {
      history.push('/', { from: 'login-success' })
      setSidebar(false)
    }
  }

  function rowTo() {
    const newPage = row === 'login' ? 'register' : 'login'
    setRow(newPage)
  }

  return (
    <>
      {row === 'login' ? (
        <div className="LoginContext">
          <div className="container">
            <div className="LoginContextBox row">
              <div className="loginPage">
                <h1 className="login-title">
                  歡迎回到禾酒林 <br /> {user ? '已登入' : '未登入'}
                </h1>
                <br />
                <h5>
                  <button onClick={jump}>登出</button>
                </h5>
                <div className="login-form-group">
                  <form name="form1" onSubmit={whenSubmit}>
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
                      onClick={() => rowTo('forgetPass')}
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
        <RegisterContext row={row} setRow={setRow} />
      ) : row === 'forgetPass' ? (
        <AccountCheck row={row} setRow={setRow} />
      ) : null}
    </>
  )
}

export default LoginContext
