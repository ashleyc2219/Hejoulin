import React from 'react'
import ProfileItem from './ProfileItems'
import '../../styles/Member/Member-ProfileBox/ProfileBox.scss'

const ProfileBox = () => {
  const birthOption = (items) =>
    items.map((item, i) => <option value={item.itemName} key={i}>{item.itemName}</option>)
  return (
    <>
      <div className="ProfileBox">
        <div className="mb-3 ProfileBox-Item">
          <label className="form-label">帳號 / 電子郵件</label>
          <input
            type="email"
            className="form-control"
            placeholder="test001@test001"
          />
          <div className="form-text">錯誤/提示訊息</div>
        </div>
        <br />
        <div className="mb-3 ProfileBox-Item">
          <label className="form-label">姓名</label>
          <input type="text" className="form-control" placeholder="test" />
          <div className="form-text">錯誤/提示訊息</div>
        </div>
        <br />
        <div className="mb-3 ProfileBox-Item">
          <label className="form-label">手機號碼</label>
          <input
            type="text"
            className="form-control"
            placeholder="0912332145"
          />
          <div className="form-text">錯誤/提示訊息</div>
        </div>
        <br />
        <div className="mb-3 ProfileBox-Item">
          <label className="form-label">生日</label>
          <br />
          <select className="decorated" required>
            <option value="" disabled selected hidden>
              月
            </option>
            {birthOption(ProfileItem)}
          </select>
          {/*<select className="decorated" name="drinks" required>*/}
          {/*  <option value="" disabled selected hidden>*/}
          {/*    年*/}
          {/*  </option>*/}
          {/*  <option value="coffee">Coffee</option>*/}
          {/*  <option value="tea">Tea</option>*/}
          {/*  <option value="milk">Milk</option>*/}
          {/*</select>*/}
          <div className="form-text">錯誤/提示訊息</div>
        </div>
        <br />
        <button className="btn btn-primary profile-btn">確認修改資料</button>
      </div>
    </>
  )
}

export default ProfileBox
