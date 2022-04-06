import React, { useState } from 'react'
import '../../styles/Member/Modal/MarkModal.scss'

const MarkModal = (props) => {
  const { modalShow, setModalShow, markData, setMarkData } = props

  const openModal = () => {
    setModalShow((prev) => !prev)
  }

  // const renderBigMark = (markData) => {
  //   if (markData && markData.length) {
  //     return markData.map((el, i)=>(
  //           <img
  //               key={i}
  //               src={'http://localhost:3001/images/mark_pic/' + el.pics}
  //               alt=""
  //           />
  //     ))
  //   }
  // }

  return (
    <>
      <div className="displayBlock">
        <div className="MarkModal">
          <div className="close-white" onClick={openModal}>
            <img src="/ProductList/close-white.svg" alt="" />
          </div>
          <div className="mobile-close">
            <img src="/ProductList/close-black.svg" alt="" />
          </div>
          <img
            src="http://localhost:3001/images/mark-pic/4-1.jpg"
            alt=""
          />
          {/*{renderBigMark(markData)}*/}
        </div>
      </div>
    </>
  )
}

export default MarkModal
