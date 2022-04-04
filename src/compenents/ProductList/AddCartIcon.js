import React from 'react'
import { CartCount } from '../../App'
import './AddCartIcon.scss'

const AddCartIcon = ({ id, setCartCount, count, setAddcartmodal }) => {
  const addcart = async (num, pro_id) => {
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
        }, 4000);
      }
    } catch (e) {
      return e
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
