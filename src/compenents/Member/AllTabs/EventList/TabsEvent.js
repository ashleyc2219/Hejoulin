import React, { useState } from 'react'
import TabNavItem from '../../TabComponent/TabNavItem'
import TabContent from '../../TabComponent/TabContent'
import '../../../../styles/Member/TabComponent/TabsEvent.scss'
import EventData from './EventData'
import TabPages from '../../TabComponent/TabPages'

const TabsEvent = (props) => {
  const { user, setUser } = props
  const [activeTab, setActiveTab] = useState('tab1')
  return (
    <>
      <div className="TabsEvent">
        <nav className="nav">
          {/*TODO:建立搜尋元件*/}
          <img src="/ProductList/search.svg" alt="" />
          <TabNavItem
            title="即將到來"
            id="tab1"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            checked={true}
          />
          <TabNavItem
            title="已參加"
            id="tab2"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="已取消"
            id="tab3"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabPages />
        </nav>
        <div className="outlet">
          <TabContent id="tab1" activeTab={activeTab}>
            <EventData user={user} setUser={setUser} />
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
export default TabsEvent
