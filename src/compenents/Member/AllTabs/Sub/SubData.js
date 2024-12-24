import React, {useEffect, useState} from 'react'
import '../../../../styles/Member/Member-Sub/SubData.scss'
import {Link} from "react-router-dom";

const SubData = ({subData, setSubData}) => {
    const listNames = [
        {listName: '訂閱開始時間'},
        {listName: '訂閱名稱'},
        {listName: '訂閱價格'},
        {listName: '訂閱狀態'},
    ]
    const listType = (items) =>
        items.map((item, i) => <th key={i}>{item.listName}</th>)

    useEffect(() => {
        ;(async () => {
            const obj = await (
                await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/user/member/MemberSublist`, {
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + localStorage.token,
                    },
                })
            ).json()
            console.log(obj)
            setSubData(obj)
        })()
    }, [])

    console.log(subData)
    const renderSubItems = (subData) => {
        if (subData.length) {
            return  (
                <tr>
                    <td>{subData[0].order_date}</td>
                    <td>{subData[1][0].plan_name}</td>
                    <td>{subData[0].order_d_price}</td>
                    <td>{subData[0].order_state}</td>
                    <td>
                        <Link to="/member/sub-list/detail">
                            <button
                                className="btn btn-primary"
                                onClick={() => localStorage.setItem('subDetail', JSON.stringify(subData))}
                            >管理訂閱</button>
                        </Link>
                    </td>
                </tr>
            )
        }
    }
    const noSubItems = (subData) => {
        if (!subData) {
            return (
                <div className="noneSubData">
                    <h5>您目前未有訂閱方案</h5>
                    <Link to="/sub/plan">
                        <button className="btn btn-primary btnSub">點我訂閱去</button>
                    </Link>
                </div>
            )
        }
    }
    return (
        <>
            <div className="subData">
                <table>
                    {subData ? <thead>
                    <tr>{listType(listNames)}</tr>
                    </thead> : <tr></tr>}
                    <tbody>{subData ? renderSubItems(subData) : noSubItems(subData)}</tbody>
                </table>
            </div>
        </>
    )
}

export default SubData
