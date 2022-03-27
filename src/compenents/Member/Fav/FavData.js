import React, { useEffect, useState } from 'react'
import '../../../styles/Member/Member-Fav/FavData.scss'
import noFavItem from './noFavItem'
import { Link } from 'react-router-dom'
import CompareBtn from '../../ProductList/CompareBtn'
import Heart from '../../ProductList/Heart'
import AddCartIcon from '../../ProductList/AddCartIcon'

const FavData = (props) => {
  const { user, setUser, compare, setCompare, setCartCount, favData, setFavData } = props
  const APIFav = 'http://localhost:3001/user/member/MemberFav'

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
      setFavData(obj)
    })()
  }, [])
  // useEffect(() => {
  //     (async () => {
  //         const img = await ().json()
  //     })
  // }, [])
  const renderFavItems = (favData) => {
    if (favData && favData.length) {
      return favData.map((el) => (
        <div key={'test' + el.member_id} className="product">
          <div className="product-wrap">
            <Link to={'/product/detail/' + el.pro_id}>
              <div
                onClick={() => {
                  console.log('img-wrap')
                }}
                className="img-wrap"
              >
                <img
                  className="product-img"
                  src={'http://localhost:3001/images/pro_img/' + el.pro_img}
                  alt=""
                />
              </div>
            </Link>
            <div className="tag-img">
              {el.pro_mark === 1 ? (
                <img src="/ProductList/mark.svg" alt="" className="pro-gift" />
              ) : (
                ''
              )}

              {el.pro_gift === 1 ? (
                <img src="/ProductList/gift.svg" alt="" className="pro-mark" />
              ) : (
                ''
              )}
            </div>
            <div className="icon">
              <CompareBtn
                id={el.pro_id}
                compare={compare}
                setCompare={setCompare}
              />
              <div className="cart-heart">
                <Heart id={el.pro_id} />
                <AddCartIcon
                  setCartCount={setCartCount}
                  id={el.pro_id}
                  // count={count}
                />
              </div>
            </div>
          </div>
          <div className="title">
            <p className="name">{el.pro_name}</p>
            <p className="price">{el.pro_price}</p>
          </div>
        </div>
      ))
    } else {
      return <noFavItem />
    }
  }
  return (
    <>
      <div className="favData">
        <div className="product-container">
          {favData && renderFavItems(favData)}
        </div>
      </div>
    </>
  )
}

export default FavData
