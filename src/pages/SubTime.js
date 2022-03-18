import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ProgressBar from '../compenents/Cart/ProgressBar'
import SubTimeCard from '../compenents/Sub/SubTimeCard'

import '../styles/SubTime/SubTime.scss'

const SubTime = () => {
  const stepContent = ['選擇方案', '選擇週期', '確認方案']
  return (
    <div className="SubTime">
      <img className="LineBg" src="/Sub/LineBg.svg" alt="" />

      <ProgressBar step="two" content={stepContent} />
      <div className="container">
        <div className="main">
          <div className="left-planInfo">
            <h4>
              名譽清酒唎酒師 <br />
              為你精選季節性限定清酒
            </h4>
            <hr />
            <h5>選擇週期</h5>
            <p>
              請選擇訂閱週期。
              <br />
              越長的訂閱週期越多折扣。
            </p>
            <p>
              你選擇了 <span>純米大吟釀</span>
            </p>
          </div>
          <div className="right-planChoices">
            <SubTimeCard />
            <SubTimeCard />
            <SubTimeCard />
          </div>
        </div>
        <div className='buttons'>
          <Link to="/sub/plan">
            <button className="btn btn-primary">上一步</button>
          </Link>
          <Link to="/sub/confirm">
            <button className="btn btn-secondary">下一步</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SubTime
