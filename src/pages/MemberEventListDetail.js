import React, {useEffect} from 'react'
import Sidebar from '../compenents/Member/SideBar/Sidebar'
import '../styles/Member/MemberEventListDetail.scss'
import {Link} from "react-router-dom";

const MemberEventListDetail = ({eventDetailData, setEventDetailData}) => {

    useEffect(() => {
        setEventDetailData(JSON.parse(localStorage.getItem('eventDetail')))
    }, [])

    console.log(eventDetailData)
    const renderEventDetail = (eventDetailData) => {
        return (
            <div className="MemberEventListDetailBox">
                <div className="bgImg-eventDetail">
                    <div className="infoLeft">
                        <div className="detailTitle">{eventDetailData.event_name}</div>
                        <div className="signInfo">
                            <div className="infoTitle">報名人資訊</div>
                            <div className="infoItems">
                                <div className="name">{eventDetailData.order_name}</div>
                                <div className="mobile">{eventDetailData.order_mobile}</div>
                                <div className="email">{eventDetailData.order_email}</div>
                            </div>
                        </div>
                        <div className="eventInfo">
                            <div className="infoTitle">活動資訊</div>
                            <div className="infoItems">
                                <div className="eventTime">{eventDetailData.event_time_start}</div>
                                <div className="eventLocation">{eventDetailData.event_location}</div>
                            </div>
                        </div>
                        <div className="paymentInfo">
                            <div className="infoTitle">付款資訊</div>
                            <div className="infoItems">
                                <div className="eventPrice">金額:${eventDetailData.order_d_price}</div>
                                <div className="expireTime">付款時間:{eventDetailData.order_date}</div>
                                <div className="payWay">信用卡付款</div>
                                <div className="cardInfo">卡號末四碼 1689</div>
                            </div>
                        </div>
                    </div>
                    <div className="infoRight">
                        <div className="infoImg">
                            <img src="/Member/EventDInfo.svg" alt=""/>
                        </div>
                        <div className="orderInfo">
                            <div className="infoTitle">訂單資訊</div>
                            <div className="infoItems">
                                <div className="orderId">訂單編號:{eventDetailData.order_id}</div>
                                <div className="orderTime">訂單成立時間:{eventDetailData.order_date}</div>
                                <div className="orderState">訂單狀態:已付款</div>
                            </div>
                        </div>
                    </div>
                    <Link to="/member/event-list">
                        <button className="btn btn-secondary goBackBtn">返回</button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="MemberEventListDetail">
                <Sidebar/>
                {renderEventDetail(eventDetailData)}
            </div>
        </>
    )
}

export default MemberEventListDetail
