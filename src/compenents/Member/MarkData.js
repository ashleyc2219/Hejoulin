import React, { useState } from 'react'
// import {Modal} from "./Modal";

const MarkData = () => {
  return (
    <>
      <div className="MarkItem">
        <div className="MarkPicDisplay">
          <img src="/Member/MarkEX.svg" alt="" />
        </div>
        <div className="MarkName">
          <input type="checkbox" id="c1" name="cc" />
          <label htmlFor="c1">
            <span></span>酒標名稱 : 我的酒標一
          </label>
        </div>
      </div>
    </>
  )
}

export default MarkData
