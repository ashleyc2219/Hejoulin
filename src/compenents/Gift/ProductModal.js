import React, { useState, useEffect } from 'react'
import './ProductModal.scss'

import Heart from '../Gift/Heart'

const ProductModal = (props) => {
  const { modalShow, closeHandle, id, kind, setLoginModal } = props

  const [slidesRight, setSlidesRight] = useState(true)
  const [slidesLeft, setSlidesLeft] = useState(false)
  const [moveRight, setMoveRight] = useState(false)
  const [moveLeft, setMoveLeft] = useState(false)
  const [linkFav, setLinkFav] = useState(0)
  const [detail, setDetail] = useState([])

  const linkFavhandler = () => {
    setLinkFav(linkFav + 1)
  }

  const url = `${process.env.REACT_APP_BACKEND_URL}/api/products-sake/item-detail?pro_id=` + id
  const fetchData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setDetail(data)
  }
  const right = () => {
    if (slidesRight) {
      setSlidesLeft(true)
      setSlidesRight(false)
      setMoveLeft(false)
    }
  }
  const left = () => {
    if (slidesLeft) {
      setSlidesLeft(false)
      setSlidesRight(true)
      setMoveRight(false)
    }
  }

  let modal = detail.map(function (v, i) {
    return (
      <React.Fragment key={v.pro_id}>
        <div className="grid">
          <div className={`image ${kind === 3 && 'grid'}`}>
            {kind === 3 && (
              <button
                className={`left ${slidesLeft ? 'nothing' : 'sake_block'}`}
                onClick={() => {
                  left()
                  setMoveLeft(true)
                }}
              >
                <img src="/Gift/Left.svg" className="left_arrow" alt="" />
              </button>
            )}
            <div className="slider">
              <div
                className={`img_wrap ${
                  kind === 3 && moveRight ? 'trans_right' : ''
                } ${kind === 3 && moveLeft ? 'trans_left' : ''}`}
              >
                <div className="wrap uno">
                  <img
                    src={`${process.env.REACT_APP_BACKEND_URL}/images/pro_img/` + v.pro_img}
                    alt=""
                    className="modal_sake"
                  />
                </div>
                {kind === 3 && (
                  <div className="wrap dos">
                    <img
                      src={
                        `${process.env.REACT_APP_BACKEND_URL}/images/con_img/` +
                        v.container_id +
                        '-o.png'
                      }
                      alt=""
                      className="modal_container"
                    />
                  </div>
                )}
              </div>
            </div>
            {kind === 3 && (
              <button
                className={`right ${slidesRight ? 'nothing' : 'sake_block'}`}
                onClick={() => {
                  right()
                  setMoveRight(true)
                }}
              >
                <img src="/Gift/Right.svg" className="right_arrow" alt="" />
              </button>
            )}
          </div>
          <div className="info">
            <div className="name">{v.pro_name}</div>
            <div className="tag">
              <p className="brand">{v.pro_brand}</p>
              <p className="level">{v.pro_level}</p>
              <div className="like">
                <div className="heart_icon">
                  <Heart
                    id={v.pro_id}
                    linkFav={linkFav}
                    setLoginModal={setLoginModal}
                  />
                </div>
                <p className="fav">收藏</p>
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
