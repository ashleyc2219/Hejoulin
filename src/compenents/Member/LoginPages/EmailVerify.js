import React, {useState} from 'react'
import '../../../styles/Member/Member-Login/EmailVerify.scss'

const EmailVerify = ({row, setRow, forgetPassData, setForgetPassData}) => {
    const APIVerify = 'http://localhost:3001/login/code/verify/register'
    const APIGetId = 'http://localhost:3001/login/getId'
    const [verifyCorrect, setVerifyCorrect] = useState('')
    const [verifyData2, setVerifyData2] = useState({})
    const whenVerSubmit = async (event) => {
        event.preventDefault() //避免傳統方式送出表單
        if (verifyCorrect === '') {
            const fd = new FormData(document.formV)
            const userAccount = localStorage.getItem('email')
            const accountData = {
                userAccount: userAccount,
            }
            console.log(accountData)
            const uIdFetch = await fetch(APIGetId, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(accountData),
            })
            const uId = await uIdFetch.json()
            console.log(uId[0])
            let obj = {}
            fd.forEach(function (value, key) {
                obj[key] = value
            })
            const json = await obj
            console.log(json)
            setVerifyData2(json)
            const newData = {
                id: uId[0],
                vData: json,
            }
            console.log(newData)
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
                setRow('finish')
            }
            if (result.message === 'codeError'){
                setVerifyCorrect('error')
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
                                    maxLength="3"
                                />
                                <img src="/Member/LineInVerify.svg" alt=""/>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="verifyCodeLast"
                                    name="verifyCodeLast"
                                    key="verifyCodeLast"
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

export default EmailVerify
