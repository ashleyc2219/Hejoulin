import React from 'react'
import Sidebar from '../compenents/Member/Sidebar'
import '../styles/Member/MemberSubList.scss'
import { Link } from 'react-router-dom'

const MemberSubList = () => {
  return (
    <>
      <div className="MemberSubList">
        <Sidebar />
        <div className="MemberSubBox">
          <div className="container">
            <div className="SubBar row">
              <nav className="SubTabs row">
                <div className="SubBar-item-box">
                  <Link to="all" className="OrderBar-item-route-all">
                    已過期
                  </Link>
                </div>
                <div className="SubBar-item-box">
                  <Link to="readyToGo" className="OrderBar-item-route">
                    訂閱中
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
          <div className="row Sub-list-display-box">
            <table className="table">
              <thead>
                <tr>
                  <th className="listItem-name">訂閱開始時間</th>
                  <th className="listItem-name">訂閱名稱</th>
                  <th className="listItem-name">訂閱價格</th>
                  <th className="listItem-name">訂閱狀態</th>
                  {/*<th className="listItem-btn" />*/}
                </tr>
              </thead>
              {/*<tbody>{renderEventItems(getData)}</tbody>*/}
              <tbody>
                <tr>
                  <td>2022-01-01~2022-06-01</td>
                  <td>純米大吟釀(六個月)</td>
                  <td>$5789</td>
                  <td>已完成</td>
                  <td className="btn-zone">
                    {' '}
                    <button className="btn btn-primary">管理訂閱</button>
                  </td>
                </tr>
                <tr>
                  <td>2022-01-01~2022-06-01</td>
                  <td>純米大吟釀(六個月)</td>
                  <td>$5789</td>
                  <td>已完成</td>
                  <td className="btn-zone">
                    {' '}
                    <button className="btn btn-primary">管理訂閱</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*<div className="none-mes">*/}
          {/*  <h5>您目前未有訂閱方案</h5>*/}
          {/*  <button className="btn btn-primary btnSub">點我訂閱去</button>*/}
          {/*</div>*/}
        </div>
        <div className="bgItem">
          <img src="/Member/unSubBg.svg" alt="" />
        </div>
      </div>
    </>
  )
}

export default MemberSubList
