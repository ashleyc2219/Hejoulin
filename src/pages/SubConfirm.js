import React from 'react'
import ProgressBar from '../compenents/Cart/ProgressBar'
import SubConfirmCard from '../compenents/Sub/SubComfirmCard'
import './../styles/SubConfirm/SubConfirm.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const SubConfirm = () => {
  const stepContent = ['選擇方案', '選擇週期', '確認方案']
  return (
    <div className="SubConfirm">
      <img className="LineBg" src="/Sub/LineBg.svg" alt="" />
      <div className="container">
        <ProgressBar step="three" content={stepContent} />
        <div className="main">
          <div className="top-order-list">
            <SubConfirmCard />
            <SubConfirmCard />
            <SubConfirmCard />
          </div>
          <div className="bottom-order-summary">
            <p>
              方案 <span> 純米、純米吟釀、純米大吟釀</span>
            </p>
            <p>
              週期 <span>12個月</span>
            </p>
            <p>
              總計 <span>$17400元</span>
            </p>
          </div>
        </div>
        <div className="buttons">
          <Link to="/sub/time">
            <button className="btn btn-primary">上一步</button>
          </Link>
          <Link to="/sub/cart-list">
            <button className="btn btn-secondary">前往結賬</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SubConfirm
