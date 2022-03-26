import React from 'react'
import { CartCount } from '../../App'
import './AddCartIcon.scss'

const AddCartIcon = ({ id, setCartCount, count }) => {
  console.log(id, setCartCount, count)
  const addcart = async (num, pro_id) => {
    const a = count + num
    console.log(count, num)
    setCartCount(a)
 
    const data = {
      member_id: 4,
      pro_id: `${pro_id}`,
      cart_quantity: `${count}`,
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
        'http://localhost:3001/api/products-addcart',
        settings
      )
      const data = await fetchResponse.json()
      if (data.success) {
        alert('已加入購物車')
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
