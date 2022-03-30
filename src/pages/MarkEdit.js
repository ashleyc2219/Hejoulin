import React, { useState, useRef } from 'react'
import ImageEditor from '@toast-ui/react-image-editor'
import 'tui-image-editor/dist/tui-image-editor.css'

import { whiteTheme } from './../styles/Mark/WhiteTheme'
import './../styles/Mark/MarkEdit.scss'

function DataURIToBlob(dataURI) {
  const splitDataURI = dataURI.split(',')
  const byteString =
    splitDataURI[0].indexOf('base64') >= 0
      ? atob(splitDataURI[1])
      : decodeURI(splitDataURI[1])
  const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

  const ia = new Uint8Array(byteString.length)
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i)

  return new Blob([ia], { type: mimeString })
}

const MarkEdit = () => {
  const tui = useRef()

  const [markname, setMarkname] = useState('')

  const sendMark = async () => {
    let instance = tui.current.getInstance()

    const file = DataURIToBlob(instance.toDataURL())
    const formData = new FormData()
    formData.append('mark', file, 'image.png')
    formData.append('markname', markname)

    fetch('http://localhost:3001/api/mark', {
      method: 'POST',
      body: formData,
      // headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  const [modalShow, setModalShow] = useState(false)
  const openModal = () => {
    setModalShow((prev) => !prev)
  }

  return (
    <>
      <div className="MarkEdit">
        <div className="text-center d-lg-none notice">
          請使用 992px 以上的解析度
        </div>
        <div className="d-none d-lg-flex justify-content-center flex-column align-items-center">
          <ImageEditor
            ref={tui}
            includeUI={{
              // loadImage: {
              //   path: 'img/sampleImage.jpg',
              //   name: 'SampleImage',
              // },
              theme: whiteTheme,
              menu: ['shape', 'text'],
              initMenu: 'shape',
              uiSize: {
                width: '1000px',
                height: '700px',
              },
              menuBarPosition: 'bottom',
            }}
            cssMaxHeight={500}
            cssMaxWidth={700}
            selectionStyle={{
              cornerSize: 20,
              rotatingPointOffset: 70,
            }}
            usageStatistics={true}
          />

          <button
            className="btn btn-secondary mt-5 w-25"
            onClick={() => {
              setModalShow((prev) => !prev)
            }}
          >
            點擊就快完成酒標囉！
          </button>
        </div>
      </div>
      {modalShow && (
        <div className="DetailModal">
          <div className="comparepage">
            <div className="close-white" onClick={openModal}>
              <img src="/ProductList/close-white.svg" alt="" />
            </div>
            <div className="mobile-close" onClick={openModal}>
              <img src="/ProductList/close-black.svg" alt="" />
            </div>
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ width: '100%' }}
            >
              <label htmlFor="markname" className="form-label mt-5">
                請輸入酒標名稱
              </label>
              <input
                type="email"
                id="markname"
                className="form-control mt-3"
                placeholder="酒標名稱"
                value={markname}
                onChange={(e) => {
                  setMarkname(e.target.value)
                }}
              />
              <button
                className="btn btn-secondary mt-5 w-25 mb-5"
                onClick={() => {
                  sendMark()
                }}
              >
                完成專屬酒標
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MarkEdit
