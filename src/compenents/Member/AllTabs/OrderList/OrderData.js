import React, {useEffect, useState} from 'react'
import '../../../../styles/Member/Member-Order/OrderData.scss'
import {Link} from "react-router-dom";

const OrderData = (props) => {
    const {
        pageData,
        setPageData,
        cPage,
        status,
        dataOrder,
        setOrderData,
    } = props
    const APIOrderTotal = 'http://localhost:3001/user/member/MemberOrderListTotal'
    const listNames = [
        {listName: '訂單日期'},
        {listName: '訂單編碼'},
        {listName: '訂單金額'},
        {listName: '訂單狀態'},
    ]

    const listType = (items) =>
        items.map((item, i) => <th key={i}>{item.listName}</th>)

    useEffect(() => {
        ;(async () => {
            const objTotal = await (
                await fetch(APIOrderTotal, {
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + localStorage.token,
                    },
                })
            ).json()
            const rs = await (objTotal)
            setOrderData(rs)
        })()
    }, [])

    const renderOrderItems = (dataOrder) => {
        console.log('outMap',dataOrder.rs)
        if (dataOrder.rs && dataOrder.rs.length) {
            console.log('inMap',dataOrder.rs)
            return dataOrder.rs.map((el, i)=>
                (
                    <tr key={i}>
                        <td>{el.order_date}</td>
                        <td>{el.order_id}</td>
                        <td>{el.total_price}</td>
                        <td>{el.order_state}</td>
                        <td className="button-g">
                            <Link to="/member/order-list/detail">
                                <button
                                    className="btn btn-primary">
                                  查看訂單
                                </button>
                            </Link>
                            {' '}
                            <button className="btn btn-secondary">再買一次</button>
                        </td>
                    </tr>
                )
            )
        } else {
            return (
                <tr>
                    <td>您目前未有訂單</td>
                    <Link>
                        <button>前往選購商品</button>
                    </Link>
                </tr>
            )
        }
    }
    return (
        <>
            <div className="orderData">
                <table>
                    <thead>
                    <tr>{listType(listNames)}</tr>
                    </thead>
                    <tbody>{renderOrderItems(dataOrder)}</tbody>
                </table>
            </div>
        </>
    )
}

export default OrderData
