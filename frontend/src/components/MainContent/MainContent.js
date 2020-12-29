import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import '../../css/app.css'

const useStyles = makeStyles((theme) => ({
  root: {

  },
}));

const MainContent = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className="main-contain">
        <Grid item xs={5}></Grid>
        <Grid item xs className="albums-bg"></Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MainContent;
