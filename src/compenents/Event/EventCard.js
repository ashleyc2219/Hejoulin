import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NoResult from '../ProductList/NoResult'

const EventCard = ({ sort, searchword }) => {
  const [data, setData] = useState([])
  const [noresult, setNoresult] = useState(false)
  const event_card = data.map((v, i) => {
    let a
    let b
    // 設定活動分類對應的顏色
    if (v.event_cat_id === 1) {
      a = 'cat1'
      b = 'hover1'
    }
    if (v.event_cat_id === 2) {
      a = 'cat2'
      b = 'hover2'
    }
    if (v.event_cat_id === 3) {
      a = 'cat3'
      b = 'hover3'
    }
    return (
      <div key={i} className="event-card">
        <Link className={b} to={'/event/detail/' + v.event_id}>
          <img
            src={'http://localhost:3001/images/event_pic/' + v.event_cover}
            alt=""
          />
          <div className="info">
            <div className="loca-cat">
              <div className={a}>{v.event_cat_name}</div>
            </div>
            <div className="date">{v.event_due.slice(0, 10)}</div>
          </div>
          <div className="title">{v.event_name}</div>
        </Link>
      </div>
    )
  })
  useEffect(() => {
    let a = true

    const fetchData = async () => {
      const res = await fetch('http://localhost:3001/api/event')
      const obj = await res.json()
      const obj1 = obj
      if (a) {
        setData(obj1)
      }
    }
    fetchData()
    return () => {
      a = false
    }
  }, [])

  useEffect(() => {
    let a = true

    const fetchData = async () => {
      const res = await fetch('http://localhost:3001/api/event')
      let obj = await res.json()

      if (sort === '品酒會') {
        obj = obj.filter(function (v, i) {
          return v.event_cat_name === sort
        })
      }
      if (sort === '餐酒會') {
        obj = obj.filter(function (v, i) {
          return v.event_cat_name === sort
        })
      }
      if (sort === '講座') {
        obj = obj.filter(function (v, i) {
          return v.event_cat_name === sort
        })
      }
      if (searchword.length > 0) {
        obj = obj.filter(function (v, i) {
          return v.event_name.toUpperCase().includes(searchword.toUpperCase())
        })
      }
      if (a) {
        if (obj.length === 0) {
          setNoresult(true)
        } else {
          setNoresult(false)
        }
        setData(obj)
      }
    }

    fetchData()

    return () => {
      a = false
    }
  }, [sort, searchword])
  
  return <>{noresult ? <NoResult /> : event_card}</>
}

export default EventCard
