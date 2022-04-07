import React, { useEffect, useState } from 'react'
import '../../../../styles/Member/Member-Event/EventData.scss'
import {Link} from "react-router-dom";

const EventData = (props) => {
  const { user, setUser } = props
  const [eventData, setEventData] = useState({})
  const listNames = [
    { listName: '活動時間' },
    { listName: '活動訂單編號' },
    { listName: '活動名稱' },
    { listName: '付款時間' },
  ]
  const listType = (items) =>
    items.map((item, i) => <th key={i}>{item.listName}</th>)

  useEffect(() => {
    ;(async () => {
      const obj = await (
        await fetch('http://localhost:3001/user/member/MemberEventList', {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + localStorage.token,
          },
        })
      ).json()
      console.log(obj)
      setEventData(obj)
    })()
  }, [])

  const renderEventItems = (eventData) => {
    if (eventData && eventData.length) {
      console.log(eventData)
      return eventData.map((el) => (
        <tr key={'test' + el.member_id}>
          <td>{el.event_time_start}</td>
          <td>{el.order_id}</td>
          <td>{el.event_name}</td>
          <td>{el.order_d_id.slice(0, 8)}</td>
          <td>
              <Link to="/member/event-list/detail">
                  <button className="btn btn-primary">查看活動詳情</button>
              </Link>
          </td>
        </tr>
      ))
    } else {
      return (
        <tr>
          <td></td>
        </tr>
      )
    }
  }
  return (
    <>
      <div className="eventData">
        <table>
          <thead>
            <tr>{listType(listNames)}</tr>
          </thead>
          <tbody>{renderEventItems(eventData)}</tbody>
        </table>
      </div>
    </>
  )
}

export default EventData
