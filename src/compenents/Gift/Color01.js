import React, { useState, useEffect } from 'react'
import './Color01.scss'

const Color01 = (props) => {
  const { kind, id } = props
  const [detail, setDetail] = useState([])
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
  const url = 'http://localhost:3001/api/products-sake/item-detail?pro_id=' + id
  const fetchData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setDetail(data)
  }

  const giftImg = detail.map((v, i) => {
    return (
      <React.Fragment key={i}>
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
            src={'http://localhost:3001/images/pro_img/' + v.pro_img}
            alt="sake"
            className="sake"
          />
        </div>
      </React.Fragment>
    )
  })

  useEffect(() => {
    fetchData()
  }, [])

  return <>{giftImg}</>
}

export default Color01
