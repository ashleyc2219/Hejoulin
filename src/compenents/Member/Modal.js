import React, { useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(44, 48, 52, 0.75);
  position: fixed;
  justify-content: center;
  align-items: center;
`

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`

const CloseModalButton = styled.img`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`
export const Modal = ({ modalShow, setModalShow }) => {
  const modalRef = useRef()

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: modalShow ? 1 : 0,
    transform: modalShow ? `translateY(0%)` : `translateY(-100%)`,
  })

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setModalShow(false)
    }
  }

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && modalShow) {
        setModalShow(false)
        console.log('I pressed')
      }
    },
    [setModalShow, modalShow]
  )

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])
  return (
    <>
      {modalShow ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={modalShow}>
              <ModalImg src="/Member/MarkEX.svg" alt="yourMark" />
              <CloseModalButton
                aria-label="Close Modal"
                onclick={() => setModalShow((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  )
}
