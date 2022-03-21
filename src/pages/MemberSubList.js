import React from 'react'
import Sidebar from '../compenents/Member/Sidebar'
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
