import React, { useEffect } from 'react'

const CompareBtn = ({ id, compare, setCompare }) => {
  const pushCompare = (a) => {
    let arr = compare

    if (arr.length < 3 && arr.indexOf(a) === -1) {
      setCompare([...arr, a])
    }
  }

  return (
    <>
      <div
        onClick={() => {
          pushCompare(id)
        }}
        className="compare"
      >
        <img src="/ProductList/add.svg" alt="" />
        <p>比較</p>
      </div>
    </>
  )
}

export default CompareBtn
