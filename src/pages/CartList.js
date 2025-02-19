import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/CartList/CartList.scss'
// 連動下拉選單用的資料
import { townships } from './../data/cart-list-select'
import ProgressBar from '../compenents/Cart/ProgressBar'
import ListTableSake from '../compenents/Cart/ListTableSake'
import ListTableGift from '../compenents/Cart/ListTableGift'
import ListSelection from '../compenents/Cart/ListSelection'
import EmptyCart from '../compenents/Cart/EmptyCart'
import Spinner from '../compenents/Shared/Spinner'
import FetchMemberId from '../compenents/Member/FetchMemberId'
import AOS from 'aos'
import 'aos/dist/aos.css'

const CartList = (props) => {
  const { setCartSummary, setSidebar } = props
  const [spin, setSpin] = useState(true)
  const stepContent = ['購物車', '填寫資訊', '訂單成立']
  const [sakeIncart, setSakeIncart] = useState([])
  const [giftIncart, setGiftIncart] = useState([])
  const [sakeTotal, setSakeTotal] = useState(0)
  const [giftTotal, setGiftTotal] = useState(0)
  const [allTotal, setAllTotal] = useState(0)
  const [discountCode, setDiscountCode] = useState('no code')
  const [discountPerscent, setDiscountPerscent] = useState(1)
  const [discountMsg, setDiscountMsg] = useState(0)
  const [shipFee, setShipFee] = useState(0)
  const [shipMethod, setShipMethod] = useState(-1)
  const [island, setIsland] = useState(-1)
  const [township, setTownship] = useState(-1)
  // 表單檢查
  const [islandTownshipPass, setIslandTownshipPass] = useState(false)
  const [shipMethodPass, setShipMethodPass] = useState(false)
  const [passThrough, setPassThrough] = useState(false)
  // 檢查表單後 變紅色
  const [oneWarning, setOneWarning] = useState(true)
  const [twoWarning, setTwoWarning] = useState(true)
  // 檢查是否登入
  const [memberId, setMemberId] = useState('')
  // 動畫
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  // 確定是否有會員登入---
  useEffect(() => {
    ;(async () => {
      let member_id = await FetchMemberId(localStorage.getItem('token'))
      setMemberId(member_id)
      // console.log('member_id: ', member_id)
    })()
  }, [])

  // 從後端fetch 商品、禮盒的資料---
  // 相依狀態memberId
  useEffect(() => {
    let a = true
    window.scrollTo(0, 0)
    setTimeout(() => {
      if (a) {
        setSpin(false)
      }
    }, 1500)
    // 確認有登入後再去fetch清酒、禮盒資料
    ;(async () => {
      if (memberId !== '' && memberId !== 'noMemberId') {
        // fetch 清酒資料
        ;(async () => {
          const r1 = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/api/cart-list/sake?member_id=${memberId}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          const obj = await r1.json()
          // console.log('清酒資料', obj)

          if (a) {
            setSakeIncart(obj)
          }
          // 計算清酒總額
          function initialSakeTotal(obj) {
            let total = 0
            for (const sake of obj) {
              total += sake.cart_quantity * sake.pro_price
            }
            // console.log(total)
            return total
          }
          if (a) {
            setSakeTotal(initialSakeTotal(obj))
          }
        })()
        // 確認有登入後再去fetch禮盒資料
        ;(async () => {
          const rGift = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/api/cart-list/gift?member_id=${memberId}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          const obj = await rGift.json()
          // console.log('禮盒資料', obj)

          // console.log('obj', obj)
          if (a) {
            setGiftIncart(obj)
          }
          // 禮盒總額
          function initialGiftTotal(obj) {
            let total = 0
            for (const gift of obj) {
              let price = 0
              if (gift.gift_id === 3) {
                price = gift.pro_one.pro_price + gift.pro_two.pro_price + 200
              }
              if (gift.gift_id === 2) {
                price = gift.pro_price + 200
              }
              if (gift.gift_id === 4) {
                price = gift.pro_price + 200 + 600
              }
              total += price * gift.cart_quantity
              // console.log(total)
            }
            return total
          }
          if (a) {
            setGiftTotal(initialGiftTotal(obj))
          }
        })()
      }
    })()

    return () => {
      a = false
    }
  }, [memberId])
  // 相依狀態會改變總額，所以要重新計算
  useEffect(() => {
    let total = Math.round((sakeTotal + giftTotal) * discountPerscent + shipFee)
    // 滿千免運
    if (sakeTotal + giftTotal < 1000 && shipMethod !== 'pick') {
      setShipFee(60)
    } else {
      setShipFee(0)
    }
    setAllTotal(total)
  }, [sakeTotal, giftTotal, discountPerscent, shipFee, shipMethod, sakeIncart])

  // 折扣碼 按 enter 即可輸入---
  const enter = (e) => {
    if (e.key === 'Enter') {
      fetchDiscountCode(discountCode)
    }
  }
  // fetch折扣碼 查看是否相符
  async function fetchDiscountCode(code) {
    let data = {
      discountCode: code,
    }
    const r1 = await fetch(`${process.env.REACT_APP_BACKEND_URL}}/api/cart-list/discount`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const obj = await r1.json()
    // 若相符就顯示折扣數
    if (obj.length) {
      const result = obj[0]
      let perscentString = result.perscentString
      let msg = result.discount_info + ' ' + perscentString + '折'
      setDiscountMsg(msg)
      setDiscountPerscent(result.perscent)
      // 不相符就顯示折扣碼無效
    } else {
      setDiscountMsg('折扣碼無效')
      setDiscountCode('')
      setDiscountPerscent(1)
    }
  }
  // 渲染頁面 清酒商品、禮盒 元件---
  const renderSakeItems = (sakeIncart) => {
    if (sakeIncart.length) {
      return (
        <>
          <div className="table-head sake-table-head">
            <span className="title-del">刪除</span>
            <span className="title-product">商品</span>
            <span className="title-mark">客製化酒標</span>
            <span className="title-quantity">數量</span>
            <span className="title-subtotal">小計</span>
          </div>
          {sakeIncart.map((sake, i) => {
            return (
              <ListTableSake
                key={i}
                index={i}
                sakeIncart={sakeIncart}
                setSakeIncart={setSakeIncart}
                sakeInfo={sake}
                memberId={memberId}
                sakeTotal={sakeTotal}
                setSakeTotal={setSakeTotal}
              />
            )
          })}
        </>
      )
    } else {
      return ''
    }
  }
  const renderGiftItems = (giftIncart) => {
    if (giftIncart.length) {
      return (
        <>
          <div className="table-head gift-table-head">
            <span className="title-del">刪除</span>
            <span className="title-gift">禮盒</span>
            <span className="title-gift-detail">內容物</span>
            <span className="title-color">顏色</span>
            <span className="title-quantity">數量</span>
            <span className="title-subtotal">小計</span>
          </div>
          {giftIncart.map((gift, i) => {
            return (
              <ListTableGift
                key={i}
                giftIncart={giftIncart}
                setGiftIncart={setGiftIncart}
                giftInfo={gift}
                memberId={memberId}
                giftTotal={giftTotal}
                setGiftTotal={setGiftTotal}
              />
            )
          })}
        </>
      )
    } else {
      return ''
    }
  }

  // 進行表單檢查
  useEffect(() => {
    function formCheck() {
      if (island !== -1 && township !== -1 && township !== undefined) {
        setIslandTownshipPass(true)
        // console.log('setIslandTownshipPass(true)')
      } else {
        setIslandTownshipPass(false)
      }
      if (shipMethod !== -1) {
        setShipMethodPass(true)
        // console.log('setShipMethodPass(true)')
      } else {
        setShipMethodPass(false)
      }
      if (islandTownshipPass === true && shipMethodPass === true) {
        setPassThrough(true)
        // console.log('setPassThrough(true)')
      } else {
        setPassThrough(false)
      }
    }
    formCheck()
  }, [island, township, shipMethod, islandTownshipPass, shipMethodPass])
  function warningRed() {
    if (islandTownshipPass === false) {
      setOneWarning(false)
    } else {
      setOneWarning(true)
    }
    if (shipMethodPass === false) {
      setTwoWarning(false)
    } else {
      setTwoWarning(true)
    }
  }

  function CartSummaryData() {
    let data = {}
    if (island !== -1 && township !== -1 && township !== undefined) {
      data = {
        district: townships[island][township],
        method: shipMethod,
        subtotal: sakeTotal + giftTotal,
        discountCode: discountCode === 'no code' ? '' : discountCode,
        shipFee: shipFee,
        allTotal: allTotal,
      }
      setCartSummary(data)
      // console.log('setCartSummary')
    }
  }
  // 兩個三元判斷
  // 先1秒的spinner
  // 再判斷有沒有商品在購物車裡
  return (
    <>
      {spin ? (
        <Spinner />
      ) : sakeIncart.length === 0 && giftIncart.length === 0 ? (
        <EmptyCart memberId={memberId} setSidebar={setSidebar} />
      ) : (
        <>
          <div className="CartList">
            <div className="CartList-container">
              <ProgressBar step="one" content={stepContent} />
              <div className="cart-list">
                {/* {console.log('list: ', sakeIncart)} */}
                {renderSakeItems(sakeIncart)}
                {renderGiftItems(giftIncart)}
              </div>
              <div className="cart-form">
                <div className="form-left">
                  <div className="shipment">
                    <ListSelection
                      shipMethod={shipMethod}
                      setShipMethod={setShipMethod}
                      island={island}
                      setIsland={setIsland}
                      township={township}
                      setTownship={setTownship}
                      oneWarning={oneWarning}
                      twoWarning={twoWarning}
                    />
                  </div>

                  <div className="discount">
                    <h5>折扣碼</h5>
                    <div className="discount-container">
                      <div className="discount-input">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="輸入折扣碼"
                          onChange={(e) => {
                            setDiscountCode(e.target.value)
                          }}
                          onKeyPress={enter}
                        />
                        {discountMsg !== 0 ? (
                          <div className="form-text">{discountMsg}</div>
                        ) : (
                          <div className="form-text"></div>
                        )}
                      </div>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          fetchDiscountCode(discountCode)
                        }}
                      >
                        使用折扣碼
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-right">
                  <div className="order-summary">
                    <h5>訂單資訊</h5>
                    <div className="order-summary-table">
                      <div className="table-row">
                        <p>小計</p>
                        <p className="dollar-sign">{sakeTotal + giftTotal}</p>
                      </div>
                      <div className="table-row">
                        <p>折扣碼</p>
                        <p>{discountPerscent !== 1 ? discountMsg : ''}</p>
                      </div>
                      <div className="table-row">
                        <p>運費</p>
                        <p className="dollar-sign">{shipFee}</p>
                      </div>
                      <div className="table-row">
                        <p>總計</p>
                        <p className="dollar-sign total">{allTotal}</p>
                      </div>
                    </div>
                  </div>
                  <div className="buttons">
                    <Link to="/product/list">
                      <button className="btn btn-primary">繼續購物</button>
                    </Link>

                    {passThrough === true ? (
                      <Link to="/cart/info">
                        <button
                          className="btn btn-secondary"
                          onClick={CartSummaryData}
                        >
                          結帳
                        </button>
                      </Link>
                    ) : (
                      <button
                        className="btn btn-secondary"
                        onClick={warningRed}
                      >
                        結帳
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default CartList
