import React, {useEffect, useState} from 'react'
import MarkModal from './MarkModal'
import '../../styles/Member/Member-Mark/MarkData.scss'

const MarkData = (props) => {
    const {markData, setMarkData} = props
    const [modalShow, setModalShow] = useState(false)
    const [currentPic, setCurrentPic] = useState([])
    const [picsName, setPicsName] = useState([])
    const openModal = () => {
        setModalShow((prev) => !prev)
    }

    const renderImg = async (markData) => {
        if (markData && markData.length) {
            return await markData.map((el, i) => (
                <div className="MarkPic" onClick={openModal} key={i}>
                    <img
                        src={'http://localhost:3001/images/mark_pic/' + el.pics}
                        alt=""
                    />
                </div>
            ))
        }
    }

    const renderImgName = (markData) => {
        if (markData && markData.length) {
            return markData.map((el, i) => (
                <div className="MarkName" key={i}>
                    <input type="checkbox" id="c1" name="cc"/>
                    <label htmlFor="c1">
                        <span></span>酒標名稱 : {el.mark_name}
                    </label>
                </div>
            ))
        }
    }

    return (
        <>
            <div className="MarkItem">
                {/*{markData.length > 0 ? (*/}
                {/*    renderImg(markData)*/}
                {/*) : (*/}
                {/*    ''*/}
                {/*)}*/}
                {/*{markData.length > 0 ? (*/}
                {/*    renderImgName(markData)*/}
                {/*) : (*/}
                {/*    ''*/}
                {/*)}*/}
                {modalShow ? (
                    <MarkModal
                        modalShow={modalShow}
                        setModalShow={setModalShow}
                        markData={markData}
                        setMarkData={setMarkData}
                    />
                ) : (
                    ''
                )}
            </div>
        </>
    )
}

export default MarkData
