import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import tradePic from "../../Images/pluto-10.png";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Fab, Typography } from "@material-ui/core";

const ditchItemValueOptions = ["clothing", "bedding", "shoes", "accessories"];
// const [ditchItemIndex, updateDitchItem] = useState(0);

const HomePage = ({ history, themeColor, ...props }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      height: theme.spacing(115),
      backgroundColor: themeColor.background
    },
    button: {
      width: theme.spacing(20),
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
  // let [ditchItem, setDitchItem] = useState("clothing");

  // const updateDitchItem = () => {
  //   // if (index < 3) {
  //   //   // console.log("index < 3 ", index);
  //   //   setIndex(index + 1);
  //   // } else {
  //   //   setIndex(0);
  //   // }
  //   console.log("update!", index);
  //   setIndex(index + 1);
  // };

  // let updateIndexAtInterval = setInterval(() => updateDitchItem(), 2000);
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     updateDitchItem(index);
  //   }, 1000);

  //   return () => {
  //     console.log("unmount");
  //     // setIndex(0);
  //     clearInterval(id);
  //   };
  // }, []);
  // const newIndex = () => {
  //   if (index < 3) {
  //     setIndex(index + 1);
  //     console.log("update index");
  //   }
  // };

  // const bob = "help";
  // const bob = "me";

  // To DO : uncomment the following when done styling thenquiz
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("MY INDEX", index);
  //     // setDitchItem(ditchItemValueOptions[index]);
  //     if (index < 3) {
  //       setIndex(index => index + 1);
  //     } else {
  //       setIndex(0);
  //     }
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [index]);

  return (
    <Grid container spacing={2} className={classes.root} justify="center">
      <Grid item xs={12}>
        <Typography align="center" variant="h5" style={{ marginTop: "10px" }}>
          ditch.it
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
