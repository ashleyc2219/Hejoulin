import React from 'react'
import { CartCount } from '../../App'
import './AddCartIcon.scss'

const AddCartIcon = ({ setCartCount }) => {
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
