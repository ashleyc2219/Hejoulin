import React, { useState } from 'react'
import '../../../styles/Member/Member-Login/RegisterContext.scss'

const Register = (props) => {
  const { row, setRow, sidebar, setSidebar, userToken, setUserToken } = props
  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)
  const [password, setPassword] = useState(false)
  const [newPwd, setNewPwd] = useState('')
  const [confPwd, setConfPwd] = useState('')
  const [failMsg, setFailMsg] = useState('')
  const APIRegister = 'http://localhost:3001/login/register'
  const APISendEmail = 'http://localhost:3001/login/send-email'

  const whenRegSubmit = async (event) => {
    event.preventDefault() //避免傳統方式送出表單
    const fd = new FormData(document.form1)
    const r = await fetch(APIRegister, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(fd).toString(),
    })

    const obj = await r.json()
    console.log(obj)
    let userId = {
      userId: obj.uId.userId,
    }
    console.log(userId)
    if (obj.success === true) {
      const verify = await fetch(APISendEmail, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userId),
      })
      const emailSend = await verify.json()
      console.log(emailSend)
      if (emailSend.message === 'success') {
       localStorage.setItem('token', obj.token)
        setUserToken(localStorage.getItem('token'))
        setRow('verify')
      }
    } else {
      if (obj.error === "Email 已被使用過") {
         setFailMsg('used')
      }
    }
  }

  function changeShowPass() {
    setShowPass(!showPass)
  }

  function handleInputChangePwd(event) {
    setPassword(true)
    setNewPwd(event.target.value)
    console.log('newPwd', event.target.value)
  }

  function handleInputChangeConfPwd(event) {
    setConfPwd(event.target.value)
    console.log('confPwd', event.target.value)
  }

  function change() {
    console.log('password', newPwd)
  }

  // 密碼無大小寫、無英數字混合
  function isSimplePwd(s) {
    if (s.length < 8) {
      return 0
    }
    let ls = 0
    if (s.length >= 8) {
      ls++
    }
    if (s.match(/([a-z])+/)) {
      ls++
    }
    if (s.match(/([0-9])+/)) {
      ls++
    }
    if (s.match(/([A-Z])+/)) {
      ls++
    }
    if (s.match(/([^a-zA-Z0-9])+/)) {
      ls++
    }
    return ls
  }

  function isLowerLetter(v) {
    return !!v.match(/([a-z])+/)
  }

  function isUpperLetter(v) {
    return !!v.match(/([A-Z])+/)
  }

  function isNum(v) {
    return !!v.match(/([0-9])+/)
  }

  function check() {
    if (
      !!isSimplePwd(newPwd) &&
      isLowerLetter(newPwd) &&
      isNum(newPwd) &&
      isUpperLetter(newPwd)
    ) {
      return 'gray'
    } else {
      return 'red'
    }
  }

  function registerRsColor() {
    if (failMsg === 'used') {
      return 'red'
    }
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
                <form name="form1" onSubmit={whenRegSubmit}>
                  <div className="mb-4 account-g">
                    <label htmlFor="user_account" className="form-label">
                      email (作為帳號使用)
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="user_account"
                      name="user_account"
                      key="account"
                      required
                    />
                  </div>
                  <div className="mb-4 pass-g">
                    <label htmlFor="user_pass" className="form-label">
                      密碼
                    </label>
                    <input
                      type={showPass ? 'text' : 'password'}
                      className="form-control"
                      id="user_pass"
                      name="user_pass"
                      key="password"
                      placeholder="請輸入8個英數字大小寫混合密碼"
                      onChange={handleInputChangePwd}
                      required
                    />
                    <div className="passHideIcon">
                      <img
                        src={
                          showPass
                            ? '/Member/hidePass.svg'
                            : '/Member/showPass.svg'
                        }
                        onClick={changeShowPass}
                        alt=""
                      />
                    </div>
                    <div
                      className="form-text errorMsg"
                      id="checkPass"
                      style={{
                        color: check(),
                        display:
                          isSimplePwd(newPwd) === 0 ? 'none' : 'inline-block',
                      }}
                    >
                      {newPwd.length < 8
                        ? '密碼最短長度為8個英數字'
                        : isLowerLetter(newPwd) === false
                        ? '應包含英文'
                        : isNum(newPwd) === false
                        ? '應包含數字'
                        : isUpperLetter(newPwd) === false
                        ? '應包含大寫'
                        : // : isSpecial(newPwd) === false
                          // ? '含有特殊字元'
                          '您輸入合格的密碼'}
                    </div>
                  </div>
                  <div className="mb-4 passConf-g">
                    <label htmlFor="user_pass" className="form-label">
                      確認密碼
                    </label>
                    <input
                      type={showConfirmPass ? 'text' : 'password'}
                      placeholder="請再次輸入密碼"
                      className="form-control"
                      id="check-user-pass"
                      name="check-user-pass"
                      key="passwordConf"
                      onChange={handleInputChangeConfPwd}
                      required
                    />
                    <div
                        className="form-text errorMsg"
                        id="checkPass"
                        style={{
                            color: registerRsColor(),
                            display:
                                failMsg === 'used' ? 'inline-block' : 'none',
                        }}
                    >
                      {failMsg === 'used'
                          ? '您註冊的Email已被使用過'
                          : ''
                      }
                    </div>
                  </div>
                  {newPwd === confPwd ? (
                    <button
                      type="submit"
                      className="btn btn-primary register-btn"
                      onClick={change}
                    >
                      註冊
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary register-btn"
                      onClick={change}
                      disabled
                    >
                      檢查密碼
                    </button>
                  )}

                  <button
                    type="button"
                    className="btn btn-outline-primary login-btn"
                    onClick={() => setRow('login')}
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

export default Register
