import React, { useEffect, useState } from 'react'
import '../../../../styles/Member/Member-ProfileBox/AddressBox.scss'

const AddressBox = ({ memberData, setMemberData }) => {
  const APIUpdateAddr = 'http://localhost:3001/user/member/addressChange'

  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [addr, setAddr] = useState('')
  const [result, setResult] = useState('')
  const [mName, setMName] = useState('')
  const [mMob, setMMob] = useState('')

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

  const memberAddress = (memberData) => {
    if (memberData && memberData.length) {
      return memberData.map((el) => el.member_addr.slice(6))
    }
  }

  const memberZip = (memberData) => {
    if (memberData && memberData.length) {
      return memberData.map((el) => el.member_addr.slice(3, 6))
    }
  }

  const memberCity = (memberData) => {
    if (memberData && memberData.length) {
      return memberData.map((el) => el.member_addr.slice(0, 3))
    }
  }

  useEffect(() => {
    setCity(memberCity(memberData))
    setZip(memberZip(memberData))
    setAddr(memberAddress(memberData))
    setMName(memberName(memberData))
    setMMob(memberMobile(memberData))
  }, [memberData])

  const whenAddressSub = async (event) => {
    event.preventDefault() //避免傳統方式送出表單
    const fd = new FormData(document.formA)
    let obj = {}
    fd.forEach(function (value, key) {
      obj[key] = value
    })
    const json = JSON.stringify(obj)
    console.log(json)
    const memberUpdate = await fetch(APIUpdateAddr, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.token,
      },
      body: json,
    })
    const updateAction = await memberUpdate.json()
    if (updateAction.success === true) {
      // 更新成功
      setResult(updateAction)
    }
  }

  function resultCheck() {
    if (result && result.success === true) {
      return 'grey'
    } else {
      return 'red'
    }
  }

  return (
    <>
      <div className="AddressBox">
        <p className="AddressFileName">收件資訊一(預設)</p>
        <label className="form-label nameTitle">取件人資訊</label>
        <label className="form-label mobileTitle">電話</label>
        <div className="mb-3 AddressBox-Item">
          <input
            type="text"
            className="form-control input-firstName"
            id="member_name"
            name="member_name"
            key="memberName"
            value={mName}
            onChange={(e) => {
              setMName(e.target.value)
            }}
          />
          <input
            type="text"
            className="form-control input-mobile"
            id="member_mob"
            name="member_mob"
            key="memberMopb"
            value={mMob}
            onChange={(e) => {
              setMMob(e.target.value)
            }}
          />
        </div>
        <br />
        <form name="formA" onSubmit={whenAddressSub}>
          <label className="form-label">取件地址</label>
          <div className="mb-3 AddressBox-Item">
            <select
              className="decorated dropDown-city"
              name="member_city"
              value={city}
              onChange={(e) => {
                setCity(e.target.value)
              }}
              required
            >
              <option value="" disabled selected hidden>
                {memberCity(memberData)}
              </option>
              <option value="台北市">台北市</option>
              <option value="基隆市">基隆市</option>
              <option value="新北市">新北市</option>
              <option value="宜蘭縣">宜蘭縣</option>
              <option value="桃園市">桃園市</option>
              <option value="新竹市">新竹市</option>
              <option value="新竹縣">新竹縣</option>
              <option value="苗栗縣">苗栗縣</option>
              <option value="臺中市">臺中市</option>
              <option value="彰化縣">彰化縣</option>
              <option value="南投縣">南投縣</option>
              <option value="嘉義市">嘉義市</option>
              <option value="嘉義縣">嘉義縣</option>
              <option value="雲林縣">雲林縣</option>
              <option value="臺南市">臺南市</option>
              <option value="高雄市">高雄市</option>
              <option value="澎湖縣">澎湖縣</option>
              <option value="金門縣">金門縣</option>
              <option value="屏東縣">屏東縣</option>
              <option value="臺東縣">臺東縣</option>
              <option value="花蓮縣">花蓮縣</option>
              <option value="連江縣">連江縣</option>
            </select>
            <input
              type="text"
              className="form-control input-zip"
              id="member_zip"
              name="member_zip"
              key="memberZip"
              value={zip}
              onChange={(e) => {
                setZip(e.target.value)
              }}
            />
          </div>
          <div className="mb-3 AddressBox-Item">
            <input
              type="text"
              className="form-control input-address"
              id="member_address"
              name="member_address"
              key="memberAddress"
              value={addr}
              onChange={(e) => {
                setAddr(e.target.value)
              }}
            />
          </div>
          <div
            className="form-text rsMsg"
            id="displayRs"
            style={{
              color: resultCheck(),
              display: resultCheck() === 'grey' ? 'inline-block' : 'none',
            }}
          >
            修改成功
          </div>
          <br />
          <button type="submit" className="btn btn-primary address-btn">
            {' '}
            ＋ 新增收件人資訊
          </button>
        </form>
      </div>
    </>
  )
}

export default AddressBox
