import React from 'react'
import { withRouter } from "react-router-dom"

import tradePic from '../../Images/pluto-10.png'

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Fab, Typography } from '@material-ui/core';

const HomePage = ({ history, themeColor, ...props }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      height: theme.spacing(115),
      backgroundColor: themeColor.background
    },
    button: {
      width: theme.spacing(20),
      backgroundColor: themeColor.themeGreen
    }
  }));
  const classes = useStyles()

  return (
    <Grid container spacing={2} className={classes.root} justify='center'>
      <Grid item xs={12}>
        <Typography align='center' variant='h5' style={{ marginTop: '10px' }} >ditch.it</Typography>
      </Grid>
      <Grid item xs={12} style={{ marginTop: '20px' }}>
        <Typography align='center' variant='h3' >Take care of your <u>clothing</u></Typography>
      </Grid>
      <Grid item xs={12} style={{ maxWidth: '500px', marginTop: '15px' }}>
        <Typography align='center' variant='h6' >Find the right organizations to take your old stuff, personalized for you.</Typography>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center', marginTop: '20px' }}>
        <Fab className={classes.button} variant='extended' onClick={() => history.push('/survey')}>Start Now</Fab>
      </Grid>
      <Grid item xs={12} style={{ marginTop: '50px' }}>
        <Typography align='center'>
          <img src={tradePic} alt='trade' width='30%' heigh='30%' />
        </Typography>
      </Grid>
    </Grid>
  )
}

export default withRouter(HomePage)