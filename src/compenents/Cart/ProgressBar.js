import React from 'react'
import './ProgessBar.scss'

const StepBar = (props) => {
  const step = props.step
  const content = props.content
  return (
    <div className="progressBar">
      <ul>
        <li className={step === 'one' ? 'className = active' : ''}>
          {content[0]}
        </li>
        <li className={step === 'two' ? 'className = active' : ''}>
          {content[1]}
        </li>
        <li className={step === 'three' ? 'className = active' : ''}>
          {content[2]}
        </li>
      </ul>
    </div>
  )
}

export default StepBar
