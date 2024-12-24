import React from 'react'

const FetchMemberId = async (token) => {
  const data = { token: token }
  const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/user/memberId`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  let memberData = await res.json()
  if (memberData.message === 'can not verify token') {
    return 'noMemberId'
  } else {
    return memberData[0].member_id
  }
}

export default FetchMemberId
