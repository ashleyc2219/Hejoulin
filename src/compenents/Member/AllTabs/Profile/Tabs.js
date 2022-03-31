import React, { useState } from 'react'
import AddressBox from './AddressBox'
import PassBox from './PassBox'
import CardBox from './CardBox'
import ProfileBox from './ProfileBox'
import TabNavItem from '../../TabComponent/TabNavItem'
import TabContent from '../../TabComponent/TabContent'
import '../../../../styles/Member/TabComponent/Tabs.scss'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1')
  const [memberData, setMemberData] = useState({})

  return (
    <div className="Tabs">
      <div className="nav">
        <TabNavItem
          title="個人資訊"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          checked={true}
        />
        <TabNavItem
          title="收件資訊"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="更改密碼"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="信用卡 / 付款方式"
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <ProfileBox memberData={memberData} setMemberData={setMemberData} />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <AddressBox memberData={memberData} setMemberData={setMemberData} />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <PassBox />
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
          <CardBox />
        </TabContent>
      </div>
    </div>
  )
}
export default Tabs
