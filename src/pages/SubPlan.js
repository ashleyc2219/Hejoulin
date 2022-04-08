import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ProgressBar from '../compenents/Cart/ProgressBar'
import '../styles/SubPlan/SubPlan.scss'
import SubPlanCard from '../compenents/Sub/SubPlanCard'
import Spinner from '../compenents/Shared/Spinner'
import AOS from 'aos'
import 'aos/dist/aos.css'


import { useEffect, useState } from 'react'

const SubPlan = (props) => {
  const { subPlan, setSubPlan, subPlanTotal, setSubPlanTotal } = props
  const [spin, setSpin] = useState(true)

  const stepContent = ['選擇方案', '選擇週期', '確認方案']
  const [plans, setPlans] = useState([])
  // subPlan、subPlanCard溝通用的state
  const [planSelections, setPlanSelections] = useState([])
  const [planTotal, setPlanTotal] = useState(0)
  useEffect(() => {
    let a = true
    window.scrollTo(0, 0)
    ;(async () => {
      const r1 = await fetch(`http://localhost:3001/api/sub/sub-plan`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const obj = await r1.json()
      if (a) {
        setPlans(obj)
      }
    })()
    setTimeout(() => {
      if (a) {
        setSpin(false)
      }
    }, 1000)
  }, [])
  // use aos
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  const renderPlans = (plans) => {
    if (plans.length) {
      return plans.map((p, i) => {
        return (
          <SubPlanCard
            key={i}
            planInfo={p}
            planSelections={planSelections}
            setPlanSelections={setPlanSelections}
            planTotal={planTotal}
            setPlanTotal={setPlanTotal}
          />
        )
      })
    } else {
      return ''
    }
  }
  return spin ? (
    <Spinner />
  ) : (
    <div className="SubPlan">
      <img className="LineBg" src="/Sub/LineBg.svg" alt="" data-aos="zoom-in" />

      <div className="container" data-aos="fade-up">
        <ProgressBar step="one" content={stepContent} />
        <div className="main">
          <div className="left-planInfo">
            <div className="title">名譽清酒唎酒師為你精選季節性限定清酒。</div>
            <h4>
              名譽清酒唎酒師 <br />
              為你精選季節性限定清酒
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
          {planSelections.length > 0 ? (
            <Link to="/sub/time">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setSubPlan(planSelections)
                  setSubPlanTotal(planTotal)
                }}
              >
                下一步
              </button>
            </Link>
          ) : (
            <Link to="/sub/time">
              <button className="btn btn-secondary" disabled>
                下一步
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default SubPlan
