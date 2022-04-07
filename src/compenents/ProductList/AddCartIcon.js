import React from 'react'
import { CartCount } from '../../App'
import './AddCartIcon.scss'
import FetchMemberId from '../Member/FetchMemberId'

const AddCartIcon = ({
  id,
  setCartCount,
  count,
  setAddcartmodal,
  setLoginModal,
}) => {
  const addcart = async (num, pro_id) => {
    const getMember = await FetchMemberId(localStorage.getItem('token'))
    if (getMember !== 'noMemberId') {
      const a = count + num
      setCartCount(a)

      const data = {
        member_id: getMember,
        pro_id: `${pro_id}`,
        cart_quantity: `${count}`,
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
          'http://localhost:3001/api/products-addcart',
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
          <img
            onClick={() => {
              addcart(cartCount, id)
            }}
            className="cart"
            src="/ProductList/cart.svg"
            alt=""
          />
        )}
      </CartCount.Consumer>
    </>
  )
}

export default AddCartIcon
