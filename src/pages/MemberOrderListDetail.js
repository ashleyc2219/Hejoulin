import React from 'react'
import ProgressBarM from "../compenents/Member/AllTabs/OrderList/ProgressBarM";
import '../styles/Member/Member-Order/MemberOrderListDetail.scss'

const MemberOrderListDetail = () => {
    const stepContent = ['訂單成立', '已出貨', '物流收件', '已送達']
    return (
        <>
            <div className="MemberOrderListDetail">
            <ProgressBarM step="one" content={stepContent}/>
                <div className="listDetail-container">
                    <div className="left-list">
                        <div className="mobile-table-btn "><span className="total">訂單總計: $ 11120</span></div>
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
                                <p className="dollar-sign">11120</p>
                            </div>
                            <div className="table-row">
                                <p>折扣碼</p>
                                <p></p>
                            </div>
                            <div className="table-row">
                                <p>運費</p>
                                <p className="dollar-sign">0</p>
                            </div>
                            <div className="table-row">
                                <p>總計</p>
                                <p className="dollar-sign total">11120</p>
                            </div>
                        </div>
                        <div className="mobile-table-btn ">
                            <span className="product-count">↓ 共4件商品</span>
                        </div>
                    </div>
                    <div className="rightOrder">
                        <div className="order-container">
                            <img src="/CartList/orderBg.png" alt=""/>
                            <div className="order-title">
                                <label className="form-label">訂單編碼 20220110001</label>
                                <span>2022-01-10</span>
                            </div>
                            <div className="order-row">
                                <div className="row-head">
                                    <p>購買人資訊</p>
                                </div>
                                <div className="row-data">
                                    <p></p><p></p><p></p>
                                </div>
                            </div>
                            <hr/>
                            <div className="order-row">
                                <div className="row-head">
                                    <p>收件人資訊</p>
                                </div>
                                <div className="row-data">
                                    <p></p><p></p>
                                </div>
                            </div>
                            <hr/>
                            <div className="order-row">
                                <div className="row-head">
                                    <p>貨運資訊</p>
                                </div>
                                <div className="row-data">
                                    <p>門市取貨</p>
                                    <p></p>
                                </div>
                            </div>
                            <hr/>
                            <div className="order-row">
                                <div className="row-head">
                                    <p>付款資訊</p>
                                </div>
                                <div className="row-data payment">
                                    <p>信用卡付款</p>
                                    <p>卡號末四碼 </p>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-secondary">返回</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MemberOrderListDetail
