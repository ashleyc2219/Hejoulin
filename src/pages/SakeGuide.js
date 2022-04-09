import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './../styles/SakeGuide/SakeGuide.scss'
import { motion, useAnimation } from 'framer-motion'

//元件
import Question from '../compenents/SakeGuide/Question'
import MultiRangeSlider from '../compenents/RangeSlider/MultiRangeSlider'
import useWindowDimensions from '../compenents/SakeGuide/WindowDim'
import Spinner from '../compenents/Shared/Spinner'
import Finally from '../compenents/SakeGuide/Finally'

const SakeGuide = () => {
  const [loading, setLoading] = useState(true)
  // const [content, setContent] = useState([])
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [thickness, setThickness] = useState('') //厚薄
  const [smooth, setSmooth] = useState('') //辛口甘口
  const [sweet, setSweet] = useState('') //偏酸偏甜
  //一定要照上面的順序
  const [taste, setTaste] = useState('') //最後的taste ?
  const [temp, setTemp] = useState('') //溫度
  const [gift, setGift] = useState(false) //送禮

  const [first, setfirst] = useState(false)
  const [wave, setWave] = useState(false)
  const [result, setResult] = useState(false)

  const [waveHeight, setWaveHeight] = useState(1)
  const wrap = useRef(0)
  const plus = () => {
    wrap.current += 1
    console.log(wrap)
  }
  const { height, width } = useWindowDimensions()
  const box = (198 / height) * 100
  useEffect(() => {
    setWaveHeight(box + wrap.current * 20)
  }, [wrap.current])
  const controls = useAnimation()
  useEffect(() => {
    function growHeight() {
      switch (wrap.current) {
        case 0:
          controls.start({
            height: '198px',
          })
          break
        case 1:
          controls.start({
            height: 'calc(198px + 20%)',
          })
          break
        case 2:
          controls.start({
            height: '45%',
          })
          break
        case 3:
          controls.start({
            height: '75%',
          })
          break
        case 4:
          controls.start({
            height: '100%',
          })
          break
        default:
          break
      }
    }
    growHeight()
  }, [wrap.current])

  setTimeout(() => {
    setLoading(false)
  }, 1500)

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="SakeGuide">
          <section className={`guide_wave ${wave ? '' : 'wave_test'}`}>
            <motion.div
              className="wave_loca"
              // style={{ height: `${waveHeight} + '%' ` }}
            >
              <div className="wave">
                <div className="upper"></div>
              </div>
            </motion.div>
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
                <button
                  className="begin"
                  onClick={() => {
                    setfirst(true)
                    setTimeout(() => {
                      window.scroll({
                        top: height,
                        left: 0,
                        behavior: 'smooth',
                      })
                    }, 500)
                    setTimeout(() => {
                      setWave(true)
                    }, 1000)
                  }}
                >
                  <p className="chi">立即開始</p>
                  <p className="eng">start</p>
                  <div className="arrow">
                    <img
                      src="./SakeGuide/down.svg"
                      alt=""
                      className="down01 down"
                    />
                    <img
                      src="./SakeGuide/down.svg"
                      alt=""
                      className="down02 down"
                    />
                    <img
                      src="./SakeGuide/down.svg"
                      alt=""
                      className="down03 down"
                    />
                  </div>
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
              height={height}
              first={first}
              plus={plus}
            />
            <section className={`price ${first ? '' : 'guide_test'}`}>
              <div className="text">
                <p className="question">預估花費</p>
                <p className="question price_low">${minPrice}</p>
                <p className="question symbol">~</p>
                <p className="question price_high">${maxPrice}</p>
              </div>
              <div className="range">
                <MultiRangeSlider
                  min={380}
                  max={14800}
                  setMinPrice={setMinPrice}
                  setMaxPrice={setMaxPrice}
                  onChange={
                    ({ min, max }) => {}
                    // console.log(`min = ${min}, max = ${max}`)
                  }
                />
              </div>
              <div className="position">
                <button
                  className="comfirm btn btn-warning"
                  onClick={() => {
                    setTaste(thickness + smooth + sweet)
                    // console.log(
                    //   'thickness',
                    //   thickness,
                    //   'smooth',
                    //   smooth,
                    //   'sweet',
                    //   sweet,
                    //   'temp',
                    //   temp,
                    //   'gift',
                    //   gift,
                    //   'priceLow',
                    //   minPrice,
                    //   'priceHigh',
                    //   maxPrice,
                    // )
                    setTimeout(() => {
                      window.scroll({
                        top: height * 6,
                        left: 0,
                        behavior: 'smooth',
                      })
                    }, 500)
                    setTimeout(() => {
                      setResult(true)
                      setWave(false)
                    }, 1000)
                  }}
                >
                  察看結果
                </button>
              </div>
            </section>
          </div>

          {/* <Finally /> */}
          <div className={result ? '' : 'wave_test'}>
            <section id="result">
              <div className="title">
                <h4>推薦酒款</h4>
              </div>
              {/* <div className="sakes">{sake}</div> */}
              <div className="sakes">
                <Finally
                  taste={taste}
                  temp={temp}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  gift={gift}
                />
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
                <img
                  className="gray_wave"
                  src="/SakeGuide/gray-wave.svg"
                  alt=""
                />
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  )
}

export default SakeGuide
