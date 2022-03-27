import React, {useState} from 'react'
import '../../../styles/Member/Member-Fav/NavFav.scss'

const NavFav = ({favData, setFavData}) => {
  const [noResult, setNoResult] = useState(true) //如果沒有搜尋結果會顯示的文字
  const [search, setSearch] = useState('') // 設定搜尋的文字傳到子層重新fetch商品列表

  const keypress = (e) => {
    const searchWord = e.target.value.trim()

    if (e.key === 'Enter') {
      if (searchWord.length > 0) {
        setSearch(searchWord)
        setNoResult(true)
        setTimeout(() => {
          // 如果搜尋文字長度大於0會執行以下動作
        }, 1000)
      } else if (searchWord.length <= 0) {
        setSearch(searchWord)
        setNoResult(true)
        setTimeout(() => {
          const searchWord = e.target.value
          setSearch(searchWord)
        }, 1500)
      }
    }
  }
  return (
    <>
      <div className="MemberFavBar">
        <div className="search-icon-fav">
          <img src="/ProductList/search.svg" alt="" />

          <input onKeyPress={keypress} type="text" name="" id="" />
        </div>
        <div className="MemberFavBar-right">
          <div className="countItemsTotal">收藏商品{' '}{favData.length}</div>
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
      <div className="MobileMemberFavBar">
        <div className="MemberFavBar-left">
          <div className="countItemsTotal">收藏商品8</div>
          <img
            className="search-icon-fav"
            src="/ProductList/search.svg"
            alt=""
          />
        </div>
        <div className="MemberFavBar-right">
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
    </>
  )
}
export default NavFav
