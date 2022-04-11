import React, { useState } from 'react'
import TabNavItem from '../../TabComponent/TabNavItem'
import TabContent from '../../TabComponent/TabContent'
import '../../../../styles/Member/TabComponent/TabsOrder.scss'
import OrderData from './OrderData'
import TabPages from '../../TabComponent/TabPages'
import OrderDataCome from "./OrderDataCome";
import OrderDataToget from "./OrderDataToget";
import OrderDataCancel from "./OrderDataCancel";

const TabsOrder = () => {
  const [activeTab, setActiveTab] = useState('tab1')
  const [pageData, setPageData] = useState({})
  const [cPage, setCPage] = useState(1)
  const [dataOrder, setOrderData] = useState({}) // 訂單資料

  return (
    <>
          <div className="TabOrder">
            <div className="nav">
              <img src="/ProductList/search.svg" className="d-none" alt="" />
              <TabNavItem
                  title="全部"
                  id="tab1"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  checked={true}
              />
              <TabNavItem
                  title="待出貨"
                  id="tab2"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
              />
              <TabNavItem
                  title="待收貨"
                  id="tab3"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
              />
              {/*<TabNavItem*/}
              {/*    title="已完成"*/}
              {/*    id="tab4"*/}
              {/*    activeTab={activeTab}*/}
              {/*    setActiveTab={setActiveTab}*/}
              {/*/>*/}
              <TabNavItem
                  title="已取消"
                  id="tab5"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
              />
              {/*<TabPages*/}
              {/*    pageData={pageData}*/}
              {/*    setPageData={setPageData}*/}
              {/*    cPage={cPage}*/}
              {/*    setCPage={setCPage}*/}
              {/*/>*/}
            </div>
            <div className="outlet">
              <TabContent id="tab1" activeTab={activeTab}>
                <OrderData
                    pageData={pageData}
                    setPageData={setPageData}
                    cPage={cPage}
                    dataOrder={dataOrder}
                    setOrderData={setOrderData}
                />
              </TabContent>
              <TabContent id="tab2" activeTab={activeTab}>
                {/*<OrderDataCome*/}
                {/*    pageData={pageData}*/}
                {/*    setPageData={setPageData}*/}
                {/*    cPage={cPage}*/}
                {/*    setOrderData={setOrderData}*/}
                {/*/>*/}
                <OrderData
                    pageData={pageData}
                    setPageData={setPageData}
                    cPage={cPage}
                    dataOrder={dataOrder}
                    setOrderData={setOrderData}
                />
              </TabContent>
              <TabContent id="tab3" activeTab={activeTab}>
                {/*<OrderDataToget*/}
                {/*    pageData={pageData}*/}
                {/*    setPageData={setPageData}*/}
                {/*    cPage={cPage}*/}
                {/*    setOrderData={setOrderData}*/}
                {/*/>*/}
              </TabContent>
              {/*<TabContent id="tab4" activeTab={activeTab}>*/}
              {/*  <OrderData />*/}
              {/*</TabContent>*/}
              <TabContent id="tab5" activeTab={activeTab}>
                <OrderDataCancel
                    pageData={pageData}
                    setPageData={setPageData}
                    cPage={cPage}
                    setOrderData={setOrderData}
                />
              </TabContent>
            </div>
          </div>
    </>
  )
}
export default TabsOrder
