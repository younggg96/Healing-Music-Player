import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import '../../css/app.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
  root: {

  },
}));

const MainContent = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className="main-contain">
        <Grid item xs={5}>
          <Grid container justify="space-between" alignContent="center">
            <Grid item xs={4}>
              <Typography variant="h5">
                <Box fontWeight="700">Liked</Box>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <MoreHorizIcon />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs className="albums-bg"></Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MainContent;
