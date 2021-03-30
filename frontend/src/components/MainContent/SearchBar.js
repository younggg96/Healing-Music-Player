import { Grid, InputBase, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

import '../../css/mainContent.scss';

const useStyles = makeStyles((theme) => ({
  search: {
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1.5, 2),
    margin: theme.spacing(2, 0),
    transitionDuration: 500,
    '&:hover': {
      backgroundColor: "#0F1B41",
    },
  },
  searchIcon: {
    display: 'flex',
    justifyContent: "center",
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.search}>
        <Grid container justify="flex-start" alignItems="center">
          <Grid item xs={1} className={classes.searchIcon}>
            <SearchIcon style={{ color: "#ffffff" }} />
          </Grid>
          <Grid item xs>
            <InputBase
              className="search-input"
              placeholder="Search for songs, artists…"
              style={{ color: "#ffffff"}}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SearchBar;
