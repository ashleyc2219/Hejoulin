import React, { useEffect, useState } from 'react'
import MarkModal from './MarkModal'
import '../../styles/Member/Member-Mark/MarkData.scss'

const MarkData = () => {
  const [modalShow, setModalShow] = useState(false)
  const [markData, setMarkData] = useState([])

  const openModal = () => {
    setModalShow((prev) => !prev)
  }
  useEffect(() => {
    ;(async () => {
      const obj = await (
        await fetch('http://localhost:3001/user/member/MemberMark', {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + localStorage.token,
          },
        })
      ).json()
      console.log(obj)
      setMarkData(obj)
    })()
  }, [])

  const renderImg = (markData) => {
    return (
      <img
        src={'http://localhost:3001/images/member_mark_pic/' + markData[0].pics}
        alt=""
      />
    )
  }

  return (
    <>
      <div className="MarkItem">
        <div className="MarkPic" onClick={openModal}>
          {markData.length > 0 ? (
            renderImg(markData)
          ) : (
            <img src="http://localhost:3000/Member/MarkEX.svg" alt="" />
          )}
        </div>
        <div className="MarkName">
          <input type="checkbox" id="c1" name="cc" />
          <label htmlFor="c1">
            <span></span>酒標名稱 : 我的酒標一
          </label>
        </div>
        {modalShow ? (
          <MarkModal
            modalShow={modalShow}
            setModalShow={setModalShow}
            markData={markData}
            setMarkData={setMarkData}
          />
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default MarkData
