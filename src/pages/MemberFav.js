import React from 'react'
import Sidebar from '../compenents/Member/Sidebar'
import '../styles/Member/MemberFav.scss'

const MemberFav = () => {
  return (
    <>
      <div className="MemberFav">
        <Sidebar />
        <div className="MemberFavBox">
          <div className="container">
            <div className="MemberFavBar">
              <img
                className="search-icon-fav"
                src="/ProductList/search.svg"
                alt=""
              />
              <div className="MemberFavBar-right">
                <div className="countItemsTotal">收藏商品</div>
                <select className="decorated ItemsSort" name="drinks" required>
                  <option value="" disabled selected hidden>
                    商品排序
                  </option>
                  <option value="coffee">Coffee</option>
                  <option value="tea">Tea</option>
                  <option value="milk">Milk</option>
                </select>
              </div>
            </div>
            <div className="MemberFavItems">
              <table>
                <tr>
                  <td>商品一</td>
                  <td>商品二</td>
                  <td>商品三</td>
                  <td>商品四</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberFav
