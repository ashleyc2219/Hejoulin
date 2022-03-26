import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './../styles/Home/Home.css'
import TitleDecoPath from './../compenents/Home/TitleDecoPath'

import Footer from './../compenents/Shared/Footer'

const Home = () => {
  const [detail, setDetail] = useState([])
  const url = 'http://localhost:3001/api/news'

  const fetchData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    const pro = data
    setDetail(pro)
  }
  const homeNewslist = detail.map((v, i) => {
    return (
      <React.Fragment key={i}>
        <div className=" news-item">
          <div className="news-item-date">
            <p>{v.create_at.slice(0, 10)}</p>
          </div>
          <div className="news-item-title">
            <p>{v.title}</p>
          </div>
        </div>
      </React.Fragment>
    )
  })

  //生命週期 網頁載入完
  useEffect(() => {
    window.scrollTo(0, 0)
    fetchData()
  }, [])

  //顯示頁面
  return (
    <>
      <div className="home">
        <div className="homeimg"></div>

        <div className="container news-box ">
          <div className="news-img">
            <img src="Home/img/H-01.jpg" />
          </div>
          <div className="news-content">
            {/* 插入元件 */}
            {homeNewslist}
            <div className=" news-item">
              <div className="news-item-date">
                <p>2022.04.23</p>
              </div>
              <div className="news-item-title">
                <p>2022年四月份月配酒發表！</p>
              </div>
            </div>
          </div>
          <div className="home-title">
            <h3>最新消息</h3>
            {/* 文字裝飾 */}
            <svg
              className="sec"
              width="28"
              height="124"
              viewBox="0 0 42 186"
              xmlns="http://www.w3.org/2000/svg"
            >
              <TitleDecoPath />
            </svg>
          </div>
        </div>
        <div className="container">
          <Link to="/news/list">
            <button className="btn btn-primary">最新消息</button>
          </Link>
        </div>

        <div className="container intro-box">
          <div className="home-title">
            <h3>清酒製成</h3>
            {/* 文字裝飾 */}
            <svg
              className="suc"
              width="28"
              height="124"
              viewBox="0 0 42 186"
              xmlns="http://www.w3.org/2000/svg"
            >
              <TitleDecoPath />
            </svg>
          </div>
          <div className="intro-img"></div>
        </div>

        <div className="container">
          <Link to="/sake-intro">
            <button className="btn btn-primary">認識清酒</button>
          </Link>
        </div>

        <div className="sub-box">
          {/* 訂閱區滿版圖片 */}
          <div className="sub-img">
            <div className="sub-img-box">
              <img src="Home/img/H-02.jpg" />
            </div>
          </div>

          {/* 訂閱區文字內容 */}
          <div className="container sub-word ">
            <div className="sub-word-content-1"></div>
            <div className="sub-word-content m-auto">
              <p>每月配送到你家</p>
              <p className="mt-3">
                訂閱半年享<b>9</b>折
              </p>
              <p className="mt-5">
                訂閱一年享<b>8</b>折
              </p>
            </div>
            <div className="home-title">
              <h3>訂閱清酒</h3>
              {/* 文字裝飾 */}
              <svg
                className="inf"
                width="28"
                height="124"
                viewBox="0 0 42 186"
                xmlns="http://www.w3.org/2000/svg"
              >
                <TitleDecoPath />
              </svg>
            </div>
          </div>
        </div>

        <div className="container">
          <Link to="/sub/plan">
            <button className="btn btn-primary">訂閱清酒</button>
          </Link>
        </div>
        <div className="container">
          <Link to="/news/detail/1">
            <button className="btn btn-secondary">警示頁光箱測試</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
