import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './MobileGuide.scss'

const MobileGuideButton = ({style}) => {
  let a = {top: style + 'px'}
  return (
    <Link to="/sake-guide">
      <div className="Guide-mobile" style={a}>
        <div className="circle"></div>
        <div className="arround">
          <img src="/SakeGuide/full_sake.svg" alt="" className="sake" />
          <p className="first">ιΈιζε</p>
        </div>
      </div>
    </Link>
  )
}

export default MobileGuideButton
