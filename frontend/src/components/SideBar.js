import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/img/heal-music-logo.png";
import { Box, ButtonBase, Grid, List, ListItem, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCompactDisc, faMicrophone } from '@fortawesome/free-solid-svg-icons'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import StoreIcon from '@material-ui/icons/Store';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
  logo: {
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    padding: theme.spacing(6, 4, 2, 4),
    marginBottom: theme.spacing(3),
  },
  title: {
    paddingLeft: theme.spacing(6),
    marginBottom: theme.spacing(0.5),
  },
  btn: {
    width: "100%",
    paddingLeft: theme.spacing(4),
  },
  btnContent: {
    padding: theme.spacing(1, 0)
  },

}));

const SideBar = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.logo}>
        <img width="200px" src={logo} alt="logo" />
      </div>
      <div style={{ marginBottom: 30 }}>
        <Typography color="secondary" variant="body1" className={classes.title}>
          <Box fontWeight="700" fontSize="18px">Library</Box>
        </Typography>
        <List>
          <ListItem>
            <ButtonBase className={classes.btn}>
              <Grid container justify="center" alignItems="baseline" className={classes.btnContent}>
                <Grid item xs={2}>
                  <FontAwesomeIcon icon={faHome} size="lg" color="#ffffff" />
                </Grid>
                <Grid item xs>
                  <Typography component="span" variant="body1" align="left">
                    <Box color="text.main">
                      Home
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </ButtonBase>
          </ListItem>
          <ListItem>
            <ButtonBase className={classes.btn}>
              <Grid container justify="center" alignItems="baseline" className={classes.btnContent}>
                <Grid item xs={2}>
                  <FontAwesomeIcon icon={faCompactDisc} size="lg" color="#ffffff" />
                </Grid>
                <Grid item xs>
                  <Typography component="span" variant="body1" align="left">
                    <Box color="text.main">
                      Playlists
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </ButtonBase>
          </ListItem>
          <ListItem>
            <ButtonBase className={classes.btn}>
              <Grid container justify="center" alignItems="baseline" className={classes.btnContent}>
                <Grid item xs={2}>
                  <FontAwesomeIcon icon={faMicrophone} size="lg" color="#ffffff" />
                </Grid>
                <Grid item xs>
                  <Typography component="span" variant="body1" align="left">
                    <Box color="text.main">
                      Artists
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </ButtonBase>
          </ListItem>
          <ListItem>
            <ButtonBase className={classes.btn}>
              <Grid container justify="center" alignItems="center" className={classes.btnContent}>
                <Grid item xs={2}>
                  <PlaylistPlayIcon style={{ color: "#ffffff" }} />
                </Grid>
                <Grid item xs>
                  <Typography component="span" variant="body1" align="left">
                    <Box color="text.main">
                      Albums
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </ButtonBase>
          </ListItem>
          <ListItem>
            <ButtonBase className={classes.btn}>
              <Grid container justify="center" alignItems="center" className={classes.btnContent}>
                <Grid item xs={2}>
                  <MusicNoteIcon style={{ color: "#ffffff" }} />
                </Grid>
                <Grid item xs>
                  <Typography component="span" variant="body1" align="left">
                    <Box color="text.main">
                      Songs
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </ButtonBase>
          </ListItem>
        </List>
      </div>
      <div>
        <Typography color="secondary" variant="body1" className={classes.title}>
          <Box fontWeight="700" fontSize="18px">Discover</Box>
        </Typography>
        <List>
          <ListItem>
            <ButtonBase className={classes.btn}>
              <Grid container justify="center" alignItems="center" className={classes.btnContent}>
                <Grid item xs={2}>
                  <StoreIcon style={{ color: "#ffffff" }} />
                </Grid>
                <Grid item xs>
                  <Typography component="span" variant="body1" align="left">
                    <Box color="text.main">
                      Music Store
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </ButtonBase>
          </ListItem>
          <ListItem>
            <ButtonBase className={classes.btn}>
              <Grid container justify="center" alignItems="center" className={classes.btnContent}>
                <Grid item xs={2}>
                  <SettingsIcon style={{ color: "#ffffff" }} />
                </Grid>
                <Grid item xs>
                  <Typography component="span" variant="body1" align="left">
                    <Box color="text.main">
                      Setting
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </ButtonBase>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default SideBar;
