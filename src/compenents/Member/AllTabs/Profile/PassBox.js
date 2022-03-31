import React, { useState } from 'react'
import '../../../../styles/Member/Member-ProfileBox/PassBox.scss'

const PassBox = () => {
  const [showP, setShowP] = useState(false)
  const [nPass, setNPass] = useState('')
  const [nConfPass, setNConfPass] = useState('')
  const APISetNewPass = 'http://localhost:3001/user/member/passChange'
  const APICheckPass = 'http://localhost:3001/user/pass/check'

  function changeShowPass() {
    setShowP(!showP)
  }

  function handleInputChangePwd(event) {
    //setPass(true)
    setNPass(event.target.value)
    console.log('newPwd', event.target.value)
  }

  function handleInputChangeConfPwd(event) {
    setNConfPass(event.target.value)
    console.log('confPwd', event.target.value)
  }

  function change() {
    console.log('password', nPass)
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
      !!isSimplePwd(nPass) &&
      isLowerLetter(nPass) &&
      isNum(nPass) &&
      isUpperLetter(nPass)
    ) {
      return 'gray'
    } else {
      return 'red'
    }
  }

  const whenNewPassSub = async (event) => {
    event.preventDefault() //避免傳統方式送出表單
    const fd = new FormData(document.formPass)
    // 令一個空物件來裝FormData //遍開
    let obj = {}
    fd.forEach(function (value, key) {
      obj[key] = value
    })
    const json = JSON.stringify(obj)
    const passCheck = await fetch(APICheckPass, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.token,
      },
      body: json.slice(0, 24) + json.slice(76, 77),
    })
    const checkRs = await passCheck.json()
    console.log(checkRs)
    console.log(json.slice(0, 2) + json.slice(26, 48) + json.slice(76, 77))
    if (checkRs.used === 'have') {
      const r = await fetch(APISetNewPass, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.token,
        },
        body: json.slice(0, 2) + json.slice(26, 48) + json.slice(76, 77),
      })
      const rs = await r.json()
      console.log(rs)
      if (rs.success === true) {
        // TODO:設定成功的顯示訊息
      }
    }
  }
  return (
    <>
      <div className="PassBox">
        <form
          name="formPass"
          className="updateNPassForm"
          onSubmit={whenNewPassSub}
        >
          <div className="mb-3 PassBoxOld">
            <label className="form-label mobileTitle">舊密碼</label>
            <input
              type="password"
              id="user_passOld"
              name="user_passOld"
              key="passOld"
              placeholder="請輸入8個英數字大小寫混合密碼"
              className="form-control old-pass"
            />
          </div>
          <div className="mb-3 PassBoxNew">
            <label className="form-label">新密碼</label>
            <input
              type={showP ? 'text' : 'password'}
              id="user_pass"
              name="user_pass"
              key="pass"
              placeholder="請輸入8個英數字大小寫混合密碼"
              className="form-control new-pass"
              onChange={handleInputChangePwd}
            />
            <div className="passHideIcon">
              <img
                src={showP ? '/Member/hidePass.svg' : '/Member/showPass.svg'}
                onClick={changeShowPass}
                alt=""
              />
            </div>
            <div
              className="form-text errorMsg"
              id="checkPass"
              style={{
                color: check(),
                display: isSimplePwd(nPass) === 0 ? 'none' : 'inline-block',
              }}
            >
              {nPass.length < 8
                ? '密碼最短長度為8個英數字'
                : isLowerLetter(nPass) === false
                ? '應包含英文'
                : isNum(nPass) === false
                ? '應包含數字'
                : isUpperLetter(nPass) === false
                ? '應包含大寫'
                : // : isSpecial(newPwd) === false
                  // ? '含有特殊字元'
                  'OK'}
            </div>
          </div>
          <div className="mb-3 PassBoxConfNew">
            <label className="form-label new-pass-again">再次輸入新密碼</label>
            <input
              type="password"
              id="user_passConf"
              name="user_passConf"
              key="passwordConf"
              placeholder="請再次輸入密碼"
              className="form-control input-zip"
              onChange={handleInputChangeConfPwd}
            />
          </div>
          <br />
          {nPass === nConfPass ? (
            <button
              type="submit"
              className="btn btn-primary register-btn"
              onClick={change}
            >
              修改密碼
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary register-btn"
              onClick={change}
              disabled
            >
              修改密碼
            </button>
          )}
        </form>
      </div>
    </>
  )
}

export default PassBox
