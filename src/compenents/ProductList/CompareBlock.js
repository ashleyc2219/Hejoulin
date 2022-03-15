import React from 'react'
import './../../compenents/ProductList/CompareBlock.scss'

const CompareBlock = () => {
  return (
    <>
      <div className="compare-block">
        <div className="compare-wrap">
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
        <button className="compare btn-primary btn-sm btn">比較</button>
        </div>
      </div>
    </>
  )
}

export default CompareBlock
