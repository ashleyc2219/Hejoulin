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
  } = props

  const [sakeButton, setSakeButton] = useState(0)

  useEffect(() => {
    setSakeButton(0)
  }, [kind])

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
                  cancel={cancel}
                  sakeButton={sakeButton}
                  setSakeButton={setSakeButton}
                  pro_id={pro_id}
                  setSakeId2={setSakeId2}
                  setName2={setName2}
                  setPrice2={setPrice2}
                  setImg2={setImg2}
                  setStep={setStep}
                  sakeId={sakeId}
                  sakeId2={sakeId2}
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
                <SakeButton
                  currentPrice={currentPrice}
                  currentName={currentName}
                  currentId={currentId}
                  currentImg={currentImg}
                  value={value}
                  cancel={cancel}
                  sakeButton={sakeButton}
                  setSakeButton={setSakeButton}
                  pro_id={pro_id}
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
                    // setCurrentId(pro_id)
                    localStorage.setItem('currentId',pro_id)
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
                    // setCurrentId(pro_id)
                    localStorage.setItem('currentId',pro_id)
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
                  conImgShadow={conImgShadow}
                  setConShadow={setConShadow}
                  conName={conName}
                  conShadow={conShadow}
                  currentPrice={currentPrice}
                  currentName={currentName}
                  currentId={currentId}
                  currentImg={currentImg}
                  setCurrentCon={setCurrentCon}
                  currentCon={currentCon}
                  value={value}
                  cancel={cancel}
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
                  conImgShadow={conImgShadow}
                  setConShadow={setConShadow}
                  conName={conName}
                  conShadow={conShadow}
                  currentPrice={currentPrice}
                  currentName={currentName}
                  currentId={currentId}
                  currentImg={currentImg}
                  setCurrentCon={setCurrentCon}
                  currentCon={currentCon}
                  value={value}
                  cancel={cancel}
                  sakeButton={sakeButton}
                  setSakeButton={setSakeButton}
                  pro_id={pro_id}
                  setStep={setStep}
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
      {/* <div className="btns">
        {kind === 1 && value.current > 0 ? (
          <div>
            <SakeButtonSingle
              conImgShadow={conImgShadow}
              setConShadow={setConShadow}
              conName={conName}
              conShadow={conShadow}
              currentPrice={currentPrice}
              currentName={currentName}
              currentId={currentId}
              currentImg={currentImg}
              setCurrentCon={setCurrentCon}
              currentCon={currentCon}
              value={value}
              cancel={cancel}
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
              conImgShadow={conImgShadow}
              setConShadow={setConShadow}
              conName={conName}
              conShadow={conShadow}
              currentPrice={currentPrice}
              currentName={currentName}
              currentId={currentId}
              currentImg={currentImg}
              setCurrentCon={setCurrentCon}
              currentCon={currentCon}
              value={value}
              cancel={cancel}
              sakeButton={sakeButton}
              setSakeButton={setSakeButton}
              pro_id={pro_id}
              setStep={setStep}
            />
          </div>
        )}
        {kind === 2 && value.current > 1 ? (
          <div>
          <SakeButton
              currentPrice={currentPrice}
              currentName={currentName}
              currentId={currentId}
              currentImg={currentImg}
              value={value}
              cancel={cancel}
              sakeButton={sakeButton}
              setSakeButton={setSakeButton}
              pro_id={pro_id}
              setSakeId2={setSakeId2}
              setName2={setName2}
              setPrice2={setPrice2}
              setImg2={setImg2}
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
           <SakeButton
              currentPrice={currentPrice}
              currentName={currentName}
              currentId={currentId}
              currentImg={currentImg}
              value={value}
              cancel={cancel}
              sakeButton={sakeButton}
              setSakeButton={setSakeButton}
              pro_id={pro_id}
              setSakeId2={setSakeId2}
              setName2={setName2}
              setPrice2={setPrice2}
              setImg2={setImg2}
              setStep={setStep}
            />
          </div>
        )}
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
              value={value}
              cancel={cancel}
              sakeButton={sakeButton}
              setSakeButton={setSakeButton}
              pro_id={pro_id}
              setSakeId2={setSakeId2}
              setName2={setName2}
              setPrice2={setPrice2}
              setImg2={setImg2}
              setStep={setStep}
            />
          ) : (
            <SakeButtonSingle
              conImgShadow={conImgShadow}
              setConShadow={setConShadow}
              conName={conName}
              conShadow={conShadow}
              currentPrice={currentPrice}
              currentName={currentName}
              currentId={currentId}
              currentImg={currentImg}
              setCurrentCon={setCurrentCon}
              currentCon={currentCon}
              value={value}
              cancel={cancel}
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
                setCurrentId(pro_id)
                cancel()
              }}
            >
              <img src="/Gift/cancel.svg" alt="" className="circle" />
              <span>取消</span>
            </button>
          </>
        )}
      </div>  */}
    </div>
  )
}

export default Cards
