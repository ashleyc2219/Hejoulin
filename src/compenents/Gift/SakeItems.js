import React, { useState, useRef } from 'react'
import './SakeItems.scss'

import SakeButton from './SakeButton'
import ProductModal from './ProductModal'

const SakeItems = (props) => {
  const {
    modalShow,
    showHandle,
    closeHandle,
    sake,
    id,
    setId,
    sakeId,
    setSakeId,
    sakeId2,
    setSakeId2,
    name,
    setName,
    name2,
    setName2,
    price,
    setPrice,
    price2,
    setPrice2,
    conName,
    setConName,
    count,
    setCount,
  } = props
  const [currentId, setCurrentId] = useState('')
  const [currentName, setCurrentName] = useState('')
  const [currentPrice, setCurrentPrice] = useState('')

  const items = sake.map((v, i) => {
    return (
      <React.Fragment key={i}>
        <div className="gift_sake" key={i}>
          <div
            className="sake_card"
            onClick={() => {
              setId(v.pro_id)
              showHandle()
            }}
          >
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
          <div
            onClick={() => {
              setCurrentId(v.pro_id)
              setCurrentName(v.pro_name)
              setCurrentPrice(v.pro_price)
            }}
          >
            <SakeButton
              sakeId={sakeId}
              setSakeId={setSakeId}
              sakeId2={sakeId2}
              setSakeId2={setSakeId2}
              name={name}
              setName={setName}
              name2={name2}
              setName2={setName2}
              price={price}
              setPrice={setPrice}
              price2={price2}
              setPrice2={setPrice2}
              conName={conName}
              setConName={setConName}
              currentPrice={currentPrice}
              currentName={currentName}
              currentId={currentId}
              count={count}
              setCount={setCount}
            />
          </div>
        </div>
      </React.Fragment>
    )
  })

  return (
    <>
      {modalShow ? (
        <ProductModal modalShow={modalShow} closeHandle={closeHandle} id={id} />
      ) : (
        ''
      )}
      {items}
    </>
  )
}

export default SakeItems
