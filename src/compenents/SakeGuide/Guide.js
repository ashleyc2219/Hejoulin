import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './Guide.scss'

const GuideButton = () => {
  return (
    <div className="Guide">
      <div className="loca">
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
