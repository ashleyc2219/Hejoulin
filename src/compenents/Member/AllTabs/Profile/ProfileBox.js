import React, { useEffect, useState } from 'react'
import ProfileItem from './ProfileItems'
import '../../../../styles/Member/Member-ProfileBox/ProfileBox.scss'

const ProfileBox = () => {
  const [memberData, setMemberData] = useState({})
  const birthOption = (items) =>
    items.map((item, i) => (
      <option value={item.itemName} key={i}>
        {item.itemName}
      </option>
    ))
  useEffect(() => {
    ;(async () => {
      const obj = await (
        await fetch('http://localhost:3001/user/member', {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + localStorage.token,
          },
        })
      ).json()
      console.log(obj)
      setMemberData(obj)
    })()
  }, [])
  const userAccount = (memberData) => {
    if (memberData && memberData.length) {
      console.log(memberData)
      return memberData.map((el) => el.user_account)
    }
  }
  const memberName = (memberData) => {
    if (memberData && memberData.length) {
      console.log(memberData)
      return memberData.map((el) => el.member_name)
    }
  }
  const memberMobile = (memberData) => {
    if (memberData && memberData.length) {
      console.log(memberData)
      return memberData.map((el) => el.member_mob)
    }
  }
  const memberBirthdayY = (memberData) => {
    if (memberData && memberData.length) {
      console.log(memberData)
      return memberData.map((el) => el.member_bir.slice(0, 4))
    }
  }
  const memberBirthdayM = (memberData) => {
    if (memberData && memberData.length) {
      console.log(memberData)
      return memberData.map((el) => el.member_bir.slice(5, 7))
    }
  }
  const memberBirthdayD = (memberData) => {
    if (memberData && memberData.length) {
      console.log(memberData)
      return memberData.map((el) => el.member_bir.slice(8, 10))
    }
  }
  return (
    <>
      <div className="ProfileBox">
        <div className="mb-3 ProfileBox-Item">
          <label className="form-label">帳號 / 電子郵件</label>
          <input
            type="email"
            className="form-control"
            value={userAccount(memberData)}
            readOnly
          />
          <div className="form-text displayNone">錯誤/提示訊息</div>
        </div>
        <br />
        <div className="mb-3 ProfileBox-Item">
          <label className="form-label">姓名</label>
          <input
            type="text"
            className="form-control"
            value={memberName(memberData)}
          />
          <div className="form-text">錯誤/提示訊息</div>
        </div>
        <br />
        <div className="mb-3 ProfileBox-Item">
          <label className="form-label">手機號碼</label>
          <input
            type="text"
            className="form-control"
            value={memberMobile(memberData)}
          />
          <div className="form-text">錯誤/提示訊息</div>
        </div>
        <br />
        <div className="mb-3 ProfileBox-Item ProfileBox-Item-Last">
          {/* 這裡我多包了一層div 提示訊息拉到外面 改成項figma那樣 */}
          <div className="birthday">
            <label className="form-label">生日</label>
            <select className="decorated" required>
              <option value="" disabled selected hidden>
                {memberBirthdayY(memberData)}
              </option>
              {birthOption(ProfileItem)}
            </select>
          </div>
          <div className="birthday">
            <label className="form-label displayNone">生日</label>
            <select className="decorated" required>
              <option value="" disabled selected hidden>
                {memberBirthdayM(memberData)}
              </option>
              {birthOption(ProfileItem)}
            </select>
          </div>
          <div className="birthday">
            <label className="form-label displayNone">生日</label>
            <select className="decorated" required>
              <option value="" disabled selected hidden>
                {memberBirthdayD(memberData)}
              </option>
              {birthOption(ProfileItem)}
            </select>
          </div>

        </div>
        <div className="form-text displayNone">錯誤/提示訊息</div>
        <br />
        <button className="btn btn-primary profile-btn">確認修改資料</button>
      </div>
    </>
  )
}

export default ProfileBox
