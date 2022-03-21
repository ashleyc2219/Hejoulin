import React from 'react'
import './../styles/Mark/MarkIntro.scss'

const MarkIntro = () => {
  return (
    <div className="MarkIntro">
      <div className="mark_container">
        <main>
          <div className="anime">
            <img src="" alt="" className="intro_anime" />
            <img src="/Mark/1.png" alt="" className="fake"></img>
          </div>
          <div className="mark_intro">
            <h2 className="mark_title">世界上只專屬於你的酒</h2>
            <h2 className="mark_title title_bottom">從此刻誕生</h2>
            <p className="mark_content">
              進入會員我的編輯中，可以製作無限數量的酒標，並能選擇是否要儲存於會員–我的酒標中，同時也能下載圖片至電腦或手機中，分享至你的世界。
            </p>
            <button className="btn btn-primary edit">我的編輯</button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default MarkIntro
