import React from 'react'
// 用來做貨運資訊的連動選單
import { islands, townships } from '../../data/cart-list-select'
const ListSelection = (props) => {
  const {
    shipMethod,
    setShipMethod,
    island,
    setIsland,
    township,
    setTownship,
    oneWarning,
    twoWarning,
  } = props

  function methodUpdate(e) {
    if (e.target.value === 'pick') {
      //   setShipFee(0)
      setShipMethod('pick')
    }
    if (e.target.value === 'delivery') {
      //   setShipFee(60)
      setShipMethod('delivery')
    }
  }

  return (
    <>
      <h5>貨運資訊</h5>
      <label className="form-label">收件地點</label>
      <select
        className={
          oneWarning === false ? 'decorated district red' : 'decorated district'
        }
        value={island}
        onChange={(e) => {
          // 將字串轉成數字
          setIsland(+e.target.value)
          // 重置township的值
          setTownship(-1)
          setShipMethod(-1)
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
        className={
          oneWarning === false ? 'decorated city red' : 'decorated city'
        }
        name="city"
        value={township}
        onChange={(e) => {
          // 將字串轉成數字
          setTownship(+e.target.value)
          setShipMethod(-1)
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
      <select
        className={
          twoWarning === false ? 'decorated method red' : 'decorated method'
        }
        name="method"
        value={shipMethod}
        onChange={(e) => {
          methodUpdate(e)
        }}
      >
        <option value="-1">選擇運送方式</option>
        {island === 0 && township === 1 ? (
          <option value="pick">門市自取</option>
        ) : (
          ''
        )}
        <option value="delivery">低溫宅配</option>
      </select>
    </>
  )
}

export default ListSelection
