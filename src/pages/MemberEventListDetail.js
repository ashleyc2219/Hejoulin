import React from 'react'
import Sidebar from '../compenents/Member/Sidebar'
import '../styles/Member/MemberEventListDetail.scss'

const MemberEventListDetail = () => {
  return (
    <>
      <div className="MemberEventListDetail">
        <Sidebar />
        <div className="MemberEventListDetailBox">
          <div className="bgImg-eventDetail">
            <div className="infoLeft">
              <div className="detailTitle">日本餐酒晚宴 金子半之助</div>
              <div className="signInfo">
                <div className="infoTitle">報名人資訊</div>
                <div className="infoItems">
                  <div className="name">金城武</div>
                  <div className="mobile">0987382937</div>
                  <div className="email">kco9384@gmail.com</div>
                </div>
              </div>
              <div className="eventInfo">
                <div className="infoTitle">活動資訊</div>
                <div className="infoItems">
                  <div className="eventTime">2022-06-01   18:30 ~ 21:00</div>
                  <div className="eventLocation">0987382937</div>
                </div>
              </div>
              <div className="paymentInfo">
                <div className="infoTitle">付款資訊</div>
                <div className="infoItems">
                  <div className="eventPrice">金額:$1,280</div>
                  <div className="expireTime">付款時間:2022-01-01 19:20</div>
                  <div className="payWay">信用卡付款</div>
                  <div className="cardInfo">卡號末四碼 1689</div>
                </div>
              </div>
            </div>
            <div className="infoRight">
              <div className="infoImg">
                <img src="/Member/EventDInfo.svg" alt="" />
              </div>
              <div className="orderInfo">
                <div className="infoTitle">訂單資訊</div>
                <div className="infoItems">
                  <div className="orderId">訂單編號:20220105002</div>
                  <div className="orderTime">訂單成立時間:2022-01-01 19:20</div>
                  <div className="orderState">訂單狀態:已付款</div>
                </div>
              </div>
            </div>
            <botton className="btn btn-success goBackBtn">返回</botton>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberEventListDetail
