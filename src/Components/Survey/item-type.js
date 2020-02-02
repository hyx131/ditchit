import React, { useState } from "react";
import { withRouter } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Avatar, Typography, Fab } from "@material-ui/core";

const ItemType = ({
  history,
  themeColor,
  itemTypes,
  selectedVals,
  setSelectedVals,
  ...props
}) => {
  const useStyles = makeStyles(theme => ({
    hoverTrue: {
      cursor: "pointer",
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(3),
        width: theme.spacing(30),
        height: theme.spacing(36)
      }
    },
    hoverFalse: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(3),
        width: theme.spacing(30),
        height: theme.spacing(36)
      }
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      margin: theme.spacing(11)
    },
    fab: {
      width: theme.spacing(20),
      margin: theme.spacing(10),
      backgroundColor: themeColor.themeGreen,
      color: themeColor.themeWhite,
      boxShadow: "none",
      "&:hover": {
        color: themeColor.themeBlackRegular
        // width: theme.spacing(20),
        // backgroundColor: "#CDCDCD",
        // boxShadow: "none"
      }
    }
  }));

  const classes = useStyles();

  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(true);

  const mouseEnter = i => {
    setHover(i);
  };

  const mouseLeave = () => {
    setHover(false);
  };

  const clickItem = (i, item) => {
    setSelected({ i, item });
  };

  const clickNext = () => {
    setSelectedVals({
      ...selectedVals,
      itemType: selected && selected.item
    });
  };

  const goBack = () => {
    history.goBack()
  }

  const goHome = () => {
    setSelectedVals({
      location: null,
      itemType: null,
      conditions: [],
      canDonate: true
    })
    history.push('/')
  }

  return (
    <Grid
      container
      justify="center"
      style={{ backgroundColor: themeColor.background, height: '100vh' }}
    >
      <Grid item xs={12} className={classes.body}>
        <Typography align="center" variant="h5" style={{ marginTop: "1%", cursor: 'pointer' }} onClick={goHome}>
          <a>ditch.it</a>
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ maxWidth: "550px", height: "10%", marginTop: "80px" }}
      >
        <Typography align="center" variant="h4">
          Choose the type of item you are trying to ditch.
        </Typography>
      </Grid>

      <Grid item style={{ marginTop: "40px" }}>
        <div className={hover ? classes.hoverTrue : classes.hoverFalse}>
          {itemTypes.map((itemType, i) => {
            return (
              <Paper
                key={i}
                elevation={hover === i ? 5 : 2}
                onMouseEnter={() => mouseEnter(i)}
                onMouseLeave={mouseLeave}
                onClick={() => clickItem(i, itemType.name)}
                style={
                  selected && selected.i === i
                    ? { border: `3px solid ${themeColor.themeGreen}` }
                    : null
                }
              >
                <Avatar
                  src={itemType.src}
                  className={classes.large}
                  style={{ width: "70px", height: "70px" }}
                />
                <Typography variant="h6" align="center" color="grey">
                  {itemType.name.toUpperCase()}
                </Typography>
              </Paper>
            );
          })}
        </div>
      </Grid>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Fab
          disabled={selected === true}
          variant="extended"
          size="large"
          className={classes.fab}
          onClick={clickNext}
          style={{ margin: '5px' }}
        >
          Next
        </Fab>
        <a onClick={goBack} style={{ cursor: 'pointer' }}><u>
          <Typography align="center" variant="subtitle1" style={{ color: 'grey' }}>
            Back
            </Typography>
        </u></a>
      </Grid>
    </Grid>
  );
};

export default withRouter(ItemType);
