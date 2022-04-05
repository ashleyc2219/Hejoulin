import React, { useState } from 'react'
import './SakeButtonSingle.scss'

import BackDrop02 from './Backdrop02'
import Modal from './Modal'

const SakeButtonSingle = (props) => {
  const {
    currentId,
    value,
    sakeButton,
    setSakeButton,
    pro_id,
    setStep,
    GiftLink,
    setBlock02,
  } = props

  const [modal, setModal] = useState(false)
  const closeModal = () => setModal(false)
  const openModal = () => setModal(true)

  const plus = () => {
    value.current += 1
  }

  return (
    <>
      {modal && <Modal closeModal={closeModal} />}
      {modal && <BackDrop02 closeModal={closeModal} />}
      <div className="SakeButton">
        {sakeButton === 0 && value.current === 0 ? (
          <button
            className="sake empty"
            onClick={() => {
              setSakeButton(1)
              plus()
              setStep('three')
              setBlock02(true)
            }}
          >
            <img src="/Gift/null_sake.svg" alt="" className="sake single" />
            <span>點擊小酒瓶選擇商品</span>
          </button>
        ) : (
          <button
            className={`sake empty ${pro_id === currentId ? 'test' : ''}`}
            onClick={() => {
              openModal()
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
                openModal()
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
