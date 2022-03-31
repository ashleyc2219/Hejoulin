import React, { useEffect } from 'react'
import '../../../../styles/Member/Member-ProfileBox/AddressBox.scss'

const AddressBox = ({ memberData, setMemberData }) => {
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
      return memberData.map((el) => el.member_addr.slice(0, 2))
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
            placeholder={memberName(memberData)}
          />
          <input
            type="text"
            className="form-control input-mobile"
            placeholder={memberMobile(memberData)}
          />
        </div>
        <br />
        <label className="form-label">取件地址</label>
        <div className="mb-3 AddressBox-Item">
          <select className="decorated" name="drinks" required>
            <option value="" disabled selected hidden>
              台灣
            </option>
            <option value="coffee">Coffee</option>
            <option value="tea">Tea</option>
            <option value="milk">Milk</option>
          </select>
          <select className="decorated dropDown-city" name="drinks" required>
            <option value="" disabled selected hidden>
              {memberCity(memberData)}
            </option>
            <option value="coffee">新北市</option>
            <option value="tea">桃園市</option>
            <option value="milk">新竹市</option>
          </select>
          <input
            type="text"
            className="form-control input-zip"
            placeholder={memberZip(memberData)}
          />
        </div>
        <div className="mb-3 AddressBox-Item">
          <input
            type="text"
            className="form-control input-address"
            placeholder={memberAddress(memberData)}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary address-btn">
          {' '}
          ＋ 新增收件人資訊
        </button>
      </div>
    </>
  )
}

export default AddressBox
