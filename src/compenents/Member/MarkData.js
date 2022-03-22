import React, { useState } from 'react'
import MarkModal from './MarkModal'

const MarkData = () => {
  const [modalShow, setModalShow] = useState(false)

  const openModal = () => {
    setModalShow((prev) => !prev)
  }
  return (
    <>
      <div className="MarkItem">
        <div className="MarkPic" onClick={openModal}>
          <img src="/Member/MarkEX.svg" alt="" />
        </div>
        <div className="MarkName">
          <input type="checkbox" id="c1" name="cc" />
          <label htmlFor="c1">
            <span></span>酒標名稱 : 我的酒標一
          </label>
        </div>
        {modalShow ? (
          <MarkModal modalShow={modalShow} setModalShow={setModalShow} />
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default MarkData
