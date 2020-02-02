import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Fab } from "@material-ui/core";

const Condition = ({
  themeColor,
  setFinishSurvey,
  selectedVals,
  setSelectedVals,
  ...props
}) => {
  const useStyles = makeStyles(theme => ({
    header: {
      margin: theme.spacing(5)
    },
    body: {
      textAlign: "center",
      margin: theme.spacing(5)
    },
    button: {
      width: theme.spacing(20),
      backgroundColor: themeColor.themeGreen,
      color: themeColor.themeWhite,
      boxShadow: "none",
      boxShadow: "none",
      "&:hover": {
        color: themeColor.themeBlackRegular
        // width: theme.spacing(20),
        // backgroundColor: "#CDCDCD",
        // boxShadow: "none"
      }
    },
    option: {
      width: theme.spacing(20),
      height: theme.spacing(15),
      margin: theme.spacing(5),
      backgroundColor: themeColor.themeWhite,
      color: themeColor.themeBlackRegular,
      boxShadow: "none"
    }
  }));

  const classes = useStyles();

  const [option, setOption] = useState(true);

  const clickNext = () => {
    option === "yes" &&
      setSelectedVals({
        ...selectedVals,
        canDonate: false
      });

    option === "no" &&
      setSelectedVals({
        ...selectedVals,
        canDonate: true
      });

    setFinishSurvey(true);
  };

  const clickYes = () => {
    setOption("yes");
  };

  const clickNo = () => {
    setOption("no");
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Typography align="center" variant="h5" style={{ marginTop: "2%" }}>
          ditch.it
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.header}>
        <Typography align="center" variant="h4">
          Are there any visible / physical damages ?
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.body}>
        <Fab
          className={classes.option}
          onClick={clickYes}
          style={
            option === true
              ? null
              : option === "yes"
              ? {
                  border: `3px solid ${themeColor.themeGreen}`,
                  backgroundColor: themeColor.themeWhite,
                  color: themeColor.themeBlackRegular
                }
              : null
          }
        >
          <Typography align="center" variant="h4">
            YES
          </Typography>
        </Fab>
        <Fab
          className={classes.option}
          onClick={clickNo}
          style={
            option === true
              ? null
              : option === "no"
              ? {
                  border: `3px solid ${themeColor.themeGreen}`,
                  backgroundColor: themeColor.themeWhite,
                  color: themeColor.themeBlackRegular
                }
              : null
          }
        >
          <Typography align="center" variant="h4">
            No
          </Typography>
        </Fab>
      </Grid>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Fab
          disabled={option === true}
          className={classes.button}
          variant="extended"
          onClick={clickNext}
        >
          Go
        </Fab>
      </Grid>
    </Grid>
  );
};

export default Condition;
