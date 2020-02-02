import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import MapSection from './map'
import LocationList from './location-list'

import { Grid, Typography } from '@material-ui/core'

import backgroundPic from '../../Images/colours.png'

const Result = ({ history, selectedVals, themeColor, apiResults }) => {
  const [selectedLoc, setSelectedLoc] = useState({
    lat: null,
    lng: null
  })

  const goHome = () => {
    history.push('/')
  }

  return (
    <Grid container spacing={2} direction='column' alignItems='center' >

      <Grid item xs={12} container style={{ background: `url(${backgroundPic}) no-repeat center center fixed`, backgroundSize: 'cover', minHeight: '40vh' }}>
        <Grid item xs={12}>
          <Typography align='center' variant='h5' style={{ marginTop: '10px', cursor: 'pointer' }} onClick={goHome}><a>ditch.it</a></Typography>
        </Grid>

        <Grid item xs={12} style={{ maxWidth: "550px", height: '10%', margin: 'auto' }}>
          <Typography align='center' variant='h6' style={{ color: 'grey', marginBottom: '10px' }}>RESULTS</Typography>
          <Typography align='center' variant='h4'>Because your clothes are special</Typography>
          {selectedVals.canDonate ?
            <Typography style={{ marginTop: '20px', color: 'grey' }} align='center' variant='subtitle1'>Based on your selection, your clothes could be donated to the following places!</Typography>
            :
            <Typography style={{ marginTop: '20px', color: 'grey' }} align='center' variant='subtitle1'>Based on your selection, your clothes cannot be donated. Don't worry, below we have compiled a list of places that will give them a second life.</Typography>
          }
        </Grid>
      </Grid>



      <Grid item xs={12} container style={{ backgroundColor: themeColor.background }}>
        <Grid item xs={4} style={{ margin: '20px' }}>
          <LocationList apiResults={apiResults} selectedLoc={selectedLoc} setSelectedLoc={setSelectedLoc} />
        </Grid>
        <Grid item xs={3} style={{ marginLeft: '50px', marginTop: '20px' }}>
          <MapSection apiResults={apiResults} selectedLoc={selectedLoc} />
        </Grid>
      </Grid>

    </Grid>
  )
}

export default withRouter(Result)