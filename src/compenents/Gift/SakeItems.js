import React, { useState, useEffect } from 'react'
import './SakeItems.scss'

import ProductModal from './ProductModal'
import Backdrop from './Backdrop'
import Cards from './Cards'
import Gift from '../../pages/Gift'

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
    setStep,
    setSakeId2,
    setName2,
    setPrice2,
    setImg2,
    sakeId,
    sakeId2,
    setSakeId,
    setName,
    setPrice,
    setImg,
    GiftLink,
    setBlock02,
    height,
  } = props

  const minus = () => {
    value.current -= 1
  }

  const items = sake.map((v, i) => {
    return (
      <React.Fragment key={i}>
        <Cards
          modalShow={modalShow}
          showHandle={showHandle}
          closeHandle={closeHandle}
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
          minus={minus}
          setStep={setStep}
          setSakeId2={setSakeId2}
          setName2={setName2}
          setPrice2={setPrice2}
          setImg2={setImg2}
          sakeId={sakeId}
          sakeId2={sakeId2}
          setSakeId={setSakeId}
          setName={setName}
          setPrice={setPrice}
          setImg={setImg}
          GiftLink={GiftLink}
          setBlock02={setBlock02}
          height={height}
        />
      </React.Fragment>
    )
  })

  return (
    <>
      {modalShow && (
        <ProductModal
          modalShow={modalShow}
          closeHandle={closeHandle}
          id={id}
          kind={kind}
        />
      )}
      {modalShow && <Backdrop closeHandle={closeHandle} />}
      {items}
    </>
  )
}

export default SakeItems
