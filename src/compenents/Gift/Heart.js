import React, { useState, useEffect } from 'react'
import './Heart.scss'
import FetchMemberId from '../Member/FetchMemberId'

const Heart = (props) => {
  const [favorites, setFavorite] = useState('')
  const { id, linkFav, setLoginModal } = props
  let active = true
  let proid = ''

  if (favorites.length > 0) {
    proid = favorites.filter((v, i) => {
      return v === props.id
    })
  }

  if (proid.length > 0) {
    active = false
  }

  const click = async () => {
    const getMember = await FetchMemberId(localStorage.getItem('token'))

    if (getMember !== 'noMemberId') {
      if (active === true) {
        await insertFav(getMember)
        await getFav(getMember)

        active = false
      } else {
        await deleteFav(getMember)
        await getFav(getMember)

        active = true
      }
    } else {
      setLoginModal(true)
    }
  }

  const insertFav = async (member_id) => {
    const data = { member_id: member_id, pro_id: `${id}` }
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
        `${process.env.REACT_APP_BACKEND_URL}/api/products-fav/insert`,
        settings
      )
      const data = await fetchResponse.json()
    } catch (e) {
      return e
    }
  }

  const deleteFav = async (member_id) => {
    const data = { member_id: member_id, pro_id: `${id}` }
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
        `${process.env.REACT_APP_BACKEND_URL}/api/products-fav/delete`,
        settings
      )
      const data = await fetchResponse.json()
    } catch (e) {
      return e
    }
  }

  const getFav = async (member_id) => {
    const data = { member_id: member_id }
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
        `${process.env.REACT_APP_BACKEND_URL}/api/products-fav/search`,
        settings
      )
      const data = await fetchResponse.json()
      const fav = data.result.map((v, i) => {
        return v.pro_id
      })
      setFavorite(fav)
    } catch (e) {
      return e
    }
  }

  useEffect(() => {
    let a = true

    const getFav1 = async () => {
      const getMember = await FetchMemberId(localStorage.getItem('token'))
      if (getMember !== 'noMemberId') {
        const data = { member_id: getMember }
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
            `${process.env.REACT_APP_BACKEND_URL}/api/products-fav/search`,
            settings
          )
          const data = await fetchResponse.json()
          const fav = data.result.map((v, i) => {
            return v.pro_id
          })
          if (a) {
            setFavorite(fav)
          }
        } catch (e) {
          return e
        }
      }
    }

    if (a) {
      getFav1()
    }

    return () => {
      a = false
    }
  }, [])

  useEffect(() => {
    if (linkFav > 0) click()
  }, [linkFav])

  return (
    <>
      <svg
        onClick={click}
        className={active ? 'heart' : 'heart-click'}
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
    </>
  )
}

export default Heart
