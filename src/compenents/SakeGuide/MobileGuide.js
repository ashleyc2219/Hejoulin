import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './MobileGuide.scss'

const MobileGuideButton = () => {
  return (
    <Link to="/sake-guide">
      <div className="Guide-mobile">
        <div className="circle"></div>
        <div className="arround">
          <img src="/SakeGuide/full_sake.svg" alt="" className="sake" />
          <p className="first">選酒指南</p>
        </div>
      </div>
    </Link>
  )
}

export default MobileGuideButton
