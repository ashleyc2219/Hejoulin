import React, {useEffect, useState} from 'react'
import '../../../../styles/Member/Member-ProfileBox/ProfileBox.scss'
import UpdateModal from "./UpdateModal";

const ProfileBox = ({memberData, setMemberData}) => {
    const APIUpdate = 'http://localhost:3001/user/member/Change'

    const [valueY, setValueY] = useState('')
    const [valueM, setValueM] = useState('')
    const [valueD, setValueD] = useState('')
    const [rs, setRs] = useState(undefined)
    const [mob, setMob] = useState('')
    const [name, setName] = useState('')
    const [pModalShow, setPModalShow] = useState(false)

    useEffect(() => {
        ;(async () => {
            const obj = await (
                await fetch('http://localhost:3001/user/member', {
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + localStorage.token,
                    },
                })
            ).json()
            setMemberData(obj)
            setMob(obj[0].member_mob)
            setName(obj[0].member_name)
        })()
    }, [])

    const userAccount = (memberData) => {
        if (memberData && memberData.length) {
            return memberData.map((el) => el.user_account)
        }
    }
    const memberBirthdayY = (memberData) => {
        if (memberData && memberData.length) {
            if (memberData[0].member_bir === null) {
                return ''
            }
            return memberData.map((el) => el.member_bir.slice(0, 4))
        }
    }
    const memberBirthdayM = (memberData) => {
        if (memberData && memberData.length) {
            if (memberData[0].member_bir === null) {
                return ''
            }
            return memberData.map((el) => el.member_bir.slice(6, 7))
        }
    }
    const memberBirthdayD = (memberData) => {
        if (memberData && memberData.length) {
            if (memberData[0].member_bir === null) {
                return ''
            }
            return memberData.map((el) => el.member_bir.slice(9, 10))
        }
    }
    useEffect(() => {
        setValueY(memberBirthdayY(memberData))
        setValueM(memberBirthdayM(memberData))
        setValueD(memberBirthdayD(memberData))
    }, [memberData])

    const whenMemberProfileSub = async (event) => {
        event.preventDefault() //避免傳統方式送出表單
        const fd = new FormData(document.formM)
        let obj = {}
        fd.forEach(function (value, key) {
            obj[key] = value
        })
        const json = JSON.stringify(obj)
        const memberUpdate = await fetch(APIUpdate, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.token,
            },
            body: json,
        })
        const updateAction = await memberUpdate.json()
        if (updateAction.success === true) {
            // 更新成功
            setRs(updateAction)
            setPModalShow((prev) => !prev)
        }
    }


    return (
        <>
            <div className="ProfileBox">
                <div className="mb-3 ProfileBox-Item">
                    <label className="form-label">帳號 / 電子郵件</label>
                    <input
                        type="email"
                        className="form-control"
                        value={userAccount(memberData)}
                        readOnly
                    />
                </div>
                <br/>
                <form name="formM" onSubmit={whenMemberProfileSub}>
                    <div className="mb-3 ProfileBox-Item">
                        <label className="form-label">姓名</label>
                        <input
                            type="text"
                            className="form-control"
                            id="member_name"
                            name="member_name"
                            key="memberName"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                        <div className="form-text displayNone">錯誤/提示訊息</div>
                    </div>
                    <br/>
                    <div className="mb-3 ProfileBox-Item">
                        <label className="form-label">手機號碼</label>
                        <input
                            type="text"
                            className="form-control"
                            id="member_mob"
                            name="member_mob"
                            key="memberMob"
                            value={mob}
                            onChange={(e) => {
                                setMob(e.target.value)
                            }}
                        />
                        <div className="form-text displayNone">錯誤/提示訊息</div>
                    </div>
                    <br/>
                    <div className="mb-3 ProfileBox-Item ProfileBox-Item-Last">
                        {/* 這裡我多包了一層div 提示訊息拉到外面 改成項figma那樣 */}
                        <div className="birthday">
                            <label className="form-label">生日</label>
                            <select
                                value={valueY}
                                onChange={(e) => {
                                    setValueY(e.target.value)
                                }}
                                name="birY"
                                defaultValue={valueY}
                            >
                                {Array(122)
                                    .fill(0)
                                    .map((v, i) => (
                                        <option value={i + 1900} key={i + 1900}>
                                            {i + 1900}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className="birthday">
                            <label className="form-label displayNone">生日</label>
                            <select
                                value={valueM}
                                onChange={(e) => {
                                    setValueM(e.target.value)
                                }}
                                name="birM"
                                defaultValue={valueM}
                            >
                                {Array(12)
                                    .fill(0)
                                    .map((v, i) => (
                                        <option value={i + 1} key={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className="birthday">
                            <label className="form-label displayNone">生日</label>
                            <select
                                value={valueD}
                                onChange={(e) => {
                                    setValueD(e.target.value)
                                }}
                                name="birD"
                                defaultValue={valueD}
                            >
                                {Array(31)
                                    .fill(0)
                                    .map((v, i) => (
                                        <option value={i + 1} key={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary profile-btn">
                        確認修改資料
                    </button>
                </form>
                {pModalShow ? (
                    <UpdateModal
                        pModalShow={pModalShow}
                        setPModalShow={setPModalShow}
                        rs={rs}
                    />
                ) : (
                    ''
                )}
            </div>
        </>
    )
}

export default ProfileBox
