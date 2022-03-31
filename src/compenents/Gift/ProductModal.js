import React, { useState, useEffect } from 'react'
import './ProductModal.scss'

import SakeButton from './SakeButton'

const ProductModal = (props) => {
  const [slides, setSlides] = useState(false)
  const [linkFav, setLinkFav] = useState(0)
  const [detail, setDetail] = useState([])
  const { modalShow, closeHandle, id } = props

  const url = 'http://localhost:3001/api/products-sake/item-detail?pro_id=' + id
  const fetchData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setDetail(data)
  }

  let modal = detail.map(function (v, i) {
    return (
      <React.Fragment key={v.pro_id}>
        <div className="grid">
          <div className="image">
            <button className="left">
              <img src="/Gift/Left.svg" className="left_arrow" alt="" />
            </button>
            <div className="slider">
              <div className="wrap uno">
                <img
                  src={'http://localhost:3001/images/pro_img/' + v.pro_img}
                  alt=""
                  className="modal_sake"
                />
              </div>
              <div className="wrap dos">
                <img
                  src={'http://localhost:3001/images/con_img/' + v.container_id}
                  alt=""
                  className="modal_container"
                />
              </div>
            </div>
            <button className="right">
              <img src="/Gift/Right.svg" className="right_arrow" alt="" />
            </button>
            <div className="sake_button">
              <div className="center">{/* <SakeButton /> */}</div>
            </div>
          </div>
          <div className="info">
            <div className="name">{v.pro_name}</div>
            <div className="tag">
              <p className="brand">{v.pro_brand}</p>
              <p className="level">{v.pro_level}</p>
              <div className="like">
                <div className="heart_icon"></div>
                <p>收藏</p>
              </div>
              <div className="price">{v.pro_price}</div>
            </div>
            <div className="content">
              <span className="text">{v.pro_intro}</span>
            </div>
            <div className="table_grid">
              <ul>
                <li>容量</li>
                <li>酒造</li>
                <li>口感</li>
              </ul>
              <ul>
                <li>{v.pro_capacity}</li>
                <li>{v.pro_marker}</li>
                <li>{v.pro_taste}</li>
              </ul>
              <ul>
                <li className="computer">精米步合度</li>
                <li className="mobile">步合度</li>
                <li className="alco">酒精度</li>
                <li className="temp">溫度</li>
              </ul>
              <ul>
                <li>{v.pro_essence}</li>
                <li>{v.pro_alco}</li>
                <li>{v.pro_temp}</li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  })

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="ProductModal">
        <div className="page">
          <main id="modal">
            <div className="close" onClick={closeHandle}></div>
            {modal}
            <div className="mobile_sake_button">
              <div className="mobile_center">{/* <SakeButton /> */}</div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default ProductModal
