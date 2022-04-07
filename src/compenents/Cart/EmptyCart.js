import React from 'react'
import { Link } from 'react-router-dom'

import './EmptyCart.scss'

const EmptyCart = (props) => {
  const { memberId, setSidebar } = props
  return (
    <>
      <div className="EmptyCart">
        <img src="/CartList/empty-cart.png" alt="" />
        {memberId === 'noMemberId' ? (
          <Link to="/product/list">
            <button className="btn btn-secondary">購物去</button>
          </Link>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => {
              setSidebar(true)
            }}
          >
            登入
          </button>
        )}
      </div>
    </>
  )
}

export default EmptyCart
