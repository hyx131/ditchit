import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import tradePic from "../../Images/pluto-10.png";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Fab, Typography } from "@material-ui/core";

const ditchItemValueOptions = ["clothing", "bedding", "shoes", "accessories"];
// const [ditchItemIndex, updateDitchItem] = useState(0);

const HomePage = ({ setSelectedVals, history, themeColor, ...props }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      height: theme.spacing(134),
      backgroundColor: themeColor.background
    },
    button: {
      width: theme.spacing(20),
      margin: theme.spacing(10),
      backgroundColor: themeColor.themeGreen,
      color: themeColor.themeWhite,
      boxShadow: "none",
      "&:hover": {
        color: themeColor.themeBlackRegular
      }
    }
  }));
  const classes = useStyles();
  let [index, setIndex] = useState(0);

  // To DO : uncomment the following when done styling thenquiz
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("MY INDEX", index);
      // setDitchItem(ditchItemValueOptions[index]);
      if (index < 3) {
        setIndex(index => index + 1);
      } else {
        setIndex(0);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [index]);

  const goHome = () => {
    history.push('/')
  }

  useEffect(() => {
    setSelectedVals({
      location: null,
      itemType: null,
      conditions: [],
      canDonate: true
    })
  }, [])

  return (
    <Grid container spacing={2} className={classes.root} justify="center">
      <Grid item xs={12}>
        <Typography align="center" variant="h5" style={{ marginTop: "10px", cursor: 'pointer' }} onClick={goHome}>
          <a>ditch.it</a>
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ marginTop: "20px" }}>
        <Typography align="center" variant="h3">
          Take care of your{" "}
          <u id="updateItem">{ditchItemValueOptions[index]}</u>
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ maxWidth: "500px", marginTop: "15px" }}>
        <Typography align="center" variant="h6">
          Find the right organizations to take your old stuff, personalized for
          you.
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ textAlign: "center", marginTop: "20px" }}>
        <Fab
          className={classes.button}
          variant="extended"
          onClick={() => history.push("/survey")}
        // style={{ boxShadow: "none" }}
        >
          Start Now
        </Fab>
      </Grid>
      <Grid item xs={12} style={{ marginTop: "50px" }}>
        <Typography align="center">
          <img src={tradePic} alt="trade" width="30%" heigh="30%" />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withRouter(HomePage);
