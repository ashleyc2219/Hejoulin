import React from 'react'
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import './Guide.scss'

const GuideButton = ({ compare }) => {
  const location = useLocation()
  
  let style = { bottom: '-20px' }

  if (
    location.pathname.includes('/product/list') ||
    location.pathname.includes('/product/detail')
  ) {
    if (compare.length === 1) {
      style = { bottom: '-170px' }
    } else if (compare.length === 2) {
      style = { bottom: '-320px' }
    } else if (compare.length === 3) {
      style = { bottom: '-470px' }
    }
  }
  return (
    <div className="Guide">
      <div className="loca" style={style}>
        <div className="arround">
          <p className="first">選</p>
          <p className="sen">酒</p>
          <p className="thr">指</p>
          <p className="four">南</p>
          <img src="/SakeGuide/trian.svg" alt="" className="trian" />
        </div>
        <Link className="link-wrap" to="/sake-guide">
          <div className="round">
            <img src="/SakeGuide/guidesake.svg" alt="" className="sake" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default GuideButton
