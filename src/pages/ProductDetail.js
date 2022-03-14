import React from 'react'
import './../styles/ProductDetail/ProductDetail.css'
import Sidebar from '../compenents/ProductList/Sidebar'
import CompareBlock from '../compenents/ProductList/CompareBlock'
import CompareModal from '../compenents/ProductList/CompareModal'

const ProductDetail = () => {
  return (
    <>
      {/* <CompareModal/> */}
      <div className="ProductDetail">
        <img src="/ProductList/bgelement.svg" alt="" className="bgele1" />
        <img src="/ProductList/bgelement.svg" alt="" className="bgele2" />
        <nav>
          <div className="container"></div>
        </nav>
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
              <div className="product-wrap">
                <div className="product-img">
                  <img src="/ProductList/product.png" alt="" />
                </div>
                <div className="product-info">
                  <div className="product-title">
                    <div className="name">篠峯 雄町純米大吟釀</div>
                    <div className="tag-icon">
                      <div className="brand-level">
                        <p className="brand">篠峯</p>
                        <p className="level">純米大吟釀</p>
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
                    <div className="gift">不提供禮盒</div>
                    <div className="product-mark">
                      製作客製化酒標
                      <img src="/ProductList/chevrons-right.svg" alt="" />
                    </div>
                    <div className="price">
                      <span>$</span>1280
                    </div>
                  </div>
                  <div className="add-cart">
                    <div className="add-minus">
                      <div className="minus">
                        <img src="/ProductList/minus-circle.svg" alt="" />
                      </div>
                      <div className="number">2</div>
                      <div className="plus">
                        <img src="/ProductList/plus-circle.svg" alt="" />
                      </div>
                    </div>
                    <button className="btn-sm btn-primary btn">
                      <img src="/ProductList/cart-white.svg" alt="" />
                      加入購物車
                    </button>
                  </div>
                  <div className="intro">
                    <p>
                      2015年8月發賣的新產品。革命性的將酒精度降低到了12度的同時，不失整體的平衡。口感輕柔，有淡淡的果實清香。會讓人在不知不覺中一杯一杯的喝下去。非常適合作為午餐佐酒。
                    </p>
                  </div>
                  <div className="bookmark">
                    <input type="radio" name="detail" id="spec" checked />
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
                          <p>酒米：山惠錦HITOGPKOCHI</p>
                          <p>精米步合度：55%</p>
                        </div>
                      </div>
                      <div className="detail-sake">
                        <div className="detail-img">
                          <img src="/ProductList/detail-sake.svg" alt="" />
                        </div>
                        <div className="text-spec">
                          <p>品牌：真澄</p>
                          <p>等級：純米吟釀</p>
                          <p>容量：720ml</p>
                          <p>酒精度：12%</p>
                        </div>
                      </div>
                      <div className="detail-japan">
                        <div className="detail-img">
                          <img src="/ProductList/detail-japan.svg" alt="" />
                        </div>
                        <div className="text-spec">
                          <p>酒造：宮坂酒造</p>
                          <p>產地：長野縣</p>
                        </div>
                      </div>
                      <div className="detail-cup">
                        <div className="detail-img">
                          <img src="/ProductList/detail-cup.svg" alt="" />
                        </div>
                        <div className="text-spec">
                          <p>口感：輕盈、辛口、偏酸</p>
                          <p>溫度：常溫酒</p>
                        </div>
                      </div>
                    </div>
                    <div className="tran-detail">
                      <p>Shipping fee:</p>
                      <p>~799HKD : 70HKD per order</p>
                      <p>800HKD~ : Free shipping</p>
                      <br />
                      <p>Shipping time:</p>
                      <p>
                        Mon - Fri(before 12:00pm) : 1 day shipping available
                      </p>
                      <p>
                        Mon - Fri(after 12:00pm) : Choose 2 days after order
                        date
                      </p>
                      <p>Sat(All time) : Choose 3 days after order date</p>
                      <p>Sun(All time) : Choose 2 days after order date</p>
                      <br />
                      <p>Returns :</p>
                      <p>
                        We will make refund if delivered items are broken.
                        Within 3 days after arrival, please kindly contact us
                        with the pictures of broken bottles and order number.
                      </p>
                      <p>
                        Mail to : zoe@kyoto-trading.com / yumi@kyoto-trading.com
                      </p>
                      <p>Operation hours : Mon - Fri, 10:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile-bookmark">
                <p className="intro">
                  2015年8月發賣的新產品。革命性的將酒精度降低到了12度的同時，不失整體的平衡。口感輕柔，有淡淡的果實清香。會讓人在不知不覺中一杯一杯的喝下去。非常適合作為午餐佐酒。
                </p>
                <input type="radio" name="detail2" id="spec2" checked />
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
                        <span>酒米：</span> 山惠錦HITOGPKOCHI
                      </p>
                      <p>
                        <span>精米步合度：</span> 55%
                      </p>
                    </div>
                  </div>
                  <div className="detail-sake">
                    <div className="detail-img">
                      <img src="/ProductList/detail-sake.svg" alt="" />
                    </div>
                    <div className="text-spec">
                      <p>
                        <span>品牌：</span> 真澄
                      </p>
                      <p>
                        <span>等級：</span> 純米吟釀
                      </p>
                      <p>
                        <span>容量：</span> 720ml
                      </p>
                      <p>
                        <span>酒精度：</span> 12%
                      </p>
                    </div>
                  </div>
                  <div className="detail-japan">
                    <div className="detail-img">
                      <img src="/ProductList/detail-japan.svg" alt="" />
                    </div>
                    <div className="text-spec">
                      <p>
                        <span>酒造：</span> 宮坂酒造
                      </p>
                      <p>
                        <span>產地：</span> 長野縣
                      </p>
                    </div>
                  </div>
                  <div className="detail-cup">
                    <div className="detail-img">
                      <img src="/ProductList/detail-cup.svg" alt="" />
                    </div>
                    <div className="text-spec">
                      <p>
                        <span>口感：</span> 輕盈、辛口、偏酸
                      </p>
                      <p>
                        <span>溫度：</span> 常溫酒
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
                  <p>
                    Mon - Fri(after 12:00pm) : Choose 2 days after order date
                  </p>
                  <p>Sat(All time) : Choose 3 days after order date</p>
                  <p>Sun(All time) : Choose 2 days after order date</p>
                  <br />
                  <p>Returns :</p>
                  <p>
                    We will make refund if delivered items are broken. Within 3
                    days after arrival, please kindly contact us with the
                    pictures of broken bottles and order number.
                  </p>
                  <p>
                    Mail to : zoe@kyoto-trading.com / yumi@kyoto-trading.com
                  </p>
                  <p>Operation hours : Mon - Fri, 10:00 - 18:00</p>
                </div>
              </div>
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
