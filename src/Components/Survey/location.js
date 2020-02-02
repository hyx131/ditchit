import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Fab, TextField } from "@material-ui/core";

const Location = ({ history, themeColor, selectedVals, setSelectedVals, ...props }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      height: theme.spacing(137),
      backgroundColor: themeColor.background
    },
    input: {
      width: theme.spacing(30),
      height: theme.spacing(0),
      margin: theme.spacing(2)
    },
    body: {
      textAlign: "center",
      height: theme.spacing(0)
    },
    button: {
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

  const [alert, setAlert] = useState(true);
  const [val, setVal] = useState({
    city: null,
    address: null,
    province: null,
    radius: null
  });

  const handleChange = (name, e) => {
    setVal({
      ...val,
      [name]: e.target.value
    });
  };

  const clickNext = () => {
    if (val.city && val.address && val.province && val.radius) {
      setSelectedVals({
        ...setSelectedVals,
        location: val
      });
    }
  };

  useEffect(() => {
    if (val.city && val.address && val.province && val.radius) {
      setAlert(false);
    }
  }, [val]);

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
    <div>
      <Grid container spacing={10} className={classes.root}>
        <Grid item xs={12} className={classes.body}>
          <Typography align="center" variant="h5" style={{ marginTop: "1%", cursor: 'pointer' }} onClick={goHome}>
            <a>ditch.it</a>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.body}>
          <Typography align="center" variant="h4">
            Where are you currently located ?
          </Typography>
          <Typography
            style={{ marginTop: "20px", color: "grey" }}
            align="center"
            variant="subtitle1"
          >
            We dont want you to mission it. We'll be using your location to
            provide you with a list of places closest to you.
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.body}>
          <TextField
            className={classes.input}
            style={{ width: "40%" }}
            variant="outlined"
            label="Address:"
            value={val.address}
            onChange={e => handleChange("address", e)}
          />
        </Grid>
        <Grid item xs={12} className={classes.body}>
          <TextField
            className={classes.input}
            variant="outlined"
            label="City:"
            value={val.city}
            onChange={e => handleChange("city", e)}
          />
          <TextField
            className={classes.input}
            variant="outlined"
            label="Province:"
            value={val.province}
            onChange={e => handleChange("province", e)}
          />
          <TextField
            className={classes.input}
            variant="outlined"
            label="Radius (M):"
            value={val.radius}
            onChange={e => handleChange("radius", e)}
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Fab
            disabled={alert}
            className={classes.button}
            variant="extended"
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
    </div>
  );
};

export default withRouter(Location);
