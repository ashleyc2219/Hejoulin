import React from 'react'
import './SubTimeCard.scss'
import { motion, useAnimation } from 'framer-motion'
import { useState } from 'react'

const SubTimeCard = (props) => {
  const {timeInfo} = props
  console.log(timeInfo)
  const controls = useAnimation()

  function onTap(event, info) {
    controls.start({
      d: [
        'M220 100.786H0V55.689c11.5-2 46.18-4.552 96 7.597C114.056 67.689 202.5 69 220 66.5v34.286z',
        'M220 100.972H0V51c43 3.5 34.5 24.686 100.5 5.5C131.896 47.373 174 31 220 43v57.972z',
        'M220 100.972H0V19.265c36.5-12 84.5 12.5 116.5 18.5C129 40.108 193 50.5 220 28v72.972z',
        'M220 101.972H0V1c71 33 68.576 8.827 126.5 4 12-1 79.5 5.735 93.5 21v75.972z',
      ],
    })
  }

  return (
    <motion.div className="timeChoice-card" onTap={onTap}>
      <div className="timeImg-container">
        <img src={`/Sub/Month_${timeInfo.sub_time_month}.png`} alt="" />
      </div>
      <div className="timeInfo-container">
        <p>{timeInfo.sub_time_month}</p>
        {/* TODO: 價錢(1800要從 Subplan 的方案傳過來) */}
        <h6>{1800 * timeInfo.sub_discount}</h6>
        <p>{1800 * timeInfo.sub_discount * timeInfo.sub_time_month}</p>
      </div>

      <svg
        style={{
          width: 209,
          height: 101,
        }}
      >
        <motion.path
          // initial={false}
          style={{
            fill: '#E6C49E',
            opacity: '.25',
          }}
          d=""
          // onTap={onTap}
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

export default SubTimeCard
