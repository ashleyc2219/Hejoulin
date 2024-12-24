import React, { useEffect, useState } from 'react'
import '../../../../styles/Member/Member-Sub/SubData.scss'
import { Link } from "react-router-dom";

const SubDataOver = ({ subDataOver, setSubDataOver }) => {
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
                await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/user/member/MemberSublist/over`, {
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + localStorage.token,
                    },
                })
            ).json()
            console.log(obj)
            setSubDataOver(obj)
        })()
    }, [])

  const renderSubItems = (subDataOver) => {
    if (subDataOver.length) {
      return (
        <tr>
            <td>{subDataOver[0].order_date}</td>
            <td>{subDataOver[1][0].plan_name}</td>
            <td>{subDataOver[0].order_d_price}</td>
            <td>{subDataOver[0].order_state}</td>
          <td>
            <button className="btn btn-primary">管理訂閱</button>
          </td>
        </tr>
      )
    }
  }
  const noSubItems = (subDataOver) => {
          if (!subDataOver) {
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
            {subDataOver ? <thead><tr>{listType(listNames)}</tr></thead> : <tr></tr>}
          <tbody>{subDataOver ? renderSubItems(subDataOver) : noSubItems(subDataOver)}</tbody>
        </table>
      </div>
    </>
  )
}

export default SubDataOver
