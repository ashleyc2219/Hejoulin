import React from 'react'
import '../../styles/Shared/Footer.scss'

function Footer() {
  return (
    <div className="Footer">
      <div className="wave-container">
        <div className="waves">
          <svg width="100%" height="350px" fill="none">
            <path
              fill="#3D4349"
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
                fill="#454599"
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
              fill="#3D4349"
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
      <div className="content-container">
        <div className="info">
          <ul>
            <li>
              <a href="">聯絡資訊</a>
            </li>
            <li>
              <a href="">客服專線</a>
            </li>
            <li>
              <a href="">服務時間</a>
            </li>
            <li>
              <a href="">客服信箱</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">購物須知</a>
            </li>
            <li>
              <a href="">配送方式</a>
            </li>
            <li>
              <a href="">付款方式</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">社群連結</a>
            </li>
            <li>
              <a href="">LINE官方帳號</a>
            </li>
            <li>
              <a href="">INSTAGRAM</a>
            </li>
            <li>
              <a href="">FB粉絲專頁</a>
            </li>
          </ul>
        </div>
        <div className="copy-right">
          <p>Copyright © 2022 禾酒林 版權所有</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
