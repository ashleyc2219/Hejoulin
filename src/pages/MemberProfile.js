import React from 'react'
import Sidebar from '../compenents/Member/Sidebar'
import ProfileBox from '../compenents/Member/ProfileBox'
import '../styles/Member/MemberProfile.scss'
import { Link } from 'react-router-dom'

const MemberProfile = (props) => {
  const { user, setUser } = props
  return (
    <>
      <div className="MemberProfile">
        <Sidebar />
        <div className="MemberProfileBox">
          <div className="container">
            <div className="MemberProfileBar">
              <div className="ProfileBar-item-box">
                <Link to="main" className="ProfileBar-item">
                  個人資訊
                </Link>
              </div>
              <div className="ProfileBar-item-box">
                <Link to="address" className="ProfileBar-item">
                  收件資訊
                </Link>
              </div>
              <div className="ProfileBar-item-box">
                <Link to="password" className="ProfileBar-item">
                  更改密碼
                </Link>
              </div>
              <div className="ProfileBar-item-box">
                <Link to="payment" className="ProfileBar-item">
                  信用卡 / 付款方式
                </Link>
              </div>
            </div>
            {user ? <ProfileBox /> : <div>請先登入</div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberProfile
