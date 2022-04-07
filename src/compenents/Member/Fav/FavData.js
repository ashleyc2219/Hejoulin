import React, { useEffect, useState } from 'react'
import '../../../styles/Member/Member-Fav/FavData.scss'
import NoFavItem from './NoFavItem'
<<<<<<< HEAD
import { Link, useHistory } from 'react-router-dom'
=======
import {Link, useHistory} from 'react-router-dom'
import DelFavModal from "./DelFavModal";
>>>>>>> 3414485235ad8b338108dd25270543d91e50995f

const FavData = (props) => {
  const { favData, setFavData } = props
  const [favModalShow, setFavModalShow] = useState(false)
  const [favRs, setFavRs] = useState(undefined)
  const APIFav = 'http://localhost:3001/user/member/MemberFav'
  const APIDel = 'http://localhost:3001/user/member/MemberFav/delete'
  const history = useHistory()

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
    const deleteFav = async () => {
      const data = {
        member_id: `${favData[0].member_id}`,
        pro_id: `${favData[0].pro_id}`,
      }
      console.log(data)
      const settings = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
      try {
        const fetchResponse = await fetch(APIDel, settings)
        const data = await fetchResponse.json()
        console.log(data)
        if (data.success === true) {
          // history.go(0)
          setFavRs(data)
          setFavModalShow((prev) => !prev)
        }
        //setFavData(data)
      } catch (err) {
        return err
      }
    }

    const insertFav = async () => {
      const data = {
        member_id: `${favData[0].member_id}`,
        pro_id: `${favData[0].pro_id}`,
      }
      console.log(data)
      const settings = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
      try {
        const fetchResponse = await fetch(
            'http://localhost:3001/api/products-fav/insert',
            settings
        )
        const data = await fetchResponse.json()
        console.log(data)
        if (data.success === true) {
          // history.go(0)
          setFavRs(data)
        }
      } catch (e) {
        return e
      }
    }

    let active = true
    const click = () => {
      if (active === true) {
        ;(async function del() {
          await deleteFav()
        })()

        active = false
      } else {
        ;(async function add() {
          await insertFav()
        })()
      }
    }

    if (favData && favData.length) {
      return favData.map((el) => (
        <div key={'test' + el.pro_id} className="product">
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
              <div className="cart-heart">
                <svg
                  onClick={click}
                  className={active ? 'heart-click' : 'heart'}
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.6876 9.48377C19.7077 8.95014 19.6222 8.41785 19.4361 7.91813C19.25 7.41842 18.9671 6.96137 18.604 6.57386C18.2408 6.18634 17.8049 5.87617 17.3216 5.66158C16.8383 5.44698 16.3176 5.33228 15.7899 5.32422C15.0316 5.32668 14.2957 5.5849 13.6987 6.05805C13.1018 6.53119 12.6778 7.19224 12.4938 7.93661C12.3098 7.19224 11.8857 6.53119 11.2887 6.05805C10.6918 5.5849 9.95593 5.32668 9.19763 5.32422C8.671 5.33395 8.15158 5.44989 7.66977 5.66523C7.18797 5.88057 6.75346 6.19099 6.39167 6.57833C6.02988 6.96567 5.74809 7.42215 5.56278 7.92104C5.37747 8.41993 5.29236 8.95119 5.31245 9.48377C5.31245 9.95298 5.31247 14.7593 12.4938 18.6779C19.7001 14.7593 19.7001 9.95298 19.6876 9.48377Z"
                    stroke="#BBBCBD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="title">
            <p className="name">{el.pro_name}</p>
            <p className="price">${el.pro_price}</p>
          </div>
        </div>
      ))
    } else {
      return <NoFavItem />
    }
  }
  return (
    <>
      <div className="favData">
        <div className="product-container">
          {favData && renderFavItems(favData)}
        </div>
        {favModalShow ? (
            <DelFavModal
                favModalShow={favModalShow}
                setFavModalShow={setFavModalShow}
                favRs={favRs}
            />
        ) : (
           ''
        ) }

      </div>
    </>
  )
}

export default FavData
