import React from 'react'
import './CartMarkModal.scss'

const CartMarkModal = () => {
  return (
    <>
      <div className="CartMarkModal">
        <div className="markmodal">
          <div className="img">
            <img src="http://localhost:3001/images/mark_pic/1-1.jpg" alt="" />
          </div>
          <div className="btns">
            <button className="btn-primary btn ">刪除</button>
            <button className="btn btn-secondary">確認</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartMarkModal
