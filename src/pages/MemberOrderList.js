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
                <img className="search-icon-od" src="/ProductList/search.svg" alt="" />
                <div className="OrderBar-item-box">
                  <Link to="all" className="OrderBar-item-route-all">
                    全部
                  </Link>
                </div>
                <div className="OrderBar-item-box">
                  <Link to="readyToGo" className="OrderBar-item-route">
                    待出貨
                  </Link>
                </div>
                <div className="OrderBar-item-box">
                  <Link to="readyToGet" className="OrderBar-item-route">
                    待收貨
                  </Link>
                </div>
                <div className="OrderBar-item-box">
                  <Link to="finish" className="OrderBar-item-route">
                    已完成
                  </Link>
                </div>
                <div className="OrderBar-item-box">
                  <Link to="cancel" className="OrderBar-item-route">
                    已取消
                  </Link>
                </div>
                <div className="pageTags">
                  <div className="page">1</div>
                  <div className="page">2</div>
                  <div className="page">3</div>
                </div>
              </nav>
            </div>
          </div>
          <div className="row order-list-display-box">
            <table className="table">
              <thead>
                <tr>
                  <th className="listItem-name">訂單日期</th>
                  <th className="listItem-name">訂單編碼</th>
                  <th className="listItem-name">訂單金額</th>
                  <th className="listItem-name">訂單狀態</th>
                  {/*<th className="listItem-btn" />*/}
                </tr>
              </thead>
              {/*<tbody>{renderEventItems(getData)}</tbody>*/}
              <tbody>
                <tr>
                  <td>2022-01-01</td>
                  <td>0000000000</td>
                  <td>$5789</td>
                  <td>已完成</td>
                  <td className="btn-zone">
                    {' '}
                    <button className="btn btn-primary">查看訂單</button>{' '}
                    <button className="btn btn-secondary">再買一次</button>
                  </td>
                </tr>
                <tr>
                  <td>2022-01-01</td>
                  <td>0000000000</td>
                  <td>$5789</td>
                  <td>已完成</td>
                  <td className="btn-zone">
                    {' '}
                    <button className="btn btn-primary">查看訂單</button>{' '}
                    <button className="btn btn-secondary">再買一次</button>
                  </td>
                </tr>
                <tr>
                  <td>2022-01-01</td>
                  <td>0000000000</td>
                  <td>$5789</td>
                  <td>已完成</td>
                  <td className="btn-zone">
                    {' '}
                    <button className="btn btn-primary">查看訂單</button>{' '}
                    <button className="btn btn-secondary">再買一次</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberOrderList
