import React, { useState, useEffect } from 'react'
import './Answer.scss'

const Answer = (props) => {
  const { id, setAnswer, setData, setId, height, seq, plus,} = props
  const [detail, setDetail] = useState([])
  const url = 'http://localhost:3001/api/guide_a'

  const fetchData = async () => {
    const res = await fetch(url + '?id=' + id)
    const data = await res.json()
    const pro = data
    setDetail(pro)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const answer = detail.map((v, i) => {
    return (
      <React.Fragment key={i}>
        <div
          className="group"
          onClick={() => {
            setId(id)
            setAnswer(v.a_item)
            setData()
            setTimeout(() => {
              window.scroll({
                top: height * seq,
                left: 0,
                behavior: 'smooth',
              })
              plus()
            }, 500)
          }}
        >
          <div className="circle_group">
            <div className="inner_circle"></div>
            <div className="circle"></div>
          </div>
          <p className="answer">{v.a_item}</p>
        </div>
      </React.Fragment>
    )
  })

  return <>{answer}</>
}

export default Answer
