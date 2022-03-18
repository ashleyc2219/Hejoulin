import React from 'react'
import { Link } from 'react-router-dom'
import './../../styles/RestaurantList/PlaceDetails.scss'

const PlaceDetails = ({ place, selected }) => {
  return (
    <Link
      to={'/restaurant/detail/' + place.res_id}
      className="list-container d-flex res-card py-3"
    >
      <img className="mr-3" src="https://fakeimg.pl/250x100/" alt="" />
      <div className="detail">
        <h6 className="mb-2">{place.res_name}</h6>
        <div className="mb-5">{place.res_address}</div>
        <div>
          {'今日 ' + JSON.parse(place.res_ser_hours)[new Date().getDay()]}
        </div>
      </div>
    </Link>
  )
}

export default PlaceDetails
