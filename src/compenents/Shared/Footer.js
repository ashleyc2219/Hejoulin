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
                    3000.00,106
        
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
                      3000,116
                    V 359
                    H 0
                    V 67
                    Z;
        
                    M0 77
                    C 473,-40
                      1222,283
                      3000,136
                    V 359
                    H 0
                    V 67
                    Z;
        
                    M0 77
                    C 973,260
                      1722,-53
                      3000,120
                    V 359
                    H 0
                    V 67
                    Z;
                    M0 77
                    C 473,283
                      822,-40
                      3000,116
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
                  3000,116
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
                    3000.00,106
        
                  V 359
                  H 0
                  V 67
                  Z;
        
                  M0 77
                  C 973,260
                  1722,-53
                  3000,120
                  V 359
                  H 0
                  V 67
                  Z;
                  M0 77
                  C 473,-40
                    1222,283
                    3000,136
                  V 359
                  H 0
                  V 67
                  Z;
                    M0 67
                  C 273,183
                    822,-40
                    3000.00,106
        
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
              <a href="">????????????</a>
            </li>
            <li>
              <a href="">????????????</a>
            </li>
            <li>
              <a href="">????????????</a>
            </li>
            <li>
              <a href="">????????????</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">????????????</a>
            </li>
            <li>
              <a href="">????????????</a>
            </li>
            <li>
              <a href="">????????????</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">????????????</a>
            </li>
            <li>
              <a href="">LINE????????????</a>
            </li>
            <li>
              <a href="">INSTAGRAM</a>
            </li>
            <li>
              <a href="">FB????????????</a>
            </li>
          </ul>
        </div>
        <div className="copy-right">
          <p>Copyright ?? 2022 ????????? ????????????</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
