import React from 'react'
import './../styles/Gift/Gift.scss'

//元件
import Sidebar from '../compenents/Gift/Sidebar'
// import ImgCard from '../compenents/Gift/ImgCard'
// import Stepbar from '../compenents/Gift/StepBar'

const Gift = () => {
  return (
    <div className="Gift">
      <nav>
        <div className="container"></div>
      </nav>
      <div className="gift_container">
        {/* background-patten */}
        {/* <img src="/Gift/bgelement.svg" alt="" className="bgelement01" />
        <img src="/Gift/bgelement.svg" alt="" className="bgelement02" />
        <img src="/Gift/bgelement.svg" alt="" className="bgelement03" />
        <img src="/Gift/bgelement.svg" alt="" className="bgelement04" /> */}
        <Sidebar />

        {/*內容*/}

        <div className="all">
          {/* <Stepbar /> */}
          <div className="stepbar"></div>
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
                    <img src="/Gift/4.png" alt="" />
                    <span className="name">水芭蕉　鼠年限定</span>
                    <small>$2890</small>
                  </div>
                  <button className="btn">點擊小酒瓶選擇商品</button>
                  {/* <BUTTON/> */}
                </div>
                <div className="gift_sake">
                  <div className="col sake_card">
                    <img src="/Gift/4.png" alt="" />
                    <span className="name">水芭蕉　鼠年限定</span>
                    <small>$2890</small>
                  </div>
                  <button className="btn">點擊小酒瓶選擇商品</button>
                  {/* <BUTTON/> */}
                </div>
                <div className="gift_sake">
                  <div className="col sake_card">
                    <img src="/Gift/4.png" alt="" />
                    <span className="name">水芭蕉　鼠年限定</span>
                    <small>$2890</small>
                  </div>
                  <button className="btn">點擊小酒瓶選擇商品</button>
                  {/* <BUTTON/> */}
                </div>
                <div className="gift_sake">
                  <div className="col sake_card">
                    <img src="/Gift/4.png" alt="" />
                    <span className="name">水芭蕉　鼠年限定</span>
                    <small>$2890</small>
                  </div>
                  <button className="btn">點擊小酒瓶選擇商品</button>
                  {/* <BUTTON/> */}
                </div>
                <div className="gift_sake">
                  <div className="col sake_card">
                    <img src="/Gift/4.png" alt="" />
                    <span className="name">水芭蕉　鼠年限定</span>
                    <small>$2890</small>
                  </div>
                  <button className="btn">點擊小酒瓶選擇商品</button>
                  {/* <BUTTON/> */}
                </div>
                <div className="gift_sake">
                  <div className="col sake_card">
                    <img src="/Gift/4.png" alt="" />
                    <span className="name">水芭蕉　鼠年限定</span>
                    <small>$2890</small>
                  </div>
                  <button className="btn">點擊小酒瓶選擇商品</button>
                  {/* <BUTTON/> */}
                </div>
              </div>
            </section>
            <section id="gift_color">
              <div className="header">
                <img src="/Gift/bgmark.svg" alt="" className="bgmark" />
              </div>
              <h4>請選擇禮盒顏色</h4>
              <div className="color_group">
                <button className="btn color_btn">
                  <img src="/Gift/black.svg" alt="" />
                  <small>曜岩黑</small>
                </button>
                <button className="btn color_btn">
                  <img src="/Gift/white.svg" alt="" />
                  <small>英石白</small>
                </button>
                <button className="btn color_btn">
                  <img src="/Gift/golden.svg" alt="" />
                  <small>流沙金</small>
                </button>
              </div>
              <div className="gift_image">
                <img src="#" alt="box" className="box" />
                <img src="#" alt="sake" className="sake" />
                <img src="#" alt="container" className="container" />
              </div>
            </section>
            {/* <section id="gift_detail">
              <h4>請確認禮盒明細數量</h4>
              <div className="detail">
                <img src="#" alt="final" />
                <div className="content">
                  <h5>禮盒明細</h5>
                  <div className="text">水芭蕉　牛年限定</div>
                  <div>$2780</div>
                  <h5>禮盒數量</h5>
                  <div className="add-minus">
                    <div className="minus">
                      <img src="/Gift/minus-circle.svg" alt="" />
                    </div>
                    <div className="number">2</div>
                    <div className="plus">
                      <img src="/ProductList/plus-circle.svg" alt="" />
                    </div>
                  </div>
                  <button className="btn btn-primary btn-sm">加入購物車</button>
                </div>
              </div>
            </section> */}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Gift
