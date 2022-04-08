import React, {useEffect, useState} from 'react'
import Sidebar from '../compenents/Member/SideBar/Sidebar'
import '../styles/Member/MemberSubListDetail.scss'
import SubConfirmCard from "../compenents/Sub/SubComfirmCard";
import {Link} from "react-router-dom";

const MemberSubListDetail = () => {
    // 訂閱詳細資料
    const [subDData, setSubDData] = useState({})


    useEffect(() => {
        const dataDetailSub = JSON.parse(localStorage.getItem('subDetail'))
        setSubDData(dataDetailSub)
    }, [])


    console.log(subDData)
    const renderDetailData = (subDData) => {
        return (
            <div className="MemberSubListDetail">
                <Sidebar/>
                <div className="MemberSubListDetailBox">
                    <div className="subPlanImg">
                        <SubConfirmCard planName={subDData[1][0].plan_name}/>
                    </div>
                    <div className="subPlanDetail">
                        <div className="detailLeft">
                            <p>訂閱訂單編號 : {subDData[0].order_id}</p>
                            <p>方案時間 : {subDData[0].sub_time}</p>
                            <p>訂閱單月價格 : {subDData[1][0].plan_price}</p>
                            <p>訂閱時間週期 : {subDData[0].sub_time}</p>
                        </div>
                        <div className="detailRight">
                            <p>下次帳單日期 : 2022-05-10</p>
                            <p>付款方式 : 信用卡付款</p>
                            <p>備用付款方式 : 無</p>
                        </div>
                    </div>
                    <div className="button-g">
                        <button className="btn btn-primary">取消訂閱</button>
                        <Link to="/member/sub-list">
                            <button className="btn btn-secondary">返回</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {subDData.length > 0 && renderDetailData(subDData)}
        </>
    )
}

export default MemberSubListDetail
