import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import './../styles/SomeComponent/SomeComponent.scss'

const SomeComponent = () => {
  return (
    <div className="container SomeComponent">
      <h1>Some Components</h1>
      <h3 className="text-color">顏色變數</h3>
      <p>
        使用方式: <br />
        在自己的scss檔中 @import '../mixin.scss'; <br />
        就可以使用所有的顏色變數 (所有顏色請看mixin.scss) <br />
        舉例: background-color: $primary
      </p>
      <div className="d-flex">
        <div className="pantone-container">
          <motion.div onHoverStart={e => {console.log('enter')}}
  onHoverEnd={e => {console.log('leave')}} className="pantone primary"></motion.div>
          <p>primary</p>
        </div>
        <div className="pantone-container">
          <div className="pantone secondary"></div>
          <p>secondary</p>
        </div>
        <div className="pantone-container">
          <div className="pantone success"></div>
          <p>success</p>
        </div>
        <div className="pantone-container">
          <div className="pantone info"></div>
          <p>info</p>
        </div>
      </div>
      {/* 按鈕 */}
      <h3>按鈕們</h3>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-outline-primary">Outline</button>
      <br />
      <h4>不同大小</h4>
      <p>btn-sm是style guide中的small</p>
      <p>btn是style guide中的normal</p>
      <p>btn-large是style guide中的medium</p>
      <button className="btn btn-sm btn-primary">btn-sm</button>
      <button className="btn btn-primary">btn</button>
      <button className="btn btn-lg btn-primary">btn-large</button>
      {/* 輸入欄 */}
      <h3>input</h3>
      <div className="mb-3">
        <label className="form-label">標籤</label>
        <input type="email" className="form-control" placeholder="示意文字" />
        <div className="form-text">錯誤/提示訊息</div>
      </div>
      {/* checkbox */}
      <h3>checkbox</h3>
      <div>
        <input type="checkbox" id="c1" name="cc" />
        <label htmlFor="c1">
          <span></span>Check Box 1
        </label>
      </div>
      <div>
        <input type="checkbox" id="c2" name="cc" />
        <label htmlFor="c2">
          <span></span>Check Box 2
        </label>
      </div>
      <div>
        <input type="checkbox" id="c3" name="cc" />
        <label htmlFor="c3">
          <span></span>Check Box 3
        </label>
      </div>
      {/* radio */}
      <div>
        <input type="radio" id="r1" name="rr" />
        <label htmlFor="r1">
          <span></span>Radio Button 1
        </label>
      </div>
      <div>
        <input type="radio" id="r2" name="rr" />
        <label htmlFor="r2">
          <span></span>Radio Button 2
        </label>
      </div>

      {/* 下拉選單 */}
      <h3>下拉選單</h3>
      <select className="decorated" name="drinks" required>
        <option defaultValue="" disabled hidden>
          Choose a drink
        </option>
        <option value="coffee">Coffee</option>
        <option value="tea">Tea</option>
        <option value="milk">Milk</option>
      </select>
    </div>
  )
}

export default SomeComponent
