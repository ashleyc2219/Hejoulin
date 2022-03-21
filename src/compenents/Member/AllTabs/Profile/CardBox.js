import React from 'react'
import '../../../../styles/Member/Member-ProfileBox/CardBox.scss'

const CardBox = () => {
  return (
    <>
      <div className="CardBox">
        <div className="CardImg">
          <img src="/Member/VisaCard.svg" alt="" />
        </div>
        <div className="CardBox-Items">
          <div className="mb-3 CardBox-Item">
            <label className="form-label">信用卡卡號</label>
            <input
              type="text"
              className="form-control card-number"
              placeholder="0000 0000 0000 0000"
            />
          </div>
          <div className="mb-3 CardBox-Item-date row">
            <div>
              <label className="form-label">有效年月</label>
              <input
                type="text"
                className="form-control card-validity"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="form-label">安全碼</label>
              <input
                type="text"
                className="form-control safety-code"
                placeholder="000"
              />
            </div>
          </div>
          <div className="mb-3 CardBox-Item">
            <label className="form-label">持卡人姓名</label>
            <input
              type="text"
              className="form-control owner-name"
              placeholder="Kaneshiro Takeshi"
            />
          </div>
          <br />
          <button className="btn btn-primary Card-btn">確認修改</button>
        </div>
      </div>
    </>
  )
}

export default CardBox
