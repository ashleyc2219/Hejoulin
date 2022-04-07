import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ChooseCartMarkModal.scss'
import ChooseMark from './ChooseMark'

const ChooseCartMarkModal = (props) => {
  const { sakeInfo, setChooseModalShow, setMarkPic } = props
  const [data, setData] = useState([])
  // 顯示酒標用
  const [check, setCheck] = useState('')
  // 傳資料用markID
  const [markId, setMarkId] = useState(0)

  const markData = data.map((v, i) => {
    return (
      <ChooseMark
        key={i}
        check={check}
        setCheck={setCheck}
        mark_info={v}
        setMarkId={setMarkId}
      />
    )
  })
  const MarkInsert = async function () {
    let data = {
      mark_id: markId,
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
    // console.log(obj)
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
          {data.length >= 1 ? (
            <>
              <div className="markcontainer">{markData}</div>
              <div className="button">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setChooseModalShow(false)
                  }}
                >
                  取消
                </button>
                <button
                  className="btn btn-secondary "
                  onClick={() => {
                    MarkInsert()
                    setMarkPic(check)
                    setChooseModalShow(false)
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
