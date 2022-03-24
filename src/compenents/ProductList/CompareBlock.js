import { clear } from '@testing-library/user-event/dist/clear'
import React, { useEffect, useState } from 'react'
import './../../compenents/ProductList/CompareBlock.scss'

const CompareBlock = ({
  up,
  compare,
  setCompare,
  comparemodal,
  setComparemodel,
  reload,
  setReload,
  comparePro1,
  setComparePro1,
  comparePro2,
  setComparePro2,
  comparePro3,
  setComparePro3,
}) => {
  const fetch1 = async () => {
    if (compare[0] === undefined || compare[0] === []) return false
  
    const url =
      'http://localhost:3001/api/products-sake/item-detail?pro_id=' + compare[0]

    const res = await fetch(url)
    const fetchedData = await res.json()
    const test = fetchedData
    setComparePro1(test)
  }

  let product1 = comparePro1.map(function (v, i) {
    return (
      <div key={i} className="product">
        <img src={'http://localhost:3001/images/pro_img/' + v.pro_img} alt="" />
        <p className="name">{v.pro_name}</p>
        <div className="shadow"></div>
        <img
          onClick={() => {
            test(v.pro_id)
          }}
          src="/ProductList/remove.svg"
          alt=""
          className="remove"
        />
      </div>
    )
  })
  const fetch2 = async () => {
    if (compare[1] === undefined || compare[1] === '') return false
    const url =
      'http://localhost:3001/api/products-sake/item-detail?pro_id=' + compare[1]

    const res = await fetch(url)
    const fetchedData = await res.json()
    const test = fetchedData
    setComparePro2(test)
  }

  let product2 = comparePro2.map(function (v, i) {
    return (
      <div key={i} className="product">
        <img src={'http://localhost:3001/images/pro_img/' + v.pro_img} alt="" />
        <p className="name">{v.pro_name}</p>
        <div className="shadow"></div>
        <img
          onClick={() => {
            test(v.pro_id)
          }}
          src="/ProductList/remove.svg"
          alt=""
          className="remove"
        />
      </div>
    )
  })
  const fetch3 = async () => {
    if (compare[2] === undefined || compare[2] === '') return false
    const url =
      'http://localhost:3001/api/products-sake/item-detail?pro_id=' + compare[2]

    const res = await fetch(url)
    const fetchedData = await res.json()
    const test = fetchedData
    setComparePro3(test)
  }

  let product3 = comparePro3.map(function (v, i) {
    return (
      <div key={i} className="product">
        <img src={'http://localhost:3001/images/pro_img/' + v.pro_img} alt="" />
        <p className="name">{v.pro_name}</p>
        <div className="shadow"></div>
        <img
          onClick={() => {
            test(v.pro_id)
          }}
          src="/ProductList/remove.svg"
          alt=""
          className="remove"
        />
      </div>
    )
  })

  const test = (a) => {
    const arr = compare
    const arr1 = []
    arr.splice(arr.indexOf(a), 1)
    //setCompare([])
    console.log([...arr1, arr][0])
    setCompare([...arr1, arr][0])
    setReload(reload + 1)
  }

  const clear = () => {
    setComparePro1([])
    setComparePro2([])
    setComparePro3([])
  }

  useEffect(() => {
    /* if (compare.length > 0) {
      console.log(compare)
      fetch1()
      fetch2()
      fetch3()
    } */
    ;(async () => {
      await clear()
      await fetch1()
      await fetch2()
      await fetch3()
    })()
  }, [compare, reload])

  return (
    <>
      <div className={up ? 'compare-block up' : 'compare-block'}>
        <div className="compare-wrap">
          {/* <div className="product">
            <img src="/ProductList/product.png" alt="" />
            <p className="name">篠峯 雄町純米大吟醸</p>
            <div className="shadow"></div>
            <img src="/ProductList/remove.svg" alt="" className="remove" />
          </div> */}
          {product1}
          {product2}
          {product3}
          <button
            onClick={() => {
              setComparemodel(!comparemodal)
            }}
            className="compare btn-primary btn-sm btn"
          >
            比較
          </button>
        </div>
      </div>
    </>
  )
}

export default CompareBlock
