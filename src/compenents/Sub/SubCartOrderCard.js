import React from 'react'

const SubOrderCard = (props) => {
  const { sakeInfo } = props

  const mark = props.mark
  return (
    <>
      <div className="table-item">
        <div className="item item-product-img">
          <img src="/Sub/rice_1.svg" alt="" />
        </div>
        <div className="item item-product-info">
          <h5>純米吟釀</h5>
          <p>精米步合度 70%</p>
          <p className="price">1500</p>
        </div>
        <div className="item item-quantity">
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

export default SubOrderCard
