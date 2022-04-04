import React from 'react'

const BackDrop = (props) => {
  const { closeHandle } = props
  return <div className="backdrop" onClick={closeHandle} />
}

export default BackDrop
