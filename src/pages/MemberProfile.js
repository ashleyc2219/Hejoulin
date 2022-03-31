import React, {useState} from 'react'
import '../styles/Member/MemberProfile.scss'
import Sidebar from '../compenents/Member/SideBar/Sidebar'
import Tabs from '../compenents/Member/AllTabs/Profile/Tabs'

const MemberProfile = (props) => {
  const { user, setUser } = props
  return (
    <>
      <div className="MemberProfile">
        <Sidebar />
        <div className="MemberProfileBox">
          <div className="container">
            <Tabs />
          </div>
        </div>
        <div className="bgItem">
          <img src="/Member/profileBgItem.svg" alt="" />
        </div>
      </div>
    </>
  )
}

export default MemberProfile
