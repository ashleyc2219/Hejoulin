import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './../styles/Mark/MarkIntro.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Anime from '../compenents/Mark/Anime'

const MarkIntro = () => {
  const history = useHistory()
  const goToEdit = () => {
    if (!localStorage.getItem('token')) {
      setModalShow(true)
    } else {
      history.push('/mark/edit')
    }
  }

  //to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // use aos
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  const [modalShow, setModalShow] = useState(false)
  const openModal = () => {
    setModalShow((prev) => !prev)
  }
  return (
    <>
      <div className="MarkIntro">
        <div className="mark_container">
          <main>
            <div className="mobile">
              <h2 className="mark_title">世界上只專屬於你的酒</h2>
              <h2 className="mark_title title_bottom">從此刻誕生</h2>
            </div>
            <div className="anime">
              <img
                src="/Mark/1.png"
                alt=""
                className="fake"
                data-aos="fade-up"
              ></img>
              <Anime />
            </div>
            <div className="mark_intro" data-aos="fade-up" data-aos-delay="300">
              <h2 className="mark_title">世界上只專屬於你的酒</h2>
              <h2 className="mark_title title_bottom">從此刻誕生</h2>
              <p className="mark_content">
                進入會員我的編輯中，可以製作無限數量的酒標，並能選擇是否要儲存於會員–我的酒標中，同時也能下載圖片至電腦或手機中，分享至你的世界。
              </p>
              <button
                className="btn btn-primary edit"
                onClick={() => goToEdit()}
              >
                我的編輯
              </button>
            </div>
          </main>
        </div>
      </div>
      {modalShow && (
        <div className="DetailModal">
          <div className="comparepage">
            <div className="close-white" onClick={openModal}>
              <img src="/ProductList/close-white.svg" alt="" />
            </div>
            <div className="mobile-close" onClick={openModal}>
              <img src="/ProductList/close-black.svg" alt="" />
            </div>
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ width: '100%' }}
            >
              <p className="mt-5" style={{ color: '#7e8082' }}>
                若需客製化酒標請先登入。
              </p>
              <button
                className="btn btn-secondary mt-3 w-25 mb-5"
                onClick={() => {
                  setModalShow((prev) => !prev)
                }}
              >
                確認
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MarkIntro
