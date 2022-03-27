import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../../../styles/Member/Member-Login/RegisterContext.scss'

const RegisterContext = (props) => {
  const { user, setUser, row, setRow } = props
  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)
  const [password, setPassword] = useState(false)
  const [focusConfirmPassword, setFocusConfirmPassword] = useState(false)
  const [passCorrect, setPassCorrect] = useState(false)
  const [newPwd, setNewPwd] = useState('')
  const [confPwd, setConfPwd] = useState('')
  const APIReg = 'http://wilson:3001/register'
  let history = useHistory()

  const whenSubmit = async (event) => {
    event.preventDefault() //避免傳統方式送出表單

    const fd = new FormData(document.form1)
    const r = await fetch(APIReg, {
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

    // const r2 = await fetch('http://localhost:3001/user/api/auth-list', {
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

  function rowTo() {
    const newPage = row === 'login' ? 'register' : 'login'
    setRow(newPage)
  }

  function changeShowPass() {
    setShowPass(!showPass)
  }

  // function changeShowConfirmPass() {
  //   setShowConfirmPass(!showConfirmPass)
  // }

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

  // function isSpecial(v) {
  //   return !!v.match(/([^a-zA-Z0-9])+/)
  // }

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
                  <div className="mb-4 account-g">
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
                  <div className="mb-4 pass-g">
                    <label htmlFor="user_pass" className="form-label">
                      密碼
                    </label>
                    <input
                      type={showPass ? 'text' : 'password'}
                      className="form-control"
                      id="user_pass"
                      name="password"
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
                        color:
                          isSimplePwd(newPwd) === false &&
                          isLowerLetter(newPwd) === false &&
                          isNum(newPwd) === false &&
                          isUpperLetter(newPwd) === false
                            ? 'grey'
                            : 'red',
                        display:
                          isSimplePwd(newPwd) === 0 ? 'none' : 'inline-block',
                      }}
                    >
                      {newPwd.length < 8
                        ? '密碼最短長度為8個英數字'
                        : isLowerLetter(newPwd) === false
                        ? '應包含小寫'
                        : isNum(newPwd) === false
                        ? '應包含數字'
                        : isUpperLetter(newPwd) === false
                        ? '應包含大寫'
                        : // : isSpecial(newPwd) === false
                          // ? '含有特殊字元'
                          'OK'}
                    </div>
                  </div>
                  <div className="mb-4 passConf-g">
                    <label htmlFor="user_pass" className="form-label">
                      確認密碼
                    </label>
                    {/*{isSimplePwd(newPwd) === 5 ? (*/}
                    <input
                      type={showConfirmPass ? 'text' : 'password'}
                      placeholder="請再次輸入密碼"
                      className="form-control"
                      id="check-user-pass"
                      name="password"
                      key="password"
                      onChange={handleInputChangeConfPwd}
                      required
                    />
                    {/* ) : (
                        {<input
                      type={showConfirmPass ? 'text' : 'password'}
                      placeholder="請再次輸入密碼"
                      className="form-control"
                      id="check-user-pass"
                      name="password"
                      key="password"
                      onChange={handleInputChangeConfPwd}
                      required
                      disabled
                      />}
                    )} */}
                    {/*<div className="passHideIcon">*/}
                    {/*  <img*/}
                    {/*    src={*/}
                    {/*      showConfirmPass*/}
                    {/*        ? '/Member/hidePass.svg'*/}
                    {/*        : '/Member/showPass.svg'*/}
                    {/*    }*/}
                    {/*    onClick={changeShowConfirmPass}*/}
                    {/*    alt=""*/}
                    {/*  />*/}
                    {/*</div>*/}
                    <div className="errorMsg">
                      <div
                        className="form-text"
                        id="checkConf"
                        color={
                          newPwd === confPwd && isSimplePwd(newPwd) === 5
                            ? 'green'
                            : 'grey'
                        }
                      ></div>
                      <div
                        className="matchTip"
                        style={{
                          display:
                            newPwd === confPwd && isSimplePwd(newPwd) === 5
                              ? 'inline-block'
                              : 'none',
                        }}
                      >
                        相同
                      </div>
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
                      註冊
                    </button>
                  )}

                  <button
                    type="button"
                    className="btn btn-outline-primary login-btn"
                    onClick={rowTo}
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
