import React, { useState, useEffect } from 'react'

import Menu from '../compenents/restaurant/Menu'
import List from '../compenents/restaurant/List'
import Map from '../compenents/restaurant/Map'
import MapList from '../compenents/restaurant/MapList'
import ClickMobile from '../compenents/restaurant/ClickMobile'
import Spinner from '../compenents/Shared/Spinner'

import './../styles/RestaurantList/RestaurantList.scss'

const RestaurantList = () => {
  const [isMap, setIsMap] = useState(true)
  const [places, setPlaces] = useState([])
  const [displayPlaces, setDisplayPlaces] = useState([])
  const [placesPics, setPlacesPics] = useState([])
  const [zoom, setZoom] = useState(12)
  const [bounds, setBounds] = useState(null)
  const [loading, setLoading] = useState(true)

  //to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // 初始經緯度
  const [coordinates, setCoordinates] = useState({
    lat: 25.047675,
    lng: 121.517055,
  })

  // 設定篩選
  const [area, setArea] = useState('all')
  const [type, setType] = useState('all')

  // 設定點選 Marker
  const [childClicked, setChildClicked] = useState()

  // 要求經緯度
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude })
      }
    )
  }, [])

  // 接餐廳資料
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(process.env.REACT_APP_SERVER + 'api/restaurant')
      const obj = await res.json()
      setPlaces(obj)
      setDisplayPlaces(obj)
    }
    fetchData()
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  // 接餐廳圖片資料
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        process.env.REACT_APP_SERVER + 'api/restaurant-pic'
      )
      const obj = await res.json()
      setPlacesPics(obj)
    }
    fetchData()
  }, [])

  // 篩選 + 經緯度(範圍)改變時 render
  useEffect(() => {
    let newPlaces = places.filter(
      (place) =>
        place.lat < bounds[3] &&
        place.lat > bounds[1] &&
        place.lng < bounds[2] &&
        place.lng > bounds[0]
    )

    newPlaces =
      area !== 'all'
        ? newPlaces.filter((place) => place.res_area === area)
        : newPlaces

    newPlaces =
      type !== 'all'
        ? newPlaces.filter((place) => place.res_type === type)
        : newPlaces

    setDisplayPlaces(newPlaces)
  }, [bounds, area, type])

  return (
    <div className="RestaurantList" style={{ overflow: 'hidden' }}>
      <Menu
        isMap={isMap}
        setIsMap={setIsMap}
        places={places}
        setDisplayPlaces={setDisplayPlaces}
        area={area}
        setArea={setArea}
        type={type}
        setType={setType}
        setCoordinates={setCoordinates}
        setZoom={setZoom}
        setBounds={setBounds}
      />
      <div className="row">
        {isMap ? (
          <>
            <div
              className="d-none d-lg-block col-6"
              style={{ paddingRight: '0' }}
            >
              {loading ? (
                <div style={{ overflowY: 'scroll', height: '90vh' }}>
                  <div className="list-container d-flex flex-column py-3 justify-content-center">
                    <Spinner />
                  </div>
                </div>
              ) : (
                <MapList
                  childClicked={childClicked}
                  displayPlaces={displayPlaces}
                  placesPics={placesPics}
                />
              )}
            </div>
            <div className="col-12 col-lg-6" style={{ paddingLeft: '0' }}>
              {' '}
              <Map
                coordinates={coordinates}
                zoom={zoom}
                setZoom={setZoom}
                setCoordinates={setCoordinates}
                bounds={bounds}
                setBounds={setBounds}
                setChildClicked={setChildClicked}
                displayPlaces={displayPlaces}
              />
              <button
                onClick={() => {
                  setIsMap(false)
                  setZoom(7)
                  setBounds([
                    115.75459226462789, 19.920955983933112, 125.74116453025289,
                    27.877216817234554,
                  ])
                }}
                className="btn btn-primary d-flex justify-content-center position-absolute list-button mt-3 d-lg-none"
              >
                <img src="/restaurant/menu.svg" className="mr-2" alt="" />
                清單
              </button>
              <ClickMobile
                childClicked={childClicked}
                displayPlaces={displayPlaces}
                resPic={placesPics}
              />
            </div>
          </>
        ) : (
          <div className="col-12">
            <List
              isMap={isMap}
              setIsMap={setIsMap}
              setZoom={setZoom}
              setBounds={setBounds}
              displayPlaces={displayPlaces}
              placesPics={placesPics}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default RestaurantList
