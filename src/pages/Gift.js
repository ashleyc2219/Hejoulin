import React, { useState, useEffect, useRef } from 'react'
import './../styles/Gift/Gift.scss'

//元件
import Spinner from '../compenents/Shared/Spinner'
import Sidebar from '../compenents/Gift/Sidebar'
import StepBar from '../compenents/Gift/StepBar'
import SakeItems from '../compenents/Gift/SakeItems'
import Color01 from '../compenents/Gift/Color01'
import Color02 from '../compenents/Gift/Color02'
import Color03 from '../compenents/Gift/Color03'
import Detail from '../compenents/Gift/Detail'
import AddCart from '../compenents/Gift/AddCart'
import AlertLoginModal from '../compenents/Shared/AlertLoginModal'

const Gift = (props) => {
  const {
    setCartCount,
    setAddcartmodal,
    sidebar,
    setSidebar,
    loginModal,
    setLoginModal,
  } = props
  const [loading, setLoading] = useState(true)
  const [block01, setBlock01] = useState(false)
  const [block02, setBlock02] = useState(false)
  const [block03, setBlock03] = useState(false)

  const stepContent = ['選擇禮盒種類', '選擇清酒', '選擇禮盒顏色', '禮盒數量']
  const [step, setStep] = useState('one')

  const [kind, setKind] = useState(1) //決定禮盒種類
  const [sake, setSake] = useState([]) //接酒的資料
  const [container, setContainer] = useState([]) //接酒氣的資料
  const [color, setColor] = useState([]) //接禮盒顏色
  const [boxImgColor, setBoxImgColor] = useState(2) //單一種類禮盒的不同顏色照片
  const giftId = () => {
    if (kind === 1) {
      setBoxImgColor(2)
    } else if (kind === 2) {
      setBoxImgColor(3)
    } else if (kind === 3) {
      setBoxImgColor(4)
    }
  }
  const [sakeId, setSakeId] = useState('') //購買酒的id
  const [sakeId2, setSakeId2] = useState('') //2入的第2個id
  const [comfirmColor, setComfirmColor] = useState('') //確定顏色
  const changeText = () => {
    if (comfirmColor === 'black') {
      return '曜岩黑'
    } else if (comfirmColor === 'white') {
      return '英石白'
    } else if (comfirmColor === 'gold') {
      return '流沙金'
    }
  }
  const [img, setImg] = useState('')
  const [img2, setImg2] = useState('')
  const [name, setName] = useState('')
  const [name2, setName2] = useState('')
  const [price, setPrice] = useState(0)
  const [price2, setPrice2] = useState(0)
  const [conShadow, setConShadow] = useState('')
  const [currentId, setCurrentId] = useState('')
  const [currentCon, setCurrentCon] = useState('')
  const [currentImg, setCurrentImg] = useState('')
  const [currentName, setCurrentName] = useState('')
  const [currentPrice, setCurrentPrice] = useState('')

  const [quality, setQuality] = useState(1) //明細中購買禮盒數量
  const add = () => {
    if (quality < 20) {
      setQuality(quality + 1)
    }
  }
  const remove = () => {
    if (quality > 1) {
      setQuality(quality - 1)
    }
  }

  const [id, setId] = useState('') //決定光箱的id
  const [modalShow, setModalShow] = useState(false) //酒詳細資訊光箱
  const showHandle = () => {
    setModalShow(true)
  }
  const closeHandle = () => {
    setModalShow(false)
  }
  const value = useRef(0)
  useEffect(() => {
    if (value.current === 1 && !sakeId && !sakeId2) {
      setSakeId(currentId)
      setName(currentName)
      setPrice(currentPrice)
      setImg(currentImg)
    } else if (value.current === 2 && sakeId && !sakeId2) {
      setSakeId2(currentId)
      setName2(currentName)
      setPrice2(currentPrice)
      setImg2(currentImg)
    } else if (value.current === 2 && !sakeId && sakeId2) {
      setSakeId(currentId)
      setName(currentName)
      setPrice(currentPrice)
      setImg(currentImg)
    }

    if (value.current === 2) {
      setStep('three')
      setBlock02(true)
      setTimeout(() => {
        window.scroll({
          top: 2.3 * 714,
          left: 0,
          behavior: 'smooth',
        })
      }, 500)
    }
  }, [value.current])

  const reset = () => {
    setSakeId('')
    setName('')
    setPrice('')
    setImg('')
    setCurrentCon('')
    setConShadow('')
    setSakeId2('')
    setName2('')
    setPrice2('')
    setImg2('')
    setQuality(1)
    value.current = 0
  }

  const url01 = 'http://localhost:3001/api/gift' //禮盒顏色
  let url02 = `http://localhost:3001/api/product_gift`
  //不同禮盒的酒類資訊

  useEffect(() => {
    //載入資料
    window.scrollTo(0, 0)

    const fetchSake = async () => {
      const res = await fetch(url02 + '?gift=' + kind)
      const data = await res.json()
      setSake(data)
      giftId()
    }
    fetchSake()
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [kind])

  // 一種禮盒顏色圖片
  useEffect(() => {
    const fetchGift = async () => {
      const res = await fetch(url01 + '?gift_id=' + boxImgColor)
      const data = await res.json()
      const pro = data
      setColor(pro)
    }
    fetchGift()
  }, [boxImgColor])

  return (
    <>
      {loginModal ? (
        <AlertLoginModal
          setSidebar={setSidebar}
          setLoginModal={setLoginModal}
        />
      ) : (
        ''
      )}
      <div className="Gift">
        <div className="gift_container">
          {/* background-patten */}
          <div className="patten">
            <img src="/Gift/bgelement.svg" alt="" className="bgelement01" />
            <img src="/Gift/bgelement.svg" alt="" className="bgelement02" />
            <img src="/Gift/bgelement.svg" alt="" className="bgelement03" />
            <img src="/Gift/bgelement.svg" alt="" className="bgelement04" />
          </div>
          <Sidebar />
          {/*內容*/}

          <div className="all">
            <StepBar content={stepContent} step={step} />
            {loading ? (
              <Spinner />
            ) : (
              <main>
                <section id="gift_kind">
                  <div className="gift_kind">
                    <div
                      className="kind"
                      onClick={() => {
                        setKind(1)
                        setStep('two')
                        reset()
                        setBlock01(true)
                        setTimeout(() => {
                          window.scroll({
                            top: 739,
                            left: 0,
                            behavior: 'smooth',
                          })
                        }, 500)
                      }}
                    >
                      <img src="/Gift/1.png" alt="" />
                      <span className="title">1入禮盒</span>
                    </div>
                    <div
                      className="kind"
                      onClick={() => {
                        setKind(2)
                        setStep('two')
                        reset()
                        setBlock01(true)
                        setTimeout(() => {
                          window.scroll({
                            top: 739,
                            left: 0,
                            behavior: 'smooth',
                          })
                        }, 500)
                      }}
                    >
                      <img src="/Gift/2.png" alt="" />
                      <span className="title">2入禮盒</span>
                    </div>
                    <div
                      className="kind"
                      onClick={() => {
                        setKind(3)
                        setStep('two')
                        reset()
                        setBlock01(true)
                        setTimeout(() => {
                          window.scroll({
                            top: 739,
                            left: 0,
                            behavior: 'smooth',
                          })
                        }, 500)
                      }}
                    >
                      <img src="/Gift/3.png" alt="" />
                      <span className="title">1+1 禮盒</span>
                    </div>
                  </div>
                </section>
                <section id="gift_sake" className={`${block01 ? '' : 'login'}`}>
                  <div className="header">
                    <img src="/Gift/bgmark.svg" alt="" className="bgmark" />
                  </div>
                  {kind === 2 ? (
                    <h4>請選擇 同一瓶 或 二瓶清酒商品</h4>
                  ) : (
                    <h4>請選擇一瓶清酒商品</h4>
                  )}
                  <div className="grid gift_grid">
                    <SakeItems
                      container={container}
                      setContainer={setContainer}
                      modalShow={modalShow}
                      showHandle={showHandle}
                      closeHandle={closeHandle}
                      kind={kind}
                      sake={sake}
                      id={id}
                      setId={setId}
                      sakeId={sakeId}
                      sakeId2={sakeId2}
                      conShadow={conShadow}
                      setConShadow={setConShadow}
                      value={value}
                      currentId={currentId}
                      setCurrentId={setCurrentId}
                      currentCon={currentCon}
                      setCurrentCon={setCurrentCon}
                      currentImg={currentImg}
                      setCurrentImg={setCurrentImg}
                      currentName={currentName}
                      setCurrentName={setCurrentName}
                      currentPrice={currentPrice}
                      setCurrentPrice={setCurrentPrice}
                      setStep={setStep}
                      setSakeId2={setSakeId2}
                      setName2={setName2}
                      setPrice2={setPrice2}
                      setImg2={setImg2}
                      setSakeId={setSakeId}
                      setName={setName}
                      setPrice={setPrice}
                      setImg={setImg}
                      setBlock02={setBlock02}
                      setLoginModal={setLoginModal}
                    />
                  </div>
                </section>
                <section
                  id="gift_color"
                  className={`${block02 ? '' : 'login'}`}
                >
                  <div className="header">
                    <img src="/Gift/bgmark.svg" alt="" className="bgmark" />
                  </div>
                  <h4>請選擇禮盒顏色</h4>
                  {kind === 1 ? (
                    <Color01
                      kind={kind}
                      sakeId={sakeId}
                      img={img}
                      comfirmColor={comfirmColor}
                      setComfirmColor={setComfirmColor}
                      step={step}
                      setStep={setStep}
                      setBlock03={setBlock03}
                    />
                  ) : (
                    ''
                  )}
                  {kind === 2 ? (
                    <Color02
                      kind={kind}
                      sakeId={sakeId}
                      sakeId2={sakeId2}
                      img={img}
                      img2={img2}
                      comfirmColor={comfirmColor}
                      setComfirmColor={setComfirmColor}
                      step={step}
                      setStep={setStep}
                      setBlock03={setBlock03}
                    />
                  ) : (
                    ''
                  )}
                  {kind === 3 ? (
                    <Color03
                      kind={kind}
                      sakeId={sakeId}
                      img={img}
                      conShadow={conShadow}
                      comfirmColor={comfirmColor}
                      setComfirmColor={setComfirmColor}
                      step={step}
                      setStep={setStep}
                      setBlock03={setBlock03}
                    />
                  ) : (
                    ''
                  )}
                </section>
                <section
                  id="gift_detail"
                  className={`${block03 ? '' : 'login'}`}
                >
                  <div className="header">
                    <img src="/Gift/bgmark.svg" alt="" className="bgmark" />
                  </div>
                  <h4>請確認禮盒明細數量</h4>
                  <div className="detail">
                    <div className="final">
                      {kind === 1 && (
                        <img
                          src={'/Gift/' + comfirmColor + '-' + kind + '.png'}
                          alt="final"
                          className="final-box1"
                        />
                      )}
                      {kind > 1 && (
                        <img
                          src={'/Gift/' + comfirmColor + '-' + kind + '.png'}
                          alt="final"
                          className="final-box2"
                        />
                      )}
                      {kind === 1 && (
                        <img
                          src={
                            img
                              ? 'http://localhost:3001/images/pro_img/' + img
                              : ''
                          }
                          alt="final"
                          className="final-sake1"
                        />
                      )}
                      {kind === 2 && (
                        <>
                          <img
                            src={
                              img
                                ? 'http://localhost:3001/images/pro_img/' + img
                                : ''
                            }
                            alt="final"
                            className="final-sake2-1"
                          />
                          <img
                            src={
                              img2
                                ? 'http://localhost:3001/images/pro_img/' + img2
                                : ''
                            }
                            alt="final"
                            className="final-sake2"
                          />
                        </>
                      )}
                      {kind === 3 && (
                        <>
                          <img
                            src={
                              img
                                ? 'http://localhost:3001/images/pro_img/' + img
                                : ''
                            }
                            alt="final"
                            className="final-sake3-1"
                          />
                          <img
                            src={
                              conShadow
                                ? 'http://localhost:3001/images/con_img/' +
                                  conShadow
                                : ''
                            }
                            alt="final"
                            className="final-con"
                          />
                        </>
                      )}
                    </div>
                    <div className="content">
                      <h5 className="title">禮盒明細</h5>
                      <div className="sheet grid">
                        <p className="text color">{name}</p>
                        <p className="quality color">{quality}瓶</p>
                        <div className="price color">{price * quality}</div>
                        <>
                          {kind > 1 && (
                            <Detail
                              name2={name2}
                              price2={price2}
                              currentCon={currentCon}
                              kind={kind}
                              quality={quality}
                            />
                          )}
                        </>
                        <p></p>
                        <p></p>
                        <div></div>
                        <p className="text color">禮盒顏色</p>
                        <p className="quality color">
                          {changeText(comfirmColor)}
                        </p>
                        <div className="price color">{200 * quality}</div>
                        <p className="text_total total">總價</p>
                        <p className="quality total">{quality}盒</p>
                        <div className="price total">
                          {kind === 1 && (price + 200) * quality}
                          {kind === 2 && (price + price2 + 200) * quality}
                          {kind === 3 && (price + 800) * quality}
                        </div>
                      </div>
                      <h5 className="laststep">禮盒數量</h5>
                      <div className="add-minus row">
                        <div className="minus" onClick={remove}>
                          <img src="/Gift/minus-circle.svg" alt="" />
                        </div>
                        <div className="number">{quality}</div>
                        <div className="plus" onClick={add}>
                          <img src="/ProductList/plus-circle.svg" alt="" />
                        </div>
                      </div>
                      <AddCart
                        quality={quality}
                        kind={kind}
                        comfirmColor={comfirmColor}
                        sakeId={sakeId}
                        sakeId2={sakeId2}
                        setCartCount={setCartCount}
                        setAddcartmodal={setAddcartmodal}
                        sidebar={sidebar}
                        setSidebar={setSidebar}
                        setLoginModal={setLoginModal}
                      />
                    </div>
                  </div>
                </section>
              </main>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Gift
