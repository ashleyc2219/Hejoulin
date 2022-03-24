import React from 'react'

const ListTableGift = () => {
  return (
    <>
      <div className="table-item gift-table-item">
        <div className="item item-del">
          <img src="/CartList/trash.png" alt="" />
        </div>
        <div className="item item-gift-img">
          <img src="/CartList/fakeGift.png" alt="" />
          <p>1+1 禮盒</p>
        </div>
        <div className="item item-gift-detail">
          <h5>篠峯 雄町純米大吟釀</h5>
          <p className="ml">720</p>
          <h5>津輕金箔玻璃清酒杯</h5>
          <div className="quantity-container">
            <img src="/CartList/minus-circle.svg" alt="" />
            <p>1</p>
            <img src="/CartList/plus-circle.svg" alt="" />
            <img className="trash" src="/CartList/trash.png" alt="" />
          </div>
        </div>
        <div className="item item-color">
          <p>黑色</p>
        </div>
        <div className="item item-quantity">
          <div className="quantity-container">
            <img src="/CartList/minus-circle.svg" alt="" />
            <p>1</p>
            <img src="/CartList/plus-circle.svg" alt="" />
          </div>
        </div>
        <div className="item item-subtotal">
          <p>1880</p>
        </div>
      </div>
      <hr></hr>
    </>
  )
}

export default ListTableGift
