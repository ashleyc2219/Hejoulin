import React, { useEffect, useState } from 'react'
import '../../../../styles/Member/Member-Sub/SubData.scss'

const SubData = (props) => {
  const { user, setUser } = props
  const [subData, setSubData] = useState({})
  const listNames = [
    { listName: '訂閱開始時間' },
    { listName: '訂閱名稱' },
    { listName: '訂閱價格' },
    { listName: '訂閱狀態' },
  ]
  const listType = (items) =>
    items.map((item, i) => <th key={i}>{item.listName}</th>)

  useEffect(() => {
    ;(async () => {
      const obj = await (
        await fetch('http://localhost:3001/user/member/MemberSublist', {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + localStorage.token,
          },
        })
      ).json()
      console.log(obj)
      setSubData(obj)
    })()
  }, [])
  const renderSubItems = (subData) => {
    if (subData.data1) {
      return (
        <tr key={'test' + subData.member_id}>
          <td>{subData.data1.order_d_id.slice(0, 8)}</td>
          <td>{subData.data2.sub_plan}</td>
          <td>{subData.data2.sub_price}</td>
          <td>{subData.data1.order_state}</td>
          <td>
            <button className="btn btn-primary">管理訂閱</button>
          </td>
        </tr>
      )
    } else {
      return (
        <tr></tr>
        // <div className="none-mes">
        //   <h5>您目前未有訂閱方案</h5>
        //   <button className="btn btn-primary btnSub">點我訂閱去</button>
        // </div>
      )
    }
  }
  return (
    <>
      <div className="subData">
        <table>
          <thead>{subData ? <tr>{listType(listNames)}</tr> : <tr></tr>}</thead>
          <tbody>{subData.data1 && renderSubItems(subData)}</tbody>
        </table>
      </div>
    </>
  )
}

export default SubData
