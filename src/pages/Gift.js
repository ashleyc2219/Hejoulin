import React, { useState, useEffect } from 'react'
import './../styles/Gift/Gift.scss'

//元件
import Sidebar from '../compenents/Gift/Sidebar'
import StepBar from '../compenents/Gift/StepBar'
import SakeItems from '../compenents/Gift/SakeItems'
// import Color01 from '../compenents/Gift/Color01'
// import Color02 from '../compenents/Gift/Color02'
import Color03 from '../compenents/Gift/Color03'
import Detail from '../compenents/Gift/Detail'

// switch

const Gift = (props) => {
  const stepContent = ['選擇禮盒種類', '選擇清酒', '選擇禮盒顏色', '禮盒數量']

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
  const [count, setCount] = useState([]) //購買酒數量
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
  const [name, setName] = useState('')
  const [name2, setName2] = useState('')
  const [price, setPrice] = useState(0)
  const [price2, setPrice2] = useState(0)
  const [conName, setConName] = useState('')

  const [id, setId] = useState('') //決定光箱的id
  const [modalShow, setModalShow] = useState(false) //酒詳細資訊光箱
  const showHandle = () => {
    setModalShow(true)
  }
  const closeHandle = () => {
    setModalShow(false)
  }



  const url01 = 'http://localhost:3001/api/gift' //禮盒顏色
  let url02 = `http://localhost:3001/api/product_gift`
  //不同禮盒的酒類資訊
  const url03 = 'http://localhost:3001/api/gift_container' //酒器照片

  useEffect(() => {
    //載入資料
    window.scrollTo(0, 0)

    const fetchSake = async () => {
      const res = await fetch(url02 + '?gift=' + kind)
      const data = await res.json()
      setSake(data)
      giftId()
      console.log(data)
    }

    const fetchContainer = async () => {
      const res = await fetch(url03)
      const data = await res.json()
      const pro = data
      setContainer(pro)
    }

    fetchSake()
    fetchContainer()
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
            <StepBar content={stepContent} />
            <main>
              <section id="gift_kind">
                <div className="gift_kind">
                  <div
                    className="kind"
                    onClick={() => {
                      setKind(1)
                    }}
                  >
                    <img src="/Gift/1.png" alt="" />
                    <span className="title">1入禮盒</span>
                  </div>
                  <div
                    className="kind"
                    onClick={() => {
                      setKind(2)
                    }}
                  >
                    <img src="/Gift/2.png" alt="" />
                    <span className="title">2入禮盒</span>
                  </div>
                  <div
                    className="kind"
                    onClick={() => {
                      setKind(3)
                    }}
                  >
                    <img src="/Gift/3.png" alt="" />
                    <span className="title">1+1 禮盒</span>
                  </div>
                </div>
              </section>
              <section id="gift_sake">
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
                    modalShow={modalShow}
                    showHandle={showHandle}
                    closeHandle={closeHandle}
                    sake={sake}
                    id={id}
                    setId={setId}
                    sakeId={sakeId}
                    setSakeId={setSakeId}
                    sakeId2={sakeId2}
                    setSakeId2={setSakeId2}
                    name={name}
                    setName={setName}
                    name2={name2}
                    setName2={setName2}
                    price={price}
                    setPrice={setPrice}
                    price2={price2}
                    setPrice2={setPrice2}
                    conName={conName}
                    setConName={setConName}
                    count={count}
                    setCount={setCount}
                  />
                </div>
              </section>
              <section id="gift_color">
                <div className="header">
                  <img src="/Gift/bgmark.svg" alt="" className="bgmark" />
                </div>
                <h4>請選擇禮盒顏色</h4>
                {/* {kind === 1 ? (
                  <Color01
                    kind={kind}
                    sakeId={sakeId}
                    comfirmColor={comfirmColor}
                    setComfirmColor={setComfirmColor}
                  />
                ) : (
                  ''
                )} */}
                {/* {kind === 2 ? (
                  <Color02
                    kind={kind}
                    sakeId={sakeId}
                    sakeId2={sakeId2}
                    comfirmColor={comfirmColor}
                    setComfirmColor={setComfirmColor}
                  />
                ) : (
                  ''
                )} */}
                {kind === 3 ? (
                  <Color03
                    kind={kind}
                    sakeId={sakeId}
                    comfirmColor={comfirmColor}
                    setComfirmColor={setComfirmColor}
                  />
                ) : (
                  ''
                )}
              </section>
              <section id="gift_detail">
                <div className="header">
                  <img src="/Gift/bgmark.svg" alt="" className="bgmark" />
                </div>
                <h4>請確認禮盒明細數量</h4>
                <div className="detail">
                  <img src="/Gift/3.png" alt="final" className="final" />
                  <div className="content">
                    <h5 className="title">禮盒明細</h5>
                    <div className="sheet grid">
                      {/* gift sake */}
                      <p className="text color">{name}</p>
                      <p className="quality color">1瓶</p>
                      <div className="price color">{price}</div>

                      <Detail
                        name2={name2}
                        price2={price2}
                        conName={conName}
                        kind={kind}
                      /> 

                      {/* space */}
                      <p></p>
                      <p></p>
                      <div></div>
                      {/* gift color */}
                      <p className="text color">禮盒顏色</p>
                      <p className="quality color">{changeText()}</p>
                      <div className="price color">200</div>
                      {/* gift total */}
                      <p className="text_total total">總價</p>
                      <p className="quality total">1盒</p>
                      <div className="price total">2780</div>
                    </div>
                    <h5 className="laststep">禮盒數量</h5>
                    <div className="add-minus row">
                      <div className="minus">
                        <img src="/Gift/minus-circle.svg" alt="" />
                      </div>
                      <div className="number">1</div>
                      <div className="plus">
                        <img src="/ProductList/plus-circle.svg" alt="" />
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm gift_cart">
                      <img src="/Gift/cart.svg" alt="" className="cart" />
                      加入購物車
                    </button>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gift
