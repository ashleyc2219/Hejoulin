import React from 'react'
import './../styles/ProductList/ProductList.css'

const ProductList = () => {
  return (
    <>
      <div className="ProductList">
        <nav>
          <div className="container"></div>
        </nav>
        {/* 商品列表的容器 */}
        <div className="product-container">
          <div className="sidebar">
            <div className="first">
              <ul>
                <li>
                  <a href="#/">購買清酒</a>
                </li>
                <li>
                  <a href="#/">清酒禮盒</a>
                </li>
              </ul>
            </div>
            <div className="second">
              <div className="filter">
                <a href="#/">篩選</a>
              </div>
              <p>等級</p>
              <div className="level">
                <input type="radio" name="level" id="吟釀" value="吟釀" />
                <label htmlFor="吟釀">吟釀</label>
                <input type="radio" name="level" id="大吟釀" value="大吟釀" />
                <label htmlFor="大吟釀">大吟釀</label>
                <input type="radio" name="level" id="純米酒" value="純米酒" />
                <label htmlFor="純米酒">純米酒</label>
                <input
                  type="radio"
                  name="level"
                  id="純米吟釀"
                  value="純米吟釀"
                />
                <label htmlFor="純米吟釀">純米吟釀</label>
                <input
                  type="radio"
                  name="level"
                  id="純米大吟釀"
                  value="純米大吟釀"
                />
                <label htmlFor="純米大吟釀">純米大吟釀</label>
                <input type="radio" name="level" id="本釀造" value="本釀造" />
                <label htmlFor="本釀造">本釀造</label>
              </div>
            </div>
            <div className="third">
              <p>價格</p>
              <div className="price">
                <input type="radio" name="price" id="7" value="7" />
                <label htmlFor="7">1000以下</label>
                <input type="radio" name="price" id="8" value="8" />
                <label htmlFor="8">1000~2000</label>
                <input type="radio" name="price" id="9" value="9" />
                <label htmlFor="9">2000~3000</label>
              </div>
            </div>
            <div className="other">
              <p>其他</p>
              <div className="custum">
                <input type="checkbox" name="mark" id="1" value="1" />
                <label htmlFor="1">可酒標客製</label>
              </div>
            </div>
          </div>
          <div className="main">
            <div className="search-bar">
              <div className="select">
                <select name="" id="">
                  <option value="">預設排序</option>
                  <option value="">最新上架</option>
                  <option value="">價錢高至低</option>
                  <option value="">價錢低至高</option>
                </select>
                <select name="" id="">
                  <option value="">品牌</option>
                  <option value="">最新上架</option>
                  <option value="">價錢高至低</option>
                  <option value="">價錢低至高</option>
                </select>
                <select name="" id="">
                  <option value="">產地</option>
                  <option value="">最新上架</option>
                  <option value="">價錢高至低</option>
                  <option value="">價錢低至高</option>
                </select>
              </div>
              <div className="search">
                <img src="/ProductList/search.svg" alt="" />

                <input type="text" name="" id="" />
              </div>
            </div>

            <div className="mobile-search-bar">
              <div className="cat">
                <div className="title">分類</div>
                <div className="state">購買清酒</div>
              </div>
              <div className="filter">
                <div className="title">篩選</div>
                <div className="state">無</div>
              </div>
              <div className="sort">
                <div className="title">排序</div>
                <div className="state">預設排序</div>
              </div>
              <div className="compare">
                <div className="title">比較</div>
                <div className="state">1</div>
              </div>
            </div>
            <div className="compare-block">
              <div className="product">
                <img src="/ProductList/product.png" alt="" />
                <p className="name">篠峯 雄町純米大吟醸</p>
                <div className="shadow"></div>
                <img src="/ProductList/remove.svg" alt="" className="remove" />
              </div>
              <div className="product">
                <img src="/ProductList/product.png" alt="" />
                <p className="name">篠峯 雄町純米大吟醸</p>
                <div className="shadow"></div>
                <img src="/ProductList/remove.svg" alt="" className="remove" />
              </div>
              <div className="product">
                <img src="/ProductList/product.png" alt="" />
                <p className="name">篠峯 雄町純米大吟醸</p>
                <div className="shadow"></div>
                <img src="/ProductList/remove.svg" alt="" className="remove" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList
