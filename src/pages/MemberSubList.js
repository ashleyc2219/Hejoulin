import React from 'react'
import Sidebar from '../compenents/Member/SideBar/Sidebar'
import '../styles/Member/MemberSubList.scss'
import TabsSub from '../compenents/Member/AllTabs/Sub/TabsSub'

const MemberSubList = () => {
  return (
    <>
      <div className="MemberSubList">
        <Sidebar />
        <div className="MemberSubBox">
          <TabsSub />
        </div>
        <div className="bgItem">
          <img src="/Member/unSubBg.svg" alt="" />
        </div>
      </div>
    </>
  )
}

export default MemberSubList
