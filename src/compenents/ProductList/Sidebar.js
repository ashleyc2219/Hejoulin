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
        <div className="second">
          <div className="filter">
            <a>篩選</a>
          </div>
          <p>等級</p>
          <div className="level">
            <input type="radio" name="level" id="吟釀" value="吟釀" />
            <label htmlFor="吟釀">
              <p>吟釀</p>
            </label>
            <input type="radio" name="level" id="大吟釀" value="大吟釀" />
            <label htmlFor="大吟釀">
              <p>大吟釀</p>
            </label>
            <input type="radio" name="level" id="純米酒" value="純米酒" />
            <label htmlFor="純米酒">
              <p>純米酒</p>
            </label>
            <input type="radio" name="level" id="純米吟釀" value="純米吟釀" />
            <label htmlFor="純米吟釀">
              <p>純米吟釀</p>
            </label>
            <input
              type="radio"
              name="level"
              id="純米大吟釀"
              value="純米大吟釀"
            />
            <label htmlFor="純米大吟釀">
              <p>純米大吟釀</p>
            </label>
            <input type="radio" name="level" id="本釀造" value="本釀造" />
            <label htmlFor="本釀造">
              <p>吟釀</p>
            </label>
          </div>
        </div>
        <div className="third">
          <p>價格</p>
          <div className="price">
            <input type="radio" name="price" id="7" value="7" />
            <label htmlFor="7">
              <p>1000以下</p>
            </label>
            <input type="radio" name="price" id="8" value="8" />
            <label htmlFor="8">
              <p>1000~2000</p>
            </label>
            <input type="radio" name="price" id="9" value="9" />
            <label htmlFor="9">
              <p>2000~3000</p>
            </label>
          </div>
        </div>
        <div className="other">
          <p>其他</p>
          <div className="custum">
            <input type="checkbox" name="mark" id="1" value="1" />
            <label htmlFor="1">可酒標客製</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
