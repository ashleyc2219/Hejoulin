import React, { useState } from 'react'
import Sidebar from '../compenents/Member/Sidebar'
import '../styles/Member/MenberMark.scss'
import MarkModal from '../compenents/Member/MarkModal'
import MarkData from '../compenents/Member/MarkData'

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
              <img src="/Member/MarkBgImg.svg" alt="" />
            </div>
            <div className="MarkItemAdd">
              <div className="MarkPicAdd">
                <img src="/Member/plusCircle.svg" alt="" />
              </div>
              <div className="MarkAddText">立即新增您的專屬酒標</div>
            </div>
            <MarkData />
            <img src="/Member/MarkBg-SAKE.png" className="SakeBg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberMark
