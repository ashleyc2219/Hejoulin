import React, {useState} from 'react'
import '../../../styles/Member/Member-Login/EmailVerify.scss'

const EmailVerify = ({row, setRow}) => {
    const APIVerify = 'http://localhost:3001/login/code/verify'
    const [verifyCorrect, setVerifyCorrect] = useState('')
    const whenVerSubmit = async (event) => {
        event.preventDefault() //避免傳統方式送出表單

        if (verifyCorrect === '') {
            const fd = new FormData(document.formV)
            let obj = {}
            fd.forEach(function (value, key) {
                obj[key] = value
            })
            const json = JSON.stringify(obj)
            console.log(json)
            const r = await fetch(APIVerify, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.token,
                },
                body: json,
            })
            const result = await r.json()
            console.log(result.message)
            if (result.message === 'success') {
                setRow('finish')
            }
            if (result.message === 'codeError'){
                setVerifyCorrect('error')
            }
        }
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
                                    maxLength="3"
                                />
                                <img src="/Member/LineInVerify.svg" alt=""/>
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
                                        color: "red",
                                        display: verifyCorrect === 'error' ? 'inline-block' : 'none'
                                    }}
                                >
                                    驗證碼輸入錯誤
                                </div>
                            </div>
                            <div className="form-text reSendTag">
                                沒有收到 ? <button>重新發送</button>
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

export default EmailVerify
