import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Fab, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  input: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: theme.spacing(2)
  },
  header: {
    margin: theme.spacing(5)
  },
  body: {
    textAlign: 'center'
  },
  button: {
    width: theme.spacing(20),
    backgroundColor: '#34eba1'
  }
}));


const Location = ({ selectedVals, setSelectedVals, ...props }) => {
  const classes = useStyles()

  const [alert, setAlert] = useState(true)
  const [val, setVal] = useState({
    city: null,
    address: null,
    postalCode: null,
    country: null
  })

  const handleChange = (name, e) => {
    setVal({
      ...val,
      [name]: e.target.value
    })
  }

  const clickNext = () => {
    if (val.city && val.address && val.postalCode && val.country) {
      setSelectedVals({
        ...setSelectedVals,
        location: val
      })
    }
  }

  useEffect(() => {
    if (val.city && val.address && val.postalCode && val.country) {
      setAlert(false)
    }
  }, [val])

  return (
    <Grid container>
      <Grid item xs={12} className={classes.header}>
        <Typography align='center' variant='h6'>Where are you located ?</Typography>
      </Grid>
      <Grid item xs={12} className={classes.body}>
        <TextField className={classes.input} variant='outlined' label='City:' value={val.city} onChange={e => handleChange('city', e)} />
        <TextField className={classes.input} style={{ width: '30%' }} variant='outlined' label='Address:' value={val.address} onChange={e => handleChange('address', e)} />
        <TextField className={classes.input} variant='outlined' label='Postal Code:' value={val.postalCode} onChange={e => handleChange('postalCode', e)} />
        <TextField className={classes.input} variant='outlined' label='Country:' value={val.country} onChange={e => handleChange('country', e)} />
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Fab disabled={alert} className={classes.button} variant='extended' onClick={clickNext}>Next</Fab>
      </Grid>
    </Grid>
  )
}

export default Location