import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './Sidebar.scss'

function Sidebar() {
  let history = useHistory()

  function toList() {
    history.push('/product/list')
    history.go(0)
  }
  const click1 = () => {
    console.log('1')
  }


  return (
    <>
      <div className="sidebar">
        <div className="first">
          <ul>
            <li>
              <a onClick={toList}>購買清酒</a>
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
            <p onClick={click1}>吟釀</p>
            <p onClick={click1}>大吟釀</p>
            <p onClick={click1}>純米酒</p>
            <p onClick={click1}>純米吟釀</p>
            <p onClick={click1}>純米大吟釀</p>
            <p onClick={click1}>吟釀</p>
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
