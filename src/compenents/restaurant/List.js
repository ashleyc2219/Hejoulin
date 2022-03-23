import React from 'react'
import ListPlaceCard from './ListPlaceCard'

const List = ({
  isMap,
  setIsMap,
  displayPlaces,
  placesPics,
  setZoom,
  setBounds,
}) => {
  const renderList = displayPlaces.map((place, i) => {
    return (
      <ListPlaceCard
        placesPics={placesPics}
        place={place}
        key={i}
      ></ListPlaceCard>
    )
  })
  return (
    <>
      <div className="container">
        {' '}
        <div className="mt-3 toggle align-items-center d-flex d-lg-none justify-content-end">
          <p className="mr-2 mb-0">地圖</p>
          <input
            type="checkbox"
            id="switch"
            onChange={() => {
              setIsMap((prev) => !prev)
              setZoom(7)
              setBounds([
                115.75459226462789, 19.920955983933112, 125.74116453025289,
                27.877216817234554,
              ])
            }}
          />
          <label htmlFor="switch">Toggle</label>
        </div>
        <div className="restaurant-list d-flex flex-wrap mt-2">
          {renderList}
        </div>
      </div>
    </>
  )
}

export default List
