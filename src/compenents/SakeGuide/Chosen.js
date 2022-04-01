import React, { useState } from 'react'

import Answer from './Answer'

const Chosen = (props) => {
  const [answer, setAnswer] = useState('')
  const { id, setThickness, setSmooth, setSweet, setTemp, setGift } = props

  const setData = () => {
    switch (id) {
      case 1:
        if (answer === '清爽') {
          setThickness('輕盈')
        } else if (answer === '豐富') {
          setThickness('適中')
        } else {
          setThickness('')
        }
        break
      case 2:
        if (answer === '濃烈') {
          setSmooth('辛口')
        } else if (answer === '適中') {
          setSmooth('甘口')
        } else {
          setSmooth('')
        }
        break
      case 3:
        if (answer === '甜') {
          setSweet('偏甜')
        } else if (answer === '酸') {
          setSweet('偏酸')
        } else {
          setSweet('')
        }
        break
      case 5:
        if (answer === '送禮') {
          setGift(true)
        } else {
          setGift(false)
        }
        break
      case 6:
        if (answer === '冷藏飲用') {
          setTemp('冷酒')
        } else if (answer === '隔水加熱飲用') {
          setTemp('燗酒')
        } else if (answer === '常溫飲用') {
          setTemp('常溫')
        } else {
          setTemp('')
        }
        break
      default:
        break
    }
  }

  return (
    <>
      <Answer id={id} setAnswer={setAnswer} setData={setData} />
    </>
  )
}

export default Chosen
