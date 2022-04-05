import React from 'react'
import '../../../styles/Member/Member-Login/FinishRegister.scss'
import { Link } from 'react-router-dom'

const FinishRegister = ({ sidebar, setSidebar, row, setRow }) => {
  const showSidebar = () => {
    setSidebar(!sidebar)
    setRow('login')
  }
  return (
    <>
      <div className="FinishRegister">
        <div className="FinishRegisterBox">
          <h3>恭喜您完成註冊</h3>
          <div className="link-g">
            <Link to="/member/profile">
              <button className="btn btn-primary" onClick={showSidebar}>
                前往完成填寫會員資訊
              </button>
            </Link>
            <Link to="/product/list">
              <button className="btn btn-secondary" onClick={showSidebar}>
                立即前往選購商品
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default FinishRegister
