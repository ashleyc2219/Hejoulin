import React from 'react'

const ListTableGift = (props) => {
  const { giftInfo } = props
  console.log(giftInfo)
  function renderGiftInfo(giftInfo) {
    if (giftInfo.gift_id === 3) {
      return (
        <>
          <h5>{giftInfo.pro_one.pro_name}</h5>
          <p className="ml">{giftInfo.pro_one.pro_capacity}</p>
          <h5>{giftInfo.pro_two.pro_name}</h5>
          <p className="ml">{giftInfo.pro_two.pro_capacity}</p>
          <div className="quantity-container">
            <img src="/CartList/minus-circle.svg" alt="" />
            <p>{giftInfo.cart_quantity}</p>
            <img src="/CartList/plus-circle.svg" alt="" />
            <img className="trash" src="/CartList/trash.png" alt="" />
          </div>
        </>
      )
    }
    if (giftInfo.gift_id === 2) {
      return (
        <>
          <h5>{giftInfo.pro_name}</h5>
          <p className="ml">{giftInfo.pro_capacity}</p>
          <div className="quantity-container">
            <img src="/CartList/minus-circle.svg" alt="" />
            <p>{giftInfo.cart_quantity}</p>
            <img src="/CartList/plus-circle.svg" alt="" />
            <img className="trash" src="/CartList/trash.png" alt="" />
          </div>
        </>
      )
    }
    if (giftInfo.gift_id === 4) {
      return (
        <>
          <h5>{giftInfo.pro_name}</h5>
          <p className="ml">{giftInfo.pro_capacity}</p>
          <h5>{giftInfo.container_name}</h5>
          <div className="quantity-container">
            <img src="/CartList/minus-circle.svg" alt="" />
            <p>{giftInfo.cart_quantity}</p>
            <img src="/CartList/plus-circle.svg" alt="" />
            <img className="trash" src="/CartList/trash.png" alt="" />
          </div>
        </>
      )
    }
  }
  function boxColor(giftInfo) {
    if (giftInfo.box_color === 'white') {
      return '英石白'
    }
    if (giftInfo.box_color === 'gold') {
      return '流沙金'
    }
    if (giftInfo.box_color === 'black') {
      return '曜岩黑'
    }
  }
  return (
    <>
      <div className="table-item gift-table-item">
        <div className="item item-del">
          <img src="/CartList/trash.png" alt="" />
        </div>
        <div className="item item-gift-img">
          <img src="/CartList/fakeGift.png" alt="" />
          <p>{giftInfo.gift_name} 禮盒</p>
        </div>
        <div className="item item-gift-detail">{renderGiftInfo(giftInfo)}</div>
        <div className="item item-color">
          <p>{boxColor(giftInfo)}</p>
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
