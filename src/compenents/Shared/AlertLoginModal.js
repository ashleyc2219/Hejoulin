import React from 'react'
import './AlertLoginModal.scss'

const AlertLoginModal = ({ setLoginModal, setSidebar }) => {
  return (
    <>
      <div className="AlertLoginModal">
        <div className="Modal">
          <div className="title">請登入會員</div>
          <div className="button">
            <button
              onClick={() => {
                setLoginModal(false)
                setSidebar(true)
              }}
              className="btn-sm btn btn-primary"
            >
              關閉
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AlertLoginModal
