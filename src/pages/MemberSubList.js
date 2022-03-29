import React from 'react'
import Sidebar from '../compenents/Member/SideBar/Sidebar'
import '../styles/Member/MemberSubList.scss'
import TabsSub from '../compenents/Member/AllTabs/Sub/TabsSub'

const MemberSubList = (props) => {
  const { user, setUser } = props
  return (
    <>
      <div className="MemberSubList">
        <Sidebar />
        <div className="MemberSubBox">
          <TabsSub user={user} setUser={setUser} />
        </div>
        <div className="bgItem">
          <img src="/Member/unSubBg.svg" alt="" />
        </div>
      </div>
    </>
  )
}

export default MemberSubList
