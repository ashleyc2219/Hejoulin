import React from 'react'
import './../styles/SakeGuide/SakeGuide.scss'

const SakeGuide = () => {
  return (
    <div className="SakeGuide">
      <div className="guide_container">
        <main>
          <p className="question">
            您喜歡口感清爽的清酒，還是有豐富層次的清酒呢？
          </p>
          <div className="group">
            <div className="circle_group">
              <div className="inner_circle"></div>
              <div className="circle"></div>
            </div>
            <p className="answer">清爽</p>
          </div>
          <div className="group">
            <div className="circle_group">
              <div className="circle"></div>
              <div className="inner_circle"></div>
            </div>
            <p className="answer">豐富</p>
          </div>
          <div className="group">
            <div className="circle_group">
              <div className="circle"></div>
              <div className="inner_circle"></div>
            </div>
            <p className="answer">兩者皆可</p>
          </div>
        </main>
        {/* <section id="result">
          <div className="result_bg">
            <img src="/SakeGuide/guidebg.png" alt="" className="guide_bg" />
          </div>
          <div className="grid">
            <div className="space"></div>
            <div className="recommand">
              <img src="/SakeGuide/4.png" alt="" className="sake" />
              <p className="name">篠峯 雄町純米大吟釀</p>
            </div>
            <div className="recommand">
              <img src="/SakeGuide/4.png" alt="" className="sake" />
              <p className="name">篠峯 雄町純米大吟釀</p>
            </div>
            <div className="recommand">
              <img src="/SakeGuide/4.png" alt="" className="sake" />
              <p className="name">篠峯 雄町純米大吟釀</p>
            </div>
            <div className="space"></div>
          </div>
        </section> */}
      </div>
      <section id="result">
        <div className="result_container">
          <img src="/SakeGuide/guidebg.png" alt="" className="guide_img" />
          <div className="over">
            <div className="grid">
              <div className="space"></div>
              <div className="recommand">
                <img src="/SakeGuide/4.png" alt="" className="sake" />
                <p className="name">篠峯 雄町純米大吟釀</p>
              </div>
              <div className="recommand">
                <img src="/SakeGuide/4.png" alt="" className="sake" />
                <p className="name">篠峯 雄町純米大吟釀</p>
              </div>
              <div className="recommand">
                <img src="/SakeGuide/4.png" alt="" className="sake" />
                <p className="name">篠峯 雄町純米大吟釀</p>
              </div>
              <div className="space"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SakeGuide
