import React, { useState, useRef } from 'react'
import GoogleMapReact from 'google-map-react'
import useSupercluster from 'use-supercluster'
import './../../styles/RestaurantList/Map.scss'

import mapStyles from './mapStyles'

const Marker = ({ children }) => children

export default function Map({
  displayPlaces,
  coordinates,
  bounds,
  setBounds,
  zoom,
  setZoom,
  setChildClicked,
}) {
  const mapRef = useRef()

  const points = displayPlaces.map((displayPlace) => ({
    type: 'Feature',
    properties: { cluster: false, id: displayPlace.res_id },
    geometry: {
      type: 'Point',
      coordinates: [parseFloat(displayPlace.lng), parseFloat(displayPlace.lat)],
    },
  }))

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  })

  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KET }}
        center={coordinates}
        zoom={zoom}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map
        }}
        onChange={({ zoom, bounds }) => {
          setChildClicked('') // 這裡若有改變範圍，把點選清掉
          setZoom(zoom)
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat,
          ])
        }}
      >
        {clusters.map((cluster) => {
          const [longitude, latitude] = cluster.geometry.coordinates
          const { cluster: isCluster, point_count: pointCount } =
            cluster.properties

          if (isCluster) {
            return (
              <Marker
                key={'cluster' + cluster.properties.id + Math.random()}
                lat={latitude}
                lng={longitude}
              >
                <div
                  className="cluster-marker"
                  style={{
                    width: `${20 + (pointCount / points.length) * 20}px`,
                    height: `${20 + (pointCount / points.length) * 20}px`,
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    )
                    mapRef.current.setZoom(expansionZoom)
                    mapRef.current.panTo({ lat: latitude, lng: longitude })
                  }}
                >
                  {pointCount}
                </div>
              </Marker>
            )
          }

          return (
            <Marker
              key={'single' + cluster.properties.id + Math.random()}
              lat={latitude}
              lng={longitude}
            >
              <button
                className="single-marker"
                onClick={() => {
                  setChildClicked(cluster.properties.id)
                }}
              >
                <img
                  style={{ height: '40px' }}
                  src="/restaurant/sake.svg"
                  alt="marker"
                />
              </button>
            </Marker>
          )
        })}
      </GoogleMapReact>
    </div>
  )
}
