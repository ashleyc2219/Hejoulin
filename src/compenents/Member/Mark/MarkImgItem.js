import React, {useState} from "react";

const MarkImgItem = (props) => {
    const { setModalShow, markData, setModalContent, whichMark, setWhichMark} = props
    console.log(props)
    const [currentIndex, setCurrentIndex] = useState(-1)


    const openModal = () => {
        setModalShow((prev) => !prev)
    }

    const handleCheck = (event) => {
        let updatedList = [...whichMark];
        if (event.target.checked) {
            updatedList = [...whichMark, event.target.value];
        } else {
            updatedList.splice(whichMark.indexOf(event.target.value), 1);
        }
        setWhichMark(updatedList);
        console.log(whichMark)
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
                            src={`${process.env.REACT_APP_BACKEND_URL}/images/mark_pic/` + el.pics}
                            alt=""
                        />
                    </div>
                    <div className="MarkName">
                        <input
                            onChange={handleCheck}
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