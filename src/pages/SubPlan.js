import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ProgressBar from '../compenents/Cart/ProgressBar'
import '../styles/SubPlan/SubPlan.scss'
import SubPlanCard from '../compenents/Sub/SubPlanCard'
import { useEffect, useState } from 'react'

const SubPlan = () => {
  const stepContent = ['選擇方案', '選擇週期', '確認方案']
  const [plans, setPlans] = useState([])
  useEffect(() => {
    ;(async () => {
      const r1 = await fetch(`http://localhost:3001/api/sub/sub-plan`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const obj = await r1.json()
      setPlans(obj)
    })()
  }, [])

  const renderPlans = (plans) => {
    if (plans.length) {
      return plans.map((p, i) => {
        return <SubPlanCard key={i} planInfo={p} />
      })
    } else {
      return ''
    }
  }
  return (
    <div className="SubPlan">
      <img className="LineBg" src="/Sub/LineBg.svg" alt="" />

      <div className="container">
        <ProgressBar step="one" content={stepContent} />
        <div className="main">
          <div className="left-planInfo">
            <div className="title">名譽清酒唎酒師為你精選季節性限定清酒。</div>
            <h4>
              名譽清酒唎酒師 <br />
              為你精選季節性限定清酒。
            </h4>
            <hr />
            <h5>選擇方案</h5>
            <p>
              從三種類型中選擇喜愛的日本酒類型，自由搭配您的月配方案。
              <br />
              [單支任選方案,兩隻任選方案,三隻方案皆可]
            </p>
          </div>
          <div className="right-planChoices">{renderPlans(plans)}</div>
        </div>
        <div className="button">
          <Link to="/sub/time">
            <button className="btn btn-secondary">下一步</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SubPlan
