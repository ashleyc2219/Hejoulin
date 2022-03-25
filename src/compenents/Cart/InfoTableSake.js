import React from 'react'
import './InfoTableSake.scss'

const InfoTableSake = (props) => {
  const { sakeInfo } = props
  const mark = sakeInfo.mark_id === null ? 'false' : 'true'
  return (
    <>
      <div className="table-item sake-item">
        <div className="item item-product-img">
          {sakeInfo.cart_quantity !== 1 ? (
            <span className="quantity">{sakeInfo.cart_quantity}</span>
          ) : (
            ''
          )}
          <img
            src={'http://localhost:3001/images/pro_img/' + sakeInfo.pro_img}
            alt=""
          />
        </div>
        <div className="item item-product-info">
          <h5>{sakeInfo.pro_name}</h5>
          <p className="ml">{sakeInfo.pro_capacity}</p>
          <p className="price">{sakeInfo.pro_price}</p>
          <p className={mark + ' cmark'}>{sakeInfo.mark_name}</p>
        </div>
        <div className="item item-subtotal">
          <p>{sakeInfo.pro_price * sakeInfo.cart_quantity}</p>
        </div>
      </div>
      <hr />
    </>
  )
}

export default InfoTableSake
