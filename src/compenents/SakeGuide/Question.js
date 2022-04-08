import React, { useEffect, useState } from 'react'
import './Question.scss'

import Answer from './Answer'

const Question = (props) => {
  const {
    setThickness,
    setSmooth,
    setSweet,
    setTemp,
    setGift,
    height,
    first,
    plus,
  } = props
  const [content, setContent] = useState([])
  const [id, setId] = useState(0)
  const [answer, setAnswer] = useState([])
  const [show02, setShow02] = useState(false)
  const [show03, setShow03] = useState(false)
  const [show04, setShow04] = useState(false)

  const url = 'http://localhost:3001/api/guide_q'

  const fetchData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    const pro = data
    setContent(pro)
  }
  useEffect(() => {
    window.scroll(0, 0)
    fetchData()
  }, [])

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

  const question = content.map((v, i) => {
    return (
      <React.Fragment key={i}>
        <section
          className={`main 
        ${first ? '' : 'guide_test'}
        `}
        >
          <p className="question">{v.q_des}</p>
          <Answer
            id={v.q_id}
            setAnswer={setAnswer}
            setId={setId}
            setData={setData}
            height={height}
            seq={i + 2}
            setShow02={setShow02}
            setShow03={setShow03}
            setShow04={setShow04}
            plus={plus}
          />
        </section>
      </React.Fragment>
    )
  })

  return <>{question}</>
}

export default Question
