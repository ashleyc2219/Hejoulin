import React, { useEffect } from 'react'
import './Finally.scss'

const Finally = () => {
  const url1 = 'http://localhost:3001/api/product_guide'

  useEffect = (() => {}, [])
  return (
    <>
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
          <img className="white_wave" src="/SakeGuide/white-wave.svg" alt="" />
          <img className="gray_wave" src="/SakeGuide/gray-wave.svg" alt="" />
        </div>
      </section>
    </>
  )
}

export default Finally
