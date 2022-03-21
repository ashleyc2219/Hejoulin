import React from 'react'
import '../../../styles/Member/TabComponent/TabNavItem.scss'

const TabNavItem = ({ id, title, activeTab, setActiveTab, checked }) => {
  const handleClick = () => {
    setActiveTab(id)
  }

  return (
    <>
      <input
        type="radio"
        name="tabs"
        id={id}
        className="tabInput"
        defaultChecked={checked}
      />
      <label
        className={activeTab === id ? 'active tabLabel' : 'tabLabel'}
        onClick={handleClick}
        htmlFor={id}
      >
        {title}
      </label>
    </>
  )
}

export default TabNavItem
