import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { List, Link } from '@material-ui/core'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DriveEtaIcon from '@material-ui/icons/DriveEta';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`,
  },
  open: {
    color: 'green',
    width: '13px',
    height: '13px',
    marginLeft: '1em'
  },
  closed: {
    color: 'red',
    width: '13px',
    height: '13px',
    marginLeft: '1em'
  },
  car : {
    width: '15px',
    height: '15px',
    marginLeft: '1em'
  }
}));

const LocationList = ({ apiResults, selectedLoc, setSelectedLoc, ...props }) => {
  const classes = useStyles()

  const clickLocation = (latitude, longitude) => {
    setSelectedLoc({
      ...selectedLoc,
      lat: latitude,
      lng: longitude
    })
  }
  const categories = apiResults.categories
  const category1 = apiResults.options.filter(result => result.category === categories[0])
  const category2 = apiResults.options.filter(result => result.category === categories[1])
  const randomlyGeneratedPickupIcon = () => Math.round(Math.random())

  return (
    <List className={classes.root}>
      <Typography variant='h5' align='center' gutterBottom>
        {categories[0].split('+').join(' ').toUpperCase()}
      </Typography>
      {category1.map(result => {
        return (
          <>
            <ExpansionPanel
              onClick={() => clickLocation(result.coordinates.lat, result.coordinates.lng)}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  {(result.name)}
                  {result.isOpen ? (result.isOpen.open_now === true ?<FiberManualRecordIcon className={classes.open}/> : <FiberManualRecordIcon className={classes.closed}/>) : null }
                  {randomlyGeneratedPickupIcon() === 1 ? <DriveEtaIcon className={classes.car}/> : null }
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                {result.address ? result.address : null}
              </ExpansionPanelDetails>
              {result.phone ? <ExpansionPanelDetails> {result.phone} </ExpansionPanelDetails> : null}
              <ExpansionPanelDetails>
                {result.website ? <a target='_blank' href={result.website}>{result.website}</a> : null}
              </ExpansionPanelDetails>

            </ExpansionPanel>
          </>
        )
      })}
      <br />
      <Typography variant='h5' align='center' gutterBottom>
        {categories[1].split('+').join(' ').toUpperCase()}
      </Typography>
      {category2.map(result => {
        return (
          <>
            <ExpansionPanel
              onClick={() => clickLocation(result.coordinates.lat, result.coordinates.lng)}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  {result.name}
                  {result.isOpen ? (result.isOpen.open_now === true ?<FiberManualRecordIcon className={classes.open}/> : <FiberManualRecordIcon className={classes.closed}/>) : null }
                  {randomlyGeneratedPickupIcon() === 1 ? <DriveEtaIcon className={classes.car}/> : null }
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                {result.address ? result.address : null}
              </ExpansionPanelDetails>

              {result.phone ? <ExpansionPanelDetails>{result.phone} </ExpansionPanelDetails> : null}
              {result.isOpen ? <ExpansionPanelDetails>{(result.isOpen.open_now ? 'Currently open' : 'Closed')} </ExpansionPanelDetails> : null}

              <ExpansionPanelDetails>
                {result.website ? <a target="_blank" href={result.website}>{result.website}</a> : null}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </>
        )
      })
      }
    </List>
  )
}

export default LocationList