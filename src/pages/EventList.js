import React, { useState, useEffect, useRef } from 'react'
import './../styles/EventList/EventList.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import EventCard from '../compenents/Event/EventCard'

const EventList = () => {
  const [sort, setSort] = useState('')
  const [searchword, setSearchword] = useState('')
  const cat = useRef()
  const search = useRef()

  const catvalue = () => {
    setSort(cat.current.value)
  }

  const enter = (e) => {
    if (e.key === 'Enter') {
      const word = search.current.value
      setSearchword(word)
      console.log('enter')
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
          <EventCard sort={sort} searchword={searchword} />
        </div>
      </div>
    </>
  )
}

export default EventList
