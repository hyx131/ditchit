import React, { useState } from "react";
import { withRouter } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Fab } from "@material-ui/core";

const Condition = ({
  history,
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
      height: theme.spacing(10),
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
    <Grid container spacing={5} style={{ height: '102vh', backgroundColor: themeColor.background }}>
      <Grid item xs={12} className={classes.body}>
        <Typography align="center" variant="h5" style={{ cursor: 'pointer' }} onClick={goHome}>
          <a>ditch.it</a>
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
          variant='extended'
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
          variant="extended"
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
          style={{ margin: '5px' }}
        >
          Go
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

export default withRouter(Condition);
