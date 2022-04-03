import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Question from '../compenents/SakeGuide/Question'
import './../styles/SakeGuide/SakeGuide.scss'
import MultiRangeSlider from '../compenents/RangeSlider/MultiRangeSlider'
import Answer from '../compenents/SakeGuide/Answer'

const SakeGuide = () => {
  const [content, setContent] = useState([])
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [thickness, setThickness] = useState('') //厚薄
  const [smooth, setSmooth] = useState('') //辛口甘口
  const [sweet, setSweet] = useState('') //偏酸偏甜
  //一定要照上面的順序
  const [taste, setTaste] = useState('') //最後的taste ?
  const [temp, setTemp] = useState('') //溫度
  const [gift, setGift] = useState(false) //送禮
  const [sakeId, setSakeId] = useState(0) //設定最終的id

  const url2 = `http://localhost:3001/api/product_guide?taste=${taste}&temp=${temp}&priceLow=${minPrice}&priceHigh=${maxPrice}&gift=${gift}`
  const sake = content.map((v, i) => {
    return (
      <React.Fragment key={i}>
        <div className="box">
          <Link to={'/product/detail/' + v.pro_id}>
            <div className="sth">
              <img
                src={'http://localhost:3001/images/pro_img/' + v.pro_img}
                alt=""
              />
              <span>{v.pro_name}</span>
            </div>
          </Link>
          <div className="sake_circle uno"></div>
        </div>
      </React.Fragment>
    )
  })
  useEffect(() => {
    const fetchItem = async () => {
      const res = await fetch(url2)
      const data = await res.json()
      setContent(data)
    }
    fetchItem()
  }, [taste, temp, minPrice, maxPrice, gift])

  return (
    <>
      <div className="SakeGuide">
        <section className="wave_loca">
          <div className="wave">
            <div className="upper"></div>
            <div className="down"></div>
          </div>
        </section>
        <div className="guide_container">
          <section className="start">
            <img src="/Gift/bgelement.svg" alt="" className="one"></img>
            <img src="/Gift/bgelement.svg" alt="" className="two"></img>
            {/* </div> */}
            <div className="text">
              <div className="left">
                <img src="/SakeGuide/bgmark.svg" alt="" className="bgmark" />
                <h2 className="title01">擺脫選擇苦手</h2>
                <h2 className="title02">選酒指南</h2>
              </div>
              <div className="right">
                <p className="intro">想嘗試清酒卻不知道從哪裡開始？</p>
                <p className="intro">
                  還是本身就是選擇障礙患者，決定買哪一支清酒就要花很多時間？
                </p>
                <p className="intro">或是想送人清酒卻怕無法送入心坎？</p>
                <p className="intro">
                  我們提供專業的選酒指南，隨著問題的進行，逐一篩選出您心目中優質的清酒候選，推薦給您！
                </p>
              </div>
            </div>
            <div className="location">
              <button className="begin">
                <p>立即開始</p>
                <span>scroll</span>
                <div className="line"></div>
                <div className="arrow"></div>
              </button>
            </div>
          </section>
          <Question
            setThickness={setThickness}
            setSmooth={setSmooth}
            setSweet={setSweet}
            setTaste={setTaste}
            setTemp={setTemp}
            setGift={setGift}
          />
          <section className="price">
            <div className="text">
              <p className="question">預估花費</p>
              <p classNmae="question price_low">${minPrice}</p>
              <p className="question symbol">~</p>
              <p classNmae="question price_high">${maxPrice}</p>
            </div>
            <div className="range">
              <MultiRangeSlider
                min={380}
                max={14800}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                onChange={({ min, max }) =>
                  console.log(`min = ${min}, max = ${max}`)
                }
              />
            </div>
            <div className="position">
              <button
                className="comfirm btn btn-warning"
                onClick={() => {
                  console.log(
                    `thickness=${thickness},smooth=${smooth},sweet=${sweet},temp=${temp},gift=${gift},minPrice=${minPrice},maxPrice=${maxPrice}`
                  )

                  setTaste(thickness + smooth + sweet)
                }}
              >
                察看結果
              </button>
            </div>
          </section>
        </div>

        {/* <Finally /> */}
        <section id="result">
          <div className="title">
            <h4>推薦酒款</h4>
          </div>
          <div className="sakes">
            {sake}
            {/* <div className="box left">
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
            </div> */}
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
          </div>
        </section>
      </div>
    </>
  )
}

export default SakeGuide
