import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Avatar, Typography, Fab } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  hoverTrue: {
    cursor: 'pointer',
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(30),
      height: theme.spacing(36),
    },
  },
  hoverFalse: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(30),
      height: theme.spacing(36),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: theme.spacing(11)
  },
  fab: {
    width: theme.spacing(20),
    margin: theme.spacing(10),
    backgroundColor: '#34eba1'
  }
}));

const ItemType = ({ itemTypes, selectedVals, setSelectedVals, ...props }) => {
  const classes = useStyles();

  const [hover, setHover] = useState(false)
  const [selected, setSelected] = useState(true)

  const mouseEnter = () => {
    setHover(true)
  }

  const mouseLeave = () => {
    setHover(false)
  }

  const clickItem = (i, item) => {
    setSelected({ i, item })
  }

  const clickNext = () => {
    setSelectedVals({
      ...selectedVals,
      itemType: selected && selected.item
    })
  }

  return (
    <Grid container justify='center'>
      <Grid item>
        <div className={hover ? classes.hoverTrue : classes.hoverFalse}>
          {itemTypes.map((itemType, i) => {
            return (
              <Paper elevation={hover ? 5 : 2} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={() => clickItem(i, itemType.name)} style={selected && selected.i === i ? { backgroundColor: '#34eba1' } : null}>
                <Avatar src={itemType.src} className={classes.large} />
                <Typography variant='h5' align='center' color='primary'>{itemType.name}</Typography>
              </Paper>
            )
          })}
        </div>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Fab disabled={selected === true} variant='extended' size='large' className={classes.fab} onClick={clickNext}>Next</Fab>
      </Grid>
    </Grid>
  );
}

export default ItemType