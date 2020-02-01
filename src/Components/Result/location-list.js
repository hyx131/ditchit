import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListItemText } from '@material-ui/core'

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

  return (
    <List className={classes.root}>
      {apiResults.resultList.map(result => {
        return (
          <>
            <ListItem button onClick={() => clickLocation(result.lat, result.lng)}>
              <ListItemText primary={result.name} secondary="Jan 9, 2014" />
            </ListItem>
            <Divider component="li" />
          </>
        )
      })}
    </List>
  )
}

export default LocationList