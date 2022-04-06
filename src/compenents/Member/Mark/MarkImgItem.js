import React, {useState} from "react";

const MarkImgItem = (props) => {
    const { setModalShow, markData, setModalContent, whichMark, setWhichMark} = props
    console.log(props)
    const [currentIndex, setCurrentIndex] = useState(-1)


    const openModal = () => {
        setModalShow((prev) => !prev)
    }

    const renderMarkModal = () => {
        if (markData) {
            return markData.map((el, i) => (
                <div key={i}>
                    <div className="MarkPic" onClick={() => {
                        openModal()
                        setModalContent(el.pics)
                    }} >
                        <img
                            src={'http://localhost:3001/images/mark_pic/' + el.pics}
                            alt=""
                        />
                    </div>
                    <div className="MarkName">
                        <input
                            onClick={(e)=>{setWhichMark(e.target.value)}}
                            type="checkbox"
                            id={el.mark_id}
                            name="cc"
                            value={el.mark_id}
                        />
                        <label htmlFor={el.mark_id}>
                            <span></span>酒標名稱 : {el.mark_name}
                        </label>
                    </div>
                </div>
            ))
        } else {
            return null
        }
    }


    return (
        <>
            {renderMarkModal(markData)}
        </>
    )
}

export default MarkImgItem