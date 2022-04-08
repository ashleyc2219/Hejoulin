import React, {useEffect, useState} from 'react'
import ProgressBarM from '../compenents/Member/AllTabs/OrderList/ProgressBarM'
import '../styles/Member/Member-Order/MemberOrderListDetail.scss'
import {Link} from 'react-router-dom'

const MemberOrderListDetail = () => {
    const stepContent = ['訂單成立', '已出貨', '物流收件', '已送達']
    // 訂單詳細資料
    const [detailData, setDetailData] = useState({})

    useEffect(() => {
        setDetailData(JSON.parse(localStorage.getItem('orderDetail')))
    }, [])

    const renderDetailItem = (detailData) => {
        return (
            <div key={detailData.pro_img} className="renderDetailZone">
                <div className="left-list">
                    <div className="mobile-table-btn ">
                        <span className="total">訂單總計: $ {detailData.order_d_price}</span>
                    </div>
                    <div className="list-table">
                        <div className="table-head ">
                            <span className="title-product">商品</span>
                            <span className="title-quantity">{''}</span>
                            <span className="title-subtotal">小計</span>
                        </div>
                        <div className="table-item">
                            <div className="item item-product-img">
                                <img src={'http://localhost:3001/images/pro_img/' + detailData.pro_img} alt=""/>
                            </div>
                            <div className="item item-product-info">
                                <h5>{detailData.pro_name}</h5>
                                <p className="ml">720</p>
                                <p className="price">{detailData.order_d_price}</p>
                                <p className="product-count">{''}</p>
                            </div>
                            <div className="item item-quantity">
                                <p>{''}</p>
                            </div>
                            <div className="item item-subtotal">
                                <p>{detailData.order_d_price}</p>
                            </div>
                        </div>
                    </div>
                    <div className="list-summary">
                        <div className="table-row">
                            <p>小計</p>
                            <p className="dollar-sign">{detailData.order_d_price}</p>
                        </div>
                        <div className="table-row">
                            <p>折扣碼</p>
                            <p>{detailData.used_code}</p>
                        </div>
                        <div className="table-row">
                            <p>運費</p>
                            <p className="dollar-sign">0</p>
                        </div>
                        <div className="table-row">
                            <p>總計</p>
                            <p className="dollar-sign total">{detailData.order_d_price}</p>
                        </div>
                    </div>
                </div>
                <div className="rightOrder">
                    <div className="order-container">
                        <img src="/CartList/orderBg.png" alt=""/>
                        <div className="order-title">
                            <div className="form-labdetailData">訂單編碼 {detailData.order_id}</div>
                            <span>{detailData.order_date}</span>
                        </div>
                        <div className="order-row">
                            <div className="row-head">
                                <p>購買人資訊</p>
                            </div>
                            <div className="row-data">
                                <p>{detailData.order_name}</p>
                                <p>{detailData.order_mobile}</p>
                                <p>{detailData.order_email}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="order-row">
                            <div className="row-head">
                                <p>收件人資訊</p>
                            </div>
                            <div className="row-data">
                                <p>{detailData.order_name}</p>
                                <p>{detailData.order_mobile}</p>
                                <p>{detailData.order_email}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="order-row">
                            <div className="row-head">
                                <p>貨運資訊</p>
                            </div>
                            <div className="row-data">
                                <p>{detailData.shipment_method}</p>
                                <p>{detailData.shipment_address}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="order-row">
                            <div className="row-head">
                                <p>付款資訊</p>
                            </div>
                            <div className="row-data payment">
                                <p>信用卡付款</p>
                                <p>卡號末四碼 {detailData.card_num}</p>
                            </div>
                        </div>
                    </div>
                    <Link to="/member/order-list">
                        <button className="btn btn-secondary">返回</button>
                    </Link>
                </div>
            </div>
        )

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
