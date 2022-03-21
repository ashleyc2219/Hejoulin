import React, { useState } from 'react'
import '../../../../styles/Member/Member-Event/EventData.scss'

const EventData = (props) => {
  const { user, setUser } = props
  const [data, setData] = useState({})
  const listNames = [
    { listName: '活動時間' },
    { listName: '活動訂單編號' },
    { listName: '活動名稱' },
    { listName: '付款時間' },
  ]
  const listType = (items) =>
    items.map((item, i) => <th key={i}>{item.listName}</th>)

  const getData = async () => {
    const obj = await (
      await fetch(
        'https://localhost:3001/user/member/MemberEventList'
      )
    ).json()
    console.log(obj)
    setData(obj)
  }
  const renderEventItems = () => {
    if (data.rows && data.rows.length) {
      return data.rows.map((el) => (
        <tr key={'test' + el.member_id}>
          <td>{el.event_time_start}</td>
          <td>{el.order_id}</td>
          <td>{el.event_name}</td>
          <td>{el.expire_date}</td>
          <button className="btn btn-primary">查看活動詳情</button>
        </tr>
      ))
    } else {
      return (
        <tr>
          <td>請先登入</td>
        </tr>
      )
    }
  }
  return (
    <>
      <table>
        <thead>
          <tr>{listType(listNames)}</tr>
        </thead>
        <tbody>{renderEventItems(getData)}</tbody>
      </table>
    </>
  )
}

export default EventData
