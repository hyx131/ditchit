import React, { useState, useEffect } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const MapSection = ({ google, apiResults, selectedLoc, ...props }) => {
  const mapStyles = {
    width: '800px',
    height: '500px'
  }

  const [zoom, setZoom] = useState(15)
  const [center, setCenter] = useState({
    lat: apiResults.initialCenter.lat,
    lng: apiResults.initialCenter.lng
  })
  const [locList, setlocList] = useState(apiResults.resultList)

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
        lat: apiResults.initialCenter.lat,
        lng: apiResults.initialCenter.lng
      }}
      center={{
        lat: center.lat,
        lng: center.lng
      }}
    >
      {locList.map((locResult, i) => {
        return (
          <Marker key={i} name={locResult.name} position={{ lat: locResult.lat, lng: locResult.lng }} />
        )
      })}

    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env['GOOGLE_API_KEY']
})(MapSection)