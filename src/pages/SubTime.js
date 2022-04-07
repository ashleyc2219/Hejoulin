import React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ProgressBar from '../compenents/Cart/ProgressBar'
import SubTimeCard from '../compenents/Sub/SubTimeCard'
import Spinner from '../compenents/Shared/Spinner'
import AOS from 'aos'
import 'aos/dist/aos.css'

import '../styles/SubTime/SubTime.scss'

const SubTime = (props) => {
  const { subPlan, subPlanTotal, setSubTimeTotal, setSubTimeMonth } = props
  const [spin, setSpin] = useState(true)

  // subTime subConfirm溝通用的state (subTimeTotal, subTimeMonth) 是外層的state

  // subTime, subTimeCard溝通用的
  const [time, setTime] = useState(0)
  const [oldTime, setOldTime] = useState(0)
  const [timeTotal, setTimeTotal] = useState(0)
  const [timeMonth, setTimeMonth] = useState(0)
  // 訂閱方案 字串排序
  let subPlanString = subPlan
  subPlanString.sort(function (a, b) {
    return a.length - b.length
  })
  subPlanString = subPlanString.join('、')

  // stepbar
  const stepContent = ['選擇方案', '選擇週期', '確認方案']
  const [times, setTimes] = useState([])
  useEffect(() => {
    let a = true
    ;(async () => {
      const r1 = await fetch(`http://localhost:3001/api/sub/sub-time`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const obj = await r1.json()
      const data = obj
      if (a) {
        setTimes(data)
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

  const renderTimes = (times) => {
    if (times.length) {
      return times.map((t, i) => {
        return (
          <SubTimeCard
            key={i}
            timeInfo={t}
            subPlanTotal={subPlanTotal}
            time={time}
            setTime={setTime}
            oldTime={oldTime}
            setOldTime={setOldTime}
            setTimeTotal={setTimeTotal}
            setTimeMonth={setTimeMonth}
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
    <div className="SubTime">
      <img className="LineBg" src="/Sub/LineBg.svg" alt="" data-aos="zoom-in" />

      <div className="container" data-aos="fade-up">
        <ProgressBar step="two" content={stepContent} />
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
              你選擇了 <span>{subPlanString}</span>
            </p>
          </div>
          <div className="right-planChoices">{renderTimes(times)}</div>
        </div>
        <div className="buttons">
          <Link to="/sub/plan">
            <button className="btn btn-primary">上一步</button>
          </Link>
          {time !== 0 ? (
            <Link to="/sub/confirm">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setSubTimeTotal(timeTotal)
                  setSubTimeMonth(timeMonth)
                }}
              >
                下一步
              </button>
            </Link>
          ) : (
            <Link to="/sub/confirm">
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

export default SubTime
