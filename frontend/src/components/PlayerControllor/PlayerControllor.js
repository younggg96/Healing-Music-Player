import { Box, Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import img from "../../assets/img/artistic-album-cover-demp.jpg";

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import PauseIcon from '@material-ui/icons/Pause';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
    color: theme.palette.text.main,
  },
  singer: {
    color: theme.palette.text.main,
  },
  icon: {
    color: theme.palette.text.dark,
    '&:hover': {
      transition: "all 0.25s",
      color: theme.palette.text.main,
    },
  },
  activedIcon: {
    color: theme.palette.secondary.main
  },
  playButton: {
    width: 60,
    height: 60,
    margin: theme.spacing(0, 2),
    border: '2px solid #535353',
    borderRadius: '50%',
    color: theme.palette.text.dark,
    '&:focus': {
      color: theme.palette.text.main,
      border: '2px solid #ffffff',
    },
    '&:hover': {
      transition: "all 0.25s",
      color: theme.palette.text.main,
      border: '2px solid #ffffff',
    }
  },
  pauseButton: {
    width: 60,
    height: 60,
    margin: theme.spacing(0, 2),
    border: '2px solid #ffffff',
    borderRadius: '50%',
    color: theme.palette.text.main,
  },
  img: {
    display: "flex",
    justifyContent: "center",
  },
  buttons: {
    padding: theme.spacing(0, 2)
  }
}));

const SongInfo = () => {
  const classes = useStyles();
  const [favorite, setFavorite] = useState(false);
  const clickhandler = () => {
    setFavorite(!favorite)
  }

  return (
    <React.Fragment>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={3} className={classes.img}>
          <img width="80px" src={img} alt="alumb" />
        </Grid>
        <Grid item container direction="column" xs>
          <Grid item xs>
            <Typography variant="body1" className={classes.title} component="span">One Summer Day</Typography>
            <IconButton aria-label="delete" onClick={clickhandler}>
              { !favorite ? <FavoriteBorderIcon fontSize="small" className={classes.icon}/> : <FavoriteIcon fontSize="small" className={classes.iconActived}/>}
            </IconButton>
          </Grid>
          <Grid item xs><Typography variant="body2" className={classes.singer}>Joe Hisaishi</Typography></Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const ProgressBar = () => {
  const classes = useStyles();
  const [play, setPlay] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [repeatOne, setRepeatOne] = useState(false);
  const playSongClickHandler = () => {
    setPlay(!play);
  }
  const shuffleClickHandler = () => {
    setShuffle(!shuffle);
  }
  const repeatClickHandler = () => {
    setRepeat(!repeat);
  }
  const repeatOneClickHandler = () => {
    setRepeatOne(!repeatOne);
    if(repeatOne) {
      setRepeat(!repeat)
    }
  }
  return (
    <React.Fragment>
      <Grid container justify="center" alignItems="center" direction="column">
        <Grid item xs container className={classes.buttons} justify="center" alignItems="center">
          { 
            shuffle ? <IconButton aria-label="Shuffle" className={classes.icon} onClick={shuffleClickHandler}><ShuffleIcon /></IconButton> :
            <IconButton aria-label="Shuffle" onClick={shuffleClickHandler}><ShuffleIcon className={classes.activedIcon}/></IconButton>
          }
          <IconButton aria-label="Previous" className={classes.icon}>
            <SkipPreviousIcon />
          </IconButton>
          {
            play ? <IconButton aria-label="Play" className={classes.playButton} onClick={playSongClickHandler}><PlayArrowIcon className={classes.playIcon} style={{fontSize: "40px"}} /></IconButton> :  
            <IconButton aria-label="Pause" className={classes.pauseButton} onClick={playSongClickHandler}><PauseIcon className={classes.playIcon} style={{fontSize: "40px"}} /></IconButton>
          }
          <IconButton aria-label="Next" className={classes.icon}>
            <SkipNextIcon />
          </IconButton>
          { !repeat ?  <IconButton aria-label="Repeat" className={classes.icon} onClick={repeatClickHandler}><RepeatIcon /></IconButton> :
            (!repeatOne ? <IconButton aria-label="Don't Repeat" className={classes.icon} onClick={repeatOneClickHandler}><RepeatIcon className={classes.activedIcon} /></IconButton> :
            <IconButton aria-label="RepeatOne" onClick={repeatOneClickHandler}><RepeatOneIcon  className={classes.activedIcon}/></IconButton>)
          }
        </Grid>
        <Grid item xs container></Grid>
      </Grid>
    </React.Fragment>
  )
}


const PlayerControllor = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container justify="center" alignItems="center">
        <Grid item xs>
          <SongInfo />
        </Grid>
        <Grid item xs>
          <ProgressBar />
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PlayerControllor;
