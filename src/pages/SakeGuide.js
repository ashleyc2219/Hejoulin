import React from 'react'
import './../styles/SakeGuide/SakeGuide.scss'

const SakeGuide = () => {
  return (
    <>
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
            <fiedlset className="cost">
              <div className="qus">
                <legend className="filter-headline">價錢預算</legend>
                <p className="cost__inputs">
                  <label className="cost__label">
                    <input
                      className="cost__input"
                      type="number"
                      value="0"
                      min="0"
                      max="12000"
                    />
                  </label>
                  <span>~</span>
                  <label className="cost__label">
                    <input
                      className="cost__input"
                      type="number"
                      value="3000"
                      min="0"
                      max="12000"
                    />
                  </label>
                </p>
              </div>

              <p
                className="range-slider cost__range"
                // style="--first-val: 0%; --second-val: 75%;"
              >
                <input
                  className="range-slider__input"
                  type="range"
                  min="0"
                  max="12000"
                  value="0"
                  step="100"
                  aria-label="Min range"
                />
                <input
                  className="range-slider__input"
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
          <section className="wave_loca">
            <div className="wave">
              <div className="upper"></div>
              <div className="down"></div>
            </div>
          </section>
        </div>

        <section id="result">
          <div className="title">
            <h4>推薦酒款</h4>
          </div>
          <div className="sakes">
            <div className="box left">
              <div className="sake_circle uno"></div>
              <img src="/SakeGuide/4.png" alt="" />
            </div>
            <div className="box center">
              <div className="sake_circle dos"></div>
              <img src="/SakeGuide/4.png" alt="" />
            </div>
            <div className="box right">
              <div className="sake_circle tres"></div>
              <img src="/SakeGuide/4.png" alt="" />
            </div>
          </div>
          <div className="anime_bg">
            <img className="turtle" src="/SakeGuide/turtle.svg" alt="" />
            <div className="line_wave">
              <img className="_1st" src="/SakeGuide/line01.svg" alt="" />
              <img className="_2nd" src="/SakeGuide/line02.svg" alt="" />
              <img className="_3rd" src="/SakeGuide/line03.svg" alt="" />
              <img className="_4th" src="/SakeGuide/line04.svg" alt="" />
              <img className="_5th" src="/SakeGuide/line05.svg" alt="" />
              <img className="_6th" src="/SakeGuide/line06.svg" alt="" />
              <img className="_7th" src="/SakeGuide/line07.svg" alt="" />
              <img className="_8th" src="/SakeGuide/line08.svg" alt="" />
              <img className="_9th" src="/SakeGuide/line09.svg" alt="" />
              <img className="_10th" src="/SakeGuide/line10.svg" alt="" />
              <img className="_11th" src="/SakeGuide/line11.svg" alt="" />
            </div>
            <div className="random_dots"></div>
            <img
              className="white_wave"
              src="/SakeGuide/white-wave.svg"
              alt=""
            />
            <img className="gray_wave" src="/SakeGuide/gray-wave.svg" alt="" />
            {/* <img className="other_small" src="/SakeGuide/dots.svg" alt="" />
            <img
              className="other_large"
              src="/SakeGuide/dots-large.svg"
              alt=""
            /> */}
          </div>
        </section>
      </div>
    </>
  )
}

export default SakeGuide
