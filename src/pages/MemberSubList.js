import React from 'react'
import Sidebar from '../compenents/Member/Sidebar'
import '../styles/Member/MemberSubList.scss'

const MemberSubList = () => {
  return (
    <>
      <div className="MemberSubList">
        <Sidebar />
        <div className="MemberSubBox">
          <div className="container">
            <div className="row MemberSubBar">
              <div className="none-mes">
                <h5>您目前未有訂閱方案</h5>
                <button className="btn btn-primary">點我訂閱去</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberSubList
