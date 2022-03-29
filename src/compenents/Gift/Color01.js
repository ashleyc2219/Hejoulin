import React, { useState, useEffect } from 'react'
import './Color01.scss'

const Color01 = (props) => {
  const { kind, sakeId, img, comfirmColor, setComfirmColor } = props

  const [boxColor, setBoxColor] = useState('black')
  let imgSrc
  const srcRouter = () => {
    if (boxColor === 'block') {
      imgSrc = `black-` + kind + `.jpg`
    } else if (boxColor === 'gold') {
      imgSrc = `gold-` + kind + `.jpg`
    } else if (boxColor === 'white') {
      imgSrc = `white-` + kind + `.jpg`
    }
  }

  return (
    <>
      <div className="color_group">
        <button
          className="color_btn"
          onClick={() => {
            setBoxColor('black')
            srcRouter()
          }}
        >
          <img src="/Gift/black.svg" alt="" />
          <small>曜岩黑</small>
        </button>
        <button
          className="color_btn"
          onClick={() => {
            setBoxColor('white')
            srcRouter()
          }}
        >
          <img src="/Gift/white.svg" alt="" />
          <small>英石白</small>
        </button>
        <button
          className="color_btn"
          onClick={() => {
            setBoxColor('gold')
            srcRouter()
          }}
        >
          <img src="/Gift/golden.svg" alt="" />
          <small>流沙金</small>
        </button>
      </div>
      <div className="gift_image">
        <img
          src={'http://localhost:3001/images/gift_img/' + imgSrc}
          alt="box"
          className="box"
        />
        <img
          src={'http://localhost:3001/images/pro_img/' + img}
          alt="sake"
          className="sake"
        />
        <div className="confirm">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => {
              setComfirmColor(boxColor)
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
