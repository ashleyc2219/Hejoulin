import React, { useState, useRef } from 'react'
import './SakeItems.scss'

import SakeButton from './SakeButton'
import ProductModal from './ProductModal'
import SakeButtonSingle from './SakeButtonSingle'

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
    kind,
    name,
    setName,
    name2,
    img,
    setImg,
    img2,
    setImg2,
    setName2,
    price,
    setPrice,
    price2,
    setPrice2,
    con,
    setCon,
    conName,
    setConName,
    count,
    setCount,
    value,
    currentId,
    setCurrentId,
    currentCon,
    setCurrentCon,
    currentImg,
    setCurrentImg,
    currentName,
    setCurrentName,
    currentPrice,
    setCurrentPrice,
    total,
  } = props

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
              setCurrentImg(v.pro_img)
              setCurrentName(v.pro_name)
              setCurrentPrice(v.pro_price)
              setCurrentCon()
            }}
          >
            {kind === 2 ? (
              <SakeButton
                sakeId={sakeId}
                setSakeId={setSakeId}
                sakeId2={sakeId2}
                setSakeId2={setSakeId2}
                img={img}
                setImg={setImg}
                img2={img2}
                setImg2={setImg2}
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
                currentImg={currentImg}
                count={count}
                setCount={setCount}
                value={value}
                total={total}
              />
            ) : (
              <SakeButtonSingle
                sakeId={sakeId}
                setSakeId={setSakeId}
                name={name}
                setName={setName}
                img={img}
                setImg={setImg}
                price={price}
                setPrice={setPrice}
                con={con}
                    setCon={setCon}
                conName={conName}
                setConName={setConName}
                currentPrice={currentPrice}
                currentName={currentName}
                currentId={currentId}
                currentImg={currentImg}
                currentCon={currentCon}
                count={count}
                setCount={setCount}
                value={value}
                total={total}
              />
            )}
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
