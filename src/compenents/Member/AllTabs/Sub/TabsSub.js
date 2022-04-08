import React, {useEffect, useState} from 'react'
import TabNavItem from '../../TabComponent/TabNavItem'
import TabContent from '../../TabComponent/TabContent'
import '../../../../styles/Member/TabComponent/TabsSub.scss'
import SubData from './SubData'
import TabPages from '../../TabComponent/TabPages'
import SubDataOver from "./SubDataOver";

const TabsSub = () => {
  const [activeTab, setActiveTab] = useState('tab1')
  const [subData, setSubData] = useState([])
  const [subDataOver, setSubDataOver] = useState([])

  return (
    <>
      <div className="TabsSub">
        <nav className="nav" style={{display: subData ? 'inline-block' : 'none'}}>
          <TabNavItem
            title="已結束"
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
          {/*<TabPages />*/}
        </nav>
        <div className="outlet">
          <TabContent id="tab1" activeTab={activeTab}>
            <SubDataOver subDataOver={subDataOver} setSubDataOver={setSubDataOver}/>
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            <SubData subData={subData} setSubData={setSubData}/>
          </TabContent>
        </div>
      </div>
    </>
  )
}
export default TabsSub
