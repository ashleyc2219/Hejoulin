import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './Sidebar.scss'

function Sidebar(props) {
  const {
    level,
    setLevel,
    price,
    setPrice,
    sidebarToLoad1,
    sidebarToLoad2,
    sidebarToLoad3,
    levelToLoad,
    priceToLoad,
    markToLoad,
    mark,
    setMark,
    reset,
  } = props

  const history = useHistory()
  const linkTo = () => {
    history.push('/product/list')
  }

  const click1 = () => {
    try {
      if (level === '1') {
        setLevel('')
        levelToLoad()
      } else {
        const a = '1'
        setLevel(a)
        sidebarToLoad1()
      }
    } catch (e) {
      linkTo()
    }
  }
  const click2 = () => {
    try {
      if (level === '2') {
        setLevel('')
        levelToLoad()
      } else {
        const a = '2'
        setLevel(a)
        sidebarToLoad1()
      }
    } catch (e) {
      linkTo()
    }
  }
  const click3 = () => {
    try {
      if (level === '3') {
        setLevel('')
        levelToLoad()
      } else {
        const a = '3'
        setLevel(a)
        sidebarToLoad1()
      }
    } catch (e) {
      linkTo()
    }
  }
  const click4 = () => {
    try {
      if (level === '4') {
        setLevel('')
        levelToLoad()
      } else {
        const a = '4'
        setLevel(a)
        sidebarToLoad1()
      }
    } catch (e) {
      linkTo()
    }
  }
  const click5 = () => {
    try {
      if (level === '5') {
        setLevel('')
        levelToLoad()
      } else {
        const a = '5'
        setLevel(a)
        sidebarToLoad1()
      }
    } catch (e) {
      linkTo()
    }
  }
  const click6 = () => {
    try {
      if (level === '6') {
        setLevel('')
        levelToLoad()
      } else {
        const a = '6'
        setLevel(a)
        sidebarToLoad1()
      }
    } catch (e) {
      linkTo()
    }
  }

  const price1 = () => {
    try {
      if (price === '1') {
        setPrice('')
        priceToLoad()
      } else {
        const a = '1'
        setPrice(a)
        sidebarToLoad2()
      }
    } catch {
      linkTo()
    }
  }
  const price2 = () => {
    try {
      if (price === '2') {
        setPrice('')
        priceToLoad()
      } else {
        const a = '2'
        setPrice(a)
        sidebarToLoad2()
      }
    } catch {
      linkTo()
    }
  }
  const price3 = () => {
    try {
      if (price === '3') {
        setPrice('')
        priceToLoad()
      } else {
        const a = '3'
        setPrice(a)
        sidebarToLoad2()
      }
    } catch {
      linkTo()
    }
  }
  const price4 = () => {
    try {
      if (price === '4') {
        setPrice('')
        priceToLoad()
      } else {
        const a = '4'
        setPrice(a)
        sidebarToLoad2()
      }
    } catch {
      linkTo()
    }
  }
  const mark1 = () => {
    try {
      if (mark === '1') {
        setMark('')
        markToLoad()
      } else {
        const a = '1'

        setMark(a)
        sidebarToLoad3()
      }
    } catch {
      linkTo()
    }
  }
  return (
    <>
      <div className="sidebar">
        <div className="first">
          <ul>
            <li>
              <a onClick={linkTo}>購買清酒</a>
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
            <p className={level === '1' ? 'checked' : ''} onClick={click1}>
              吟釀
            </p>
            <p className={level === '2' ? 'checked' : ''} onClick={click2}>
              大吟釀
            </p>
            <p className={level === '3' ? 'checked' : ''} onClick={click3}>
              純米酒
            </p>
            <p className={level === '4' ? 'checked' : ''} onClick={click4}>
              純米吟釀
            </p>
            <p className={level === '5' ? 'checked' : ''} onClick={click5}>
              純米大吟釀
            </p>
            <p className={level === '6' ? 'checked' : ''} onClick={click6}>
              吟釀
            </p>
          </div>
        </div>
        <div className="third">
          <p>價格</p>
          <div className="price">
            <p className={price === '1' ? 'checked' : ''} onClick={price1}>
              $1000以下
            </p>
            <p className={price === '2' ? 'checked' : ''} onClick={price2}>
              $1000~$2000
            </p>
            <p className={price === '3' ? 'checked' : ''} onClick={price3}>
              $2000~$3000
            </p>
            <p className={price === '4' ? 'checked' : ''} onClick={price4}>
              $3000以上
            </p>
          </div>
        </div>
        <div className="other">
          <p>其他</p>
          <div className="custum">
            <p className={mark === '1' ? 'checked' : ''} onClick={mark1}>
              可酒標客製
            </p>
            <p onClick={reset}>重設</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
