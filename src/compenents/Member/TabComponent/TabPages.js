import React, {useState} from 'react'
import '../../../styles/Member/TabComponent/TabPages.scss'

const TabPages = () => {
    const [currentPageSize, setCurrentPageSize] = useState(8) // 每頁幾條資料
    const [firstRowIndex, setFirstRowIndex] = useState(0) // 每頁幾條資料
    const [totalItems, setTotalItems] = useState(0) // 每頁幾條資料
  return (
    <>
      <div className="pageTags">
        <div className="page">1</div>
        <div className="page">2</div>
        <div className="page">3</div>
      </div>
    </>
  )
}
export default TabPages
