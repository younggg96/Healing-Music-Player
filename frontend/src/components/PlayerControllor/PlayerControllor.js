import { Grid, IconButton, makeStyles, Slider, Typography, withStyles } from "@material-ui/core";
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
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';

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
    width: 56,
    height: 56,
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
    width: 56,
    height: 56,
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
    // padding: theme.spacing(0, 2)
  },
  controllorBar: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexWrap: 'nowrap'
  },
  time: {
    color: theme.palette.text.main,
    margin: theme.spacing(0, 1)
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
              {!favorite ? <FavoriteBorderIcon fontSize="small" className={classes.icon} /> : <FavoriteIcon fontSize="small" className={classes.iconActived} />}
            </IconButton>
          </Grid>
          <Grid item xs><Typography variant="body2" className={classes.singer}>Joe Hisaishi</Typography></Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const MusicBar = withStyles({
  root: {
    color: '#FA00C8',
    height: 4,
  },
  thumb: {
    height: 12,
    width: 12,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -4,
    marginLeft: -6,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider);

const MusicControllor = () => {
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
    if (repeatOne) {
      setRepeat(!repeat)
    }
  }
  return (
    <React.Fragment>
      <Grid container justify="center" alignItems="center" direction="column">
        <Grid item xs container className={classes.buttons} justify="center" alignItems="center">
          {
            !shuffle ? <IconButton aria-label="Shuffle" className={classes.icon} onClick={shuffleClickHandler}><ShuffleIcon /></IconButton> :
              <IconButton aria-label="Shuffle" onClick={shuffleClickHandler}><ShuffleIcon className={classes.activedIcon} /></IconButton>
          }
          <IconButton aria-label="Previous" className={classes.icon}>
            <SkipPreviousIcon />
          </IconButton>
          {
            play ? <IconButton aria-label="Play" className={classes.playButton} onClick={playSongClickHandler}><PlayArrowIcon className={classes.playIcon} style={{ fontSize: "40px" }} /></IconButton> :
              <IconButton aria-label="Pause" className={classes.pauseButton} onClick={playSongClickHandler}><PauseIcon className={classes.playIcon} style={{ fontSize: "40px" }} /></IconButton>
          }
          <IconButton aria-label="Next" className={classes.icon}>
            <SkipNextIcon />
          </IconButton>
          {!repeat ? <IconButton aria-label="Repeat" className={classes.icon} onClick={repeatClickHandler}><RepeatIcon /></IconButton> :
            (!repeatOne ? <IconButton aria-label="Don't Repeat" className={classes.activedIcon} onClick={repeatOneClickHandler}><RepeatIcon /></IconButton> :
              <IconButton aria-label="RepeatOne" onClick={repeatOneClickHandler} className={classes.activedIcon}><RepeatOneIcon /></IconButton>)
          }
        </Grid>
        <Grid item xs container justify="center" alignItems="center" className={classes.controllorBar}>
          <Grid item xs={1}>
            <Typography variant="caption" component="span" className={classes.time}>0:00</Typography>
          </Grid>
          <Grid item xs style={{ display: "flex" }}>
            <MusicBar valueLabelDisplay="off" aria-label="pretto slider" defaultValue={0} />
          </Grid>
          <Grid item xs={1}>
            <Typography variant="caption" component="span" className={classes.time}>4:30</Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const MusicOptions = () => {
  const classes = useStyles();
  const [openQueue, setOpenQueue] = useState(false);
  const [volume, setVolume] = useState(0);
  const [full, setFull] = useState(false);
  const clickQueueHandler = () => {
    setOpenQueue(!openQueue);
  }
  const volumeChangeHandler = (event, newValue) => {
    setVolume(newValue);
  }
  const clickUnmuteHandler = () => {
    setVolume(volume);
  }
  const clickMuteHandler = () => {
    setVolume(0);
  }
  const fullScreenHandler = () => {
    setFull(!full);
  }
  return (
    <React.Fragment>
      <Grid container justify="flex-end" alignItems="center">
        <Grid item xs={1}>
          {!openQueue ?
            <IconButton aria-label="open-queue" onClick={clickQueueHandler} className={classes.icon}><QueueMusicIcon /></IconButton> :
            <IconButton aria-label="close-queue" onClick={clickQueueHandler} className={classes.activedIcon}><QueueMusicIcon /></IconButton>
          }
        </Grid>
        <Grid item xs={1}>
          {volume === 0 ? <IconButton aria-label="mute" onClick={clickUnmuteHandler} className={classes.activedIcon}><VolumeMuteIcon /></IconButton> :
            (volume <= 50 && volume > 0 ? <IconButton aria-label="mute" onClick={clickMuteHandler} className={classes.activedIcon}><VolumeDownIcon /></IconButton> :
              volume > 50 && volume <= 100 ? <IconButton aria-label="mute" onClick={clickMuteHandler} className={classes.activedIcon}><VolumeUpIcon /></IconButton> :
                null
            )
          }
        </Grid>
        <Grid item xs={3} style={{ margin: "0px 10px 0px 20px", display: "flex" }}>
          <MusicBar value={volume} onChange={volumeChangeHandler} aria-labelledby="volume-slider" />
        </Grid>
        <Grid item xs={1}>
          {!full ?
            <IconButton aria-label="full-screen" onClick={fullScreenHandler} className={classes.icon}><FullscreenIcon /></IconButton> :
            <IconButton aria-label="screen" onClick={clickQueueHandler} className={classes.activedIcon}><FullscreenIcon /></IconButton>
          }
        </Grid>
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
          <MusicControllor />
        </Grid>
        <Grid item xs>
          <MusicOptions />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PlayerControllor;
