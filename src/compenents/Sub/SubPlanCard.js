import React from 'react'
import './SubPlanCard.scss'

const SubPlanCard = () => {
  return (
    <div className="planChoice-card">
      <div className="planImg-container">
        <img src="/Sub/riceOne.svg" alt="" />
      </div>
      <div className="planInfo-container">
        <h6>純米</h6>
        <p>精米步合度約70%</p>
        <p>1200</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="209"
        height="101"
        fill="none"
        viewBox="0 0 209 101"
      >
        <path
          fill="#E6C49E"
          d="M209 12.5C66 22 95.5-8.5 0 3v45h209V12.5z"
          opacity=".25"
        >
          <animate
            repeatCount="1"
            attributeName="d"
            dur="5s"
            fill="freeze"
            values="

            M209 .5C74.5.5 113 36 0 13.5V60h209V.5z;
            M209 3.5c-51.5 50-97.5-18-209 0V85h209V3.5z;
            M209 19.5C85.135-28.5 100.807 49.5 0 0v101h209V19.5z;
            
            "
          ></animate>
        </path>
      </svg>
    </div>
  )
}

export default SubPlanCard
