import React, { useState, useRef } from 'react'
import './SakeItems.scss'

const SakeItems = () => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <>
      <div className="gift_sake">
        <div className="sake_card">
          <img
            // src={'http://localhost:3001/images/pro_img/' + v.pro_img}
            alt=""
            className="original"
          />
          <img
            // src={'http://localhost:3001/images/con_img/' + v.con_img}
            alt=""
            className="trans"
          />
          {/* <span className="name">{v.pro_name}</span> */}
          {/* <small>${v.pro_price}</small> */}
        </div>
        {/* <SakeButton /> */}
      </div>
    </>
  )
}

export default SakeItems
