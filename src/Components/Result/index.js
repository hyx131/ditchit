import React, { useState } from 'react'

import MapSection from './map'
import LocationList from './location-list'

import { Grid, Typography } from '@material-ui/core'

import backgroundPic from '../../Images/result-page-design.png'

const Result = ({ apiResults }) => {
  const [selectedLoc, setSelectedLoc] = useState({
    lat: null,
    lng: null
  })

  return (
    <Grid container spacing={2}>

      <Grid item xs={12} container style={{ backgroundImage: backgroundPic }}>
        <Grid item xs={12}>
          <Typography align='center' variant='h5' style={{ marginTop: '10px' }} >ditch.it</Typography>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid item xs={4}>
          <LocationList apiResults={apiResults} selectedLoc={selectedLoc} setSelectedLoc={setSelectedLoc} />
        </Grid>
        <Grid item xs={3}>
          <MapSection apiResults={apiResults} selectedLoc={selectedLoc} />
        </Grid>
      </Grid>

    </Grid>
  )
}

export default Result