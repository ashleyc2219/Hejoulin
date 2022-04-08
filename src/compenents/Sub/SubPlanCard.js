import React from 'react'
import './SubPlanCard.scss'
import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const SubPlanCard = (props) => {
  // use aos
  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
  }, [])
  const {
    planInfo,
    planSelections,
    setPlanSelections,
    planTotal,
    setPlanTotal,
  } = props
  let ricePercent = 0
  if (planInfo.sub_plan === '純米') {
    ricePercent = 70
  }
  if (planInfo.sub_plan === '純米吟釀') {
    ricePercent = 60
  }
  if (planInfo.sub_plan === '純米大吟釀') {
    ricePercent = 50
  }
  const controls = useAnimation()
  let chosen = false
  function UpdatePlanSelections() {
    let selections = [...planSelections]
    let total = planTotal
    if (!selections.includes(planInfo.sub_plan)) {
      selections = [...selections, planInfo.sub_plan]
      setPlanSelections([...selections])
      total += parseInt(planInfo.sub_price)
      setPlanTotal(total)
      controls.start({
        fill: '#E6C49E',
        display: 'block',
        d: [
          'M220 100.786H0V55.689c11.5-2 46.18-4.552 96 7.597C114.056 67.689 202.5 69 220 66.5v34.286z',
          'M220 100.972H0V51c43 3.5 34.5 24.686 100.5 5.5C131.896 47.373 174 31 220 43v57.972z',
          'M220 100.972H0V19.265c36.5-12 84.5 12.5 116.5 18.5C129 40.108 193 50.5 220 28v72.972z',
          'M220 101.972H0V1c71 33 68.576 8.827 126.5 4 12-1 79.5 5.735 93.5 21v75.972z',
        ],
      })
    } else {
      let filteredSelections = selections.filter((s) => s !== planInfo.sub_plan)
      selections = filteredSelections
      setPlanSelections([...selections])
      total -= parseInt(planInfo.sub_price)
      setPlanTotal(total)
      controls.start({
        fill: '#E6C49E',
        d: [
          // 'M220 101.972H0V1c71 33 68.576 8.827 126.5 4 12-1 79.5 5.735 93.5 21v75.972z',
          'M220 100.972H0V19.265c36.5-12 84.5 12.5 116.5 18.5C129 40.108 193 50.5 220 28v72.972z',
          'M220 100.972H0V51c43 3.5 34.5 24.686 100.5 5.5C131.896 47.373 174 31 220 43v57.972z',
          'M220 100.786H0V55.689c11.5-2 46.18-4.552 96 7.597C114.056 67.689 202.5 69 220 66.5v34.286z',
        ],
        transitionEnd: {
          display: 'none',
        },
      })
    }
    console.log(planTotal)
  }

  return (
    <motion.div
      className="planChoice-card"
      onTap={UpdatePlanSelections}
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      // onClick={}
    >
      <div className="planImg-container">
        <img src={`/Sub/rice_${planInfo.sub_id}.svg`} alt="" />
      </div>
      <div className="planInfo-container">
        <h6>{planInfo.sub_plan}</h6>
        <p>精米步合度約{ricePercent}%</p>
        <p>{planInfo.sub_price}</p>
      </div>

      <svg
        style={{
          width: 209,
          height: 101,
        }}
      >
        <motion.path
          style={{
            fill: '#E6C49E',
            opacity: '.25',
          }}
          d=""
          animate={controls}
          transition={{
            repeat: 0,
            // ease: 'easeInOut',
            duration: 2,
          }}
        />
      </svg>
    </motion.div>
  )
}

export default SubPlanCard
