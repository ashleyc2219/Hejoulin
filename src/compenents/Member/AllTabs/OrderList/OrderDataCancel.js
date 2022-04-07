import React, {useEffect, useState} from 'react'
import '../../../../styles/Member/Member-Order/OrderData.scss'
import {Link} from "react-router-dom";

const OrderDataCancel = ({pageData, setPageData, cPage, setOrderData}) => {
    const APIMOrderGet = 'http://localhost:3001/user/member/orderListTab3'
    const listNames = [
        {listName: '訂單日期'},
        {listName: '訂單編碼'},
        {listName: '訂單金額'},
        {listName: '訂單狀態'},
    ]

    const listType = (items) =>
        items.map((item, i) => <th key={i}>{item.listName}</th>)


    async function page(cPage) {
        const data = {
            page: cPage
        }
        const obj2 = await (
            await fetch(APIMOrderGet, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.token,
                },
                body: JSON.stringify(data),
            })
        ).json()
        setPageData({})
        setPageData(obj2)
    }

    useEffect(() => {
        page(cPage)
    }, [cPage])


    useEffect(() => {
        ;(async () => {
            const obj = await (
                await fetch(APIMOrderGet, {
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + localStorage.token,
                    },
                })
            ).json()
            console.log(obj)
            setOrderData(obj)
        })()
        ;(async () => {
            const obj2 = await (
                await fetch(APIMOrderGet, {
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + localStorage.token,
                    },
                    body: 1,
                })
            ).json()
            setPageData(obj2)
            setOrderData(obj2)
        })()
    }, [])


    console.log(pageData)
    const renderOrderItems = (pageData) => {
        if (pageData && pageData.length) {
            return pageData.map((el) => (
                <tr key={el.order_d_id}>
                    <td>{el.order_date}</td>
                    <td>{el.order_id}</td>
                    <td>{el.order_d_price}</td>
                    <td>{el.order_state}</td>
                    <td className="button-g">
                        <Link to="/member/order-list/detail">
                            <button className="btn btn-primary"
                                    onClick={() => localStorage.setItem('orderDetail', JSON.stringify(el))}>查看訂單
                            </button>
                        </Link>
                        {' '}
                        <button className="btn btn-secondary">再買一次</button>
                    </td>
                </tr>
            ))
        } else {
            return (
                <tr>
                    <td></td>
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
                    <tbody>{renderOrderItems(pageData)}</tbody>
                </table>
            </div>
        </>
    )
}

export default OrderDataCancel
