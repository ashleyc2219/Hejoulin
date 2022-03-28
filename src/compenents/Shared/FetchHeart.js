import React, { useEffect } from 'react'

const FetchHeart = () => {
  const APIHeart = 'http://localhost:3001/user/member/MemberFav-heart'

  useEffect(() => {
    ;(async () => {
      const have = await (
        await fetch(APIHeart, {
          method: 'POST',
          headers: {
            Authorization: localStorage.getItem('account'),
          },
        })
      ).json()
      console.log(have)
    })()
  }, [])
}

export default FetchHeart
