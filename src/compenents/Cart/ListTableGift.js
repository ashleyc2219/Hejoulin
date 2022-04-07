import React from 'react'
import { useEffect, useState } from 'react'
import './ListTableGift.scss'

const ListTableGift = (props) => {
  const {
    giftIncart,
    setGiftIncart,
    giftInfo,
    member_id,
    giftTotal,
    setGiftTotal,
  } = props
  const [quantity, setQuantity] = useState(giftInfo['cart_quantity'])
  let price = 0
  useEffect(() => {
    setQuantity(giftInfo['cart_quantity'])
  }, [giftIncart])

  const fetchURL = 'http://localhost:3001/api/cart-list/gift'
  function renderGiftInfo(giftInfo) {
    if (giftInfo.gift_id === 3) {
      price = giftInfo.pro_one.pro_price + giftInfo.pro_two.pro_price + 200
      return (
        <>
          <h5>{giftInfo.pro_one.pro_name}</h5>
          <p className="ml">{giftInfo.pro_one.pro_capacity}</p>
          <h5>{giftInfo.pro_two.pro_name}</h5>
          <p className="ml">{giftInfo.pro_two.pro_capacity}</p>
          <div className="quantity-container">
            <img
              src="/CartList/minus-circle.svg"
              alt=""
              onClick={minusQuantity}
            />
            <p>{quantity}</p>
            <img
              src="/CartList/plus-circle.svg"
              alt=""
              onClick={plusQuantity}
            />
          </div>
        </>
      )
    }
    if (giftInfo.gift_id === 2) {
      price = giftInfo.pro_price + 200
      return (
        <>
          <h5>{giftInfo.pro_name}</h5>
          <p className="ml">{giftInfo.pro_capacity}</p>
          <div className="quantity-container">
            <img
              src="/CartList/minus-circle.svg"
              alt=""
              onClick={minusQuantity}
            />
            <p>{quantity}</p>
            <img
              src="/CartList/plus-circle.svg"
              alt=""
              onClick={plusQuantity}
            />
          </div>
        </>
      )
    }
    if (giftInfo.gift_id === 4) {
      price = giftInfo.pro_price + 200 + 600
      return (
        <>
          <h5>{giftInfo.pro_name}</h5>
          <p className="ml">{giftInfo.pro_capacity}</p>
          <h5>{giftInfo.container_name}</h5>
          <div className="quantity-container">
            <img
              src="/CartList/minus-circle.svg"
              alt=""
              onClick={minusQuantity}
            />
            <p>{quantity}</p>
            <img
              src="/CartList/plus-circle.svg"
              alt=""
              onClick={plusQuantity}
            />
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
  function updateGiftTotal(price, action) {
    let newGiftTotal = giftTotal
    console.log(action)
    if (action === 'add') {
      newGiftTotal += price
    }
    if (action === 'minus') {
      newGiftTotal -= price
    }
    if (action === 'del') {
      newGiftTotal -= price
    }
    console.log(newGiftTotal)
    setGiftTotal(newGiftTotal)
  }
  let data = {
    member_id: member_id,
    cart_gift_id: giftInfo.cart_gift_id,
  }
  const delGiftItem = async () => {
    const r1 = await fetch(fetchURL, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const obj = await r1.json()
    const newGiftInCart = giftIncart.filter(
      (gift) => gift['cart_gift_id'] !== giftInfo.cart_gift_id
    )
    setGiftIncart(newGiftInCart)
    updateGiftTotal(price * quantity, 'del')
  }
  const minusQuantity = async () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
      let data = {
        cart_quantity: quantity - 1,
        member_id: member_id,
        cart_gift_id: giftInfo.cart_gift_id,
      }
      const r1 = await fetch(fetchURL, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const obj = await r1.json()
      updateGiftTotal(price, 'minus')
    }
  }
  const plusQuantity = async () => {
    setQuantity(quantity + 1)
    let data = {
      cart_quantity: quantity + 1,
      member_id: member_id,
      cart_gift_id: giftInfo.cart_gift_id,
    }
    const r1 = await fetch(fetchURL, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const obj = await r1.json()
    updateGiftTotal(price, 'add')
  }
  return (
    <>
      <div className="table-item gift-table-item">
        <div className="item item-del">
          <img src="/CartList/trash.png" alt="" onClick={delGiftItem} />
        </div>
        <div className="item item-gift-img">
          <img src={'/CartList/Gift_' + giftInfo.gift_id + '.png'} alt="" />
          <p>{giftInfo.gift_name} 禮盒</p>
        </div>
        <div className="item item-gift-detail">{renderGiftInfo(giftInfo)}</div>
        <div className="item item-color">
          <p>{boxColor(giftInfo)}</p>
        </div>
        <div className="item item-quantity">
          <div className="quantity-container">
            <img
              src="/CartList/minus-circle.svg"
              alt=""
              onClick={minusQuantity}
            />
            <p>{quantity}</p>
            <img
              src="/CartList/plus-circle.svg"
              alt=""
              onClick={plusQuantity}
            />
          </div>
        </div>
        <div className="item item-subtotal">
          <p>{price * quantity}</p>
        </div>
      </div>
      <hr></hr>
    </>
  )
}

export default ListTableGift
