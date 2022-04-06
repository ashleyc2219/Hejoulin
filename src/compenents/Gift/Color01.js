import React, { useState, useEffect } from 'react'
import './Color01.scss'

const Color01 = (props) => {
  const {
    kind,
    sakeId,
    img,
    comfirmColor,
    setComfirmColor,
    step,
    setStep,
    GiftLink,
    setBlock03,
    height,
  } = props

  const [boxColor, setBoxColor] = useState('black')

  return (
    <>
      <div className="color_group">
        <button
          className="color_btn"
          onClick={() => {
            setBoxColor('black')
          }}
        >
          <img src="/Gift/black.svg" alt="" />
          <small>曜岩黑</small>
        </button>
        <button
          className="color_btn"
          onClick={() => {
            setBoxColor('white')
          }}
        >
          <img src="/Gift/white.svg" alt="" />
          <small>英石白</small>
        </button>
        <button
          className="color_btn"
          onClick={() => {
            setBoxColor('gold')
          }}
        >
          <img src="/Gift/golden.svg" alt="" />
          <small>流沙金</small>
        </button>
      </div>
      <div className="gift_image">
        <img
          src={
            'http://localhost:3001/images/gift_img/' +
            boxColor +
            '-' +
            kind +
            '.png'
          }
          alt="box"
          className="box01"
        />
        <img
          src={'http://localhost:3001/images/pro_img/' + img}
          alt="sake"
          className="sake01"
        />
        <div className="confirm">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => {
              setComfirmColor(boxColor)
              setStep('four')
              setBlock03(true)
              setTimeout(() => {
                window.scroll({
                  top: 3.15 * 714,
                  left: 0,
                  behavior: 'smooth',
                })
              }, 500)
            }}
          >
            下一步
          </button>
        </div>
      </div>
    </>
  )
}

export default Color01
