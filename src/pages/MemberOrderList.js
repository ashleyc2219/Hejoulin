import React, {useState} from 'react'
import '../styles/Member/MemberOrderList.scss'
import Sidebar from '../compenents/Member/SideBar/Sidebar'
import TabsOrder from '../compenents/Member/AllTabs/OrderList/TabsOrder'

const MemberOrderList = () => {

    return (
        <>
            <div className="MemberOrderList">
                <Sidebar/>
                <div className="MemberOrderBox">
                    <TabsOrder />
                </div>
            </div>
        </>
    )
}

export default MemberOrderList
