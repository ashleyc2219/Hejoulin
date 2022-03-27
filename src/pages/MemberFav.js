import React, { useEffect, useState } from 'react'
import Sidebar from '../compenents/Member/SideBar/Sidebar'
import '../styles/Member/MemberFav.scss'
import FavData from '../compenents/Member/Fav/FavData'
import NavFav from "../compenents/Member/Fav/NavFav";

const MemberFav = ({ compare, setCompare, setCartCount }) => {
  const [favData, setFavData] = useState({})
  return (
    <>
      <div className="MemberFav">
        <Sidebar />
        <div className="MemberFavBox">
          <div className="container">
            <NavFav favData={favData} setFavData={setFavData}/>
            <div className="MemberFavItems">
              <div className="product-list">
                <div className="product-title"></div>
                <div className="product-container">
                  <FavData
                    compare={compare}
                    setCompare={setCompare}
                    setCartCount={setCartCount}
                    favData={favData}
                    setFavData={setFavData}
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
