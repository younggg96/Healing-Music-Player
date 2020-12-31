import {
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import img from "../../assets/img/artistic-album-cover-demp.jpg";
import QueueIcon from "@material-ui/icons/Queue";

const arr = [0, 1, 2, 3, 4, 5];

const useStyles = makeStyles((theme) => ({
  item: {
    // margin: theme.spacing(2, 0)
  },
  songList: {
    // padding: theme.spacing(2, 6),
  },
}));

const SongItem = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container alignItems="center" justify="space-between">
        <Grid item container xs className={classes.item}>
          <Grid item xs={3}>
            <img
              src={img}
              width="55px"
              alt="avatar"
              style={{ borderRadius: "50%" }}
            />
          </Grid>
          <Grid
            item
            xs
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography variant="body1">
                <Box fontWeight="500" color="text.main">
                  Unsainted
                </Box>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                <Box fontWeight="200" color="text.dark">
                  Slipknot
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={4} alignItems="center" justify="flex-end">
          <Grid item xs>
            <Typography variant="body1" align="right">
              <Box fontWeight="500" color="text.main">
                4:20
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={5} align="right">
            <IconButton>
              <QueueIcon style={{ color: "#7E8599" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Songslist = () => {
  return (
    <div>
      <List>
        {arr.map((item) => {
          return (
            <ListItem>
              <SongItem />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default Songslist;
