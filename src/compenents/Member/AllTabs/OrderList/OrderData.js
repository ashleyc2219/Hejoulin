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
    const [giftData, setGiftData] = useState([])
    const [orderId, setOrderId] = useState([])
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
    }

    useEffect(() => {
        page(cPage)
    }, [cPage])

    console.log("orderId",orderId)

    // 跑迴圈拿出不同order_id的禮盒資料
    useEffect( ()=> {
        let orderIdData = []
        orderId.forEach((id) => {
            (async () => {
                const obj = await (
                    await fetch(`http://localhost:3001/api/cart-order-confirm/order-gift?order_id=${id}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                ).json()
                console.log(obj)
                orderIdData.push(obj)
            })()
        })
        setGiftData(orderIdData)

    }, [orderId])
    console.log('giftData',giftData)
    useEffect(() => {
        ;(async () => {
            const obj = await (
                await fetch(APIMOrder, {
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + localStorage.token,
                    },
                    body: status,
                })
            ).json()
            console.log(obj)

            let allOrderId = []
            obj.rows?.forEach(item=>{
                if(!allOrderId.includes(item.order_id)) {
                    allOrderId.push(item.order_id)
                }
            })
            setOrderId(allOrderId)
            setOrderData(obj.rows)
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
            setPageData(obj2.rows)
            setOrderData(obj2.rows)
        })()
    }, [])


    // 頁籤
    // const filterData = (d) => {
    //     if (d && d.length) {
    //         for (const e of d) {
    //             const st = e.order_state
    //             // st 拿去等於 status 等於true的話 set進setStatus e push 到currentStatusData
    //             if (st === status) {
    //                 setStatus(st)
    //                 setCurrentStatusData(e)
    //             }
    //         }
    //     }
    // }
    const renderOrderItems = (pageData, status) => {
        // filter 分頁籤
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
        let groupData = {}
        if(pageData && pageData.length) {
             pageData.forEach((item) => {
                let totalData = groupData[item.order_id] ||
                    //如果沒有找到key才會變成的樣子
                    {
                        detail:[],
                        price:0,
                        date:item.order_date,
                        status:item.order_state,
                        id:item.order_id
                    }
                 totalData.price += item.order_d_price
                 totalData.detail.push(item)
                 groupData[item.order_id] = totalData
            })
        }
        console.log('sakeData',groupData)
        if (pageData && pageData.length) {
            let element = []
            Object.keys(groupData).forEach((key)=>{
                element.push(
                <tr key={key.toString()}>
                    <td>{groupData[key].date}</td>
                    <td>{groupData[key].id}</td>
                    <td>{groupData[key].price}</td>
                    <td>{groupData[key].status}</td>
                    <td className="button-g">
                        <Link to="/member/order-list/detail">
                            <button
                                className="btn btn-primary"
                                onClick={() => localStorage.setItem('orderDetail', JSON.stringify([groupData[key]]))}>查看訂單
                            </button>
                        </Link>
                        {' '}
                        <button className="btn btn-secondary">再買一次</button>
                    </td>
                </tr>
                )})
            console.log(element)
            return element
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
                    <tbody>{renderOrderItems(pageData)}</tbody>
                </table>
            </div>
        </>
    )
}

export default OrderData
