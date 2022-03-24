import React from 'react'
import { Link } from 'react-router-dom'
import './ListTableSake.scss'

const ListTableSake = (props) => {
  const { sakeInfo } = props
  let pro_gift = 'false'
  let gift_text = '不提供禮盒'
  if (sakeInfo.pro_gift !== 0) {
    pro_gift = 'true'
    gift_text = '製作禮盒'
  }
  const mark_pic = sakeInfo.pics
  const markRender = (mark_pic) => {
    console.log(mark_pic)
    if (mark_pic && sakeInfo.pro_mark === 1) {
      console.log(mark_pic, sakeInfo.mark_id)
      return (
        <div className="item item-mark true">
          <img
            src={'http://localhost:3001/images/mark_pic/' + mark_pic}
            alt=""
          />
        </div>
      )
    }
    if (mark_pic == null && sakeInfo.pro_mark === 1) {
      return (
        <div className="item item-mark true">
          <Link to="/mark/intro">製作客製化酒標</Link>
        </div>
      )
    } else {
      return <div className="item item-mark"></div>
    }
  }
  console.log('sakeItem', sakeInfo)
  return (
    <>
      <div className="table-item sake-table-item">
        <div className="item item-del">
          <img src="/CartList/trash.png" alt="" />
        </div>
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
          <Link to="/gift" className={pro_gift}>
            {gift_text}
          </Link>
          <div className="quantity-container">
            <img src="/CartList/minus-circle.svg" alt="" />
            <p>{sakeInfo.cart_quantity}</p>
            <img src="/CartList/plus-circle.svg" alt="" />
            <img className="trash" src="/CartList/trash.png" alt="" />
          </div>
        </div>
        {markRender(mark_pic)}
        <div className="item item-quantity">
          <div className="quantity-container">
            <img src="/CartList/minus-circle.svg" alt="" />
            <p>{sakeInfo.cart_quantity}</p>
            <img src="/CartList/plus-circle.svg" alt="" />
          </div>
        </div>
        <div className="item item-subtotal">
          <p>{sakeInfo.cart_quantity * sakeInfo.pro_price}</p>
        </div>
      </div>
      <hr></hr>
    </>
  )
}

export default ListTableSake
