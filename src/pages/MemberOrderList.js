import React, { useState } from 'react'
import '../styles/Member/MemberOrderList.scss'
import Sidebar from '../compenents/Member/SideBar/Sidebar'
import TabsOrder from '../compenents/Member/AllTabs/OrderList/TabsOrder'

const MemberOrderList = (props) => {
  const { user, setUser } = props
  return (
    <>
      <div className="MemberOrderList">
        <Sidebar />
        <div className="MemberOrderBox">
          <TabsOrder user={user} setUser={setUser} />
        </div>
      </div>
    </>
  )
}

export default MemberOrderList
