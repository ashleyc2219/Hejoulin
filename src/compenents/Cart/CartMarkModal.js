import React from 'react'
import './CartMarkModal.scss'

const CartMarkModal = (props) => {
  const { sakeInfo, setMarkModalShow, setMarkPic, markPic } = props
  const MarkDelete = async function () {
    let data = {
      cart_sake_id: sakeInfo.cart_sake_id,
    }
    const r1 = await fetch('http://localhost:3001/api/cart-list/mark', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const obj = await r1.json()
    // console.log(obj)
  }

  return (
    <>
      <div className="CartMarkModal">
        <div className="markmodal">
          <div className="img">
            <img
              src={`http://localhost:3001/images/mark_pic/${markPic}`}
              alt=""
            />
          </div>
          <div className="btns">
            <button
              className="btn-primary btn"
              onClick={() => {
                MarkDelete()
                setMarkPic(null)
                setMarkModalShow(false)
              }}
            >
              刪除
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setMarkModalShow(false)
              }}
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartMarkModal
