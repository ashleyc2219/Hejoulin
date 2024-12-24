import React from 'react'
import './../styles/News/News.css'
//接資料 這邊要用懂 跟react可同一行嗎？
import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import DetailModal from './../compenents/News/DetailModal.js'
import Spinner from '../compenents/Shared/Spinner'

const NewsList = () => {
  const [detail, setDetail] = useState([])
  const url = `${process.env.REACT_APP_BACKEND_URL}/api/news`

  const [spin, setSpin] = useState(true)

  const fetchData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    const pro = data
    setDetail(pro)
  }
  //光箱的設定
  const [modalShow, setModalShow] = useState(false)

  const [id, setId] = useState('')

  const openModal = () => {
    setModalShow((prev) => !prev)
  }

  const newslist = detail.map((v, i) => {
    return (
      <React.Fragment key={i}>
        <div className="news-item">
          <div className="news-item-pic">
            <div className="news-pic">
              <div className="news-item-pic-box">
                <img src={'/News/img/' + v.pics} alt="" />
              </div>
            </div>
          </div>
          <div className="news-item-word">
            <div className="news-item-date">
              <p>{v.create_at.slice(0, 10)}</p>
            </div>
            <div className="news-item-title">
              <h3>{v.title}</h3>
            </div>
            <div className="news-item-content mu-ellipsis">
              <p>{v.content}</p>
            </div>
            <div
              className="news-item-link"
              onClick={() => {
                setId(v.news_id)
                openModal()
              }}
            >
              <a href="#/">
                <p>了解詳情...</p>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  })

  //生命週期 網頁載入完
  useEffect(() => {
    let a = true
    window.scrollTo(0, 0)

    fetchData()

    setTimeout(() => {
      if (a) {
        setSpin(false)
      }
    }, 1000)
  }, [])



  return (
    <>
      <div className="news">
      {spin ? <Spinner /> :         <div className=" news-container container-sm">
          <div className="">
            <div className="news-title">
              <h1>最新消息</h1>
            </div>
            <div className="container"></div>
            {modalShow ? (
              <DetailModal
                modalShow={modalShow}
                setModalShow={setModalShow}
                id={id}
              />
            ) : (
              ''
            )}
            {/* 元件 */}
            {newslist}
          </div>
        </div>}

        
      </div>
    </>
  )
}

export default NewsList
