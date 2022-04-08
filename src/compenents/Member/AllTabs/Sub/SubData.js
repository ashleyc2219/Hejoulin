import React, { useEffect, useState } from 'react'
import '../../../../styles/Member/Member-Sub/SubData.scss'
import { Link } from "react-router-dom";

const SubData = (props) => {
  const { user, setUser, subData, setSubData } = props
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
        <tr key={subData.order_d_id}>
          <td>{subData.data1.order_d_id.slice(0, 8)}</td>
          <td>{subData.data2.sub_plan}</td>
          <td>{subData.data2.sub_price}</td>
          <td>{subData.data1.order_state}</td>
          <td>
            <button className="btn btn-primary">管理訂閱</button>
          </td>
        </tr>
      )
    }
  }
  const noSubItems = (subData) => {
          if (!subData.length){
              return (
                  <div className="noneSubData">
                      <h5>您目前未有訂閱方案</h5>
                      <Link to="/sub/plan">
                          <button className="btn btn-primary btnSub">點我訂閱去</button>
                      </Link>
                  </div>
              )
          }
  }
  return (
    <>
      <div className="subData">
        <table>
            {subData.length ? <thead><tr>{listType(listNames)}</tr></thead> : <tr></tr>}
          <tbody>{subData.data1 ? renderSubItems(subData) : noSubItems(subData)}</tbody>
        </table>
      </div>
    </>
  )
}

export default SubData
