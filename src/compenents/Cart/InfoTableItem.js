import React from 'react'

const InfoTableItem = (props) => {
  const mark = props.mark
  return (
    <>
      <div className="table-item">
        <div className="item item-product-img">
          <img src="/CartList/M0023.png" alt="" />
        </div>
        <div className="item item-product-info">
          <h5>篠峯 雄町純米大吟釀</h5>
          <p className='ml'>720</p>
          <p className='price'>1880</p>
          <p className={mark + ' cmark'}>客製化酒標 A</p>
        </div>
        <div className="item item-subtotal">
          <p>1880</p>
        </div>
      </div>
      <hr />
    </>
  )
}

export default InfoTableItem
