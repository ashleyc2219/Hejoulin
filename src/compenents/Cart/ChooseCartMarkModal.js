import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ChooseCartMarkModal.scss'
import ChooseMark from './ChooseMark'
import { createBrowserHistory } from 'history'

const ChooseCartMarkModal = (props) => {
  const { sakeInfo, setModalShow, setMarkPic } = props
  const [data, setData] = useState([])
  const [check, setCheck] = useState('')
  const history = createBrowserHistory()

  const markData = data.map((v, i) => {
    return (
      <ChooseMark key={i} check={check} setCheck={setCheck} mark_info={v} />
    )
  })
  const MarkInsert = async function () {
    let data = {
      mark_id: check,
      cart_sake_id: sakeInfo.cart_sake_id,
    }
    const r1 = await fetch('http://localhost:3001/api/cart-list/mark', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const obj = await r1.json()
    console.log(obj)
    history.push('/cart/list', { some: 'state' })
  }

  useEffect(() => {
    let a = true
    const fetchTop = async () => {
      const res = await fetch(
        'http://localhost:3001/api/cart-list/mark?member_id=4'
      )
      const fetchedData = await res.json()
      console.log(fetchedData)
      if (a) {
        setData(fetchedData)
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
            onClick={() => {
              setModalShow(false)
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            fill="none"
            viewBox="0 0 29 29"
          >
            <path
              stroke="#F7F7F6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21.75 7.25l-14.5 14.5M7.25 7.25l7.25 7.25 7.25 7.25"
            />
          </svg>
          {data.length >= 1 ? (
            <>
              <div className="markcontainer">{markData}</div>
              <div className="button">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    MarkInsert()
                    setMarkPic(check)
                    setModalShow(false)
                  }}
                >
                  確認
                </button>
              </div>
            </>
          ) : (
            <div className="nomark">
              <p>沒有酒標作品</p>

              <Link to="/mark/intro">
                <button className="btn btn-primary">前去製作</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ChooseCartMarkModal
