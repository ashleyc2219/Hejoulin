import React, { useEffect, useState } from 'react'
import './ChooseCartMarkModal.scss'

const ChooseCartMarkModal = () => {
  const [data, setData] = useState([])
  const [check, setCheck] = useState('')
  const markData = data.map((v, i) => {
    return (
      <div
      key={i}
        onClick={() => {
          setCheck(i)
        }}
        className={check === i ? 'mark markchecked' : 'mark'}
      >
        <div className="markname">{v.mark_name}</div>
        <div className="markpic">
          <img src={'http://localhost:3001/images/mark_pic/' + v.pics} alt="" />
        </div>
      </div>
    )
  })

  useEffect(() => {
    let a = true
    const fetchTop = async () => {
      const res = await fetch(
        'http://localhost:3001/api/cart-list/mark?member_id=4'
      )
      const fetchedData = await res.json()
      const test = fetchedData
      console.log(test)
      if (a) {
        setData(test)
      }
    }
    fetchTop()
    return () => {
      a = false
    }
  }, [])
  return (
    <>
      <div className="ChooseCartMarkModal">
        <div className="ChooseCartMark">
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.75 7.25L7.25 21.75"
              stroke="#F7F7F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.25 7.25L14.5 14.5L21.75 21.75"
              stroke="#F7F7F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="markcontainer">{markData}</div>
          <div className="button">
            <button className="btn btn-primary">確認</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChooseCartMarkModal
