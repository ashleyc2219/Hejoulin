import React from 'react'
import { Link } from 'react-router-dom'
import ResPicSwiper from './../../compenents/restaurant/ResPicSwiper'
import './../../styles/RestaurantList/PlaceDetails.scss'

const PlaceDetails = ({ place, selected, placesPics }) => {
  return (
    <Link
      to={'/restaurant/detail/' + place.res_id}
      className="list-container d-flex res-card py-3 justify-content-start"
    >
      <ResPicSwiper
        resPic={placesPics}
        place={place}
        style={{ maxWidth: '250px' }}
        className="res-list-swiper"
      />
      <div className="ml-3 detail">
        <h6 className="mb-2" style={{ fontSize: '20px' }}>
          {place.res_name}
        </h6>
        <div className="mb-2">{place.res_address}</div>
        <div>
          {'今日 ' + JSON.parse(place.res_ser_hours)[new Date().getDay()]}
        </div>
      </div>
    </Link>
  )
}

export default PlaceDetails
