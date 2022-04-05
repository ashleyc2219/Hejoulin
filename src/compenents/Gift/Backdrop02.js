import React from 'react'
import './Backdrop.scss'

const BackDrop02 = (props) => {
  const { closeModal } = props
  return <div className="backdrop" onClick={closeModal}></div>
}

export default BackDrop02
