import React, { useState } from 'react'
import './../../styles/Member/MarkModal.scss'

const MarkModal = () => {
  const [modalShow, setModalShow] = useState(false)

  const openModal = () => {
    setModalShow((prev) => !prev)
  }
  return (
    <>
      <div className="MarkModal">
        <div className="close-white">
          <img src="/ProductList/close-white.svg" alt="" />
        </div>
        <div className="mobile-close">
          <img src="/ProductList/close-black.svg" alt="" />
        </div>
        <div className="MarkPicDisplay" onClick={openModal}>
          <img src="/Member/MarkEX.svg" alt="" />
        </div>
      </div>
    </>
  )
}

export default MarkModal
