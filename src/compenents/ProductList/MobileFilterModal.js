import React from 'react'
import './../../styles/ProductList/MobileFilterModal.scss'
import SidebarMobile from './SidebarMobile'

const MobileFilterModal = ({
  setFilterModal,
  filterModallevel,
  filterModal,
  level,
  setLevel,
  price,
  setPrice,
  sidebarToLoad1,
  sidebarToLoad2,
  sidebarToLoad3,
  levelToLoad,
  priceToLoad,
  markToLoad,
  mark,
  setMark,
  reset,
}) => {
  return (
    <>
      <div className="MobileFilterModal">
        <div className="filter-modal">
          <img
            onClick={() => {
              setFilterModal(!filterModal)
            }}
            src="/ProductList/close-black.svg"
            alt=""
            className="close-black"
          />
          <SidebarMobile
            level={level}
            setLevel={setLevel}
            sidebarToLoad1={sidebarToLoad1}
            sidebarToLoad2={sidebarToLoad2}
            sidebarToLoad3={sidebarToLoad3}
            levelToLoad={levelToLoad}
            price={price}
            setPrice={setPrice}
            priceToLoad={priceToLoad}
            markToLoad={markToLoad}
            mark={mark}
            setMark={setMark}
            reset={reset}
          />
        </div>

        {/* <div className="filter-modal">
          <img
            onClick={() => {
              setFilterModal(!filterModal)
            }}
            src="/ProductList/close-black.svg"
            alt=""
            className="close-black"
          />
          <div className="sidebar">
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
        </div> */}
      </div>
    </>
  )
}

export default MobileFilterModal
