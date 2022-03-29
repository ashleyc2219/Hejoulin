import React from 'react'

const OrderTableSake = (props) => {
  const { sakeInfo } = props
  console.log(sakeInfo)
  const mark = props.mark
  return (
    <>
      <div className="table-item">
        <div className="item item-product-img">
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
          <p className="product-count">x{sakeInfo.order_quantity}</p>
        </div>
        <div className="item item-quantity">
          <p>{sakeInfo.order_quantity}</p>
        </div>
        <div className="item item-subtotal">
          <p>{sakeInfo.pro_price * sakeInfo.order_quantity}</p>
        </div>
      </div>
      <hr />
    </>
  )
}

export default OrderTableSake
