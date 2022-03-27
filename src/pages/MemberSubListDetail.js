import React from 'react'
import Sidebar from '../compenents/Member/SideBar/Sidebar'
import '../styles/Member/MemberSubListDetail.scss'

const MemberSubListDetail = () => {
  return (
    <>
      <div className="MemberSubListDetail">
        <Sidebar />
        <div className="MemberSubListDetailBox">
          <div className="subPlanImg">
            <img src="/Member/SubPlanEX.svg" alt="" />
          </div>
          <div className="subPlanDetail">
            <div className="detailLeft">
              <p>訂閱訂單編號 : </p>
              <p>方案時間 : </p>
              <p>訂閱單月價格 : </p>
              <p>訂閱時間週期 : </p>
            </div>
            <div className="detailRight">
              <p>下次帳單日期 : </p>
              <p>付款方式 : </p>
              <p>備用付款方式 : </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberSubListDetail
