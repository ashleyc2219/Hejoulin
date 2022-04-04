import React from 'react'
import './AlertModal.scss'

const Modal = (props) => {
  const { closeModal } = props
  return (
    <div className="alert_modal">
      <div className="close" onClick={closeModal}></div>
      <div className="header">選購額度已滿！</div>
      <div className="content">選購清酒額度已滿，請先取消當前已選購的商品</div>
      <div className="local">
        <button className="btn btn-primary" onClick={closeModal}>
          確認
        </button>
      </div>
    </div>
  )
}

export default Modal
