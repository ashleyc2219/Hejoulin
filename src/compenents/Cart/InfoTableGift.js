import React from 'react'
import './InfoTableGift.scss'

const InfoTableGift = (props) => {
  const { giftInfo } = props
  let price = 0
  // console.log(giftInfo)
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
  function renderGiftInfo(giftInfo) {
    if (giftInfo.gift_id === 3) {
      price = giftInfo.pro_one.pro_price + giftInfo.pro_two.pro_price + 200
      return (
        <>
          <p>{giftInfo.pro_one.pro_name}</p>
          <p>{giftInfo.pro_two.pro_name}</p>
        </>
      )
    }
    if (giftInfo.gift_id === 2) {
      price = giftInfo.pro_price + 200
      return (
        <>
          <p>{giftInfo.pro_name}</p>
        </>
      )
    }
    if (giftInfo.gift_id === 4) {
      price = giftInfo.pro_price + 200 + 600
      return (
        <>
          <p>{giftInfo.pro_name}</p>
          <p>{giftInfo.container_name}</p>
        </>
      )
    }
  }
  return (
    <>
      <div className="table-item gift-item">
        <div className="item item-gift-img">
          {giftInfo.cart_quantity !== 1 ? (
            <span className="quantity">{giftInfo.cart_quantity}</span>
          ) : (
            ''
          )}
          <img src={'/CartList/Gift_' + giftInfo.gift_id + '.png'} alt="" />
        </div>
        <div className="item item-product-info">
          <h5>{giftInfo.gift_name}禮盒</h5>
          <span>{boxColor(giftInfo)}</span>
          {renderGiftInfo(giftInfo)}
        </div>
        <div className="item item-subtotal">
          <p>{price * giftInfo.cart_quantity}</p>
        </div>
      </div>
      <hr />
    </>
  )
}

export default InfoTableGift
