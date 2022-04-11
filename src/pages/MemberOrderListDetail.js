import React, {useEffect, useState} from 'react'
import ProgressBarM from '../compenents/Member/AllTabs/OrderList/ProgressBarM'
import '../styles/Member/Member-Order/MemberOrderListDetail.scss'
import {Link} from 'react-router-dom'
import _ from 'lodash'

const MemberOrderListDetail = () => {
    const stepContent = ['訂單成立', '已出貨', '物流收件', '已送達']
    // 訂單詳細資料
    const [detailDataSake, setDetailDataSake] = useState([])
    const [detailDataGift, setDetailDataGift] = useState([])
    const [detailDataInfo, setDetailDataInfo] = useState([])
    const APISake = 'http://localhost:3001/user/order-sake'
    const APIGift = 'http://localhost:3001/user/order-gift'
    const APIInfo = 'http://localhost:3001/user/order-info'
    useEffect(() => {
        const orderId = JSON.parse(localStorage.getItem('orderId'))
        console.log('order_id:', orderId)
        const order_id = {
            order_id: orderId,
        }
        const jsonOrderId = JSON.stringify(order_id)
        console.log('oid:', jsonOrderId)
        ;(async () => {
            const objSake = await (
                await fetch(APISake, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: jsonOrderId,
                })
            ).json()
            const rs = await (objSake)
            console.log('rs',rs)
            setDetailDataSake(rs)
        })()
        ;(async () => {
            const objSake = await (
                await fetch(APIGift, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: jsonOrderId,
                })
            ).json()
            const rs = await (objSake)
            setDetailDataGift(rs)
        })()
        ;(async () => {
            const objSake = await (
                await fetch(APIInfo, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: jsonOrderId,
                })
            ).json()
            const rs = await (objSake)
            setDetailDataInfo(rs)
        })()
    }, [])

    console.log('sakeData', detailDataSake)
    console.log('giftData', detailDataGift)
    console.log('infoData', detailDataInfo)
    function countPriceSake(price, quantity) {
        return price * quantity
    }
    const renderSakeDetail = (detailDataSake) => {
        if (detailDataSake && detailDataGift.length) {
            return detailDataSake.map((el) => (
                    <div className="table-item" key={el.pro_img}>
                        <div className="item item-product-img">
                            <img src={'http://localhost:3001/images/pro_img/' + el?.pro_img}
                                 alt=""/>
                        </div>
                        <div className="item item-product-info">
                            <h5>{el.pro_name}</h5>
                            <p className="ml">{el.pro_capacity}</p>
                            <p className="price">{el.pro_price}</p>
                            <p className="product-count">{el.order_quantity}</p>
                        </div>
                        <div className="item item-quantity">
                            <p>{el.order_quantity}</p>
                        </div>
                        <div className="item item-subtotal">
                            <p>{countPriceSake(el.order_d_price,el.order_quantity)}</p>
                        </div>
                    </div>
                )
            )
        }
    }

    function boxColor(color) {
        if (color === 'white') {
            return '英石白'
        }
        if (color === 'gold') {
            return '流沙金'
        }
        if (color === 'black') {
            return '曜岩黑'
        }
    }

    function countPriceGift(price1, price2, quantity) {
        return (price1+price2) * quantity
    }

    const renderGiftDetail = (detailDataGift) => {
        if (detailDataGift && detailDataGift.length) {
            return detailDataGift.map((el) => (
                    <div className="table-item" key={el.pro_img}>
                        <div className="item item-product-img">
                            <img src={`/CartList/Gift_${el.gift_id}_${el.box_color}.png`}
                                 alt=""/>
                        </div>
                        <div className="item item-product-info">
                            <h5>{el.gift_name}禮盒</h5>
                            <span>{boxColor(el.box_color)}</span>
                            <p>{el.pro_name}</p>
                            <p className="product-count">x{el.order_quantity}</p>
                        </div>
                        <div className="item item-quantity">
                            <p>{el.order_quantity}</p>
                        </div>
                        <div className="item item-subtotal">
                            <p>{countPriceGift(el.pro_one.pro_price,el.pro_two.pro_price, el.order_quantity)}</p>
                        </div>
                    </div>
                )
            )
        }
    }
    const renderInfoDetail = (detailDataInfo) => {
        if (detailDataInfo && detailDataInfo.length) {
            return detailDataInfo.map((el, i) => (
                    <div className="order-container" key={i}>
                        <img src="/CartList/orderBg.png" alt=""/>
                        <div className="order-title">
                            <div className="form-lab">訂單編碼 {el.order_id}</div>
                            <span>{el.order_date}</span>
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
                )
            )
        }
    }

    const sumData = _.sumBy([...detailDataSake, ...detailDataGift], 'order_d_price')
    const usedCode = JSON.parse(localStorage.getItem('orderUsedCode'))
    const renderSummary = (detailDataSake, detailDataGift) => {
        if (detailDataSake && detailDataGift) {
            return (
                <div className="list-summary">
                    <div className="table-row">
                        <p>小計</p>
                        <p className="dollar-sign">{sumData}</p>
                    </div>
                    <div className="table-row">
                        <p>折扣碼</p>
                        <p>{usedCode}</p>
                    </div>
                    <div className="table-row">
                        <p>運費</p>
                        <p className="dollar-sign">0</p>
                    </div>
                    <div className="table-row">
                        <p>總計</p>
                        <p className="dollar-sign total">{sumData}</p>
                    </div>
                </div>
            )
        }
    }

    const renderDetailData = () => {
        return (
            <>
                <div className="renderDetailZone">
                    <div className="left-list">
                        <div className="mobile-table-btn ">
                            <span className="total">訂單總計: $ {'el?.order_d_price'}</span>
                        </div>
                        <div className="list-table">
                            <div className="table-head ">
                                <span className="title-product">商品</span>
                                <span className="title-quantity">數量</span>
                                <span className="title-subtotal">小計</span>
                            </div>
                            {renderSakeDetail(detailDataSake)}
                            {renderGiftDetail(detailDataGift)}
                        </div>
                        {renderSummary(detailDataSake, detailDataGift)}
                    </div>
                    <div className="rightOrder">
                        {renderInfoDetail(detailDataInfo)}
                        <Link to="/member/order-list">
                            <button className="btn btn-secondary">返回</button>
                        </Link>
                    </div>
                </div>

            </>
        )
    }
    return (
        <>
            <div className="MemberOrderListDetail">
                <ProgressBarM step="one" content={stepContent}/>
                <div className="listDetail-container">
                    {detailDataSake && renderDetailData()}
                </div>
            </div>
        </>
    )
}

export default MemberOrderListDetail
