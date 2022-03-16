import React from 'react'
import './../styles/news/news.css'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import SomeComponent from '../compenents/SomeComponent'
import Header from '../compenents/Shared/Header'
import Footer from '../compenents/Shared/Footer'

const NewsList = () => {
  return (
    <>
      <Header />
      <div className="news">
        <div className="news-container">
          <div className="news-title">
            <h1>最新消息</h1>
          </div>
          <div className="news-item">
            <div className="news-item-word">
              <div className="news-item-date">2022-01-04</div>
              <div className="news-item-title">
                虎年最有「禮」，新年送禮限量折扣
              </div>
              <div className="news-item-content">
                又到了歲末年終表達心意的時節，從年節限定、華麗包裝、超值贈品，甚至還有箱購優惠，絕對能滿足...
              </div>
              <div className="news-item-link">
                <a href="#">了解詳情...</a>
              </div>
            </div>
            <div className="news-item pic">
              <div className="news-pic"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsList
