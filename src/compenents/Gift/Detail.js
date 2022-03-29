import React from 'react'

const Detail = (props) => {
  const { name2, price2, conName, kind } = props
  return (
    <>
      <p className="text color">{ name2 }</p>
      <p className="quality color">1瓶</p>
      <div className="price color">{ price2 }</div>
      {/* <p className="text color">{kind === 2 ? { name2 } : { conName }}</p>
      <p className="quality color">{kind === 2 ? '1瓶' : '1組'}</p>
      <div className="price color">{kind === 2 ? { price2 } : 600}</div> */}
    </>
  )
}

export default Detail
