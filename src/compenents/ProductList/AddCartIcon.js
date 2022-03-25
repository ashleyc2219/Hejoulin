import React from 'react'
import { CartCount } from '../../App'

const AddCartIcon = ({ setCartCount }) => {
  console.log(setCartCount)
  return (
    <>
      <CartCount.Consumer>
        {(cartCount) => (
          <img
            onClick={() => {
              setCartCount(cartCount + 1)
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
