import React from 'react'
import ProgressBar from "../compenents/Cart/ProgressBar";
import ListSelection from "../compenents/Cart/ListSelection";
import {Link} from "react-router-dom";

const MemberOrderListDetail = () => {
  const stepContent = ['購物車', '填寫資訊', '訂單成立']
  const member_id = 4

  return (
      <>
        <div className="CartList">
          <div className="CartList-container">
            <ProgressBar step="one" content={stepContent} />
            <div className="cart-list">
              {/* {console.log('list: ', sakeIncart)} */}
              {/*{renderSakeItems(sakeIncart)}*/}
              {/*{renderGiftItems(giftIncart)}*/}
            </div>
            <div className="cart-form">
              <div className="form-left">
                <div className="shipment">
                  <ListSelection
                      // shipMethod={shipMethod}
                      // setShipMethod={setShipMethod}
                      // island={island}
                      // setIsland={setIsland}
                      // township={township}
                      // setTownship={setTownship}
                      // oneWarning={oneWarning}
                      // twoWarning={twoWarning}
                  />
                </div>

                <div className="discount">
                  <h5>折扣碼</h5>
                  <div className="discount-container">
                    <div className="discount-input">
                      <input
                          type="text"
                          className="form-control"
                          placeholder="輸入折扣碼"
                          onChange={(e) => {
                            // setDiscountCode(e.target.value)
                          }}
                          // onKeyPress={enter}
                      />
                      {/*{discountMsg !== 0 ? (*/}
                          <div className="form-text">
                            {/*{discountMsg}*/}
                          </div>
                      {/*) : (*/}
                          <div className="form-text"></div>
                      {/*)}*/}
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                          // fetchDiscountCode(discountCode)
                        }}
                    >
                      使用折扣碼
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-right">
                <div className="order-summary">
                  <h5>訂單資訊</h5>
                  <div className="order-summary-table">
                    <div className="table-row">
                      <p>小計</p>
                      {/*<p className="dollar-sign">{sakeTotal + giftTotal}</p>*/}
                    </div>
                    <div className="table-row">
                      <p>折扣碼</p>
                      {/*<p>{discountPerscent !== 1 ? discountMsg : ''}</p>*/}
                    </div>
                    <div className="table-row">
                      <p>運費</p>
                      {/*<p className="dollar-sign">{shipFee}</p>*/}
                    </div>
                    <div className="table-row">
                      <p>總計</p>
                      {/*<p className="dollar-sign total">{allTotal}</p>*/}
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <Link to="/product/list">
                    <button className="btn btn-primary">繼續購物</button>
                  </Link>

                  {/*{passThrough === true ? (*/}
                      <Link to="/cart/info">
                        <button
                            className="btn btn-secondary"
                            // onClick={CartSummaryData}
                        >
                          結帳
                        </button>
                      </Link>
                  {/*) : (*/}
                {/*      <button className="btn btn-secondary" onClick={warningRed}>*/}
                {/*        結帳*/}
                {/*      </button>*/}
                {/*  )}*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default MemberOrderListDetail
