import React, { useState, useRef, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import './SakeButton.scss'

const SakeButton = (props) => {
  const {
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
    currentPrice,
    currentName,
    currentId,
    count,
    setCount,
  } = props
  const [sakeButton, setSakeButton] = useState(0)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const value = useRef(0)
  const plus = () => {
    value.current += 1
  }
  const minus = () => {
    value.current -= 1
  }

  let btn = document.querySelectorAll('.sake')
  const total = () => {
    switch (value.current) {
      case 0:
        // btn.removeAttribute('disable', '')
        break
      case 1:
        // btn.removeAttribute('disable', '')
        setSakeId(currentId)
        setName(currentName)
        setPrice(currentPrice)
        break
      case 2:
        // btn.setAttribute('disable', '')
        setSakeId2(currentId)
        setName2(currentName)
        setPrice2(currentPrice)
        break
      default:
        // handleShow()
        break
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
      <div
        className="SakeButton"
        onClick={() => {
          total()
          console.log('current:', value.current)
          console.log(currentId)
        }}
      >
        {sakeButton === 0 && (
          <button
            className="sake empty"
            onClick={() => {
              setSakeButton(1)
              setCount(currentId)
              plus()
              console.log(count)
            }}
          >
            <img src="/Gift/null_sake.svg" alt="" className="sake single" />
            <span>點擊小酒瓶選擇商品</span>
          </button>
        )}

        {sakeButton === 1 && (
          <>
            <button
              className="one"
              onClick={() => {
                setSakeButton(2)
                // setCount(newCount)
                plus()
                // console.log(count)
              }}
            >
              <img src="/Gift/full_sake.svg" alt="" className="sake single" />
              <span>再加一瓶</span>
            </button>
            <button
              className="cancel"
              onClick={() => {
                setSakeButton(0)
                minus()
                setSakeId('')
                setName('')
                setPrice('')
                console.log(count)
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
              className="full"
              onClick={() => {
                handleShow()
              }}
            >
              <img src="/Gift/gray_sake.svg" alt="" className="sake dou" />
              <img src="/Gift/gray_sake.svg" alt="" className="sake dou" />
              <span>已選二瓶</span>
            </button>
            <button
              className="cancel"
              onClick={() => {
                setSakeButton(1)
                minus()
                setSakeId2('')
                setName2('')
                setPrice2('')
                console.log(count)
              }}
            >
              <img src="/Gift/cancel.svg" alt="" className="circle" />
              <span>取消</span>
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default SakeButton
