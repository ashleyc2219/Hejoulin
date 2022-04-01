import React, { useEffect, useState } from 'react'
import './Question.scss'

import Chosen from './Chosen'

const Question = (props) => {
  const { setThickness, setSmooth, setSweet, setTemp, setGift } = props
  const [content, setContent] = useState([])

  const url = 'http://localhost:3001/api/guide_q'

  const fetchData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    const pro = data
    setContent(pro)
  }
  useEffect(() => {
    // setThickness('')
    // setSmooth('')
    // setSweet('')
    // setTemp('')
    // setGift('')
    fetchData()
  }, [])

  const question = content.map((v, i) => {
    return (
      <React.Fragment key={i}>
        <section className="main">
          <p className="question">{v.q_des}</p>
          <Chosen
            id={v.q_id}
            setThickness={setThickness}
            setSmooth={setSmooth}
            setSweet={setSweet}
            setTemp={setTemp}
            setGift={setGift}
          />
        </section>
      </React.Fragment>
    )
  })

  return <>{question}</>
}

export default Question
