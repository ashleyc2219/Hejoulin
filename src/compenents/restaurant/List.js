import React from 'react'

const List = ({ isMap, setIsMap }) => {
  return (
    <div className="container">
      {' '}
      <div className="mt-3 toggle align-items-center d-flex d-sm-none justify-content-end">
        <p className="mr-2 mb-0">地圖</p>
        <input
          type="checkbox"
          id="switch"
          onChange={() => {
            setIsMap((prev) => !prev)
          }}
        />
        <label htmlFor="switch">Toggle</label>
      </div>
    </div>
  )
}

export default List
