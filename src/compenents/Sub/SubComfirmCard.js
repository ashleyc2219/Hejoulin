import React from 'react'
import './SubConfirmCard.scss'
import { motion, useAnimation } from 'framer-motion'
import { useState } from 'react'

const SubConfirmCard = (props) => {
  const { planName } = props
  const imgFile = genImgName()
  function genImgName() {
    if (planName === '純米') {
      return 1
    }
    if (planName === '純米吟釀') {
      return 2
    }
    if (planName === '純米大吟釀') {
      return 3
    }
  }
  return (
    <div className="confirm-card">
      <div className="confirmImg-container">
        <img src={`/Sub/rice_${imgFile}.svg`} alt="" />
      </div>
      <div className="confirmInfo-container">
        <h6>{planName}</h6>
      </div>
    </div>
  )
}

export default SubConfirmCard
