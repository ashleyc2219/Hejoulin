import React from 'react'

const Detail = (props) => {
  const { name2, price2, currentCon, kind, quality } = props
  return (
    <>
      <p className="text color">
        {kind === 2 && name2}
        {kind === 3 && currentCon}
      </p>
      <p className="quality color">
        {kind === 2 && quality + '瓶'}
        {kind === 3 && quality + '組'}
      </p>
      <div className="price color">
        {kind === 2 && price2 * quality}
        {kind === 3 && 600 * quality}
      </div>
    </>
  )
}

export default Detail
