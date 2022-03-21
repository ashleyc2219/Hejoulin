import React from 'react'
import './DetailModal.css'

const DetailModal = () => {
  return (
    <>
      <div className="DetailModal">
        <div className="comparepage">
          <div className="close-white">
            <img src="/ProductList/close-white.svg" alt="" />
          </div>
          <div className="mobile-close">
            <img src="/ProductList/close-black.svg" alt="" />
          </div>
          <div className="news-item">
            <div className="news-item-pic">
              <div className="news-pic">
                <div className="news-item-pic-box">
                  <img src="/news/news-pic-01.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="news-item-word">
              <div className="news-item-date">
                <p>2022-01-04</p>
              </div>
              <div className="news-item-title">
                <h3>虎年最有「禮」，新年送禮限量折扣</h3>
              </div>
              <div className="news-item-content">
                <p>
                  又到了歲末年終表達心意的時節，從年節限定、華麗包裝、超值贈品，甚至還有箱購優惠，絕對能滿足...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailModal
