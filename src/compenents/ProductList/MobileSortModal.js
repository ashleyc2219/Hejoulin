import React from 'react'
import './../../styles/ProductList/MobileSortModal.css'

const MobileSortModal = ({ sortModal, setSortModal }) => {
  return (
    <>
      <div className="MobileSortModal">
        <div className="sort-modal">
          <img
            onClick={() => {
              setSortModal(!sortModal)
            }}
            src="/ProductList/close-black.svg"
            alt=""
            className="close-black"
          />
          <div className="title">
            <span></span>排序
          </div>
          <div className="sort">
            <div className="radio-container">
              <input type="radio" name="sort" id="1" />
              <label htmlFor="1">
                <span></span>預設排序
              </label>
              <input type="radio" name="sort" id="2" />
              <label htmlFor="2">
                <span></span>最新商品
              </label>
              <input type="radio" name="sort" id="3" />
              <label htmlFor="3">
                <span></span>價錢高至低
              </label>
              <input type="radio" name="sort" id="4" />
              <label htmlFor="4">
                <span></span>價錢低至高
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileSortModal
