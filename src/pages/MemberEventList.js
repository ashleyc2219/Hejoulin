import React, { useState } from 'react'
import Sidebar from '../compenents/Member/SideBar/Sidebar'
import '../styles/Member/MemberEventList.scss'
import TabsEvent from '../compenents/Member/AllTabs/EventList/TabsEvent'

const MemberEventList = () => {

  return (
    <>
      <div className="MemberEventList">
        <Sidebar />
        <div className="MemberEventBox">
          <TabsEvent />
        </div>
      </div>
    </>
  )
}

export default MemberEventList
