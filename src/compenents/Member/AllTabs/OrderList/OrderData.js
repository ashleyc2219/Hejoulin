import React, { useEffect, useState } from 'react'
import '../../../../styles/Member/Member-Order/OrderData.scss'

const OrderData = (props) => {
  const { user, setUser } = props
  const [dataOrder, setOrderData] = useState({}) // 訂單資料
  const listNames = [
    { listName: '訂單日期' },
    { listName: '訂單編碼' },
    { listName: '訂單金額' },
    { listName: '訂單狀態' },
  ]

  const listType = (items) =>
    items.map((item, i) => <th key={i}>{item.listName}</th>)

  useEffect(() => {
    ;(async () => {
      const obj = await (
        await fetch('http://localhost:3001/user/member/MemberOrderList', {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + localStorage.token,
          },
        })
      ).json()
      console.log(obj)
      setOrderData(obj)
    })()
  }, [])

  const renderOrderItems = (dataOrder) => {
    if (dataOrder && dataOrder.length) {
      return dataOrder.map((el) => (
        <tr key={'test' + el.member_id}>
          <td>{el.order_date}</td>
          <td>{el.order_id}</td>
          <td>{el.order_d_price}</td>
          <td>{el.order_state}</td>
          <td className="button-g">
            <button className="btn btn-primary">查看訂單</button>{' '}
            <button className="btn btn-secondary">再買一次</button>
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
      <div className="orderData">
        <table>
          <thead>
            <tr>{listType(listNames)}</tr>
          </thead>
          <tbody>{renderOrderItems(dataOrder)}</tbody>
        </table>
      </div>
    </>
  )
}

export default OrderData