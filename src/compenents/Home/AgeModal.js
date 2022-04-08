import React from 'react'
import './AgeModal.css'
import { useEffect, useState } from 'react'
import DatePicker from 'react-date-picker'

import CalendarIcon from './CalendarIcon.js'

const AgeModal = (props) => {
  const { modalShow, setModalShow } = props
  const [value, setValue] = useState(new Date())
  const [classname, setClassname] = useState(true)

  const openModal = () => {
    setModalShow((prev) => !prev)
  }

  const AgeCount = () => {
    let Birthday = value.getTime()
    let nowTime = new Date().getTime()
    let AgeOne = Math.ceil((nowTime - Birthday) / 31536000000) - 1
    console.log(AgeOne)
    if (AgeOne >= 18) {
      setClassname(false)
      localStorage.setItem('age', 'over 18')
      setTimeout(() => {
        openModal()
      }, 1000)
    } else {
      window.location.href = `https://www.google.com.tw`
    }
  }

  function formatDay(d, locale) {
    return (
      <span>
        {d.getDate()}-s{d.getMonth()}-{d.getFullYear()}
      </span>
    )
  }

  return (
    <>
      <div className={classname ? 'AgeModal anistart' : 'AgeModal aniend'}>
        <div className="comparepage">
          {/* 內容top */}
          <div className="footer">
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
            <h3 className="mb-4">請問你的出生年月日是</h3>
            <DatePicker
              locale={'en-US'}
              onChange={setValue}
              value={value}
              calendarIcon={<CalendarIcon />}
              clearIcon={null}
            />
            <div className="red-word">
              <p>未滿18歲請勿飲酒</p>
            </div>
            <button className="mt-3 btn btn-primary mt-3" onClick={AgeCount}>
              確認
            </button>
          </div>

          {/* 內容bottom */}
        </div>
      </div>
    </>
  )
}

export default AgeModal
