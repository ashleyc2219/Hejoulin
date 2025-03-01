import React, { useEffect, useState } from 'react'
import Sidebar from '../compenents/Member/SideBar/Sidebar'
import '../styles/Member/MenberMark.scss'
import MarkModal from '../compenents/Member/Mark/MarkModal'
import MarkData from '../compenents/Member/Mark/MarkData'
import { useHistory } from 'react-router-dom'

const MemberMark = () => {
  const [markData, setMarkData] = useState([])
  const [whichMark, setWhichMark] = useState([])
  const APIDelMark = `${process.env.REACT_APP_BACKEND_URL}/api/user/member/MemberMarkDelete`
  const APIMark = `${process.env.REACT_APP_BACKEND_URL}/api/user/member/MemberMark`
  const history = useHistory()

  useEffect(() => {
    ;(async () => {
      const res = await fetch(APIMark, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + localStorage.token,
        },
      })
      const obj = await (await res).json()
      console.log(obj)
      setMarkData(obj)
    })()
  }, [])

  const deleteMark = async () => {
    const data = {
      mark_id: whichMark,
    }
    console.log(data)
    const settings = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.token,
      },
      body: JSON.stringify(data),
    }
    try {
      const fetchResponse = await fetch(APIDelMark, settings)
      const dataRs = await fetchResponse.json()
      console.log(dataRs)
      if (dataRs.success === true) {
        history.go(0)
      }
      //setMarkData(data)
    } catch (err) {
      return err
    }
  }

  let active = true
  const click = () => {
    if (active === true) {
      ;(async function del() {
        await deleteMark(whichMark)
      })()

      active = false
    }
  }
  return (
    <>
      <div className="MemberMark">
        <Sidebar />
        <div className="MemberMarkBox">
          <div className="container">
            <div className="row MemberMarkBar">
              <button className="btn btn-primary btn-delete" onClick={click}>
                刪除所選酒標
              </button>
            </div>
          </div>
          <div className="MemberMarkItems">
            {/* <div className="bgImg">
              <img src="/Member/MarkBgImg.svg" alt="" />
            </div> */}
            <MarkData
              markData={markData}
              setMarkData={setMarkData}
              whichMark={whichMark}
              setWhichMark={setWhichMark}
            />
            <div className="sake">
              <img src="/Member/MarkBg-SAKE.png" className="SakeBg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberMark
