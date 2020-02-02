import React, { useState } from 'react'

import MapSection from './map'
import LocationList from './location-list'

import { Grid, Typography } from '@material-ui/core'

import backgroundPic from '../../Images/result-page-design.png'

const Result = ({ themeColor, apiResults }) => {
  const [selectedLoc, setSelectedLoc] = useState({
    lat: null,
    lng: null
  })

  return (
    <Grid container spacing={2} direction='column' alignItems='center'>

      <Grid item xs={12} container style={{ background: `url(${backgroundPic}) no-repeat center center fixed`, backgroundSize: 'cover', minHeight: '35vh' }}>
        <Grid item xs={12}>
          <Typography align='center' variant='h5' style={{ marginTop: '10px' }} >ditch.it</Typography>
        </Grid>

        <Grid item xs={12} style={{ maxWidth: "550px", height: '10%', margin: 'auto' }}>
          <Typography align='center' variant='h6' style={{ color: 'grey' }}><u>&nbsp;&nbsp;RESULTS&nbsp;&nbsp;</u></Typography>
          <Typography align='center' variant='h4'>Because your clothes are special</Typography>
          <Typography style={{ marginTop: '20px', color: 'grey' }} align='center' variant='subtitle1'>Based on your selection, your clothes cannot be donated. Don't worry, below we have compiled a list of places that will give them a second life.</Typography>
          {/* <Typography style={{ marginTop: '20px', color: 'grey' }} align='center' variant='subtitle1'>Based on your selection, your clothes could be donated to the following places!</Typography> */}
        </Grid>
      </Grid>



      <Grid item xs={12} container style={{ backgroundColor: themeColor.background }}>
        <Grid item xs={4} style={{ border: '1px solid orange', margin: '20px' }}>
          <LocationList apiResults={apiResults} selectedLoc={selectedLoc} setSelectedLoc={setSelectedLoc} />
        </Grid>
        <Grid item xs={3} style={{ marginLeft: '50px', marginTop: '20px' }}>
          <MapSection apiResults={apiResults} selectedLoc={selectedLoc} />
        </Grid>
      </Grid>

    </Grid>
  )
}

export default Result