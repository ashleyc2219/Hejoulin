import React from "react";

const LoginModal = (props) => {
const { loginModalShow, setLoginModalShow, loginProcess, setLoginProcess } = props

    const openModal = () => {
        setLoginModalShow((prev) => !prev)
        setLoginProcess('finish')
    }

    function resultCheck() {
        if (loginProcess === 'loginSuccess') {
            return 'grey'
        } else {
            return 'red'
        }
    }

    return (
        <>
            <div className="displayBlock" onClick={openModal}>
                <div className="loginModal">
                    <div className="close-white" onClick={openModal}>
                        <img src="/ProductList/close-white.svg" alt=""/>
                    </div>
                    <div className="mobile-close" onClick={openModal}>
                        <img src="/ProductList/close-black.svg" alt=""/>
                    </div>
                    <div
                        className="form-text rsMsg"
                        id="displayRs"
                        style={{
                            color: resultCheck(),
                            display: resultCheck() === 'grey' ? 'inline-block' : 'none',
                        }}
                    >
                        <p>修改成功!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginModal