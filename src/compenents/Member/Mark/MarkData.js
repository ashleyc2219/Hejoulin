import React, {useEffect, useState} from 'react'
import MarkModal from './MarkModal'
import '../../../styles/Member/Member-Mark/MarkData.scss'
import MarkImgItem from "./MarkImgItem";
import {Link} from "react-router-dom";

const MarkData = (props) => {
    const {markData, whichMark, setWhichMark, whichMark2, setWhichMark2} = props
    const [modalShow, setModalShow] = useState(false)
    const [modalContent, setModalContent] = useState('')

    const renderImg =  (markData) => {
        if (markData && markData.length) {
              return  <MarkImgItem
                    setModalShow={setModalShow}
                    markData={markData}
                    setModalContent={setModalContent}
                    whichMark={whichMark}
                    setWhichMark={setWhichMark}
                    whichMark2={whichMark2}
                    setWhichMark2={setWhichMark2}
                />
        } else {
            return null
        }
    }

    return (
        <>
            <div className="MarkItem">
                <div className="MarkItemAdd">
                    <Link to="/mark/intro">
                        <div className="MarkPicAdd">
                            <img src="/Member/plusCircle.svg" alt=""/>
                        </div>
                        <div className="MarkAddText">立即新增您的專屬酒標</div>
                    </Link>
                </div>
                {markData.length > 0 ? (
                    renderImg(markData)
                ) : (
                    ''
                )}
                {modalShow ? (
                    <MarkModal setModalShow={setModalShow} modalContent={modalContent} />
                ) : (
                    ''
                )}
            </div>
        </>
    )
}

export default MarkData
