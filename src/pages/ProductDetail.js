import React, { useEffect, useState } from 'react'
import './../styles/ProductDetail/ProductDetail.scss'
import Sidebar from '../compenents/ProductList/Sidebar'
import CompareBlock from '../compenents/ProductList/CompareBlock'
import CompareModal from '../compenents/ProductList/CompareModal'
import { useParams } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Heart from '../compenents/ProductList/Heart'
import CompareBtn from '../compenents/ProductList/CompareBtn'
import MobileGuideButton from '../compenents/SakeGuide/MobileGuide'
import AddCartBtn from '../compenents/ProductList/AddCartBtn'
import Spinner from '../compenents/Shared/Spinner'
import AlertLoginModal from '../compenents/Shared/AlertLoginModal'

const ProductDetail = (props) => {
  const {
    compare,
    setCompare,
    setCartCount,
    setAddcartmodal,
    sidebar,
    setSidebar,
    loginModal,
    setLoginModal,
  } = props
  const { id } = useParams()
  const [detail, setDetail] = useState([])
  const [count, setCount] = useState(1)
  const [linkFav, setlinkFav] = useState(0)

  const [comparePro1, setComparePro1] = useState([])
  const [comparePro2, setComparePro2] = useState([])
  const [comparePro3, setComparePro3] = useState([])
  const [comparemodal, setComparemodel] = useState(false)
  const [reload, setReload] = useState(0)

  const [spin, setSpin] = useState(true)
  const [animate, setAnimate] = useState(false)

  const linkFavhandler = () => {
    setlinkFav(linkFav + 1)
  }

  const minus = () => {
    setAnimate(true)
    setTimeout(() => {
      setAnimate(false)
    }, 100)
    if (count > 1) {
      setCount(count - 1)
    }
  }
  const add = () => {
    setAnimate(true)
    setTimeout(() => {
      setAnimate(false)
    }, 100)
    if (count < 20) {
      setCount(count + 1)
    }
  }

  const url = `${process.env.REACT_APP_BACKEND_URL}/api/products-sake/item-detail?pro_id=` + id

  const productDetail = detail.map((v, i) => {
    return (
      <React.Fragment key={i}>
        {loginModal ? (
          <AlertLoginModal
            setSidebar={setSidebar}
            setLoginModal={setLoginModal}
          />
        ) : (
          ''
        )}
        <div className="product-wrap">
          <div className="product-img">
            <img
              src={`${process.env.REACT_APP_BACKEND_URL}/images/pro_img/` + v.pro_img}
              alt=""
            />
          </div>
          <div className="product-info">
            <div className="product-title">
              <div className="name">{v.pro_name}</div>
              <div className="tag-icon">
                <div className="brand-level">
                  <p className="brand">{v.pro_brand}</p>
                  <p className="level">{v.pro_level}</p>
                </div>
                <div className="like-compare">
                  <div className="like">
                    <Heart
                      id={v.pro_id}
                      linkFav={linkFav}
                      setLoginModal={setLoginModal}
                    />
                    <p onClick={linkFavhandler}>收藏</p>
                  </div>
                  <CompareBtn
                    id={v.pro_id}
                    compare={compare}
                    setCompare={setCompare}
                  />
                </div>
              </div>
            </div>
            <div className="product-price">
              {v.pro_gift === 0 ? (
                <div className="gift">不提供禮盒</div>
              ) : (
                <div className="gift active">
                  <Link to="/gift">製作禮盒</Link>
                </div>
              )}

              {v.pro_mark == 1 ? (
                <div className="product-mark">
                  <Link to="/mark/intro">製作客製化酒標</Link>
                  <img src="/ProductList/chevrons-right.svg" alt="" />
                </div>
              ) : (
                ''
              )}

              <div className="price">
                <span>$</span>
                {v.pro_price}
              </div>
            </div>
            <div className="add-cart">
              <div className="add-minus">
                <div onClick={minus} className="minus">
                  <img src="/ProductList/minus-circle.svg" alt="" />
                </div>
                <div className={animate ? 'number numberanimate' : 'number'}>
                  {count}
                </div>
                <div onClick={add} className="plus">
                  <img src="/ProductList/plus-circle.svg" alt="" />
                </div>
              </div>
              {/* <CartCount.Consumer>
                {(cartCount) => (
                  <button
                    onClick={() => {
                      addcart(cartCount, v.pro_id)
                    }}
                    className="btn-sm btn-primary btn"
                  >
                    <img src="/ProductList/cart-white.svg" alt="" />
                    加入購物車
                  </button>
                )}
              </CartCount.Consumer> */}
              <AddCartBtn
                id={v.pro_id}
                setCartCount={setCartCount}
                count={count}
                setAddcartmodal={setAddcartmodal}
                sidebar={sidebar}
                setSidebar={setSidebar}
                setLoginModal={setLoginModal}
              />
            </div>
            <div className="intro">
              <p>{v.pro_intro}</p>
            </div>
            <div className="bookmark">
              <input type="radio" name="detail" id="spec" defaultChecked />
              <label className="spec" htmlFor="spec">
                商品規格
              </label>
              <input type="radio" name="detail" id="tran" />
              <label className="tran" htmlFor="tran">
                貨運資訊
              </label>
              <div className="product-detail">
                <div className="detail-rice">
                  <div className="detail-img">
                    <img src="/ProductList/detail-rice.svg" alt="" />
                  </div>
                  <div className="text-spec">
                    <p>酒米：{v.rice}</p>
                    <p>精米步合度：{v.pro_essence}%</p>
                  </div>
                </div>
                <div className="detail-sake">
                  <div className="detail-img">
                    <img src="/ProductList/detail-sake.svg" alt="" />
                  </div>
                  <div className="text-spec">
                    <p>品牌：{v.pro_brand}</p>
                    <p>等級：{v.pro_level}</p>
                    <p>容量：{v.pro_capacity}ml</p>
                    <p>酒精度：{v.pro_alco}%</p>
                  </div>
                </div>
                <div className="detail-japan">
                  <div className="detail-img">
                    <img src="/ProductList/detail-japan.svg" alt="" />
                  </div>
                  <div className="text-spec">
                    <p>酒造：{v.pro_marker}</p>
                    <p>產地：{v.pro_loca}</p>
                  </div>
                </div>
                <div className="detail-cup">
                  <div className="detail-img">
                    <img src="/ProductList/detail-cup.svg" alt="" />
                  </div>
                  <div className="text-spec">
                    <p>口感：{v.pro_taste}</p>
                    <p>溫度：{v.pro_temp}</p>
                  </div>
                </div>
              </div>
              <div className="tran-detail">
                <p>
                  <b>運費：</b>
                </p>
                <p>
                  為保持清酒品質，禾酒林的所有商品皆以低溫宅配配送，若擔心運送過程造成破瓶，可選擇門市取貨。
                </p>
                <p>滿 NT$ 1000 可享免費低溫宅配</p>
                <p>NT$ 1000 以下 每單低溫宅配運費NT$60</p>
                <br />
                <p>
                  <b>出貨時間：</b>
                </p>
                <p>週一至週五（中午 12:00 前）：1 天發貨</p>
                <p>週一至週五（12:00 後）：選擇下單後 2 天</p>
                <p>週末（所有時間）：選擇訂單日期後 的下週一</p>
                <br />
                <p>
                  <b>退貨權益須知：</b>
                </p>
                <p>
                  請於到貨後立即檢查。若有瑕疵或因運送造成之包裝破損，消費者於收受商品後7天內，應保持退回之商品於全新且完整包裝之狀態，請勿缺漏任何配件、贈品、原廠包裝、發票或附隨文件。
                </p>
                <p>
                  若您對以上內容有任何問題或是疑慮，歡迎透過以下方式聯絡我們：
                </p>
                <p>電話: 02-23670050</p>
                <p>營業時間 : 週一至週五 \10:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-bookmark">
          <p className="intro">{v.pro_intro}</p>
          <input type="radio" name="detail2" id="spec2" defaultChecked />
          <label className="spec2" htmlFor="spec2">
            商品規格
          </label>
          <input type="radio" name="detail2" id="tran2" />
          <label className="tran2" htmlFor="tran2">
            貨運資訊
          </label>
          <div className="product-detail1">
            <div className="detail-rice">
              <div className="detail-img">
                <img src="/ProductList/detail-rice.svg" alt="" />
              </div>
              <div className="text-spec">
                <p>
                  <span>酒米：</span> {v.rice}
                </p>
                <p>
                  <span>精米步合度：</span> {v.pro_essence}%
                </p>
              </div>
            </div>
            <div className="detail-sake">
              <div className="detail-img">
                <img src="/ProductList/detail-sake.svg" alt="" />
              </div>
              <div className="text-spec">
                <p>
                  <span>品牌：</span> {v.pro_brand}
                </p>
                <p>
                  <span>等級：</span> {v.pro_level}
                </p>
                <p>
                  <span>容量：</span> {v.pro_capacity}ml
                </p>
                <p>
                  <span>酒精度：</span> {v.pro_alco}%
                </p>
              </div>
            </div>
            <div className="detail-japan">
              <div className="detail-img">
                <img src="/ProductList/detail-japan.svg" alt="" />
              </div>
              <div className="text-spec">
                <p>
                  <span>酒造：</span> {v.pro_marker}
                </p>
                <p>
                  <span>產地：</span> {v.pro_loca}
                </p>
              </div>
            </div>
            <div className="detail-cup">
              <div className="detail-img">
                <img src="/ProductList/detail-cup.svg" alt="" />
              </div>
              <div className="text-spec">
                <p>
                  <span>口感：</span> {v.pro_taste}
                </p>
                <p>
                  <span>溫度：</span> {v.pro_temp}
                </p>
              </div>
            </div>
          </div>
          <div className="tran-detail1">
            <p>
              <b>運費：</b>
            </p>
            <p>
              為保持清酒品質，禾酒林的所有商品皆以低溫宅配配送，若擔心運送過程造成破瓶，可選擇門市取貨。
            </p>
            <p>滿 NT$ 1000 可享免費低溫宅配</p>
            <p>NT$ 1000 以下 每單低溫宅配運費NT$60</p>
            <br />
            <p>
              <b>出貨時間：</b>
            </p>
            <p>週一至週五（中午 12:00 前）：1 天發貨</p>
            <p>週一至週五（12:00 後）：選擇下單後 2 天</p>
            <p>週末（所有時間）：選擇訂單日期後 的下週一</p>
            <br />
            <p>
              <b>退貨權益須知：</b>
            </p>
            <p>
              請於到貨後立即檢查。若有瑕疵或因運送造成之包裝破損，消費者於收受商品後7天內，應保持退回之商品於全新且完整包裝之狀態，請勿缺漏任何配件、贈品、原廠包裝、發票或附隨文件。
            </p>
            <p>若您對以上內容有任何問題或是疑慮，歡迎透過以下方式聯絡我們：</p>
            <p>電話: 02-23670050</p>
            <p>營業時間 : 週一至週五 \10:00 - 18:00</p>
          </div>
        </div>
      </React.Fragment>
    )
  })
  const [style, setStyle] = useState(40)

  const handleScroll = () => {
    const a = (40 + window.scrollY)
    setStyle(a)
  }

  useEffect(() => {
    let a = true
    window.scrollTo(0, 0)

    const fetchData = async () => {
      const res = await fetch(url)
      const data = await res.json()
      const pro = data
      if (a) {
        setDetail(pro)
      }
    }
    setTimeout(() => {
      if (a) {
        setSpin(false)
      }
    }, 1000)

    window.addEventListener('scroll', () => {
      if (a) {
        handleScroll()
      }
    })

    fetchData()

    return () => {
      a = false
    }
  }, [])

  return (
    <>
      {comparemodal ? (
        <CompareModal
          setComparemodel={setComparemodel}
          reload={reload}
          comparePro1={comparePro1}
          comparePro2={comparePro2}
          comparePro3={comparePro3}
          setCartCount={setCartCount}
          setAddcartmodal={setAddcartmodal}
          setLoginModal={setLoginModal}
        />
      ) : (
        ''
      )}
      <div className="ProductDetail">
        <MobileGuideButton style={style} />
        <img src="/ProductList/bgelement.svg" alt="" className="bgele1" />
        <img src="/ProductList/bgelement.svg" alt="" className="bgele2" />
        {/* 商品列表的容器 */}
        <div className="product-container">
          {/* sidebar篩選 */}
          <Sidebar />

          <div className="main-detail">
            <div className="center-container">
              {/* 手機版的篩選 */}
              <div className="mobile-search-bar">
                <div className="cat">
                  <div className="title">分類</div>
                  <div className="state">購買清酒</div>
                </div>
                <div className="compare">
                  <div className="title">比較</div>
                  <div
                    onClick={() => {
                      setComparemodel(true)
                    }}
                    className="state"
                  >
                    {compare.length}
                  </div>
                </div>
              </div>
              {spin ? <Spinner /> : productDetail}
            </div>

            {/* 右側比較區塊 */}
            <CompareBlock
              //up={up}
              compare={compare}
              setCompare={setCompare}
              comparemodal={comparemodal}
              setComparemodel={setComparemodel}
              reload={reload}
              setReload={setReload}
              comparePro1={comparePro1}
              setComparePro1={setComparePro1}
              comparePro2={comparePro2}
              setComparePro2={setComparePro2}
              comparePro3={comparePro3}
              setComparePro3={setComparePro3}
              sidebar={sidebar}
              setSidebar={setSidebar}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
