import React, { useState } from 'react'
import Sidebar from '../compenents/Member/SideBar/Sidebar'
import '../styles/Member/MemberEventList.scss'
import TabsEvent from '../compenents/Member/AllTabs/EventList/TabsEvent'

const MemberEventList = (props) => {
  const { user, setUser } = props

  return (
    <>
      <div className="MemberEventList">
        <Sidebar />
        <div className="MemberEventBox">
          <TabsEvent user={user} setUser={setUser} />
        </div>
      </div>
    </>
  )
}

export default MemberEventList
