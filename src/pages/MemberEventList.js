import React, { useState } from 'react'
import Sidebar from '../compenents/Member/Sidebar'
import '../styles/Member/MemberEventList.scss'
import { Link } from 'react-router-dom'

const MemberEventList = (props) => {
  const { user, setUser } = props
  const [data, setData] = useState({})

  const getData = async () => {
    const obj = await (
      await fetch(
        'https://localhost:3001/user/member/MemberEventList/:member_id'
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
      <div className="MemberEventList">
        <Sidebar />
        <div className="MemberEventBox">
          <div className="container">
            <div className="EventBar row">
              <nav className="EventTabs row">
                <img className="search-icon-ev" src="/search.svg" alt="" />
                <div className="EventBar-item-box">
                  <Link to="all" className="EventBar-item">
                    即將到來
                  </Link>
                </div>
                <div className="EventBar-item-box">
                  <Link to="readyToGo" className="EventBar-item">
                    已參加
                  </Link>
                </div>
                <div className="EventBar-item-box">
                  <Link to="readyToGet" className="EventBar-item">
                    已取消
                  </Link>
                </div>
              </nav>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">活動時間</th>
                      <th scope="col">活動訂單編號</th>
                      <th scope="col">活動名稱</th>
                      <th scope="col">付款時間</th>
                    </tr>
                  </thead>
                  <tbody>{renderEventItems(getData)}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberEventList
