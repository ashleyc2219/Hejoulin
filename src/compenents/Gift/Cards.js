import React, { useState, useEffect } from 'react'

import SakeButton from './SakeButton'
import ProductModal from './ProductModal'
import SakeButtonSingle from './SakeButtonSingle'

const Cards = (props) => {
  const {
    showHandle,
    id,
    setId,
    i,
    pro_id,
    img,
    container_img,
    price,
    name,
    kind,
    setCurrentId,
    setCurrentImg,
    setCurrentName,
    setCurrentPrice,
    setCurrentCon,
    conShadow,
    setConShadow,
    currentPrice,
    currentName,
    currentId,
    currentImg,
    value,
    cancel,
    item,
    setItem,
    conImgShadow,
    conName,
    currentCon,
    minus,
    setStep,
  } = props

  const [sakeButton, setSakeButton] = useState(0)

  return (
    <div className="gift_sake" key={i}>
      <div
        className="sake_card"
        onClick={() => {
          setId(pro_id)
          showHandle()
        }}
      >
        <img
          src={'http://localhost:3001/images/pro_img/' + img}
          alt=""
          className="original"
        />
        <img
          src={'http://localhost:3001/images/con_img/' + container_img}
          alt=""
          className="trans"
        />
        <span className="name">{name}</span>
        <small>${price}</small>
      </div>
      <div className="btns">
        <div
          onClick={() => {
            setCurrentId(pro_id)
            setCurrentImg(img)
            setCurrentName(name)
            setCurrentPrice(price)
            setCurrentCon(conName)
            setConShadow(conImgShadow)
          }}
        >
          {kind === 2 ? (
            <SakeButton
              currentPrice={currentPrice}
              currentName={currentName}
              currentId={currentId}
              currentImg={currentImg}
              setCurrentPrice={setCurrentPrice}
              setCurrentName={setCurrentName}
              setCurrentId={setCurrentId}
              setCurrentImg={setCurrentImg}
              value={value}
              cancel={cancel}
              item={item}
              setItem={setItem}
              sakeButton={sakeButton}
              setSakeButton={setSakeButton}
              pro_id={pro_id}
            />
          ) : (
            <SakeButtonSingle
              conImgShadow={conImgShadow}
              setConShadow={setConShadow}
              conName={conName}
              conShadow={conShadow}
              setCurrentPrice={setCurrentPrice}
              currentPrice={currentPrice}
              setCurrentName={setCurrentName}
              currentName={currentName}
              setCurrentId={setCurrentId}
              currentId={currentId}
              setCurrentImg={setCurrentImg}
              currentImg={currentImg}
              setCurrentCon={setCurrentCon}
              currentCon={currentCon}
              value={value}
              cancel={cancel}
              item={item}
              setItem={setItem}
              sakeButton={sakeButton}
              setSakeButton={setSakeButton}
              pro_id={pro_id}
              setStep={setStep}
            />
          )}
        </div>
        {sakeButton === 1 && (
          <>
            <button
              className="cancel"
              onClick={() => {
                setSakeButton(0)
                minus()
                setItem(0)
                setCurrentId(pro_id)
                cancel()
              }}
            >
              <img src="/Gift/cancel.svg" alt="" className="circle" />
              <span>取消</span>
            </button>
          </>
        )}
        {sakeButton === 2 && (
          <>
            <button
              className="cancel"
              onClick={() => {
                setSakeButton(1)
                minus()
                setItem(0)
                setCurrentId(pro_id)
                cancel()
              }}
            >
              <img src="/Gift/cancel.svg" alt="" className="circle" />
              <span>取消</span>
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Cards
