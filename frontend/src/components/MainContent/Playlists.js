import { Box, Grid, GridList, GridListTile, IconButton, makeStyles, Typography } from '@material-ui/core';
import img from "../../assets/img/artistic-album-cover-demp.jpg";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React from 'react';

const arr = [0, 1, 2, 3, 4, 5];

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
        // overflow: 'hidden',
    },
    listTitle: {
        padding: theme.spacing(1, 0),
        marginBottom: theme.spacing(1)
    },
    gridList: {
        flexWrap: 'nowrap',
        // margin: theme.spacing(0, 2),
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    itemImg: {
        display: 'flex',
        justifyContent: "center",
    },
  }));

const SongItem = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={6} className={classes.itemImg}>
                <img src={img} width="80px" alt="fake_img" style={{ borderRadius: "50%" }}/>
            </Grid>
            <Grid item xs container direction="column" justify="center" alignContent="flex-start">
                <Grid item><Typography variant="body1"><Box fontWeight="500" color="text.main">Unsainted</Box></Typography></Grid>
                <Grid item><Typography variant="body2"><Box fontWeight="200" color="text.dark">2021</Box></Typography></Grid>
                <Grid item><Typography variant="body2"><Box fontWeight="200" color="text.dark">Unsainted</Box></Typography></Grid>
            </Grid>
        </Grid>
    );
};

const Playlists = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.listTitle} justify="space-between" alignItems="center">
                <Grid item xs>
                    <Typography variant="h1" component="div">
                        <Box p="8px" fontWeight="800" fontSize="1.2rem" color="text.main">
                            Playlists
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={2} align="right">
                    <IconButton>
                        <MoreHorizIcon fontSize="large" style={{ color: "#ffffff" }} />
                    </IconButton>
                </Grid>
            </Grid>
            <div style={{padding: "0 8px"}}>
                <GridList className={classes.gridList} cols={2.8}>
                    {arr.map((item) => {
                        return (
                            <GridListTile style={{ height: 100 }}>
                                <SongItem />
                            </GridListTile>
                        );
                    })}
                </GridList>
            </div>
        </div>
    );
};

export default Playlists;