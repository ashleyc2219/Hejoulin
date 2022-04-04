import React from 'react'
import './../../styles/ProductList/MobileSortModal.css'

const MobileSortModal = ({ sortModal, setSortModal, sorthandler }) => {
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
              <input
                onClick={(e) => {
                  sorthandler(e)
                }}
                type="radio"
                name="sort"
                id="1"
                value="1"
              />
              <label htmlFor="1">
                <span></span>預設排序
              </label>
              <input
                onClick={(e) => {
                  sorthandler(e)
                }}
                type="radio"
                name="sort"
                id="2"
                value="2"
              />
              <label htmlFor="2">
                <span></span>最新商品
              </label>
              <input
                onClick={(e) => {
                  sorthandler(e)
                }}
                type="radio"
                name="sort"
                id="3"
                value="4"
              />
              <label htmlFor="3">
                <span></span>價錢低至高
              </label>
              <input
                onClick={(e) => {
                  sorthandler(e)
                }}
                type="radio"
                name="sort"
                id="4"
                value="5"
              />
              <label htmlFor="4">
                <span></span>價錢高至低
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileSortModal
