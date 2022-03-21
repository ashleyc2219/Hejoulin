import React, { useState } from 'react'
import Sidebar from '../compenents/Member/Sidebar'
import '../styles/Member/MemberEventList.scss'
import TabsEvent from '../compenents/Member/AllTabs/EventList/TabsEvent'

const MemberEventList = (props) => {
  const { user, setUser } = props
  const [data, setData] = useState({})

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
