import React, {useEffect, useState} from 'react'
import Sidebar from '../compenents/Member/SideBar/Sidebar'
import '../styles/Member/MenberMark.scss'
import MarkModal from '../compenents/Member/MarkModal'
import MarkData from '../compenents/Member/MarkData'
import {Link, useHistory} from "react-router-dom";

const MemberMark = () => {
    const [markData, setMarkData] = useState([])
    const APIDelMark = "http://localhost:3001/user/member/MemberMarkDelete"
    const history = useHistory()
    useEffect(() => {
        ;(async () => {
            const res = await fetch(
                'http://localhost:3001/user/member/MemberMark',{
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
            member_id: `${markData[0].member_id}`,
            mark_name: `${markData[0].mark_name}`,
        }
        console.log(data)
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        try {
            const fetchResponse = await fetch(APIDelMark, settings)
            const data = await fetchResponse.json()
            console.log(data)
            if (data.success === true) {
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
                await deleteMark()
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
                        <div className="MarkItemAdd">
                            <Link to="/mark/intro">
                                <div className="MarkPicAdd">
                                    <img src="/Member/plusCircle.svg" alt=""/>
                                </div>
                                <div className="MarkAddText">立即新增您的專屬酒標</div>
                            </Link>
                        </div>
                        <MarkData markData={markData} setMarkData={setMarkData}/>
                        <img src="/Member/MarkBg-SAKE.png" className="SakeBg" alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MemberMark
