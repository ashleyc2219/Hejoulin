import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../../styles/Member/Member-Login/RegisterContext.scss'

const RegisterContext = (props) => {
  const { user, setUser } = props
  const [row, setRow] = useState({})
  const API = 'http://wilson:3001/register'
  let history = useHistory()
  const whenSubmit = async (event) => {
    event.preventDefault() //避免傳統方式送出表單

    const fd = new FormData(document.form1)
    const r = await fetch(API, {
      method: 'POST',
      body: fd,
    })

    const obj = await r.json()
    // TODO: is success
    console.log(obj)

    localStorage.setItem('token', obj.token)
    localStorage.setItem('account', obj.info.user_account)
    setUser(obj.info.user_account)
    // const token = localStorage.getItem('token')

    // const r2 = await fetch('http://wilson:3001/user/api/auth-list', {
    //   headers: {
    //     authorization: `Bearer ${token}`,
    //   },
    // })
    // const info2 = await r2.json()
    // console.log({info2})
    // setUser(info2.obj)

    // const
    //   .then((res) => res.json())
    //   .then((response) => {
    //     setUser(response.obj)
    //     history.push('/')
    //   })
  }

  return (
    <>
      <div className="RegisterContext">
        <div className="container">
          <div className="RegisterContextBox row">
            <div className="registerPage">
              <h1 className="register-title">歡迎來到禾酒林</h1>
              <br />
              <div className="register-form-group">
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
                  <div className="mb-4 ">
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
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary register-btn"
                  >
                    註冊
                  </button>
                  <button
                    type="submit"
                    className="btn btn-outline-primary login-btn"
                  >
                    登入
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterContext
