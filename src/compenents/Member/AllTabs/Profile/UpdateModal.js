import React from "react";
import '../../../../styles/Member/Modal/UpdateModal.scss'


const UpdateModal = (props) => {
    const {
        setPModalShow,
        rs,
    } = props
    const openModal = () => {
        setPModalShow((prev) => !prev)
    }

    function resultCheck() {
        if (rs && rs.success === true) {
            return 'grey'
        } else {
            return 'red'
        }
    }

    return (
        <>
            <div className="displayBlock" onClick={openModal}>
                <div className="profileModal">
                    <div className="close-white" onClick={openModal}>
                        <img src="/ProductList/close-white.svg" alt=""/>
                    </div>
                    <div className="mobile-close" onClick={openModal}>
                        <img src="/ProductList/close-black.svg" alt=""/>
                    </div>
                    <div
                        className="form-text rsMsg"
                        id="displayRs"
                        style={{
                            color: resultCheck(),
                            display: resultCheck() === 'grey' ? 'inline-block' : 'none',
                        }}
                    >
                        <p>修改成功!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateModal