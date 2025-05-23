import React, { useState } from 'react'
import { CartCount } from '../../App'
import FetchMemberId from '../Member/FetchMemberId'

const AddCart = ({
  quality,
  kind,
  comfirmColor,
  sakeId,
  sakeId2,
  setCartCount,
  setAddcartmodal,
  sidebar,
  setSidebar,
  setLoginModal,
}) => {
  // const {
  //   quality,
  //   kind,
  //   comfirmColor,
  //   sakeId,
  //   sakeId2,
  //   setCartCount,
  //   setAddcartmodal,
  //   sidebar,
  //   setSidebar,
  //   setLoginModal,
  // } = props

  const addcart = async (num) => {
    const getMember = await FetchMemberId(localStorage.getItem('token'))

    if (getMember !== 'noMemberId') {
      const a = quality + num
      setCartCount(a)

      const data = {
        member_id: getMember,
        cart_quantity: quality,
        gift_id: kind + 1,
        box_color: comfirmColor,
        pro_id: [`${sakeId}`, `${sakeId2}`],
      }

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
          `${process.env.REACT_APP_BACKEND_URL}/api/gift_addcart`,
          settings
        )
        const data = await fetchResponse.json()
        if (data.success) {
          setAddcartmodal(true)
          setTimeout(() => {
            setAddcartmodal(false)
          }, 4000)
        }
      } catch (e) {
        return e
      }
    } else {
      setLoginModal(true)
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
              setTimeout(() => {
                window.scroll({ top: 0, left: 0, behavior: 'smooth' })
              }, 1000)
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
