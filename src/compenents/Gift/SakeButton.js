import React, { useState, useRef, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import './SakeButton.scss'

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
    sakeId,
    sakeId2,
  } = props
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
              handleShow()
            }}
          >
            <img src="/Gift/full_sake.svg" alt="" className="sake single" />
            <span>再加一瓶</span>
          </button>
        </>
      )
    } else if (sakeButton === 1) {
      return (
        <>
          <button
            className="one"
            onClick={() => {
              setSakeButton(2)
              plus()
              setSakeId2(currentId)
              setName2(currentName)
              setPrice2(currentPrice)
              setImg2(currentImg)
              setStep('three')
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
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>選購額度已滿！</Modal.Title>
        </Modal.Header>
        <Modal.Body>選購清酒額度已滿，請先取消當前已選購的商品</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            確認
          </Button>
        </Modal.Footer>
      </Modal>
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
              handleShow()
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
                handleShow()
              }}
            >
              <img src="/Gift/gray_sake.svg" alt="" className="sake dou" />
              <img src="/Gift/gray_sake.svg" alt="" className="sake dou" />
              <span>已選二瓶</span>
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default SakeButton
