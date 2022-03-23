import React from 'react'
import './ProductModal.scss'

import SakeButton from './SakeButton'

const ProductModal = () => {
  return (
    <>
      <div className="ProductModal">
        <div className="page">
          <main id="modal">
            <div className="close"></div>
            <div className="grid">
              <div className="image">
                <button className="left">
                  <img src="/Gift/Left.svg" className="left_arrow" alt="" />
                </button>
                <div className="slider">
                  <div className="wrap uno">
                    <img src="/Gift/4.png" alt="" className="modal_sake" />
                  </div>
                  <div className="wrap dos">
                    <img src="/Gift/4.png" alt="" className="modal_container" />
                  </div>
                </div>
                <button className="right">
                  <img src="/Gift/Right.svg" className="right_arrow" alt="" />
                </button>
                <div className="sake_button">
                  <div className="center">
                    <SakeButton />
                  </div>
                </div>
              </div>
              <div className="info">
                <div className="name">鼠年限定</div>
                <div className="tag">
                  <p className="brand">水芭蕉</p>
                  <p className="level">純米大吟釀</p>
                  <div className="like">
                    <div className="heart_icon"></div>
                    <p>收藏</p>
                  </div>
                  <div className="price">1280</div>
                </div>
                <div className="content">
                  <span className="text">
                    『世界米其 餐廳指定品牌』
                    搭配2020東京奧運，生肖排列成奧運環狀、雷射雕刻瓶身，極具收藏價值!
                    『柔軟淡麗的細緻清香』
                    白桃洋梨香氣飽滿，淡雅清新的米香陪襯其中，清澈水質帶來的自然輕甜，在口中緩緩綻放香氣綿延持久，喝起來柔順優雅。
                  </span>
                </div>
                <table className="table_grid">
                  <ul>
                    <li>容量</li>
                    <li>酒造</li>
                    <li>口感</li>
                  </ul>
                  <ul>
                    <li>720ml</li>
                    <li>永井酒造</li>
                    <li>適中、辛口、偏甜</li>
                  </ul>
                  <ul>
                    <li className="computer">精米步合度</li>
                    <li className="mobile">步合度</li>
                    <li>酒經度</li>
                    <li>溫度</li>
                  </ul>
                  <ul>
                    <li>50度</li>
                    <li>16.5度</li>
                    <li>冷藏、常溫</li>
                  </ul>
                </table>
              </div>
            </div>
            <div className="mobile_sake_button">
              <div className="mobile_center">
                <SakeButton />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default ProductModal
