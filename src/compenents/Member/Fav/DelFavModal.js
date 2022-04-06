import React from "react";
import '../../../styles/Member/Modal/DelFavModal.scss'


const DelFavModal = (props) => {
    const { favModalShow, setFavModalShow, favRs } = props
    const openModal = () => {
        setFavModalShow((prev) => !prev)
    }

    function resultCheck() {
        if (favRs && favRs.success === true) {
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
                        <p> 取消成功!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DelFavModal