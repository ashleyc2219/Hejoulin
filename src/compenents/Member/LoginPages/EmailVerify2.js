import React, {useState} from 'react'
import '../../../styles/Member/Member-Login/EmailVerify.scss'

const EmailVerify2 = (props) => {
  const { setRow, forgetPassData, setForgetPassData } = props
  const [verify2Correct, setVerify2Correct] = useState('')
  const [verifyData, setVerifyData] = useState({})
  const APIVerify = 'http://localhost:3001/login/code/verify/passForget'
  const whenVerSubmit = async (event) => {
    event.preventDefault() //避免傳統方式送出表單
    setVerify2Correct('')

    if (verify2Correct === '') {
      const fd = new FormData(document.formV)
      let obj = {}
      fd.forEach(function (value, key) {
        obj[key] = value
      })
      const json = await obj
      setVerifyData(json)
      console.log(json)
      const newData = {
        pData: forgetPassData,
        vData: json,
      }
      setForgetPassData([])
      setForgetPassData(newData)
      console.log(forgetPassData)
      const r = await fetch(APIVerify, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      })
      const result = await r.json()
      console.log(result.message)
      if (result.message === 'success') {
        setRow('setNewPass')
      }
      if (result.message === 'codeError'){
      setVerify2Correct('error')
      }
    }
  }

 async function reSend() {
    await fetch(APIVerify, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(forgetPassData),
    })
  }
  return (
    <>
      <div className="EmailVerify">
        <div className="EmailVerifyBox">
          <div className="mb-3">
            <form name="formV" onSubmit={whenVerSubmit}>
              <label className="form-label">請輸入郵箱驗證碼</label>
              <div className="inputGroup row">
                <input
                  type="number"
                  className="form-control"
                  id="verifyCodeFirst"
                  name="verifyCodeFirst"
                  key="verifyCodeFirst"
                  placeholder=""
                  max="999"
                />
                <img src="/Member/LineInVerify.svg" alt="" />
                <input
                  type="number"
                  className="form-control"
                  id="verifyCodeLast"
                  name="verifyCodeLast"
                  key="verifyCodeLast"
                  placeholder=""
                  maxLength="3"
                />
                <div
                    className="errMsg"
                    style={{
                      color:"red",
                      display: verify2Correct === 'error' ? 'inline-block' : 'none'}}
                >
                  驗證碼輸入錯誤
                </div>
              </div>
              <div className="form-text reSendTag">
                沒有收到 ? <button onClick={() => reSend()}>重新發送</button>
              </div>
              <button type="submit" className="btn btn-sm btn-primary">
                送出
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmailVerify2
