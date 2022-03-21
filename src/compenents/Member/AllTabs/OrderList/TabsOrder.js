import React, { useState } from 'react'
import TabNavItem from '../../TabComponent/TabNavItem'
import TabContent from '../../TabComponent/TabContent'
import '../../../../styles/Member/TabComponent/TabsOrder.scss'
import OrderData from './OrderData'
import TabPages from '../../TabComponent/TabPages'

const TabsOrder = (props) => {
  const { user, setUser } = props
  const [activeTab, setActiveTab] = useState('tab1')
  return (
    <>
      <div className="TabOrder">
        <div className="nav">
          {/*TODO:建立搜尋元件*/}
          <img src="/ProductList/search.svg" alt="" />
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
          <TabNavItem
            title="已完成"
            id="tab4"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="已取消"
            id="tab5"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabPages />
        </div>
        <div className="outlet">
          <TabContent id="tab1" activeTab={activeTab}>
            <OrderData user={user} setUser={setUser} />
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            {/*<EventData data={data} setData={setData} />*/}
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab}>
            {/*<EventData data={data} setData={setData} />*/}
          </TabContent>
          <TabContent id="tab4" activeTab={activeTab}>
            {/*<EventData data={data} setData={setData} />*/}
          </TabContent>
          <TabContent id="tab5" activeTab={activeTab}>
            {/*<EventData data={data} setData={setData} />*/}
          </TabContent>
        </div>
      </div>
    </>
  )
}
export default TabsOrder
