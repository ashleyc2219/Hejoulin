import { React, useState, useEffect } from 'react'
import ProgressBar from '../compenents/Cart/ProgressBar'
import SubConfirmCard from '../compenents/Sub/SubComfirmCard'
import './../styles/SubConfirm/SubConfirm.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import FetchMemberId from '../compenents/Member/FetchMemberId'

import Spinner from '../compenents/Shared/Spinner'
import AOS from 'aos'
import 'aos/dist/aos.css'

const SubConfirm = (props) => {
  const { subPlan, subTimeTotal, subTimeMonth, setSidebar } = props
  const [spin, setSpin] = useState(true)
  const [memberId, setMemberId] = useState('')
  // use aos
  useEffect(() => {
    let a = true
    AOS.init({
      duration: 2000,
    })
    setTimeout(() => {
      if (a) {
        setSpin(false)
      }
    }, 1000)
    ;(async () => {
      let member_id = await FetchMemberId(localStorage.getItem('token'))
      setMemberId(member_id)
    })()
  }, [])
  let subPlanMap =
    subPlan.length !== 0 ? subPlan : JSON.parse(localStorage.getItem('subPlan'))
  subPlanMap.sort(function (a, b) {
    return a.length - b.length
  })
  let subPlanString = subPlanMap.join('、')

  const stepContent = ['選擇方案', '選擇週期', '確認方案']
  function renderConfirmCard(subPlanMap) {
    return subPlanMap.map((v, i) => {
      return <SubConfirmCard key={i} planName={v} />
    })
  }
  return (
    <div className="SubConfirm">
      <img className="LineBg" src="/Sub/LineBg.svg" alt="" data-aos="zoom-in" />
      <div className="container" data-aos="fade-up">
        <ProgressBar step="three" content={stepContent} />
        <div className="main">
          <div className="top-order-list">{renderConfirmCard(subPlanMap)}</div>
          <div className="bottom-order-summary">
            <p>
              方案 <span> {subPlanString}</span>
            </p>
            <p>
              週期{' '}
              <span>
                {subTimeMonth
                  ? subTimeMonth
                  : localStorage.getItem('subTimeMonth')}
                個月
              </span>
            </p>
            <p>
              總計{' '}
              <span>
                $
                {subTimeTotal
                  ? subTimeTotal
                  : localStorage.getItem('subTimeTotal')}
                元
              </span>
            </p>
          </div>
        </div>
        <div className="buttons">
          <Link to="/sub/time">
            <button className="btn btn-primary">上一步</button>
          </Link>

          {memberId === 'noMemberId' ? (
            <button
              className="btn btn-secondary"
              onClick={() => {
                setSidebar(true)
                localStorage.setItem('subPlan', JSON.stringify(subPlan))
                localStorage.setItem(
                  'subTimeTotal',
                  JSON.stringify(subTimeTotal)
                )
                localStorage.setItem(
                  'subTimeMonth',
                  JSON.stringify(subTimeMonth)
                )
              }}
            >
              登入並結帳
            </button>
          ) : (
            <Link to="/sub/cart-info">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  const data = {
                    subPlan:
                      subPlan.length !== 0
                        ? subPlan
                        : JSON.parse(localStorage.getItem('subPlan')),
                    subTime: subTimeMonth
                      ? subTimeMonth
                      : localStorage.getItem('subTimeMonth'),
                    subTimeTotal: subTimeTotal
                      ? subTimeTotal
                      : localStorage.getItem('subTimeTotal'),
                  }
                  localStorage.setItem('subCart', JSON.stringify(data))
                }}
              >
                前往結賬
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default SubConfirm
