import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './../styles/Mark/MarkDone.scss'

const MarkDone = () => {
  return (
    <>
      <div className="MarkDone">
        <div className="done_container">
          <div className="bg">
            <div className="fake"></div>
          </div>
          <div className="done">
            <img src="/Mark/1.png" alt="" className="bottle image" />
            <img src="/Mark/1.png" alt="" className="sticker image" />
          </div>
          <div className="grid">
            <div className="group">
              <p className="text">想分享圖片嗎？可以先進行下載</p>
              <button className="btn btn-primary">下載圖片</button>
            </div>
            <div className="group">
              <p className="text">還想做其他的專屬酒標？那就…</p>
              <Link to="/mark/edit">
                <button className="btn btn-primary">儲存並製作下一張</button>
              </Link>
            </div>
            <div className="group">
              <p className="text">想擁有實體只屬於自己的酒！</p>
              <button className="btn btn-primary">前往商城</button>
            </div>
          </div>
          <div className="mobile">
            <div className="download">
              <p>想分享圖片嗎？</p>
              <button className="btn btn-primary">下載圖片</button>
            </div>
            <div className="turn">
              <p>先儲存圖片，接著…</p>
              <button className="shop btn btn-secondary">前往購物</button>
              <span>或</span>
              <Link to="/mark/edit">
                <button className="btn btn-success next">製作下一張</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MarkDone
