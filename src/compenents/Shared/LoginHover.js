import React from 'react'

const LoginHover = ({ showSidebar }) => {
  return (
    <>
      <div className="loginHover">
        <img
          className="loginIcon"
          alt=""
          src="/Shared/loginIcon.svg"
          onClick={showSidebar}
        />
        <img
          className="logindefault"
          alt=""
          src="/Shared/logindefault.svg"
          onClick={showSidebar}
        />
        <span className='loginFont'>登入</span>
      </div>
    </>
  )
}

export default LoginHover
