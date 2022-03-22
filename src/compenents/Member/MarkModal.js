import React, { useState } from 'react'
import './../../styles/Member/MarkModal.scss'

const MarkModal = (props) => {
  const { modalShow, setModalShow } = props
  console.log(props)

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
          <img src="/Member/MarkEX.svg" alt="" />
        </div>
      </div>
    </>
  )
}

export default MarkModal
