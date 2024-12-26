import React, { useState } from 'react'
import '../../../styles/Member/Member-Login/SetNewPass.scss'

const SetNewPass = (props) => {
  const { forgetPassData, setForgetPassData, setRow  } = props

  const [sPass, setSPass] = useState(false)
  const [newPass, setNewPass] = useState('')
  const [newConfPass, setConfNewPass] = useState('')
  const [pass, setPass] = useState(false)

  const APISetPass = `${process.env.REACT_APP_BACKEND_URL}/api/user/member/forgetPassChange`

  function changeShowPass() {
    setSPass(!sPass)
  }

  const whenPassSubmit = async (event) => {
    event.preventDefault() //避免傳統方式送出表單
    const userAccount = localStorage.getItem('email')
    const fd = new FormData(document.formP)
    fd.append('email', userAccount)
    const r = await fetch(APISetPass, {
      method: 'PUT',
      body: fd,
    })
    const obj = await r.json()
    console.log(obj)
    if (obj.success === true) {
      setRow('login')
    }
  }

  function handleInputChangePwd(event) {
    setPass(true)
    setNewPass(event.target.value)
    console.log('newPwd', event.target.value)
  }

  function handleInputChangeConfPwd(event) {
    setConfNewPass(event.target.value)
    console.log('confPwd', event.target.value)
  }

  function change() {
    console.log('password', newPass)
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
      !!isSimplePwd(newPass) &&
      isLowerLetter(newPass) &&
      isNum(newPass) &&
      isUpperLetter(newPass)
    ) {
      return 'gray'
    } else {
      return 'red'
    }
  }

  return (
    <>
      <div className="SetNewPass">
        <div className="SetNewPassBox">
          <div className="mb-3">
            <form
              name="formP"
              className="setPassForm"
              onSubmit={whenPassSubmit}
            >
              <div className="pass-g">
                <label htmlFor="user_pass" className="form-label">
                  請輸入新密碼
                </label>
                <input
                  type={sPass ? 'text' : 'password'}
                  className="form-control mb-3"
                  id="user_pass"
                  name="user_pass"
                  key="pass"
                  placeholder="請輸入8個英數字大小寫混合密碼"
                  onChange={handleInputChangePwd}
                />
                <div className="passHideIcon">
                  <img
                    src={
                      sPass ? '/Member/hidePass.svg' : '/Member/showPass.svg'
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
                      isSimplePwd(newPass) === 0 ? 'none' : 'inline-block',
                  }}
                >
                  {newPass.length < 8
                    ? '密碼最短長度為8個英數字'
                    : isLowerLetter(newPass) === false
                    ? '應包含英文'
                    : isNum(newPass) === false
                    ? '應包含數字'
                    : isUpperLetter(newPass) === false
                    ? '應包含大寫'
                    : // : isSpecial(newPwd) === false
                      // ? '含有特殊字元'
                      'OK'}
                </div>
              </div>
              <div className="passConf-g">
                <label className="form-label" htmlFor="user_passConf">
                  再次請輸入新密碼
                </label>
                <input
                  type="password"
                  className="form-control mb-3"
                  id="user_passConf"
                  name="user_passConf"
                  key="passwordConf"
                  placeholder="請再次輸入密碼"
                  onChange={handleInputChangeConfPwd}
                />
                <div className="errorMsg">
                  <div
                    className="form-text"
                    id="checkConf"
                    color={
                      newPass === newConfPass && isSimplePwd(newPass) === 5
                        ? 'green'
                        : 'grey'
                    }
                  ></div>
                  <div
                    className="matchTip"
                    style={{
                      display:
                        newPass === newConfPass && isSimplePwd(newPass) === 5
                          ? 'inline-block'
                          : 'none',
                    }}
                  >
                    相同
                  </div>
                </div>
              </div>
              {newPass === newConfPass ? (
                <button
                  type="submit"
                  className="btn btn-primary register-btn"
                  onClick={change}
                >
                  送出
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary register-btn"
                  onClick={change}
                  disabled
                >
                  輸入錯誤
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SetNewPass
