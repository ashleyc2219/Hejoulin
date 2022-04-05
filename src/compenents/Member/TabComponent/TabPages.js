import React, {useState} from 'react'
import '../../../styles/Member/TabComponent/TabPages.scss'

const TabPages = ({ cPage, setCPage }) => {

  return (
    <>
      <div className="pageTags">
        <div className="page" onClick={()=> setCPage(1)} >1</div>
        <div className="page" onClick={()=> setCPage(2)} >2</div>
        {/*<div className="page">3</div>*/}
      </div>
    </>
  )
}
export default TabPages
