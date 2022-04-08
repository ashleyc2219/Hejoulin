import React from 'react'
import './SubCartInfoCard.scss'

const SubCartInfoCard = (props) => {
  const { subPlan, subMonth } = props

  function calPrice() {
    if (subPlan === '純米') {
      return 1300
    }
    if (subPlan === '純米吟釀') {
      return 1500
    }
    if (subPlan === '純米大吟釀') {
      return 1800
    }
  }
  function calTotal() {
    if (subMonth === '1') {
      return calPrice() * subMonth
    }
    if (subMonth === '6') {
      return calPrice() * subMonth * 0.85
    }
    if (subMonth === '12') {
      return calPrice() * subMonth * 0.8
    }
  }
  function planImg() {
    if (subPlan === '純米') {
      return 1
    }
    if (subPlan === '純米吟釀') {
      return 2
    }
    if (subPlan === '純米大吟釀') {
      return 3
    }
  }
  let imgFile = planImg()
  return (
    <>
      <div className="table-item sub-item">
        <div className="item item-product-img">
          <img src={`/Sub/rice_${imgFile}.svg`} alt="" />
        </div>
        <div className="item item-product-info">
          <h5>{subPlan}</h5>

          <p className="price">{calPrice()}</p>
          <p className="month">{subMonth}</p>
        </div>
        <div className="item item-subtotal">
          <p>{calTotal()}</p>
        </div>
      </div>
      <hr />
    </>
  )
}

export default SubCartInfoCard
