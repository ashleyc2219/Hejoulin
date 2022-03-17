import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './Sidebar.scss'

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="first">
          <ul>
            <li>
              <Link to="/product/list">購買清酒</Link>
            </li>
            <li>
              <Link to="/gift">清酒禮盒</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
