import React, {useState} from "react";

const MarkImgItem = (props) => {
    const { setModalShow, markData, setModalContent, whichMark, setWhichMark, whichMark2, setWhichMark2} = props
    console.log(props)
    const [currentIndex, setCurrentIndex] = useState(-1)


    const openModal = () => {
        setModalShow((prev) => !prev)
    }

    async function handleCheckedMark(event) {
        await setWhichMark(event.target.value)
        await setWhichMark2(...whichMark, event.target.value)
        console.log('Checked1 :', whichMark)
        console.log('Checked2 :', whichMark2)
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
                            // onClick={(e)=>{setWhichMark(e.target.value)}}
                            onClick={handleCheckedMark}
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