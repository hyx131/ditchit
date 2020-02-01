import React, { useState } from 'react'

import MapSection from './map'
import LocationList from './location-list'

import { Grid } from '@material-ui/core'

const Result = ({ apiResults }) => {
  const [selectedLoc, setSelectedLoc] = useState({
    lat: null,
    lng: null
  })

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <LocationList apiResults={apiResults} selectedLoc={selectedLoc} setSelectedLoc={setSelectedLoc} />
      </Grid>
      <Grid item xs={3}>
        <MapSection apiResults={apiResults} selectedLoc={selectedLoc} />
      </Grid>
    </Grid>
  )
}

export default Result