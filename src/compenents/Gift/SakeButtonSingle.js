import React, { useState, useRef, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import './SakeButtonSingle.scss'

const SakeButtonSingle = (props) => {
  const {
    conName,
    setConName,
    currentPrice,
    setCurrentPrice,
    currentName,
    setCurrentName,
    currentId,
    setCurrentId,
    currentImg,
    setCurrentImg,
    value,
    item,
    setItem,
    sakeButton,
    setSakeButton,
    id,
    pro_id,
    setStep,
    
  } = props

  let disable = false

  const [click, setClick] = useState(0)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    setClick(value.current)
  }, [value.current])

  const plus = () => {
    value.current += 1
  }
  const minus = () => {
    value.current -= 1
  }

  const setBtn = () => {
    if (click < 1) {
      disable = false
    } else if (click === 1) {
      disable = true
    }
  }
  // const display = () => {
  //   if (disable === true) {
  //     handleShow()
  //   }
  // }

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
          setBtn()
        }}
      >
        {sakeButton === 0 &&  (
          <button
            className="sake empty"
            disabled={disable}
            onClick={() => {
              setSakeButton(1)
              plus()
              setItem(1)
              setStep('three')
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
                handleShow()
              }}
            >
              <img src="/Gift/gray_sake.svg" alt="" className="sake single" />
              <span>已選一瓶</span>
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default SakeButtonSingle
