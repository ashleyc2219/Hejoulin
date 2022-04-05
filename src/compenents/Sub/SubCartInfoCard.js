import React from 'react'
import './SubCartInfoCard.scss'

const SubCartInfoCard = () => {
  return (
    <>
      <div className="table-item sub-item">
        <div className="item item-product-img">
          <img src="/Sub/rice_1.svg" alt="" />
        </div>
        <div className="item item-product-info">
          <h5>純米吟釀</h5>

          <p className="price">1500</p>
          <p className="month">12</p>
        </div>
        <div className="item item-subtotal">
          <p>11520</p>
        </div>
      </div>
      <hr />
    </>
  )
}

export default SubCartInfoCard
