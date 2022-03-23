import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ResPicSwiper from './../../compenents/restaurant/ResPicSwiper'

const ClickMobile = ({ displayPlaces, childClicked, resPic }) => {
  const [selected, setSelected] = useState()

  useEffect(() => {
    if (childClicked !== '') setSelected(childClicked)
  }, [childClicked])

  const render = displayPlaces
    .filter((place) => (selected ? place.res_id === selected : null))
    .map((place, i) => {
      return (
        <div key={i}>
          {' '}
          <Link
            to={'/restaurant/detail/' + place.res_id}
            className="list-container d-flex justify-content-start"
            style={{
              marginLeft: '0px',
              marginRight: '0px',
              width: '100%',
              position: 'relative',
            }}
          >
            <ResPicSwiper
              resPic={resPic}
              place={place}
              style={{ width: '250px', position: 'absolute', left: '0' }}
            />
            <div className="ml-2 mt-2 detail">
              <h6 className="mb-2">{place.res_name}</h6>
              <div className="mb-1">{place.res_address}</div>
              <div>
                {'今日 ' + JSON.parse(place.res_ser_hours)[new Date().getDay()]}
              </div>
            </div>
          </Link>
        </div>
      )
    })

  return <>{childClicked && <div className="click-mobile">{render}</div>}</>
}

export default ClickMobile
