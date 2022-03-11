import React from 'react'

const SomeComponent = () => {
  return (
    <div>
      <h1>Some Components</h1>
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
        <label for="c1">
          <span></span>Check Box 1
        </label>
      </div>
      <div>
        <input type="checkbox" id="c2" name="cc" />
        <label for="c2">
          <span></span>Check Box 2
        </label>
      </div>
      <div>
        <input type="checkbox" id="c3" name="cc" />
        <label for="c3">
          <span></span>Check Box 3
        </label>
      </div>

      {/* 下拉選單 */}
      <h3>下拉選單</h3>
      <select className="decorated" name="drinks" required>
        <option value="" disabled selected hidden>
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
