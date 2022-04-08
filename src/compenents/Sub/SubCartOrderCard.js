import React from 'react'

const SubOrderCard = (props) => {
  const { subInfo } = props
  const subtotal = Math.round(
    subInfo.plan_price * subInfo.sub_time_month * subInfo.sub_discount
  )

  return (
    <>
      <div className="table-item">
        <div className="item item-product-img">
          <img src={`/Sub/rice_${subInfo.sub_id}.svg`} alt="" />
        </div>
        <div className="item item-product-info">
          <h5>{subInfo.plan_name}</h5>
          <p>精米步合度 {subInfo.rice_percent}</p>
          <p className="price">{subInfo.plan_price}</p>
        </div>
        <div className="item item-quantity">
          <p className="month">{subInfo.sub_time_month}</p>
        </div>
        <div className="item item-subtotal">
          <p>{subtotal}</p>
        </div>
      </div>
      <hr />
    </>
  )
}

export default SubOrderCard
