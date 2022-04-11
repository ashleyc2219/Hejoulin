import React from 'react'
import './DetailModal.scss'
import { useEffect, useState } from 'react'

const DetailModal = (props) => {
  const { modalShow, setModalShow, id } = props
  console.log(id)

  const [detail, setDetail] = useState([])
  const url = 'http://localhost:3001/api/news?newsId=' + id

  const fetchData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    const pro = data
    setDetail(pro)
  }

  const newslistDetail = detail.map((v, i) => {
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
            <div className="news-item-content">
              <p>{v.content}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  })

  // 生命週期 網頁載入完
  useEffect(() => {
    // window.scrollTo(0, 0)
    fetchData()
  }, [])

  const openModal = () => {
    setModalShow((prev) => !prev)
  }
  return (
    <>
      <div className="DetailModal">
        <div className="comparepage">
          <div className="close-white" onClick={openModal}>
            <img src="/ProductList/close-white.svg" alt="" />
          </div>
          <div className="mobile-close" onClick={openModal}>
            <img src="/ProductList/close-black.svg" alt="" />
          </div>
          {newslistDetail}
          {/* <div className="news-item">
            <div className="news-item-pic">
              <div className="news-pic">
                <div className="news-item-pic-box">
                  <img src="/news/news-pic-01.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="news-item-word">
              <div className="news-item-date">
                <p>2022-01-04</p>
              </div>
              <div className="news-item-title">
                <h3>虎年最有「禮」，新年送禮限量折扣</h3>
              </div>
              <div className="news-item-content">
                <p>
                  又到了歲末年終表達心意的時節，從年節限定、華麗包裝、超值贈品，甚至還有箱購優惠，絕對能滿足...
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default DetailModal
