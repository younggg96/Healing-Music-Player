import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import MainContent from "../components/MainContent/MainContent";
import SideBar from "../components/SideBar";
import PlayerControllor from "../components/PlayerControllor/PlayerControllor";
import "../css/app.css";

const useStyles = makeStyles((theme) => ({
  sideBg: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "12px 0 0 0",
    height: 725,
  },
  mainBg: {
    borderRadius: "0 12px 24px 0",
    height: 725,
  },
  playerBg: {
    backgroundColor: theme.palette.primary.dark,
    borderRadius: "0 0 12px 12px",
    width: "100%",
    display: "flex",
    padding: theme.spacing(0, 2)
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
      className="page"
    >
      <Grid container xs item>
        <Grid item xs={2} className={classes.sideBg}>
          <SideBar />
        </Grid>
        <Grid item xs={10} className={classes.mainBg}>
          <MainContent />
        </Grid>
      </Grid>
      <Grid item xs className={classes.playerBg}>
        <PlayerControllor />
      </Grid>
    </Grid>
  );
};

export default HomePage;
