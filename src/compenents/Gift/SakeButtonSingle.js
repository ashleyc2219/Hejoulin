import React, { useState, useRef, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import './SakeButtonSingle.scss'

// import BackDrop from './Backdrop'
// import Modal from './Modal'

const SakeButtonSingle = (props) => {
  const { currentId, value, sakeButton, setSakeButton, pro_id, setStep } = props

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // const [modal, setModal] = useState(false)
  // const closeModal = () => {
  //   setModal(false)
  // }
  // const openModal = () => {
  //   setModal(true)
  // }

  const plus = () => {
    value.current += 1
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
      {/* {modal ? (
        <>
          <Modal closeModal={closeModal} />
          <BackDrop closeModal={closeModal} />
        </>
      ) : (
        ''
      )} */}
      <div className="SakeButton">
        {sakeButton === 0 && value.current === 0 ? (
          <button
            className="sake empty"
            onClick={() => {
              setSakeButton(1)
              plus()
              setStep('three')
            }}
          >
            <img src="/Gift/null_sake.svg" alt="" className="sake single" />
            <span>點擊小酒瓶選擇商品</span>
          </button>
        ) : (
          <button
            className={`sake empty ${pro_id === currentId ? 'test' : ''}`}
            onClick={() => {
              handleShow()
              // openModal()
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
