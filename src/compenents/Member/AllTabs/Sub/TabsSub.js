import React, { useState } from 'react'
import TabNavItem from '../../TabComponent/TabNavItem'
import TabContent from '../../TabComponent/TabContent'
import '../../../../styles/Member/TabComponent/TabsSub.scss'
import SubData from './SubData'
import TabPages from '../../TabComponent/TabPages'

const TabsSub = (props) => {
  const { user, setUser } = props
  const [activeTab, setActiveTab] = useState('tab1')
  return (
    <>
      <div className="TabsSub">
        <nav className="nav">
          <TabNavItem
            title="已過期"
            id="tab1"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            checked={true}
          />
          <TabNavItem
            title="訂閱中"
            id="tab2"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabPages />
        </nav>
        <div className="outlet">
          <TabContent id="tab1" activeTab={activeTab}>
            <SubData user={user} setUser={setUser} />
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
export default TabsSub
