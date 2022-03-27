import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './../../styles/ProductList/MobileCatModal.css'

const MobileCatModal = ({ setCatModal, catModal }) => {
  return (
    <>
      <div className="MobileCatModal">
        <div className="cat-modal">
          <img
            onClick={() => {
              setCatModal(!catModal)
            }}
            src="/ProductList/close-black.svg"
            alt=""
            className="close-black"
          />
          <div className="title">
            <span></span>排序
          </div>
          <div className="cat">
            <ul>
              <li>
                <Link to="/product/list">購買清酒</Link>
              </li>

              <li>
                <Link to="/gift">清酒禮盒</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileCatModal
