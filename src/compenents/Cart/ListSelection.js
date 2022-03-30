import React from 'react'
// 用來做貨運資訊的連動選單
import { islands, townships } from '../../data/cart-list-select'
import { useState } from 'react'
const ListSelection = () => {
  const [island, setIsland] = useState(-1)
  const [township, setTownship] = useState(-1)

  return (
    <>
      <h5>貨運資訊</h5>
      <label className="form-label">收件地點</label>
      <select
        className="decorated district"
        value={island}
        onChange={(e) => {
          // 將字串轉成數字
          setIsland(+e.target.value)
          // 重置township的值
          setTownship(-1)
        }}
      >
        <option value="-1">選擇地區</option>
        {islands.map((value, index) => (
          <option key={index} value={index}>
            {value}
          </option>
        ))}
      </select>
      <select
        className="decorated city"
        name="city"
        value={township}
        onChange={(e) => {
          // 將字串轉成數字
          setTownship(+e.target.value)
        }}
      >
        <option value="-1">選擇縣市</option>
        {island > -1 &&
          townships[island].map((value, index) => (
            <option key={index} value={index}>
              {value}
            </option>
          ))}
      </select>

      <label className="form-label">運送方式</label>
      <select className="decorated method" name="method" required>
        <option value="-1">選擇運送方式</option>
        {island === 0 && township === 1 ? (
          <option value="delivery">低溫宅配</option>
        ) : (
          ''
        )}
        <option value="pick">門市自取</option>
      </select>
    </>
  )
}

export default ListSelection
