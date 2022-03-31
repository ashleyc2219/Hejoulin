import React from 'react'
import { CartCount } from '../../App'

const AddCart = (props) => {
  const { quality, kind, comfirmColor, sakeId, sakeId2, setCartCount } = props

  const addcart = async (num) => {
    const a = quality + num
    console.log(quality, num)
    setCartCount(a)

    const data = {
      member_id: 4,
      cart_quantity: quality,
      gift_id: kind,
      box_color: comfirmColor,
      pro_id01: `${sakeId}`,
      pro_id02: `${sakeId2}`,
    }
    console.log(data)

    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    try {
      const fetchResponse = await fetch(
        'http://localhost:3001/api/gift_addcart',
        settings
      )
      const data = await fetchResponse.json()
      if (data.success) {
        // alert('已加入購物車')
      }
    } catch (e) {
      return e
    }
  }

  return (
    <>
      <CartCount.Consumer>
        {(cartCount) => (
          <button
            className="btn btn-primary btn-sm gift_cart"
            onClick={() => {
              addcart(cartCount, kind, comfirmColor)
            }}
          >
            <img src="/Gift/cart.svg" alt="" className="cart" />
            加入購物車
          </button>
        )}
      </CartCount.Consumer>
    </>
  )
}

export default AddCart
