import React, { useState, useEffect } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import dotenv from 'dotenv'
dotenv.config()

const MapSection = ({ google, apiResults, selectedLoc, ...props }) => {
  const mapStyles = {
    maxWidth: '50%',
    maxHeight: '50%'
  }

  const [zoom, setZoom] = useState(10)
  const [center, setCenter] = useState({
    lat: apiResults.initialCoordinates.lat,
    lng: apiResults.initialCoordinates.lng
  })
  const [locList, setlocList] = useState(apiResults.options)

  useEffect(() => {
    if (selectedLoc.lat) {
      setCenter({
        ...center,
        lat: selectedLoc.lat,
        lng: selectedLoc.lng
      })
      setlocList([{
        lat: selectedLoc.lat,
        lng: selectedLoc.lng
      }])
      setZoom(18)
    }
  }, [selectedLoc])

  return (
    <Map
      google={google}
      zoom={zoom}
      style={mapStyles}
      initialCenter={{
        lat: apiResults.initialCoordinates.lat,
        lng: apiResults.initialCoordinates.lng
      }}
      center={{
        lat: center.lat,
        lng: center.lng
      }}
    >
      {locList.map((locResult, i) => {
        return (
          <Marker key={i} name={locResult.name} position={{ lat: locResult.coordinates ? locResult.coordinates.lat : locResult.lat, lng: locResult.coordinates ? locResult.coordinates.lng : locResult.lng }} />
        )
      })}

    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapSection)
