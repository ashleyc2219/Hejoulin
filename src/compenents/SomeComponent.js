import React from 'react'

const SomeComponent = () => {
  return (
    <div>
      <h1>Some Components</h1>
      {/* 按鈕 */}
      <h3>按鈕們</h3>
      <button className='btn btn-primary'>Primary</button>
      <button className='btn btn-secondary'>Secondary</button>
      <button className='btn btn-primary-outline'>Outline</button>
      <br/>
      <h4>不同大小</h4>
      <p>btn-sm是style guide中的small</p>
      <p>btn是style guide中的normal</p>
      <p>btn-large是style guide中的medium</p>
      <button className='btn btn-sm btn-primary'>btn-sm</button>
      <button className='btn btn-primary'>btn</button>
      <button className='btn btn-lg btn-primary'>btn-large</button>
      {/* 輸入欄 */}
      <h3>input</h3>
      <div className="mb-3">
      <label className="form-label">標籤</label>
      <input type="email" className="form-control" placeholder='示意文字' />
      <div className="form-text">錯誤/提示訊息</div>
    </div>
    </div>
  )
}

export default SomeComponent