import React from 'react'

const BackDrop = (props) => {
  const { closeModal } = props
  return <div className="backdrop" onClick={closeModal} />
}

export default BackDrop
