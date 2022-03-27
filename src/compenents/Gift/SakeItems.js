import React, { useState, useRef } from 'react'
import './SakeItems.scss'

import SakeButton from './SakeButton'
import ProductModal from './ProductModal'

const SakeItems = (props) => {
  const { modalShow, setModalShow, sake } = props

  const items = sake.map((v, i) => {
    return (
      <div className="gift_sake" key={i}>
        <div className="sake_card" onClick={() => setModalShow(!modalShow)}>
          <img
            src={'http://localhost:3001/images/pro_img/' + v.pro_img}
            alt=""
            className="original"
          />
          <img
            src={'http://localhost:3001/images/con_img/' + v.container_img}
            alt=""
            className="trans"
          />
          <span className="name">{v.pro_name}</span>
          <small>${v.pro_price}</small>
        </div>
        <SakeButton />
      </div>
    )
  })

  return (
    <>
      {modalShow ? (
        <ProductModal
          modalShow={modalShow}
          setModalShow={setModalShow}
          sake={sake}
        />
      ) : (
        ''
      )}
      {items}
    </>
  )
}

export default SakeItems
