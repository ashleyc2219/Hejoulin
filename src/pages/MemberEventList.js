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
                  <Link to="coming" className="EventBar-item-coming">
                    即將到來
                  </Link>
                </div>
                <div className="EventBar-item-box">
                  <Link to="already" className="EventBar-item">
                    已參加
                  </Link>
                </div>
                <div className="EventBar-item-box">
                  <Link to="cancel" className="EventBar-item">
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
          <div className="container EventFileBox">
            <div className="row">
              <div className="col" style={{ zIndex: -1 }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">活動時間</th>
                      <th scope="col">活動訂單編號</th>
                      <th scope="col">活動名稱</th>
                      <th scope="col">付款時間</th>
                      <th />
                    </tr>
                  </thead>
                  {/*<tbody>{renderEventItems(getData)}</tbody>*/}
                  <tbody>
                    <tr>
                      <td scope="col">2022-06-01</td>
                      <td scope="col">0000000000</td>
                      <td scope="col">日本餐酒晚宴 金子半之助</td>
                      <td scope="col">2022-01-01</td>
                      <td>
                        <button className="btn btn-primary">
                          查看活動詳情
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td scope="col">2022-06-01</td>
                      <td scope="col">0000000000</td>
                      <td scope="col">日本餐酒晚宴 金子半之助</td>
                      <td scope="col">2022-01-01</td>
                      <td>
                        <button className="btn btn-primary">
                          查看活動詳情
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td scope="col">2022-06-01</td>
                      <td scope="col">0000000000</td>
                      <td scope="col">日本餐酒晚宴 金子半之助</td>
                      <td scope="col">2022-01-01</td>
                      <td>
                        <button className="btn btn-primary">
                          查看活動詳情
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td scope="col">2022-06-01</td>
                      <td scope="col">0000000000</td>
                      <td scope="col">日本餐酒晚宴 金子半之助</td>
                      <td scope="col">2022-01-01</td>
                      <td>
                        <button className="btn btn-primary">
                          查看活動詳情
                        </button>
                      </td>
                    </tr>
                  </tbody>
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
