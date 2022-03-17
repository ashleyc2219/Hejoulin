import React from 'react'
import '../../styles/Member/Member-ProfileBox/AddressBox.scss'

const AddressBox = () => {
  return (
    <>
      <div className="AddressBox">
        <p className="AddressFileName">收件資訊一(預設)</p>
        <label className="form-label nameTitle">取件人資訊</label>
        <label className="form-label mobileTitle">電話</label>
        <div className="mb-3 AddressBox-Item">
          <input
            type="text"
            className="form-control input-lastName"
            placeholder="姓氏"
          />
          <input
            type="text"
            className="form-control input-firstName"
            placeholder="名字"
          />
          <input
            type="text"
            className="form-control input-mobile"
            placeholder="0912-3450678"
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
              台北
            </option>
            <option value="coffee">Coffee</option>
            <option value="tea">Tea</option>
            <option value="milk">Milk</option>
          </select>
          <input
            type="text"
            className="form-control input-zip"
            placeholder="郵遞區號"
          />
        </div>
        <div className="mb-3 AddressBox-Item">
          <input
            type="text"
            className="form-control input-address"
            placeholder="台北市大安區仁愛路4段29號1樓"
          />
        </div>
        <br />
        <button className="btn btn-primary address-btn">
          {' '}
          ＋ 新增收件人資訊
        </button>
      </div>
    </>
  )
}

export default AddressBox
