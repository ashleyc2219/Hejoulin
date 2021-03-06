import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import SideBarItem from './SideBarItem'
import '../../../styles/Member/Member-Sidebar/Sidebar.scss'

function Sidebar() {
  const renderItem = (items) =>
    items.map((item, i) => (
      <nav className="nav-item" key={i}>
        <Link className="nav-link" to={item.path}>
          <div className="SidebarItem">{item.itemName}</div>
        </Link>
      </nav>
    ))
  return (
    <>
      <div className="Sidebar">
        <nav className="side-nav">{renderItem(SideBarItem)}</nav>
      </div>
    </>
  )
}

export default Sidebar
