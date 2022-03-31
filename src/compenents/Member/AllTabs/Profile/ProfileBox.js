import React, { useEffect, useState } from 'react'
import '../../../../styles/Member/Member-ProfileBox/ProfileBox.scss'

const ProfileBox = ({ memberData, setMemberData }) => {
  const APIUpdate = 'http://localhost:3001/user/member/Change'

  const [valueY, setValueY] = useState('')
  const [valueM, setValueM] = useState('')
  const [valueD, setValueD] = useState('')

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
      return memberData.map((el) => el.member_bir.slice(6, 7))
    }
  }
  const memberBirthdayD = (memberData) => {
    if (memberData && memberData.length) {
      return memberData.map((el) => el.member_bir.slice(9, 10))
    }
  }

  useEffect(() => {
    setValueY(memberBirthdayY(memberData))
    setValueM(memberBirthdayM(memberData))
    setValueD(memberBirthdayD(memberData))
  }, [memberData])

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
    if (updateAction.success === true) {
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
              <select
                value={valueY}
                onChange={(e) => {
                  setValueY(e.target.value)
                }}
              >
                {Array(122)
                  .fill(0)
                  .map((v, i) => (
                    <option value={i + 1900} key={i + 1900}>
                      {i + 1900}
                    </option>
                  ))}
              </select>
            </div>
            <div className="birthday">
              <label className="form-label displayNone">生日</label>
              <select
                value={valueM}
                onChange={(e) => {
                  setValueM(e.target.value)
                }}
              >
                {Array(12)
                  .fill(0)
                  .map((v, i) => (
                    <option value={i + 1} key={i + 1}>
                      {i + 1}
                    </option>
                  ))}
              </select>
            </div>
            <div className="birthday">
              <label className="form-label displayNone">生日</label>
              <select
                value={valueD}
                onChange={(e) => {
                  setValueD(e.target.value)
                }}
              >
                {Array(31)
                  .fill(0)
                  .map((v, i) => (
                    <option value={i + 1} key={i + 1}>
                      {i + 1}
                    </option>
                  ))}
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
