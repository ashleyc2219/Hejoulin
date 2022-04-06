import React, { useState } from 'react'
import './SakeButton.scss'

import BackDrop02 from './Backdrop02'
import Modal from './Modal'

const SakeButton = (props) => {
  const {
    currentPrice,
    currentName,
    currentId,
    currentImg,
    value,
    sakeButton,
    setSakeButton,
    setSakeId2,
    setName2,
    setPrice2,
    setImg2,
    setStep,
    pro_id,
    name,
    img,
    price,
    sakeId,
    sakeId2,
    setBlock02,
  } = props
  const [modal, setModal] = useState(false)
  const closeModal = () => setModal(false)
  const openModal = () => setModal(true)

  const plus = () => {
    value.current += 1
  }
  const condition = () => {
    if (sakeButton === 1 && value.current === 2) {
      return (
        <>
          <button
            className="one"
            onClick={() => {
              openModal()
            }}
          >
            <img src="/Gift/full_sake.svg" alt="" className="sake single" />
            <span>再加一瓶</span>
          </button>
        </>
      )
    } else if (sakeButton === 1 && value.current === 1) {
      return (
        <>
          <button
            className="one"
            onClick={() => {
              setSakeButton(2)
              plus()
              setSakeId2(pro_id)
              setName2(name)
              setPrice2(price)
              setImg2(img)
            }}
          >
            <img src="/Gift/full_sake.svg" alt="" className="sake single" />
            <span>再加一瓶</span>
          </button>
        </>
      )
    }
  }

  return (
    <>
      {modal && <Modal closeModal={closeModal} />}
      {modal && <BackDrop02 closeModal={closeModal} />}
      <div className="SakeButton">
        {sakeButton === 0 && value.current < 2 ? (
          <button
            className="sake empty"
            onClick={() => {
              setSakeButton(1)
              plus()
            }}
          >
            <img src="/Gift/null_sake.svg" alt="" className="sake single" />
            <span>點擊小酒瓶選擇商品</span>
          </button>
        ) : (
          <button
            className={`sake empty ${sakeButton > 0 ? 'test' : ''}`}
            onClick={() => {
              openModal()
            }}
          >
            <img src="/Gift/null_sake.svg" alt="" className="sake single" />
            <span>點擊小酒瓶選擇商品</span>
          </button>
        )}
        {condition()}
        {sakeButton === 2 && (
          <>
            <button
              className="full"
              onClick={() => {
                openModal()
              }}
            >
              <img src="/Gift/gray_sake.svg" alt="" className="sake dou" />
              <img
                src="/Gift/gray_sake.svg"
                alt=""
                className="sake dou mobile"
              />
              <span>已選二瓶</span>
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default SakeButton
