import React from 'react'
import './Backdrop.scss'

const BackDrop = (props) => {
  const { closeHandle } = props
  return <div className="backdrop" onClick={closeHandle}></div>
}

export default BackDrop
