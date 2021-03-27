import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/img/heal-music-logo.png";
import { Box, ButtonBase, Grid, List, ListItem, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCompactDisc, faMicrophone, faListAlt, faMusic } from '@fortawesome/free-solid-svg-icons'
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

const sideBarArr = {
  library: {
    title: "library",
    data: [
      { title: "home", icon: faHome },
      { title: "Playlists", icon: faCompactDisc },
      { title: "Artists", icon: faMicrophone },
      { title: "Albums", icon: faListAlt },
      { title: "Songs", icon: faMusic },
    ]
  },
  discover: {
    title: "Discover",
    data: ["Music Store", "Setting"]
  }
}

const SideBar = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.logo}>
        <img width="200px" src={logo} alt="logo" />
      </div>
      <div style={{ marginBottom: 30 }}>
        <Typography color="secondary" variant="body1" className={classes.title}>
          <Box fontWeight="700" fontSize="18px">{sideBarArr.library.title}</Box>
        </Typography>
        <List>
          {sideBarArr.library.data.map((item, index) => {
            return (
              <ListItem key={index}>
                <ButtonBase className={classes.btn}>
                  <Grid container justify="center" alignItems="center" className={classes.btnContent}>
                    <Grid item xs={2}>
                      <FontAwesomeIcon icon={item.icon} size="lg" color="#ffffff" />
                    </Grid>
                    <Grid item xs>
                      <Typography component="span" variant="body1" align="left">
                        <Box color="text.main">
                          {item.title}
                        </Box>
                      </Typography>
                    </Grid>
                  </Grid>
                </ButtonBase>
              </ListItem>
            )
          })}
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
