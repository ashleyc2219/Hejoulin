import React, {useEffect, useState} from 'react'
import '../../../../styles/Member/Member-Order/OrderData.scss'
import {Link} from "react-router-dom";

const OrderData = (props) => {
    const {pageData, setPageData, cPage, setCPage, currentRow, setCurrentRow, detailData, setDetailData} = props
    const [dataOrder, setOrderData] = useState({}) // 訂單資料
    const [status, setStatus] = useState('all')
    const [currentStatusData, setCurrentStatusData] = useState([])// 放目前tab的資料
    const APIMOrder = 'http://localhost:3001/user/member/MemberOrderList'
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
            await fetch(APIMOrder, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.token,
                },
                body: JSON.stringify(data),
            })
        ).json()
        setPageData({})
        setPageData(obj2.rows)
        console.log('obj : ', obj2)
    }

    useEffect(() => {
        page(cPage)
    }, [cPage])


    useEffect(() => {
        ;(async () => {
            const obj = await (
                await fetch(APIMOrder, {
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + localStorage.token,
                    },
                })
            ).json()
            console.log(obj)
            setOrderData(obj.rows)
            console.log(obj.orderDetail)
            setDetailData(obj.orderDetail)
        })()
        ;(async () => {
            const obj2 = await (
                await fetch(APIMOrder, {
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + localStorage.token,
                    },
                    body: 1,
                })
            ).json()
            console.log(obj2)
            setPageData(obj2.rows)
            setOrderData(obj2.rows)
            console.log(obj2.length)
        })()
    }, [])


    const filterData = (d) => {
        if (d && d.length) {
            for (const e of d) {
                const st = e.order_state
                // st 拿去等於 status 等於true的話 set進setStatus e push 到currentStatusData
            }
        }
    }


    const renderOrderItems = (pageData, status) => {
        //
        // function c(pageData) { pageData.filter(e=>{
        //     console.log('sssa',e)
        //         return e.order_state === "待出貨"
        //     }
        // )}
        console.log('c', filterData(pageData))
        //filter 分頁籤
        // const filterData = []
        // switch (status) {
        //     case status === 'toGo':
        //         pageData.filter(e=>{return order_state === "待出貨"})
        //     break
        //     case
        //     break
        //     case
        //     break
        //     case
        //     break
        //     default: {
        //
        //     }
        // }
        if (pageData && pageData.length) {
            return pageData.map((el) => (
                <tr key={'test' + el.order_d_id}>
                    <td>{el.order_date}</td>
                    <td>{el.order_id}</td>
                    <td>{el.order_d_price}</td>
                    <td>{el.order_state}</td>
                    <td className="button-g">
                        <Link to="/member/order-list/detail">
                            <button className="btn btn-primary">查看訂單</button>
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

export default OrderData
