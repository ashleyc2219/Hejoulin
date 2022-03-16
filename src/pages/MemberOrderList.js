import React, { useState } from 'react'
import Sidebar from '../compenents/Member/Sidebar'
import { Link } from 'react-router-dom'
import '../styles/Member/MemberOrderList.scss'

const MemberOrderList = (props) => {
  const { user, setUser } = props
  const [data, setData] = useState({})

  const getData = async () => {
    const obj = await (
      await fetch(
        'https://localhost:3001/user/member/MemberOrderList/:member_id'
      )
    ).json()
    console.log(obj)
    setData(obj)
  }

  const renderEventItems = () => {
    if (data.rows && data.rows.length) {
      return data.rows.map((el) => (
        <tr key={'test' + el.member_id}>
          <td>{el.order_date}</td>
          <td>{el.order_id}</td>
          <td>{el.order_d_price}</td>
          <td>{el.order_state}</td>
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
      <div className="MemberOrderList">
        <Sidebar />
        <div className="MemberOrderBox">
          <div className="container">
            <div className="OrderBar row">
              <nav className="OrderTabs row">
                <img className="search-icon-od" src="/search.svg" alt="" />
                <div className="OrderBar-item-box">
                  <Link to="all" className="OrderBar-item-route">
                    <div className="OrderBar-item">全部</div>
                  </Link>
                </div>
                <div className="OrderBar-item-box">
                  <Link to="readyToGo" className="OrderBar-item-route">
                    <div className="OrderBar-item">待出貨</div>
                  </Link>
                </div>
                <div className="OrderBar-item-box">
                  <Link to="readyToGet" className="OrderBar-item-route">
                    <div className="OrderBar-item">待收貨</div>
                  </Link>
                </div>
                <div className="OrderBar-item-box">
                  <Link to="finish" className="OrderBar-item-route">
                    <div className="OrderBar-item">已完成</div>
                  </Link>
                </div>
                <div className="OrderBar-item-box">
                  <Link to="cancel" className="OrderBar-item-route">
                    <div className="OrderBar-item">已取消</div>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
          <div className="row order-list-display-box">
            <table className="table">
              <thead>
                <tr>
                  <td className="listItem-name">訂單日期</td>
                  <td className="listItem-name">訂單編碼</td>
                  <td className="listItem-name">訂單金額</td>
                  <td className="listItem-name">訂單狀態</td>
                </tr>
              </thead>
              <tbody>{renderEventItems(getData)}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberOrderList
