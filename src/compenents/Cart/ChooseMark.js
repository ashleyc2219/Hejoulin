import React from 'react'
import { useState } from 'react'

const ChooseMark = (props) => {
  const { check, setCheck, mark_info } = props
  return (
    <>
      <div
        onClick={() => {
          setCheck(mark_info.mark_id)
        }}
        className={check === mark_info.mark_id ? 'mark markchecked' : 'mark'}
      >
        <div className="markname">{mark_info.mark_name}</div>
        <div className="markpic">
          <img
            src={'http://localhost:3001/images/mark_pic/' + mark_info.pics}
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default ChooseMark
