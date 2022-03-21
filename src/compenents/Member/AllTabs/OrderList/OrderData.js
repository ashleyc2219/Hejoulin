import React, { useState } from 'react'
import '../../../../styles/Member/Member-Order/OrderData.scss'

const OrderData = (props) => {
  const { user, setUser } = props
  const [data, setData] = useState({})
  const listNames = [
    { listName: '訂單日期' },
    { listName: '訂單編碼' },
    { listName: '訂單金額' },
    { listName: '訂單狀態' },
  ]
  const listType = (items) =>
    items.map((item, i) => <th key={i}>{item.listName}</th>)
  const getData = async () => {
    const obj = await (
      await fetch('https://localhost:3001/user/member/MemberOrderList')
    ).json()
    console.log(obj)
    setData(obj)
  }
  const renderOrderItems = () => {
    if (data.rows && data.rows.length) {
      return data.rows.map((el) => (
        <tr key={'test' + el.member_id}>
          <td>{el.order_date}</td>
          <td>{el.order_id}</td>
          <td>{el.order_d_price}</td>
          <td>{el.order_state}</td>
          <button className="btn btn-primary">查看訂單</button>{' '}
          <button className="btn btn-secondary">再買一次</button>
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
        <tbody>{renderOrderItems(getData)}</tbody>
      </table>
    </>
  )
}

export default OrderData
