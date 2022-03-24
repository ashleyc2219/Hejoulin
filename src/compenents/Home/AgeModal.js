import React from 'react'
import './AgeModal.css'
import { useEffect, useState } from 'react'

const AgeModal = (props) => {
  const { modalShow, setModalShow } = props

  const openModal = () => {
    setModalShow((prev) => !prev)
  }
  return (
    <>
      <div className="AgeModal">
        <div className="comparepage">
          <div className="close-white" onClick={openModal}>
            <img src="/ProductList/close-white.svg" alt="" />
          </div>
          <div className="mobile-close" onClick={openModal}>
            <img src="/ProductList/close-black.svg" alt="" />
          </div>
          {/* 內容top */}
          <div className="Footer">
            <div className="wave-container">
              <div className="waves">
                <svg width="100%" height="350px" fill="none">
                  <path
                    fill="#E6C49E"
                    d="
                  M0 67
                  C 273,183
                    822,-40
                    1920.00,106
        
                  V 359
                  H 0
                  V 67
                  Z"
                    opacity=".8"
                  >
                    <animate
                      repeatCount="indefinite"
                      fill="#E6C49E"
                      attributeName="d"
                      dur="10s"
                      values="
                    M0 77
                    C 473,283
                      822,-40
                      1920,116
                    V 359
                    H 0
                    V 67
                    Z;
        
                    M0 77
                    C 473,-40
                      1222,283
                      1920,136
                    V 359
                    H 0
                    V 67
                    Z;
        
                    M0 77
                    C 973,260
                      1722,-53
                      1920,120
                    V 359
                    H 0
                    V 67
                    Z;
                    M0 77
                    C 473,283
                      822,-40
                      1920,116
                    V 359
                    H 0
                    V 67
                    Z
                    "
                    ></animate>
                  </path>
                </svg>
              </div>
              <div className="waves">
                <svg width="120%" height="500px" fill="none">
                  <path
                    fill="#E6C49E"
                    d="
                M0 77
                C 473,283
                  822,-40
                  1920,116
                V 359
                H 0
                V 67
                Z"
                    opacity=".5"
                  >
                    <animate
                      repeatCount="indefinite"
                      fill="#454599"
                      attributeName="d"
                      dur="15s"
                      values="
                    M0 67
                  C 273,183
                    822,-40
                    1920.00,106
        
                  V 359
                  H 0
                  V 67
                  Z;
        
                  M0 77
                  C 973,260
                  1722,-53
                  1920,120
                  V 359
                  H 0
                  V 67
                  Z;
                  M0 77
                  C 473,-40
                    1222,283
                    1920,136
                  V 359
                  H 0
                  V 67
                  Z;
                    M0 67
                  C 273,183
                    822,-40
                    1920.00,106
        
                  V 359
                  H 0
                  V 67
                  Z
                    "
                    ></animate>
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div className="Age-content">
            <h3>請問你的出生年月日是：</h3>
            <div className="input-box">
              <select className="decorated" name="drinks" required>
                <option defaultValue="" disabled hidden>
                  Choose a drink
                </option>
                <option value="coffee">YYYY</option>
                <option value="tea">2004</option>
                <option value="milk">2022</option>
              </select>
              <p>年</p>
              <select className="decorated" name="drinks" required>
                <option defaultValue="" disabled hidden>
                  Choose a drink
                </option>
                <option value="coffee">MM</option>
                <option value="tea">04</option>
                <option value="milk">02</option>
              </select>
              <p>月</p>
              <select className="decorated" name="drinks" required>
                <option defaultValue="" disabled hidden>
                  Choose a drink
                </option>
                <option value="coffee">DD</option>
                <option value="tea">12</option>
                <option value="milk">02</option>
              </select>
              <p>日</p>
            </div>
            <button className="mt-3 btn btn-primary">確認</button>
            <div className="red-word">
              <p>未滿18歲請勿飲酒</p>
            </div>
          </div>

          {/* 內容bottom */}
        </div>
      </div>
    </>
  )
}

export default AgeModal
