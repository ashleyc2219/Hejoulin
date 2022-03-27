import React, { useEffect, useState } from 'react'
import './Question.scss'

const Question = () => {
  const [content, setContent] = useState([])
  const url = 'http://localhost:3500/api/guide_q'

  const fetchData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    const pro = data
    setContent(pro)
  }

  const question = content.map((v, i) => {
    return (
      <React.Fragment key={i}>
        <section className="main">
          <p className="question">{v.q_des}</p>
          <div className="group">
            <div className="circle_group">
              <div className="inner_circle"></div>
              <div className="circle"></div>
            </div>
            <p className="answer">清爽</p>
          </div>
          <div className="group">
            <div className="circle_group">
              <div className="circle"></div>
              <div className="inner_circle"></div>
            </div>
            <p className="answer">豐富</p>
          </div>
          <div className="group">
            <div className="circle_group">
              <div className="circle"></div>
              <div className="inner_circle"></div>
            </div>
            <p className="answer">兩者皆可</p>
          </div>
        </section>
      </React.Fragment>
    )
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchData()
  }, [])
  return <>{question}</>
}

export default Question
