import React, { useState } from 'react'
import './Answer.scss'

const Answer = (props) => {
  const { id, item } = props
  return (
    <>
      <div className="group">
        <div className="circle_group">
          <div className="inner_circle"></div>
          <div className="circle"></div>
        </div>
        <p className="answer">{item}</p>
      </div>
    </>
  )
}

export default Answer
