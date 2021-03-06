import React from 'react'

const OrderTableGift = (props) => {
  const { giftInfo } = props
  console.log(giftInfo)
  let price = 0
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
  if (giftInfo.gift_id === 3) {
    price = giftInfo.pro_one.pro_price + giftInfo.pro_two.pro_price + 200
    return (
      <>
        <div className="table-item">
          <div className="item item-product-img">
            <img
              src={`/CartList/Gift_${giftInfo.gift_id}_${giftInfo.box_color}.png`}
              alt=""
            />
          </div>
          <div className="item item-product-info">
            <h5>{giftInfo.gift_name} 禮盒</h5>
            <span>{boxColor(giftInfo)}</span>
            <p>{giftInfo.pro_one.pro_name}</p>
            <p>{giftInfo.pro_two.pro_name}</p>
            <p className="product-count">x{giftInfo.order_quantity}</p>
          </div>
          <div className="item item-quantity">
            <p>{giftInfo.order_quantity}</p>
          </div>
          <div className="item item-subtotal">
            <p>{price * giftInfo.order_quantity}</p>
          </div>
        </div>
        <hr />
      </>
    )
  }
  // 1入
  if (giftInfo.gift_id === 2) {
    price = giftInfo.pro_price + 200
    return (
      <>
        <div className="table-item">
          <div className="item item-product-img">
            <img
              src={`/CartList/Gift_${giftInfo.gift_id}_${giftInfo.box_color}.png`}
              alt=""
            />
          </div>
          <div className="item item-product-info">
            <h5>{giftInfo.gift_name} 禮盒</h5>
            <span>{boxColor(giftInfo)}</span>
            <p>{giftInfo.pro_name}</p>
            <p className="product-count">x{giftInfo.order_quantity}</p>
          </div>
          <div className="item item-quantity">
            <p>{giftInfo.order_quantity}</p>
          </div>
          <div className="item item-subtotal">
            <p>{price * giftInfo.cart_quantity}</p>
          </div>
        </div>
        <hr />
      </>
    )
  }
  if (giftInfo.gift_id === 4) {
    price = giftInfo.pro_price + 200 + 600
    return (
      <>
        <div className="table-item">
          <div className="item item-product-img">
            <img
              src={`/CartList/Gift_${giftInfo.gift_id}_${giftInfo.box_color}.png`}
              alt=""
            />
          </div>
          <div className="item item-product-info">
            <h5>{giftInfo.container_name} 禮盒</h5>
            <span>{boxColor(giftInfo)}</span>
            <p>{giftInfo.pro_name}</p>
            <p>{giftInfo.pro_name}</p>
            <p className="product-count">x{giftInfo.order_quantity}</p>
          </div>
          <div className="item item-quantity">
            <p>{giftInfo.order_quantity}</p>
          </div>
          <div className="item item-subtotal">
            <p>{price * giftInfo.order_quantity}</p>
          </div>
        </div>
        <hr />
      </>
    )
  }
}

export default OrderTableGift
