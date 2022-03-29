import React, { useEffect, useState } from 'react'
import Sidebar from '../compenents/Member/SideBar/Sidebar'
import '../styles/Member/MemberFav.scss'
import FavData from '../compenents/Member/Fav/FavData'
import NavFav from '../compenents/Member/Fav/NavFav'

const MemberFav = () => {
  const [favData, setFavData] = useState({})
  const [optionChose, setOptionChose] = useState('none')
  return (
    <>
      <div className="MemberFav">
        <Sidebar />
        <div className="MemberFavBox">
          <div className="container">
            <NavFav
              favData={favData}
              setFavData={setFavData}
              optionChose={optionChose}
              setOptionChose={setOptionChose}
            />
            <div className="MemberFavItems">
              <div className="product-list">
                <div className="product-title"></div>
                <div className="product-container">
                  <FavData
                    favData={favData}
                    setFavData={setFavData}
                    optionChose={optionChose}
                    setOptionChose={setOptionChose}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberFav
