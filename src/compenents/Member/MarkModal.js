import React, { useState } from 'react'
import '../../styles/Member/Modal/MarkModal.scss'

const MarkModal = (props) => {
  const { setModalShow, modalContent } = props

  const openModal = () => {
    setModalShow((prev) => !prev)
  }


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
              src={'http://localhost:3001/images/mark_pic/' + modalContent}
              alt=""
          />

        </div>
      </div>
    </>
  )
}

export default MarkModal
