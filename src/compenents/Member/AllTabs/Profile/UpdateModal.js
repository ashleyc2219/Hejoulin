import React from "react";
import '../../../../styles/Member/Modal/UpdateModal.scss'

const UpdateModal  = ({ pModalShow, setPModalShow, rs }) => {

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
            <div className="displayBlock">
                <div className="profileModal">
                    <div className="close-white" onClick={openModal}>
                        <img src="/ProductList/close-white.svg" alt="" />
                    </div>
                    <div className="mobile-close">
                        <img src="/ProductList/close-black.svg" alt="" />
                    </div>
                    <div
                        className="form-text rsMsg"
                        id="displayRs"
                        style={{
                            color: resultCheck(),
                            display: resultCheck() === 'grey' ? 'inline-block' : 'none',
                        }}
                    >
                        <p>修改成功</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateModal