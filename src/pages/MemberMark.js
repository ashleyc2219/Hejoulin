import React from 'react'
import Sidebar from '../compenents/Member/Sidebar'
import '../styles/Member/MenberMark.scss'

const MemberMark = () => {
  return (
    <>
      <div className="MemberMark">
        <Sidebar />
        <div className="MemberMarkBox">
          <div className="container">
            <div className="row MemberMarkBar">
              <button className="btn btn-primary">刪除所選酒標</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberMark
