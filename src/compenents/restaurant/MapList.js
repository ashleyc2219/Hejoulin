import React, { useState, useEffect, createRef } from 'react'
import PlaceDetails from './PlaceDetails'

const List = ({ displayPlaces, childClicked, placesPics }) => {
  // 如果有點選時只放點選的，沒有時放篩選後的結果
  const renderList = displayPlaces
    .filter((place) =>
      childClicked ? place.res_id === childClicked : displayPlaces
    )
    .map((place, i) => {
      return (
        <PlaceDetails
          placesPics={placesPics}
          selected={childClicked}
          place={place}
          key={i}
        ></PlaceDetails>
      )
    })

  return (
    <div style={{ overflowY: 'scroll', height: '90vh' }}>
      {renderList}
      {displayPlaces.length === 0 ? (
        <div className="list-container d-flex flex-column py-3 justify-content-center">
          <div
            style={{ marginTop: '10rem' }}
            className="d-flex justify-content-center"
          >
            <img
              style={{ width: '20%' }}
              src="/restaurant/notfound.svg"
              alt=""
            />
          </div>
          <p className="mt-5 text-center" style={{ color: '#7E8082' }}>
            此區域沒有符合搜尋條件的餐廳，請嘗試其它篩選或擴大搜尋區域
          </p>
        </div>
      ) : null}
    </div>
  )
}

export default List
