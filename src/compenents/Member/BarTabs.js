import React from 'react'
import { Link } from 'react-router-dom'

function BarTabs() {
  const renderTabs = (items) => {
    items.map((item, i) => {
      <Link to="main" className="ProfileBar-item" key={i}>
          {item.itemName}
      </Link>
    })
  }
  return (
    <>
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
          <Link to="payment" className="payment">
            信用卡 / 付款方式
          </Link>
        </div>
      </div>
    </>
  )
}

export default BarTabs
