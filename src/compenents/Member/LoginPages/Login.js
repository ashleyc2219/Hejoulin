import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import '../../../styles/Member/Member-Login/LoginContext.scss'
import Register from './Register'
import EmailVerify from './EmailVerify'
import AccountCheck from './AccountCheck'
import FinishRegister from './FinishRegister'
import SetNewPass from './SetNewPass'
import EmailVerify2 from "./EmailVerify2";
import LoginModal from "./LoginModal";

const Login = (props) => {
    const {user, setUser, sidebar, setSidebar} = props
    const [row, setRow] = useState('login')
    const [userToken, setUserToken] = useState('')
    const [verifyAccount, setVerifyAccount] = useState('')
    const [loginModalShow, setLoginModalShow] = useState(false)
    const [loginProcess, setLoginProcess] = useState('default')
    const [forgetPassData, setForgetPassData] = useState([])
    const APILogin = 'http://localhost:3001/login/login'
    let history = useHistory()

    const whenLoginSubmit = async (event) => {
        event.preventDefault() //避免傳統方式送出表單

        const fd = new FormData(document.form1)
        const r = await fetch(APILogin, {
            method: 'POST',
            body: fd,
        })

        const obj = await r.json()
        console.log(obj)

        if (obj.success === false) {
            setVerifyAccount('wrong')
            return
        }
        if (obj.success === true) {
            // setLoginProcess('loginSuccess')
            history.go(0)
            localStorage.setItem('token', obj.token)
            localStorage.setItem('account', obj.info)
        }
        if (loginProcess === 'loginSuccess') {
            setLoginModalShow((prev) => !prev)
        }
        if (loginProcess === 'finish') {
            // history.go(0)
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
                                <br/>
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
                                            <div
                                                className="errMsg"
                                                style={{
                                                    color: "red",
                                                    display: verifyAccount === 'wrong' ? 'inline-block' : 'none'
                                                }}
                                            >
                                                帳號或是密碼輸入錯誤
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
                    userToken={userToken}
                    setUserToken={setUserToken}
                />
            ) : row === 'forgetPass' ? (
                <AccountCheck
                    row={row}
                    setRow={setRow}
                    forgetPassData={forgetPassData}
                    setForgetPassData={setForgetPassData}
                />
            ) : row === 'verify' ? (
                <EmailVerify row={row} setRow={setRow}/>
            ) : row === 'verify2' ? (
                <EmailVerify2
                    row={row}
                    setRow={setRow}
                    forgetPassData={forgetPassData}
                    setForgetPassData={setForgetPassData}
                />
            ) : row === 'finish' ? (
                <FinishRegister
                    row={row}
                    setRow={setRow}
                    sidebar={sidebar}
                    setSidebar={setSidebar}
                />
            ) : row === 'setNewPass' ? (
                <SetNewPass
                    row={row}
                    setRow={setRow}
                    forgetPassData={forgetPassData}
                    setForgetPassData={setForgetPassData}
                />
            ) : null}
            {/*{loginModalShow ? (*/}
            {/*    <LoginModal*/}
            {/*        loginModalShow={loginModalShow}*/}
            {/*        setLoginModalShow={setLoginModalShow}*/}
            {/*        loginProcess={loginProcess}*/}
            {/*        setLoginProcess={setLoginProcess}*/}
            {/*    />*/}
            {/*) : (*/}
            {/*    ''*/}
            {/*)}*/}
        </>
    )
}

export default Login
