import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import SomeComponent from '../compenents/SomeComponent'
import './../styles/Home/Home.css'

import Footer from './../compenents/Shared/Footer'

const Home = () => {
  const [detail, setDetail] = useState([])
  const url = 'http://localhost:3000/api/news'

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

  return (
    <>
      <div className="home">
        <div className="homeimg"></div>

        <div className="container news-box ">
          <div className="news-img"></div>
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
          </div>
        </div>
        <div className="container">
          <button className="btn btn-primary">最新消息</button>
        </div>

        <div className="container intro-box">
          <div className="home-title">
            <h3>清酒製成</h3>
          </div>
          <div className="intro-img"></div>
        </div>

        <div className="container">
          <button className="btn btn-primary">認識清酒</button>
        </div>

        <div className="container sub-box">
          <div className="home-title">
            <h3>訂閱清酒</h3>
          </div>
        </div>

        <div className="container">
          <button className="btn btn-primary">訂閱清酒</button>
        </div>
      </div>

      <Footer />
      <div>
        <div className="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
        <Button variant="primary">Save Changes</Button>
        <SomeComponent />
      </div>
    </>
  )
}

export default Home
