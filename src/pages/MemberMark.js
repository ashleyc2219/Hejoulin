import React from 'react'
import Sidebar from '../compenents/Member/Sidebar'
import '../styles/Member/MenberMark.scss'

const MemberMark = () => {
  return (
    <>
      <div className="MemberMark">
        <Sidebar />
        <div className="MemberMarkBox">
          <div className="container">
            <div className="row MemberMarkBar">
              <button className="btn btn-primary btn-delete">
                刪除所選酒標
              </button>
            </div>
          </div>
          <div className="MemberMarkItems">
            <div className="bgImg">
              <img src="/Member/MarkBgImg.svg" alt=""/>
            </div>
            <div className="MarkItemAdd">
              <div className="MarkPicAdd">
                <img src="/Member/plusCircle.svg" alt="" />
              </div>
              <div className="MarkAddText">立即新增您的專屬酒標</div>
            </div>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberMark
