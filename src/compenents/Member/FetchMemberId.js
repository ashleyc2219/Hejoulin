import React from "react";


const FetchMemberId = async (token) => {
   const data = {token: token}
    const res = await fetch(
        'http://localhost:3001/user/memberId',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:  JSON.stringify(data),
        }
    )
    let memberData = res.json()
    if (memberData.member_id) {
        return memberData.member_id
    } else {
        return 'noMemberId'
    }
}

export default FetchMemberId