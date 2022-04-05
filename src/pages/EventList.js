import React, { useState, useEffect, useRef } from 'react'
import './../styles/EventList/EventList.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import EventCard from '../compenents/Event/EventCard'
//import { Spinner } from 'react-bootstrap'
import Spinner from '../compenents/Shared/Spinner'

const EventList = () => {
  const [sort, setSort] = useState('')
  const [searchword, setSearchword] = useState('')
  const [spin, setSpin] = useState(false)
  const cat = useRef()
  const search = useRef()

  const catvalue = () => {
    setSort(cat.current.value)
    setSpin(true)

    setTimeout(() => {
      setSpin(false)
    }, 1000)
  }

  const enter = (e) => {
    if (e.key === 'Enter') {
      const word = search.current.value
      setSpin(true)

      setTimeout(() => {
        setSearchword(word)
        setSpin(false)
      }, 1000)
    }
  }

  return (
    <>
      <div className="EventList">
        <div className="search-bar">
          <div className="select">
            <select onChange={catvalue} ref={cat} name="sort" id="">
              <option value="全部" defaultValue>
                活動類別
              </option>
              <option value="品酒會">品酒會</option>
              <option value="餐酒會">餐酒會</option>
              <option value="講座">講座</option>
            </select>
          </div>
          <div className="search">
            <img src="/ProductList/search.svg" alt="" />
            <input ref={search} onKeyPress={enter} type="text" name="" id="" />
          </div>
        </div>
        <div className="event-list">
          {spin ? (
            <Spinner />
          ) : (
            ''
          )}
          {spin ? '' : <EventCard sort={sort} searchword={searchword} />}
        </div>
      </div>
    </>
  )
}

export default EventList
