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
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    }
  }));

const PopularItem = () => {
    // const classes = useStyles();
    return (
        <Grid container direction="column" justify="center" alignContent="center">
            <Grid item xs>
                <img src={img} width="120px" alt="fake_img" style={{ borderRadius: "50%", marginBottom: 6 }}/>
            </Grid>
            <Grid item><Typography variant="body1"><Box fontWeight="500" color="text.main" textAlign="center">Unsainted</Box></Typography></Grid>
            <Grid item><Typography variant="body2"><Box fontWeight="200" color="text.dark" textAlign="center">Unsainted</Box></Typography></Grid>
        </Grid>
    );
};

const PopularArtists = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.listTitle} justify="space-between" alignItems="center">
                <Grid item xs>
                    <Typography variant="h1" component="div">
                        <Box p="8px" fontWeight="800" fontSize="1.2rem" color="text.main">
                            Popular artists
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
                <GridList className={classes.gridList} cols={3.5}>
                    {arr.map((item) => {
                        return (
                            <GridListTile>
                                <PopularItem />
                            </GridListTile>
                        );
                    })}
                </GridList>
            </div>
        </div>
    );
};

export default PopularArtists;