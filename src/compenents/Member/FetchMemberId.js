import React from 'react'

const FetchMemberId = async (token) => {
  const data = { token: token }
  const res = await fetch('http://localhost:3001/user/memberId', {
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
