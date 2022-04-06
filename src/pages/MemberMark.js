import React, {useEffect, useState} from 'react'
import Sidebar from '../compenents/Member/SideBar/Sidebar'
import '../styles/Member/MenberMark.scss'
import MarkModal from '../compenents/Member/MarkModal'
import MarkData from '../compenents/Member/MarkData'
import {Link, useHistory} from "react-router-dom";

const MemberMark = () => {
    const [markData, setMarkData] = useState([])
    const [whichMark, setWhichMark] = useState([])
    const APIDelMark = "http://localhost:3001/user/member/MemberMarkDelete"
    const APIMark = "http://localhost:3001/user/member/MemberMark"
    const history = useHistory()
    useEffect(() => {
        ;(async () => {
            const res = await fetch(APIMark,{
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + localStorage.token,
                    },
                }
            )
            const obj = await (await res).json()
            console.log(obj)
            setMarkData(obj)
        })()
    }, [])
    const deleteMark = async () => {
        const data = {
            mark_id: `${whichMark}`,
        }
        console.log(data)
        const settings = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
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
                <Sidebar/>
                <div className="MemberMarkBox">
                    <div className="container">
                        <div className="row MemberMarkBar">
                            <button className="btn btn-primary btn-delete" onClick={click}>
                                刪除所選酒標
                            </button>
                        </div>
                    </div>
                    <div className="MemberMarkItems">
                        <div className="bgImg">
                            <img src="/Member/MarkBgImg.svg" alt=""/>
                        </div>
                        <MarkData
                            markData={markData}
                            setMarkData={setMarkData}
                            whichMark={whichMark}
                            setWhichMark={setWhichMark}
                        />
                        <img src="/Member/MarkBg-SAKE.png" className="SakeBg" alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MemberMark
