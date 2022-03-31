import React, { useEffect } from 'react'
import ProfileItemM from './ProfileItemM'
import ProfileItemD from './ProfileItemD'
import '../../../../styles/Member/Member-ProfileBox/ProfileBox.scss'

const ProfileBox = ({ memberData, setMemberData }) => {
  const APIUpdate = 'http://localhost:3001/user/member/Change'
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
      setMemberData(obj)
    })()
  }, [])
  const userAccount = (memberData) => {
    if (memberData && memberData.length) {
      return memberData.map((el) => el.user_account)
    }
  }
  const memberName = (memberData) => {
    if (memberData && memberData.length) {
      return memberData.map((el) => el.member_name)
    }
  }
  const memberMobile = (memberData) => {
    if (memberData && memberData.length) {
      return memberData.map((el) => el.member_mob)
    }
  }
  const memberBirthdayY = (memberData) => {
    if (memberData && memberData.length) {
      return memberData.map((el) => el.member_bir.slice(0, 4))
    }
  }
  const memberBirthdayM = (memberData) => {
    if (memberData && memberData.length) {
      return memberData.map((el) => el.member_bir.slice(5, 7))
    }
  }
  const memberBirthdayD = (memberData) => {
    if (memberData && memberData.length) {
      return memberData.map((el) => el.member_bir.slice(8, 10))
    }
  }

  const whenMemberProfileSub = async (event) => {
    event.preventDefault() //避免傳統方式送出表單
    const fd = new FormData(document.formM)
    let obj = {}
    fd.forEach(function (value, key) {
      obj[key] = value
    })
    const json = JSON.stringify(obj)
    console.log(json)
    const memberUpdate = await fetch(APIUpdate, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.token,
      },
      body: json,
    })
    const updateAction = await memberUpdate.json()
    console.log(updateAction)
    if (updateAction.success === true){
      // 更新成功

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
        </div>
        <br />
        <form name="formM" onSubmit={whenMemberProfileSub}>
          <div className="mb-3 ProfileBox-Item">
            <label className="form-label">姓名</label>
            <input
              type="text"
              className="form-control"
              id="member_name"
              name="member_name"
              key="memberName"
              placeholder={memberName(memberData)}
            />
            <div className="form-text">錯誤/提示訊息</div>
          </div>
          <br />
          <div className="mb-3 ProfileBox-Item">
            <label className="form-label">手機號碼</label>
            <input
              type="text"
              className="form-control"
              id="member_mob"
              name="member_mob"
              key="memberMob"
              placeholder={memberMobile(memberData)}
            />
            <div className="form-text">錯誤/提示訊息</div>
          </div>
          <br />
          <div className="mb-3 ProfileBox-Item ProfileBox-Item-Last">
            {/* 這裡我多包了一層div 提示訊息拉到外面 改成項figma那樣 */}
            <div className="birthday">
              <label className="form-label">生日</label>
              <select className="decorated">
                <option value="" disabled selected hidden>
                  {memberBirthdayY(memberData)}
                </option>
                {/*{birthOption(ProfileItem)}*/}
              </select>
            </div>
            <div className="birthday">
              <label className="form-label displayNone">生日</label>
              <select className="decorated">
                <option value="" disabled selected hidden>
                  {memberBirthdayM(memberData)}
                </option>
                {birthOption(ProfileItemM)}
              </select>
            </div>
            <div className="birthday">
              <label className="form-label displayNone">生日</label>
              <select className="decorated">
                <option value="" disabled selected hidden>
                  {memberBirthdayD(memberData)}
                </option>
                {birthOption(ProfileItemD)}
              </select>
            </div>
          </div>
          <div className="form-text displayNone">錯誤/提示訊息</div>
          <br />
          <button type="submit" className="btn btn-primary profile-btn">
            確認修改資料
          </button>
        </form>
      </div>
    </>
  )
}

export default ProfileBox
