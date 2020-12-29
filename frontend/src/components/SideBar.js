import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/img/heal-music-logo.png";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 4, 2, 4),
  },
  logo: {
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    marginBottom: theme.spacing(4),
  },
  list: {
    paddingLeft: theme.spacing(0, 1),
  },
  title: {
    marginBottom: theme.spacing(3),
  }
}));

const SideBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <img width="200px" src={logo} alt="logo" />
      </div>
      <div className={classes.list}>
        <Typography color="secondary" component="h1" variant="body1" className={classes.title}>
          <Box fontWeight="600">Library</Box>
        </Typography>
      </div>
    </div>
  );
};

export default SideBar;
