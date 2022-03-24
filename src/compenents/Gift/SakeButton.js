import React, { useState, useRef } from 'react'
import './SakeButton.scss'

const SakeButton = (props) => {
  const [sakeButton, setSakeButton] = useState(0)
  const value = useRef(0)
  const plus = () => {
    value.current += 1
  }
  const minus = () => {
    value.current -= 1
  }

  return (
    <>
      <div className="SakeButton">
        {sakeButton === 0 && (
          <button
            className="sake empty"
            ref={value}
            onClick={() => {
              setSakeButton(1)
            }}
          >
            <img src="/Gift/null_sake.svg" alt="" className="sake single" />
            <span>點擊小酒瓶選擇商品</span>
          </button>
        )}

        {sakeButton === 1 && (
          <>
            <button
              className="one"
              ref={value}
              onClick={() => {
                setSakeButton(2)
              }}
            >
              <img src="/Gift/full_sake.svg" alt="" className="sake single" />
              <span>再加一瓶</span>
            </button>
            <button
              className="cancel"
              ref={value}
              onClick={() => {
                setSakeButton(0)
              }}
            >
              <img src="/Gift/cancel.svg" alt="" className="circle" />
              <span>取消</span>
            </button>
          </>
        )}
        {sakeButton === 2 && (
          <>
            <button className="full" ref={value} disable>
              <img src="/Gift/gray_sake.svg" alt="" className="sake dou" />
              <img src="/Gift/gray_sake.svg" alt="" className="sake dou" />
              <span>已選二瓶</span>
            </button>
            <button
              className="cancel"
              ref={value}
              onClick={() => {
                setSakeButton(1)
              }}
            >
              <img src="/Gift/cancel.svg" alt="" className="circle" />
              <span>取消</span>
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default SakeButton
