import React from 'react'
import './../styles/SakeGuide/SakeGuide.scss'



const SakeGuide = () => {
  return (
    <div className="SakeGuide">
      <div className="guide_container">
        <section className="main">
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
        </section>
        <section className="price">
          <fiedlset class="cost">
            <legend class="filter-headline">Cost, $:</legend>
            <p class="cost__inputs">
              <label class="cost__label">
                From
                <input
                  class="cost__input"
                  type="number"
                  value="0"
                  min="0"
                  max="12000"
                />
              </label>
              <label class="cost__label">
                To
                <input
                  class="cost__input"
                  type="number"
                  value="9000"
                  min="0"
                  max="12000"
                />
              </label>
            </p>
            <p
              class="range-slider cost__range"
              // style="--first-val: 0%; --second-val: 75%;"
            >
              <input
                class="range-slider__input"
                type="range"
                min="0"
                max="12000"
                value="0"
                step="100"
                aria-label="Min range"
              />
              <input
                class="range-slider__input"
                type="range"
                min="0"
                max="12000"
                value="9000"
                step="100"
                aria-label="Max range"
              />
            </p>
          </fiedlset>
        </section>
        <div className="wave">
          <div className="upper"></div>
          <div className="down"></div>
        </div>
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
