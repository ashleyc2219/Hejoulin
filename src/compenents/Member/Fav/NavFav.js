import React, { useEffect, useState } from 'react'
import '../../../styles/Member/Member-Fav/NavFav.scss'

const NavFav = (props) => {
  const { favData, setFavData, optionChose, setOptionChose } = props
  const [noResult, setNoResult] = useState(true) //如果沒有搜尋結果會顯示的文字
  const [search, setSearch] = useState('') // 設定搜尋的文字傳到子層重新fetch商品列表
  const APIFav = 'http://localhost:3001/user/member/MemberFav'

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

  function handleChange(event) {
    setOptionChose(event.target.value)
  }
  function AddOldToNew(a, b) {
    return a.pro_id > b.pro_id ? 1 : -1
  }

  function PriceLowToHigh(a, b) {
    return a.pro_price > b.pro_price ? 1 : -1
  }

  function MarkCustomFirst(a, b) {
    return b.pro_mark > a.pro_mark ? 1 : -1
  }

  // 設定排序結果進optionChose
  useEffect(() => {
    ;(async () => {
      const obj = await (
        await fetch(APIFav, {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + localStorage.token,
          },
        })
      ).json()
      console.log(obj)
      setFavData(
        (obj.sort = () => {
          switch (optionChose) {
            case optionChose === 'oldToNew':
              obj.sort(AddOldToNew)
              break
            case optionChose === 'lowToHigh':
              obj.sort(PriceLowToHigh)
              break
            case optionChose === 'customFirst':
              obj.sort(MarkCustomFirst)
              break
            default:
              setOptionChose('none')
          }
        })
      )
    })()
  }, [setOptionChose])
  return (
    <>
      <div className="MemberFavBar">
        <div className="search-icon-fav">
          <img src="/ProductList/search.svg" alt="" />

          <input onKeyPress={keypress} type="text" name="" id="" />
        </div>
        <div className="MemberFavBar-right">
          {/*<div className="countItemsTotal">收藏商品 {favData.length}</div>*/}
          <select
            className="decorated ItemsSort"
            name="drinks"
            value={optionChose}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected hidden>
              商品排序
            </option>
            <option value="oldToNew">收藏順序舊到新</option>
            <option value="lowToHigh">商品價格低到高</option>
            <option value="customFirst">酒標客制優先</option>
          </select>
        </div>
      </div>
      <div className="MobileMemberFavBar">
        <div className="MemberFavBar-left">
          {/*<div className="countItemsTotal">收藏商品 {favData.length}</div>*/}
          <img
            className="search-icon-fav"
            src="/ProductList/search.svg"
            alt=""
          />
        </div>
        <div className="MemberFavBar-right">
          <select
            className="decorated ItemsSort"
            name="drinks"
            value={optionChose}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected hidden>
              商品排序
            </option>
            <option value="oldToNew">收藏順序舊到新</option>
            <option value="loToHigh">商品價格低到高</option>
            <option value="customFirst">酒標客制優先</option>
          </select>
        </div>
      </div>
    </>
  )
}
export default NavFav
