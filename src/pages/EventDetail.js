import React, { useEffect, useState } from 'react'
import './../styles/EventDetail/EventDetail.scss'
import { useParams } from 'react-router-dom'
import Spinner from '../compenents/Shared/Spinner'
import AOS from 'aos'
import 'aos/dist/aos.css'

const EventDetail = () => {
  const [data, setData] = useState([])
  const { id } = useParams()
  const [spin, setSpin] = useState(true)
  const url = `${process.env.REACT_APP_BACKEND_URL}/api/event?eventId=` + id

  useEffect(() => {
    let a = true

    setTimeout(() => {
      if (a) {
        setSpin(false)
      }
    }, 1000)
    AOS.init({
      duration: 2000,
    })
    return () => {
      a = false
    }
  }, [])

  const Detail = data.map((v) => {
    return (
      <React.Fragment key={v.event_id}>
        <div className="main-container" data-aos="fade-up">
          <img
            src={`${process.env.REACT_APP_BACKEND_URL}/images/event_pic/` + v.event_cover}
            alt=""
          />
          <div className="event-info">{v.event_brief}</div>
        </div>
        <div className="signup-container" data-aos="fade-left">
          <div className="title">{v.event_name}</div>
          <div className="dateinfo">
            <div className="datetitle">日期：</div>
            <div className="date">
              {v.event_time_start}
              {' ~ ' + v.event_time_end}
            </div>
          </div>
          <div className="locainfo">
            <div className="locatitle">地點：</div>
            <div className="loca">{v.event_location}</div>
          </div>
          <div className="price">NT${v.event_cost}</div>
          <button className="btn btn-primary">立即報名</button>
        </div>
      </React.Fragment>
    )
  })

  useEffect(() => {
    let a = true

    const fetchData = async () => {
      const res = await fetch(url)
      const data = await res.json()
      if (a) {
        setData(data)
      }
    }
    fetchData()
    return () => {
      a = false
    }
  }, [])

  return (
    <>
      <div className="eventDetail">{spin ? <Spinner /> : Detail}</div>
    </>
  )
}

export default EventDetail
