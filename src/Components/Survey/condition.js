import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Fab } from '@material-ui/core';


const Condition = ({ themeColor, setFinishSurvey, selectedVals, setSelectedVals, ...props }) => {
  const useStyles = makeStyles(theme => ({
    header: {
      margin: theme.spacing(5)
    },
    body: {
      textAlign: 'center',
      margin: theme.spacing(5)
    },
    button: {
      width: theme.spacing(20),
      backgroundColor: themeColor.themeGreen
    },
    option: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      margin: theme.spacing(5)
    }
  }));

  const classes = useStyles()

  const [option, setOption] = useState(true)

  const clickNext = () => {
    option === 'yes' && setSelectedVals({
      ...selectedVals,
      canDonate: false
    })

    option === 'no' && setSelectedVals({
      ...selectedVals,
      canDonate: true
    })

    setFinishSurvey(true)
  }

  const clickYes = () => {
    setOption('yes')
  }

  const clickNo = () => {
    setOption('no')
  }

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} className={classes.header}>
        <Typography align='center' variant='h6'>Are there any visible / physical damages ?</Typography>
      </Grid>
      <Grid item xs={12} className={classes.body}>
        <Fab className={classes.option} onClick={clickYes} style={option === true ? null : option === 'yes' ? { backgroundColor: themeColor.themeGreen } : null}>YES</Fab>
        <Fab className={classes.option} onClick={clickNo} style={option === true ? null : option === 'no' ? { backgroundColor: themeColor.themeGreen } : null}>NO</Fab>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Fab disabled={option === true} className={classes.button} variant='extended' onClick={clickNext}>Go</Fab>
      </Grid>
    </Grid>
  )
}

export default Condition