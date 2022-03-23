import React, { useState, useRef } from 'react'
import './SakeButton.scss'

import ButtonEmpty from './Button_empty'
import ButtonOne from './Button_one'
import ButtonFull from './Button_full'

const SakeButton = (props) => {
  // const [sakeButton, setSakeButton] = useState(['empty'])
  // const value = useRef(null)

  // const className = [...sakeButton]

  // const changeState = () => {
  //   value.current.quality++
  //   if (value.current.quality === 1) {
  //     className.pop()
  //     className.push('one')
  //     document.querySelector('.cancel').style.display = 'block'
  //   } else if (value.current.quality === 2) {
  //     className.pop()
  //     className.push('full')
  //     document.querySelector('.cancel').style.display = 'block'
  //   }
  // }

  // const cancel = () => {
  //   value.current.quality--
  //   if (value.current.quality === 2) {
  //     let change = className.pop().push('one')
  //     setSakeButton(change)
  //     // className.push('one')
  //     console.log(className)
  //   } else if (value.current.quality === 1) {
  //     className.pop()
  //     className.push('empty')
  //     console.log(className)
  //   } else {
  //     document.querySelector('.cancel').style.display = 'none'
  //     console.log(className)
  //   }
  // }

  return (
    <div className="SakeButton">
      {/* <ButtonEmpty />
      <ButtonOne />
      <ButtonFull /> */}
      {/* {sakeButton === 'empty' ? <ButtonEmpty /> : <ButtonOne />}
      {sakeButton === 'one' && <ButtonOne />}
      {sakeButton === 'full' && <ButtonFull />} */}
      <button className="sake empty" >
        <img src="/Gift/null_sake.svg" alt="" className="sake single" />
        <span>點擊小酒瓶選擇商品</span>
      </button>

      <button className="one">
        <img src="/Gift/full_sake.svg" alt="" className="sake single" />
        <span>再加一瓶</span>
      </button>
      <button className="disable full">
        <img src="/Gift/gray_sake.svg" alt="" className="sake dou" />
        <img src="/Gift/gray_sake.svg" alt="" className="sake dou" />
        <span>已選二瓶</span>
      </button>
      <button className="cancel">
        <img src="/Gift/cancel.svg" alt="" className="circle" />
        <span>取消</span>
      </button>
    </div>
  )
}

export default SakeButton
