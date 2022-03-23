import React from 'react'
import './../styles/Gift/Gift.scss'

//元件
import Sidebar from '../compenents/Gift/Sidebar'
// import ImgCard from '../compenents/Gift/ImgCard'
import StepBar from '../compenents/Gift/StepBar'
import ProductModal from '../compenents/Gift/ProductModal'
// import SakeButton from '../compenents/Gift/SakeButton'

const Gift = () => {
  const stepContent = ['選擇禮盒種類', '選擇清酒', '選擇禮盒顏色', '禮盒數量']
  return (
    <>
      <div className="Gift">
        {/* <ProductModal /> */}
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
                  <div className="row">
                    <div className="kind col">
                      <img src="/Gift/1.png" alt="" />
                      <span className="title">1入禮盒</span>
                    </div>
                    <div className="kind col">
                      <img src="/Gift/2.png" alt="" />
                      <span className="title">2入禮盒</span>
                    </div>
                    <div className="kind col">
                      <img src="/Gift/3.png" alt="" />
                      <span className="title">1+1 禮盒</span>
                    </div>
                  </div>
                </div>
              </section>
              <section id="gift_sake">
                <div className="header">
                  <img src="/Gift/bgmark.svg" alt="" className="bgmark" />
                </div>
                <h4>請選擇一瓶清酒商品</h4>
                <div className="grid gift_grid">
                  <div className="gift_sake">
                    <div className="col sake_card">
                      <img src="/Gift/4.png" alt="" className="original" />
                      <img src="/Gift/1.png" alt="" className="trans" />
                      <span className="name">水芭蕉　鼠年限定</span>
                      <small>$2890</small>
                    </div>
                    {/* <SakeButton /> */}
                  </div>
                  <div className="gift_sake">
                    <div className="col sake_card">
                      <img src="/Gift/4.png" alt="" className="original" />
                      <img src="/Gift/1.png" alt="" className="trans" />
                      <span className="name">水芭蕉　鼠年限定</span>
                      <small>$2890</small>
                    </div>
                    {/* <SakeButton /> */}
                  </div>
                  <div className="gift_sake">
                    <div className="col sake_card">
                      <img src="/Gift/4.png" alt="" className="original" />
                      <img src="/Gift/1.png" alt="" className="trans" />
                      <span className="name">水芭蕉　鼠年限定</span>
                      <small>$2890</small>
                    </div>
                    {/* <SakeButton /> */}
                  </div>
                  <div className="gift_sake">
                    <div className="col sake_card">
                      <img src="/Gift/4.png" alt="" className="original" />
                      <img src="/Gift/1.png" alt="" className="trans" />
                      <span className="name">水芭蕉　鼠年限定</span>
                      <small>$2890</small>
                    </div>
                    {/* <SakeButton /> */}
                  </div>
                  <div className="gift_sake">
                    <div className="col sake_card">
                      <img src="/Gift/4.png" alt="" className="original" />
                      <img src="/Gift/1.png" alt="" className="trans" />
                      <span className="name">水芭蕉　鼠年限定</span>
                      <small>$2890</small>
                    </div>
                    {/* <SakeButton /> */}
                  </div>
                  <div className="gift_sake">
                    <div className="col sake_card">
                      <img src="/Gift/4.png" alt="" className="original" />
                      <img src="/Gift/1.png" alt="" className="trans" />
                      <span className="name">水芭蕉　鼠年限定</span>
                      <small>$2890</small>
                    </div>
                    {/* <SakeButton /> */}
                  </div>
                </div>
              </section>
              <section id="gift_color">
                <div className="header">
                  <img src="/Gift/bgmark.svg" alt="" className="bgmark" />
                </div>
                <h4>請選擇禮盒顏色</h4>
                <div className="color_group">
                  <button className="color_btn">
                    <img src="/Gift/black.svg" alt="" />
                    <small>曜岩黑</small>
                  </button>
                  <button className="color_btn">
                    <img src="/Gift/white.svg" alt="" />
                    <small>英石白</small>
                  </button>
                  <button className="color_btn">
                    <img src="/Gift/golden.svg" alt="" />
                    <small>流沙金</small>
                  </button>
                </div>
                <div className="gift_image">
                  <img src="/Gift/gift.png" alt="box" className="box" />
                  <img src="/Gift/gift.png" alt="sake" className="sake" />
                  <img src="/Gift/gift.png" alt="container" className="other" />
                </div>
                <div className="confirm">
                  <button className="btn btn-sm btn-primary">下一步</button>
                </div>
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
                      <p className="text color">水芭蕉　牛年限定</p>
                      <p className="quality color">1瓶</p>
                      <div className="price color">780</div>
                      <p className="text color">陶器豬口杯和清酒壺</p>
                      <p className="quality color">1組</p>
                      <div className="price color">600</div>
                      {/* space */}
                      <p></p>
                      <p></p>
                      <div></div>
                      {/* gift color */}
                      <p className="text color">禮盒顏色</p>
                      <p className="quality color">曜岩黑</p>
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
                      <div className="number">2</div>
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
