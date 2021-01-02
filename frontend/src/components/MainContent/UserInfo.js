import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import img from "../../assets/img/artistic-album-cover-demp.jpg";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  },
  userImg: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const UserInfo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="flex-end" alignItems="center">
        <Grid xs><Typography variant="body1" align="right"><Box fontWeight="500" color="text.main">Max Dobzhansky</Box></Typography></Grid>
        <Grid xs={1} className={classes.userImg}>
          <img
            src={img}
            width="35px"
            alt="fake_img"
            style={{ borderRadius: "50%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserInfo;
