import React, { useState, useEffect } from 'react'
import './SakeItems.scss'

import SakeButton from './SakeButton'
import ProductModal from './ProductModal'
import SakeButtonSingle from './SakeButtonSingle'
import Cards from './Cards'

const SakeItems = (props) => {
  const {
    container,
    setContainer,
    modalShow,
    showHandle,
    closeHandle,
    sake,
    id,
    setId,
    kind,
    value,
    setConShadow,
    conShadow,
    currentId,
    setCurrentId,
    currentCon,
    setCurrentCon,
    currentImg,
    setCurrentImg,
    currentName,
    setCurrentName,
    currentPrice,
    setCurrentPrice,
    cancel,
    setStep,
    setSakeId2,
    setName2,
    setPrice2,
    setImg2,
    sakeId,
    sakeId2,
  } = props

  const minus = () => {
    value.current -= 1
  }

  const items = sake.map((v, i) => {
    return (
      <React.Fragment key={i}>
        <Cards
          showHandle={showHandle}
          id={id}
          setId={setId}
          i={i}
          pro_id={v.pro_id}
          img={v.pro_img}
          container_img={v.container_img}
          name={v.pro_name}
          price={v.pro_price}
          conImgShadow={v.container_shadow}
          conName={v.container_name}
          kind={kind}
          conShadow={conShadow}
          setConShadow={setConShadow}
          currentCon={currentCon}
          setCurrentId={setCurrentId}
          setCurrentImg={setCurrentImg}
          setCurrentName={setCurrentName}
          setCurrentPrice={setCurrentPrice}
          setCurrentCon={setCurrentCon}
          currentPrice={currentPrice}
          currentName={currentName}
          currentId={currentId}
          currentImg={currentImg}
          value={value}
          cancel={cancel}
          minus={minus}
          setStep={setStep}
          setSakeId2={setSakeId2}
          setName2={setName2}
          setPrice2={setPrice2}
          setImg2={setImg2}
          sakeId={sakeId}
          sakeId2={sakeId2}
        />
      </React.Fragment>
    )
  })

  return (
    <>
      {modalShow ? (
        <ProductModal modalShow={modalShow} closeHandle={closeHandle} id={id} />
      ) : (
        ''
      )}
      {items}
    </>
  )
}

export default SakeItems
