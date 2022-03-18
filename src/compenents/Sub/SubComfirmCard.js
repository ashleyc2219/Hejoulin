import React from 'react'
import './SubConfirmCard.scss'
import { motion, useAnimation } from 'framer-motion'
import { useState } from 'react'

const SubConfirmCard = (props) => {
  return (
    <div className="confirm-card">
      <div className="confirmImg-container">
        <img src="/Sub/riceOne.svg" alt="" />
      </div>
      <div className="confirmInfo-container">
        <h6>純米</h6>
      </div>
    </div>
  )
}

export default SubConfirmCard
