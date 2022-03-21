import React, { useState } from 'react'
import '../../../../styles/Member/Member-Sub/SubData.scss'

const SubData = (props) => {
  const { user, setUser } = props
  const [data, setData] = useState({})
  const listNames = [
    { listName: '訂閱開始時間' },
    { listName: '訂閱名稱' },
    { listName: '訂閱價格' },
    { listName: '訂閱狀態' },
  ]
  const listType = (items) =>
    items.map((item, i) => <th key={i}>{item.listName}</th>)

  const getData = async () => {
    const obj = await (
      await fetch('https://localhost:3001/user/member/MemberEventList')
    ).json()
    console.log(obj)
    setData(obj)
  }
  const renderSubItems = () => {
    if (data.rows && data.rows.length) {
      return data.rows.map((el) => (
        <tr key={'test' + el.member_id}>
          <td>{el.event_time_start}</td>
          <td>{el.order_id}</td>
          <td>{el.event_name}</td>
          <td>{el.expire_date}</td>
          <button className="btn btn-primary">管理訂閱</button>
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
        <tbody>{renderSubItems(getData)}</tbody>
      </table>
    </>
  )
}

export default SubData
