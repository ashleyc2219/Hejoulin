import React from 'react'
import './AddCartBtn.scss'
import { CartCount } from '../../App'
import FetchMemberId from '../Member/FetchMemberId'

const AddCartBtn = ({
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
        member_id: 4,
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
          <button
            onClick={() => {
              addcart(cartCount, id)
            }}
            className="btn-sm btn-primary btn cart"
          >
            <img src="/ProductList/cart-white.svg" alt="" />
            加入購物車
          </button>
        )}
      </CartCount.Consumer>
    </>
  )
}

export default AddCartBtn
