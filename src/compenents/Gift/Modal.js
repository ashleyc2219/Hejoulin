import React from 'react'
import './Modal.scss'

const Modal = (props) => {
  const { closeModal } = props
  return (
    <>
      <div className="modal">
        <div className="close">{closeModal}</div>
        <div className="header">選購額度已滿！</div>
        <div className="content">
          選購清酒額度已滿，請先取消當前已選購的商品
        </div>
        <div className="local">
          <button className="comfirm btn btn-secondary" onClick={closeModal}>
            確認
          </button>
        </div>
      </div>
    </>
  )
}

export default Modal
