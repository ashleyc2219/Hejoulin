import React, {useEffect} from 'react'
import ProgressBarM from "../compenents/Member/AllTabs/OrderList/ProgressBarM";
import '../styles/Member/Member-Order/MemberOrderListDetail.scss'
import {Link} from "react-router-dom";

const MemberOrderListDetail = ({currentRow, setCurrentRow, detailData, setDetailData}) => {
    const stepContent = ['訂單成立', '已出貨', '物流收件', '已送達']

    // onClick={()=>setCurrentRow('orderData')}

    useEffect(() => {
        setDetailData(JSON.parse(localStorage.getItem('orderDetail')))
    }, [])

    console.log(detailData)
    const renderDetailItem = (detailData) => {
        if (detailData && detailData.length) {
            return detailData.map((el) => (
                <div key={el.pro_img}>
                    <div className="left-list" >
                        <div className="mobile-table-btn ">
                            <span className="total">訂單總計: $ {el.order_d_price}</span>
                        </div>
                        <div className="list-table">
                            <div className="table-head ">
                                <span className="title-product">商品</span>
                                <span className="title-quantity">數量</span>
                                <span className="title-subtotal">小計</span>
                            </div>
                        </div>
                        <div className="list-summary">
                            <div className="table-row">
                                <p>小計</p>
                                <p className="dollar-sign">{el.order_d_price}</p>
                            </div>
                            <div className="table-row">
                                <p>折扣碼</p>
                                <p>{el.used_code}</p>
                            </div>
                            <div className="table-row">
                                <p>運費</p>
                                <p className="dollar-sign">0</p>
                            </div>
                            <div className="table-row">
                                <p>總計</p>
                                <p className="dollar-sign total">{el.order_d_price}</p>
                            </div>
                        </div>
                    </div>
                    <div className="rightOrder">
                        <div className="order-container">
                            <img src="/CartList/orderBg.png" alt=""/>
                            <div className="order-title">
                                <label className="form-label">訂單編碼 {el.order_id}</label>
                                <span>{el.order_date.slice(1, 10)}</span>
                            </div>
                            <div className="order-row">
                                <div className="row-head">
                                    <p>購買人資訊</p>
                                </div>
                                <div className="row-data">
                                    <p>{el.order_name}</p>
                                    <p>{el.order_mobile}</p>
                                    <p>{el.order_email}</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="order-row">
                                <div className="row-head">
                                    <p>收件人資訊</p>
                                </div>
                                <div className="row-data">
                                    <p>{el.order_name}</p>
                                    <p>{el.order_mobile}</p>
                                    <p>{el.order_email}</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="order-row">
                                <div className="row-head">
                                    <p>貨運資訊</p>
                                </div>
                                <div className="row-data">
                                    <p>{el.shipment_method}</p>
                                    <p>{el.shipment_address}</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="order-row">
                                <div className="row-head">
                                    <p>付款資訊</p>
                                </div>
                                <div className="row-data payment">
                                    <p>信用卡付款</p>
                                    <p>卡號末四碼 {el.card_num}</p>
                                </div>
                            </div>
                        </div>
                        <Link to="/member/order-list">
                            <button className="btn btn-secondary">返回</button>
                        </Link>
                    </div>
                </div>
            ))
        } else {
            return null
        }
    }
    return (
        <>
            <div className="MemberOrderListDetail">
                <ProgressBarM step="one" content={stepContent}/>
                <div className="listDetail-container">
                    {renderDetailItem(detailData)}
                </div>
            </div>
        </>
    )
}

export default MemberOrderListDetail
