import React, {useEffect, useState} from 'react'
import '../../../../styles/Member/Member-ProfileBox/AddressBox.scss'
import UpdateModal from "./UpdateModal";


const AddressBox = ({memberData, setMemberData}) => {
    const APIUpdateAddr = 'http://localhost:3001/user/member/addressChange'

    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const [addr, setAddr] = useState('')
    const [result, setResult] = useState('')
    const [mName, setMName] = useState('')
    const [mMob, setMMob] = useState('')
    const [addrModalShow, setAddrModalShow] = useState(false)
    const [addrRs, setAddrRs] = useState(false)


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
        })()
    }, [])

    const memberName = (memberData) => {
        if (memberData && memberData.length) {
            return memberData.map((el) => el.member_name)
        }
    }

    const memberMobile = (memberData) => {
        if (memberData && memberData.length) {
            return memberData.map((el) => el.member_mob)
        }
    }

    const memberAddress = (memberData) => {
        if (memberData && memberData.length) {
            if (memberData[0].member_addr === null) {
                return ''
            }
            return memberData.map((el) => el.member_addr.slice(6))
        }
    }

    const memberZip = (memberData) => {
        if (memberData && memberData.length) {
            if (memberData[0].member_addr === null) {
                return ''
            }
            return memberData.map((el) => el.member_addr.slice(3, 6))
        }
    }

    const memberCity = (memberData) => {
        if (memberData && memberData.length) {
            if (memberData[0].member_addr === null) {
                return ''
            }
            return memberData.map((el) => el.member_addr.slice(0, 3))
        }
    }

    useEffect(() => {
        setCity(memberCity(memberData))
        setZip(memberZip(memberData))
        setAddr(memberAddress(memberData))
        setMName(memberName(memberData))
        setMMob(memberMobile(memberData))
    }, [memberData])

    const whenAddressSub = async (event) => {
        event.preventDefault() //??????????????????????????????
        const fd = new FormData(document.formA)
        let obj = {}
        fd.forEach(function (value, key) {
            obj[key] = value
        })
        const json = JSON.stringify(obj)
        console.log(json)
        const memberUpdate = await fetch(APIUpdateAddr, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.token,
            },
            body: json,
        })
        const updateAction = await memberUpdate.json()
        if (updateAction.success === true) {
            // ????????????
            setResult(updateAction)
        }
    }

    function resultCheck() {
        if (result && result.success === true) {
            return 'grey'
        } else {
            return 'red'
        }
    }

    return (
        <>
            <div className="AddressBox">
                <p className="AddressFileName">???????????????(??????)</p>
                <label className="form-label nameTitle">???????????????</label>
                <label className="form-label mobileTitle">??????</label>
                <div className="mb-3 AddressBox-Item">
                    <input
                        type="text"
                        className="form-control input-firstName"
                        id="member_name"
                        name="member_name"
                        key="memberName"
                        value={mName}
                        onChange={(e) => {
                            setMName(e.target.value)
                        }}
                    />
                    <input
                        type="text"
                        className="form-control input-mobile"
                        id="member_mob"
                        name="member_mob"
                        key="memberMopb"
                        value={mMob}
                        onChange={(e) => {
                            setMMob(e.target.value)
                        }}
                    />
                </div>
                <br/>
                <form name="formA" onSubmit={whenAddressSub}>
                    <label className="form-label">????????????</label>
                    <div className="mb-3 AddressBox-Item">
                        <select
                            className="decorated dropDown-city"
                            name="member_city"
                            value={city}
                            onChange={(e) => {
                                setCity(e.target.value)
                            }}
                            required
                        >
                            <option value="" disabled selected hidden>
                                {memberCity(memberData)}
                            </option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                        </select>
                        <input
                            type="text"
                            className="form-control input-zip"
                            id="member_zip"
                            name="member_zip"
                            key="memberZip"
                            value={zip}
                            onChange={(e) => {
                                setZip(e.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3 AddressBox-Item">
                        <input
                            type="text"
                            className="form-control input-address"
                            id="member_address"
                            name="member_address"
                            key="memberAddress"
                            value={addr}
                            onChange={(e) => {
                                setAddr(e.target.value)
                            }}
                        />
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary address-btn">
                        {' '}
                        ??? ?????????????????????
                    </button>
                </form>
                {addrModalShow ? (
                    <UpdateModal
                        addrModalShow={addrModalShow}
                        setAddrModalShow={setAddrModalShow}
                        addrRs={addrRs}
                    />
                ) : (
                    ''
                )}
            </div>
        </>
    )
}

export default AddressBox
