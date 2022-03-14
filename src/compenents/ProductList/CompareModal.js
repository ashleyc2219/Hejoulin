import React from 'react'
import './../../styles/ProductList/CompareModal.css'

const CompareModal = () => {
  return (
    <>
      <div className="CompareModal">
        <div className="comparepage">
          <div className="close-white">
            <img src="/ProductList/close-white.svg" alt="" />
          </div>
          <div className="mobile-close">
            <img src="/ProductList/close-black.svg" alt="" />
          </div>
          <div className="side-box">
            <div className="empty-wrap"></div>
            <div className="spec-title">
              <ul>
                <li>加入收藏</li>
                <li>等級</li>
                <li>精米步合</li>
                <li>酒精度</li>
                <li>產地</li>
                <li>使用米</li>
                <li>品牌</li>
                <li>酒造</li>
                <li>售價</li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="side-box-empty">
            <div className="empty-wrap"></div>
            <div className="spec-title">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="com-pro">
            <div className="pro-wrap">
              <img src="/ProductList/product.png" alt="" />
              <div className="pro-name">水芭蕉 牛年限定 純米大吟釀</div>
            </div>
            <div className="spec-wrap">
              <ul>
                <li className="like">
                  <img src="/ProductList/heart-solid.svg" alt="" />
                </li>
                <li>純米大吟釀</li>
                <li>50%</li>
                <li>20%</li>
                <li>群馬縣</li>
                <li>山田錦</li>
                <li>水芭蕉</li>
                <li>永井酒造</li>
                <li>$1280</li>
              </ul>
            </div>
            <div className="button">
              <button className="btn btn-primary">加入購物車</button>
            </div>
          </div>
          <div className="com-pro">
            <div className="pro-wrap">
              <img src="/ProductList/product.png" alt="" />
              <div className="pro-name">水芭蕉 牛年限定 純米大吟釀</div>
            </div>
            <div className="spec-wrap">
              <ul>
                <li className="like">
                  <img src="/ProductList/heart-solid.svg" alt="" />
                </li>
                <li>純米大吟釀</li>
                <li>50%</li>
                <li>20%</li>
                <li>群馬縣</li>
                <li>山田錦</li>
                <li>水芭蕉</li>
                <li>永井酒造</li>
                <li>$1280</li>
              </ul>
            </div>
            <div className="button">
              <button className="btn btn-primary">加入購物車</button>
            </div>
          </div>
          <div className="com-pro">
            <div className="pro-wrap">
              <img src="/ProductList/product.png" alt="" />
              <div className="pro-name">水芭蕉 牛年限定 純米大吟釀</div>
            </div>
            <div className="spec-wrap">
              <ul>
                <li className="like">
                  <img src="/ProductList/heart-redline.svg" alt="" />
                </li>
                <li>純米大吟釀</li>
                <li>50%</li>
                <li>20%</li>
                <li>群馬縣</li>
                <li>山田錦</li>
                <li>水芭蕉</li>
                <li>永井酒造</li>
                <li>$1280</li>
              </ul>
            </div>
            <div className="button">
              <button className="btn btn-primary">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompareModal
