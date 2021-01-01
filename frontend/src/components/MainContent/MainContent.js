import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import "../../css/app.css";
import Songslist from "./Songslist";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SearchBar from "./SearchBar";

const useStyles = makeStyles((theme) => ({
  root: {},
  songList: {
    padding: theme.spacing(2, 6),
  },
  listTitle: {
    padding: theme.spacing(1, 2),
  }
}));

const MainContent = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className="main-contain">
        <Grid item xs={6} className={classes.songList}>
          <SearchBar />
          <Grid container className={classes.listTitle} justify="space-between" alignItems="center">
            <Grid item xs={4}>
              <Typography variant="h1" component="div">
                <Box p="8px" fontWeight="800" fontSize="1.8rem" color="text.main">
                  Liked
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={2} align="center">
              <IconButton>
                <MoreHorizIcon fontSize="large" style={{ color: "#ffffff" }} />
              </IconButton>
            </Grid>
          </Grid>
          <Songslist />
        </Grid>
        <Grid item xs className="albums-bg"></Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MainContent;
