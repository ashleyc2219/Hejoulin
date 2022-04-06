import React, { useState, useEffect } from 'react'

import SakeButton from './SakeButton'
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
    conImgShadow,
    conName,
    currentCon,
    minus,
    setStep,
    setSakeId2,
    setName2,
    setPrice2,
    setImg2,
    sakeId,
    sakeId2,
    setSakeId,
    setName,
    setPrice,
    setImg,
    setBlock02,
  } = props

  const [sakeButton, setSakeButton] = useState(0)

  useEffect(() => {
    setSakeButton(0)
  }, [kind])

  const cancel = () => {
    if (pro_id === sakeId) {
      setSakeId('')
      setName('')
      setPrice('')
      setImg('')
      setConShadow('')
      setCurrentCon('')
    } else if (pro_id === sakeId2) {
      setSakeId2('')
      setName2('')
      setPrice2('')
      setImg2('')
    }
  }

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
        <div className="trans">
          <img
            src={'/Gift/black-' + kind + '.png'}
            alt="final"
            className="box"
          />
          {kind === 1 && (
            <img
              src={'http://localhost:3001/images/pro_img/' + img}
              alt=""
              className="sake1"
            />
          )}
          {kind > 1 && (
            <img
              src={'http://localhost:3001/images/pro_img/' + img}
              alt=""
              className="sake2"
            />
          )}
          {kind === 3 && (
            <img
              src={'http://localhost:3001/images/con_img/' + conImgShadow}
              alt=""
              className="sake_con"
            />
          )}
        </div>

        <span className="name">{name}</span>
        <small>${price}</small>
      </div>
      {kind === 2 ? (
        <>
          <div className="btns">
            {value.current > 1 ? (
              <div>
                <SakeButton
                  currentPrice={currentPrice}
                  currentName={currentName}
                  currentId={currentId}
                  currentImg={currentImg}
                  value={value}
                  sakeButton={sakeButton}
                  setSakeButton={setSakeButton}
                  pro_id={pro_id}
                  img={img}
                  name={name}
                  price={price}
                  setSakeId2={setSakeId2}
                  setName2={setName2}
                  setPrice2={setPrice2}
                  setImg2={setImg2}
                  setStep={setStep}
                  sakeId={sakeId}
                  sakeId2={sakeId2}
                  setBlock02={setBlock02}
                />
              </div>
            ) : (
              <div
                onClick={() => {
                  setCurrentId(pro_id)
                  setCurrentImg(img)
                  setCurrentName(name)
                  setCurrentPrice(price)
                }}
              >
                <SakeButton
                  currentPrice={currentPrice}
                  currentName={currentName}
                  currentId={currentId}
                  currentImg={currentImg}
                  value={value}
                  sakeButton={sakeButton}
                  setSakeButton={setSakeButton}
                  pro_id={pro_id}
                  img={img}
                  name={name}
                  price={price}
                  setSakeId2={setSakeId2}
                  setName2={setName2}
                  setPrice2={setPrice2}
                  setImg2={setImg2}
                  setStep={setStep}
                  sakeId={sakeId}
                  sakeId2={sakeId2}
                />
              </div>
            )}
            {sakeButton === 1 && (
              <>
                <button
                  className="cancel"
                  onClick={() => {
                    setSakeButton(0)
                    minus()
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
                    cancel()
                  }}
                >
                  <img src="/Gift/cancel.svg" alt="" className="circle" />
                  <span>取消</span>
                </button>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="btns">
            {value.current > 0 ? (
              <div>
                <SakeButtonSingle
                  currentId={currentId}
                  value={value}
                  sakeButton={sakeButton}
                  setSakeButton={setSakeButton}
                  pro_id={pro_id}
                  setStep={setStep}
                />
              </div>
            ) : (
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
                <SakeButtonSingle
                  currentId={currentId}
                  value={value}
                  sakeButton={sakeButton}
                  setSakeButton={setSakeButton}
                  pro_id={pro_id}
                  setStep={setStep}
                  setBlock02={setBlock02}
                />
              </div>
            )}

            {sakeButton === 1 && (
              <>
                <button
                  className="cancel"
                  onClick={() => {
                    setSakeButton(0)
                    minus()
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
        </>
      )}
    </div>
  )
}

export default Cards
