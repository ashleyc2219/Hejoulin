import React, { useState, useEffect } from 'react'
import './SakeButton.scss'

const SakeButton = (props) => {
  const [sakeButton, setSakeButton] = useState('')
  let display = 'none'
  let active = true

  const click = () => {
    if (active === true) {
    }
  }

  return (
    <div className="SakeButton">
      <button className={active ? 'empty' : 'empty-none'}>
        <img src="./../../../public/Gift/null_sake.svg" alt="" className="" />
        <span>點擊小酒瓶選擇商品</span>
      </button>
      <button className={active ? 'one' : 'one-none'}>
        <img src="./../../../public/Gift/full_sake.svg" alt="" className="" />
        <span>再加一瓶</span>
      </button>
      <button className="disable full">
        <img src="./../../../public/Gift/gray_sake.svg" alt="" className="" />
        <span>以選二瓶</span>
      </button>
      <button className={active ? 'cancel' : 'cancel-none'}>
        <img src="./../../../public/Gift/cancel.svg" alt="" className="" />
        <span>取消</span>
      </button>
    </div>
  )
}

export default SakeButton
