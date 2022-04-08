import React, { useState } from 'react'
import TabNavItem from '../../TabComponent/TabNavItem'
import TabContent from '../../TabComponent/TabContent'
import '../../../../styles/Member/TabComponent/TabsEvent.scss'
import EventData from './EventData'
import TabPages from '../../TabComponent/TabPages'
import EventDataAlready from "./EventDataAlready";
import EventDataCancel from "./EventDataCancel";

const TabsEvent = (props) => {
  const [eventData, setEventData] = useState({})
  const [activeTab, setActiveTab] = useState('tab1')
  return (
    <>
      <div className="TabsEvent">
        <nav className="nav">
          <img src="/ProductList/search.svg" className="d-none" alt="" />
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
          {/*<TabPages />*/}
        </nav>
        <div className="outlet">
          <TabContent id="tab1" activeTab={activeTab}>
            <EventData eventData={eventData} setEventData={setEventData} />
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            <EventDataAlready  eventData={eventData} setEventData={setEventData} />
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab}>
            <EventDataCancel eventData={eventData} setEventData={setEventData} />
          </TabContent>
        </div>
      </div>
    </>
  )
}
export default TabsEvent
