import React from 'react'
import './SubTimeCard.scss'
import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'

const SubTimeCard = (props) => {
  const {
    timeInfo,
    subPlanTotal,
    time,
    setTime,
    oldTime,
    setOldTime,
    setTimeTotal,
    setTimeMonth,
  } = props

  let timeSelection = 0
  const controls = useAnimation()
  useEffect(() => {
    function test(time) {
      if (time === timeInfo.sub_time_month) {
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
        // console.log('wave up', timeInfo.sub_time_month)
      }
      if (oldTime === timeInfo.sub_time_month) {
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
        console.log('wave down', timeInfo.sub_time_month)
      }
    }
    test(time)
  }, [time])

  return (
    <>
      <motion.div
        className="timeChoice-card"
        onClick={() => {
          setOldTime(time)
          setTime(timeInfo.sub_time_month)
          setTimeTotal(
            subPlanTotal * timeInfo.sub_discount * timeInfo.sub_time_month
          )
          setTimeMonth(timeInfo.sub_time_month)
        }}
      >
        <div className="timeImg-container">
          <img src={`/Sub/Month_${timeInfo.sub_time_month}.png`} alt="" />
        </div>
        <div className="timeInfo-container">
          <p>{timeInfo.sub_time_month}</p>
          <h6>{subPlanTotal * timeInfo.sub_discount}</h6>
          <p>
            {subPlanTotal * timeInfo.sub_discount * timeInfo.sub_time_month}
          </p>
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

              duration: 2,
            }}
          />
        </svg>
      </motion.div>
    </>
  )
}

export default SubTimeCard
