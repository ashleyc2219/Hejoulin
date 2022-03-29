import React, { useState, useRef, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import './SakeButtonSingle.scss'

const SakeButtonSingle = (props) => {
  const {
    sakeId,
    setSakeId,
    name,
    setName,
    img,
    setImg,
    price,
    setPrice,
    conName,
    setConName,
    currentPrice,
    currentName,
    currentId,
    count,
    setCount,
    value,
    total,
  } = props

  let disable = false

  const [sakeButton, setSakeButton] = useState(0)
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
          total()
          setBtn()
          console.log('1', sakeId, name, price)
          console.log('current:', value.current)
          console.log('currentId', currentId)
        }}
      >
        {sakeButton === 0 && (
          <button
            className="sake empty"
            disabled={disable}
            onClick={() => {
              setSakeButton(1)
              // setCount(currentId)
              plus()
              console.log('count', count)
              // updateItem()
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
      </div>
    </>
  )
}

export default SakeButtonSingle
