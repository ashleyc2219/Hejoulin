import React, { useEffect, useState } from 'react'
import './../styles/ProductDetail/ProductDetail.css'
import Sidebar from '../compenents/ProductList/Sidebar'
import CompareBlock from '../compenents/ProductList/CompareBlock'
import CompareModal from '../compenents/ProductList/CompareModal'
import { useParams } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()
  const [detail, setDetail] = useState([])
  const [count, setCount] = useState(1)
  

  const minus = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  const add = () => {
    if (count < 20) {
      setCount(count + 1)
    }
  }

  const url = 'http://localhost:3000/api/products-sake/item-detail?pro_id=' + id

  const fetchData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    const pro = data
    console.log(pro)
    setDetail(pro)
  }

  const productDetail = detail.map((v, i) => {
    return (
      <React.Fragment key={i} >
        <div  className="product-wrap">
          <div className="product-img">
            <img src={'/ProductList/productimg/' + v.pro_img} alt="" />
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
                    <img src="/ProductList/heart.svg" alt="" />
                    <p>收藏</p>
                  </div>
                  <div className="compare">
                    <img src="/ProductList/add.svg" alt="" />
                    <p>比較</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-price">
              {v.pro_gift == 1 ? (
                <div className="gift">
                  <Link to="/gift">製作禮盒</Link>
                </div>
              ) : (
                <div className="gift">不提供禮盒</div>
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
                <div className="number">{count}</div>
                <div onClick={add} className="plus">
                  <img src="/ProductList/plus-circle.svg" alt="" />
                </div>
              </div>
              <button className="btn-sm btn-primary btn">
                <img src="/ProductList/cart-white.svg" alt="" />
                加入購物車
              </button>
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
                    <p>酒精度：{v.alco}%</p>
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
                <p>Shipping fee:</p>
                <p>~799HKD : 70HKD per order</p>
                <p>800HKD~ : Free shipping</p>
                <br />
                <p>Shipping time:</p>
                <p>Mon - Fri(before 12:00pm) : 1 day shipping available</p>
                <p>Mon - Fri(after 12:00pm) : Choose 2 days after order date</p>
                <p>Sat(All time) : Choose 3 days after order date</p>
                <p>Sun(All time) : Choose 2 days after order date</p>
                <br />
                <p>Returns :</p>
                <p>
                  We will make refund if delivered items are broken. Within 3
                  days after arrival, please kindly contact us with the pictures
                  of broken bottles and order number.
                </p>
                <p>Mail to : zoe@kyoto-trading.com / yumi@kyoto-trading.com</p>
                <p>Operation hours : Mon - Fri, 10:00 - 18:00</p>
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
                  <span>酒精度：</span> {v.alco}%
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
            <p>Shipping fee:</p>
            <p>~799HKD : 70HKD per order</p>
            <p>800HKD~ : Free shipping</p>
            <br />
            <p>Shipping time:</p>
            <p>Mon - Fri(before 12:00pm) : 1 day shipping available</p>
            <p>Mon - Fri(after 12:00pm) : Choose 2 days after order date</p>
            <p>Sat(All time) : Choose 3 days after order date</p>
            <p>Sun(All time) : Choose 2 days after order date</p>
            <br />
            <p>Returns :</p>
            <p>
              We will make refund if delivered items are broken. Within 3 days
              after arrival, please kindly contact us with the pictures of
              broken bottles and order number.
            </p>
            <p>Mail to : zoe@kyoto-trading.com / yumi@kyoto-trading.com</p>
            <p>Operation hours : Mon - Fri, 10:00 - 18:00</p>
          </div>
        </div>
      </React.Fragment>
    )
  })

  useEffect(() => {



    window.scrollTo(0, 0)
    fetchData()
  }, [])

  return (
    <>
      {/* <CompareModal/> */}
      <div className="ProductDetail">
        <img src="/ProductList/bgelement.svg" alt="" className="bgele1" />
        <img src="/ProductList/bgelement.svg" alt="" className="bgele2" />
        {/* 商品列表的容器 */}
        <div className="product-container">
          {/* sidebar篩選 */}
          <Sidebar />

          <div className="main">
            <div className="center-container">
              {/* 手機版的篩選 */}
              <div className="mobile-search-bar">
                <div className="cat">
                  <div className="title">分類</div>
                  <div className="state">購買清酒</div>
                </div>
                <div className="compare">
                  <div className="title">比較</div>
                  <div className="state">1</div>
                </div>
              </div>
              {productDetail}
            </div>

            {/* 右側比較區塊 */}
            <CompareBlock />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
