import React from 'react'
import { Link } from 'react-router-dom'

import './EmptyCart.scss'

const EmptyCart = () => {
  return (
    <>
      <div className="EmptyCart">
        <img src="/CartList/empty-cart.png" alt="" />
        <Link to="/product/list">
          <button className="btn btn-secondary">購物去</button>
        </Link>
      </div>
    </>
  )
}

export default EmptyCart
