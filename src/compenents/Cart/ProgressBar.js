import React from 'react'
import './ProgessBar.scss'

const StepBar = (props) => {
  const step = props.step
  return (
    <div className="progressBar">
      <ul>
        <li className={step === 'one' ? 'className = active' : ''}>購物車</li>
        <li className={step === 'two' ? 'className = active' : ''}>填寫資訊</li>
        <li className={step === 'three' ? 'className = active' : ''}>
          訂單成立
        </li>
      </ul>
    </div>
  )
}

export default StepBar
